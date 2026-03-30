const path = require(`path`)

/** Posts in the grid below search (page 1 also has one featured post above). */
const BLOG_GRID_POSTS_PER_PAGE = 9

// Hook to handle large content before LMDB storage
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // Handle WordPress post content that might be too large
  if (node.internal.type === "WpPost" && node.content) {
    // Check if content is extremely large (> 500KB)
    const contentSize = Buffer.byteLength(node.content, "utf8")
    if (contentSize > 500000) {
      console.warn(
        `Large content detected for post: ${node.title} (${Math.round(contentSize / 1024)}KB)`,
      )
      // We'll still let it through but log it
    }
  }
}

exports.createPages = async gatsbyUtilities => {
  const posts = await getPosts(gatsbyUtilities)
  if (!posts.length) {
    return
  }
  await createIndividualBlogPostPages({ posts, gatsbyUtilities })
  await createBlogPostArchive({ posts, gatsbyUtilities })
}

const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) =>
  Promise.all(
    posts.map(({ previous, post, next }) =>
      gatsbyUtilities.actions.createPage({
        path: `${post.uri}`,
        component: path.resolve(`./src/templates/BlogPost/BlogPost.js`),
        context: {
          id: post.id,
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      }),
    ),
  )

/**
 * Page 1 loads gridSize + 1 nodes (featured + full grid). Later pages load
 * gridSize each. Matches BlogArchive: slice(1) for grid on page 1 only.
 */
function buildBlogArchiveChunks(postEdges, gridPostsPerPage) {
  const P = Math.max(1, Number(gridPostsPerPage) || 9)
  if (!postEdges.length) return []
  if (postEdges.length <= P + 1) {
    return [postEdges]
  }
  const chunks = []
  chunks.push(postEdges.slice(0, P + 1))
  let rest = postEdges.slice(P + 1)
  while (rest.length > 0) {
    chunks.push(rest.slice(0, P))
    rest = rest.slice(P)
  }
  return chunks
}

async function createBlogPostArchive({ posts, gatsbyUtilities }) {
  const gridPostsPerPage = BLOG_GRID_POSTS_PER_PAGE
  const postsChunkedIntoArchivePages = buildBlogArchiveChunks(
    posts,
    gridPostsPerPage,
  )
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (chunkPosts, index) => {
      const pageNumber = index + 1
      const skip =
        index === 0
          ? 0
          : gridPostsPerPage + 1 + (index - 1) * gridPostsPerPage
      const limit = chunkPosts.length

      const getPagePath = page => {
        if (page > 0 && page <= totalPages) {
          return page === 1 ? `` : `${page}`
        }
        return null
      }
      await gatsbyUtilities.actions.createPage({
        path: `blog${getPagePath(pageNumber)}`,
        component: path.resolve(`./src/templates/BlogArchive/BlogArchive.js`),
        context: {
          skip,
          limit,
          gridPostsPerPage,
          currentPage: pageNumber,
          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    }),
  )
}

async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      allWpPost(sort: { date: DESC }) {
        edges {
          previous {
            id
          }
          post: node {
            id
            uri
          }
          next {
            id
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors,
    )
    return
  }

  return graphqlResult.data.allWpPost.edges
}
