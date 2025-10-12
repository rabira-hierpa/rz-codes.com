import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const About = () => {
  const aboutMeData = useStaticQuery(graphql`
    query aboutMeQuery {
      allAboutJson {
        nodes {
          id
          name
          logo
          url
        }
      }
    }
  `)
  return (
    <Layout>
      <Seo title="About"></Seo>
      <div className="min-h-screen">
        <p className="text-9xl text-primary-600 dark:text-primary-400 mt-5">
          About Me!
        </p>
        <section className="py-5 space-y-5 text-justify container mx-auto bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors px-5 md:px-10 rounded-md">
          <p>
            I am a full-stack web developer and a GIS analyst. I have been
            working with GIS, web development and Linux for the past 5 years. I
            have worked with various technologies like React, Next, Ruby on
            Rails, Gatsby, Mapbox, Leaflet, QGIS, PostGIS and many more. I have
            also worked with various programming languages like Python,
            JavaScript, C, C++, Java, PHP, SQL, etc. I have also worked with
            various databases like PostgreSQL, MySQL, MongoDB, SQLite, etc.
          </p>
          <p>
            I have done my Bachelor's Degree in Computer Science from
            <a
              href="https://www.aau.edu.et/"
              target="_blank"
              rel="noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {" "}
              Addis Ababa University in 2018 G.C
            </a>{" "}
            and I'm currently pursuing my Master of Science Degree in Data and
            Web Engineering from the same university.
          </p>
          <p>
            I have had the privilege of working with government institutions,
            startups, outsourcing companies, NGOs and private companies. Some of
            the companies I have worked with include
          </p>
          <div className="flex flex-wrap grow justify-center space-y-10">
            {aboutMeData.allAboutJson.nodes.map(item => {
              return (
                <a
                  key={item.id}
                  href={item?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="object-cover object-center grid place-items-center hover:shadow-lg rounded-lg p-5 transition-shadow"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    placeholder="blurred"
                    loading="lazy"
                    className="w-24 md:w-36 h-auto"
                  />
                </a>
              )
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default About
