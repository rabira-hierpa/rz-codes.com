<?php
/**
 * Example mu-plugin: trigger GitHub Actions when a post is published.
 *
 * Setup:
 * 1. Copy to wp-content/mu-plugins/rz-codes-github-rebuild.php (no .example).
 * 2. In wp-config.php (above "That's all, stop editing"):
 *
 *    define('RZ_CODES_GITHUB_REPO', 'owner/repo');
 *    define('RZ_CODES_GITHUB_DISPATCH_TOKEN', 'ghp_...'); // PAT — keep secret; prefer relay if WP is shared hosting
 *    Optional — defaults to production webhook:
 *    define('RZ_CODES_GITHUB_EVENT_TYPE', 'wordpress_publish_dev');
 *
 * 3. Event type must match .github/workflows: wordpress_publish (prod) or wordpress_publish_dev (dev).
 *
 * Debouncing: only fires when status is publish. Consider a "Build limit" plugin if editors spam saves.
 *
 * @package rz-codes.com
 */

if (! defined('RZ_CODES_GITHUB_REPO') || ! defined('RZ_CODES_GITHUB_DISPATCH_TOKEN')) {
    return;
}

/**
 * Fire repository_dispatch after a post is saved as published.
 *
 * @param int     $post_id Post ID.
 * @param WP_Post $post    Post object.
 * @param bool    $update  Whether this is an existing post being updated.
 */
function rz_codes_github_dispatch_on_post_publish($post_id, $post, $update) // phpcs:ignore
{
    if (wp_is_post_revision($post_id) || wp_is_post_autosave($post_id)) {
        return;
    }
    if (! $post instanceof WP_Post || $post->post_type !== 'post') {
        return;
    }
    if ($post->post_status !== 'publish') {
        return;
    }

    $repo     = RZ_CODES_GITHUB_REPO;
    $endpoint = sprintf('https://api.github.com/repos/%s/dispatches', $repo);

    $event_type = defined('RZ_CODES_GITHUB_EVENT_TYPE')
        ? RZ_CODES_GITHUB_EVENT_TYPE
        : 'wordpress_publish';

    $body = wp_json_encode(
        array(
            'event_type'     => $event_type,
            'client_payload' => array(
                'post_id' => $post_id,
            ),
        )
    );

    $response = wp_remote_post(
        $endpoint,
        array(
            'headers' => array(
                'Accept'               => 'application/vnd.github+json',
                'Authorization'        => 'Bearer ' . RZ_CODES_GITHUB_DISPATCH_TOKEN,
                'X-GitHub-Api-Version' => '2022-11-28',
            ),
            'body'    => $body,
            'timeout' => 20,
        )
    );

    if (is_wp_error($response)) {
        error_log('rz-codes GitHub dispatch failed: ' . $response->get_error_message()); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
        return;
    }

    $code = wp_remote_retrieve_response_code($response);
    if ($code < 200 || $code >= 300) {
        error_log('rz-codes GitHub dispatch HTTP ' . $code . ': ' . wp_remote_retrieve_body($response)); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
    }
}

add_action('save_post_post', 'rz_codes_github_dispatch_on_post_publish', 20, 3);
