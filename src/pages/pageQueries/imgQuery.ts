import { graphql, useStaticQuery } from "gatsby"

export const data = useStaticQuery(graphql`
  query HeroQuery {
    allFile(
      filter: { extension: { regex: "/(jpg)/" }, name: { eq: "rabira-hierpa" } }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid {
              src
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
      }
    }
  }
`)
