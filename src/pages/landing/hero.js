import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          name: { eq: "rabira-hierpa" }
        }
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
  return (
    <div className="gird grid-cols-1 md:grid-cols-2">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="rounded-full py-10 ">
          <StaticImage
            src="../../images/landing/rabira-hierpa-web.jpg"
            alt="logo"
            placeholder="blurred"
          />
        </div>
        <div className="p-10">
          <div className="font-extrabold text-6xl text-yellow-400">Selam!</div>
          <div className="font-bold text-4xl pt-20 pb-10 text-red-500">
            I'm Rabra Hierpa
          </div>
          <div className="font-bold text-2xl text-yellow-500">
            FOSS Enthusiast,
            <span className="text-red-600">Full-stack Web Developer</span>,GIS
            Expert & Graphics Designer{" "}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
