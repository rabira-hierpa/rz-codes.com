const path = require(`path`)
const chunk = require(`lodash/chunk`)

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

async function createBlogPostArchive({ posts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const { postsPerPage } = graphqlResult.data.wp.readingSettings
  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_posts, index) => {
      const pageNumber = index + 1
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
          offset: index * postsPerPage,
          postsPerPage,
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
