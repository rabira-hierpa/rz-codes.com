#!/usr/bin/env bash
# Trigger a Gatsby rebuild via GitHub repository_dispatch (same as WordPress webhook target).
#
# Usage:
#   export GITHUB_TOKEN=ghp_...   # or fine-grained PAT
#   export GITHUB_REPOSITORY=owner/repo   # default: rabira-hierpa/rz-codes.com
#   ./scripts/trigger-github-dispatch.sh prod   # event wordpress_publish
#   ./scripts/trigger-github-dispatch.sh dev    # event wordpress_publish_dev
#
set -euo pipefail

TARGET="${1:-prod}"
REPO="${GITHUB_REPOSITORY:-rabira-hierpa/rz-codes.com}"

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "Set GITHUB_TOKEN to a PAT that can POST /repos/${REPO}/dispatches" >&2
  exit 1
fi

if [[ "$TARGET" == "prod" ]]; then
  EVENT_TYPE="wordpress_publish"
elif [[ "$TARGET" == "dev" ]]; then
  EVENT_TYPE="wordpress_publish_dev"
else
  echo "Usage: $0 [prod|dev]" >&2
  exit 1
fi

curl -sS -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer ${GITHUB_TOKEN}" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  "https://api.github.com/repos/${REPO}/dispatches" \
  -d "{\"event_type\":\"${EVENT_TYPE}\",\"client_payload\":{}}"

echo
echo "Dispatched ${EVENT_TYPE} to ${REPO}. Check Actions tab for the workflow run."
