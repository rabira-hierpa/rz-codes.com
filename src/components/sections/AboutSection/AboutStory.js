import React from "react"

export const AboutStory = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-light dark:text-text-dark">
          My Story
        </h2>

        {/* Story Content */}
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I'm a results-driven{" "}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              Web Developer
            </span>{" "}
            with over{" "}
            <span className="font-semibold text-secondary-600 dark:text-secondary-400">
              7+ years
            </span>{" "}
            of robust experience in Front-end Development, Back-end Development,
            and GIS expertise. My journey has been defined by a demonstrated
            mastery of{" "}
            <span className="font-semibold">
              Monolithic/Microservice architecture
            </span>{" "}
            and Web app development, with a strong commitment to continuous
            learning and technical excellence.
          </p>

          <p>
            I hold a{" "}
            <span className="font-semibold">
              Bachelor's Degree in Computer Science
            </span>{" "}
            from{" "}
            <a
              href="https://www.aau.edu.et/"
              target="_blank"
              rel="noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Addis Ababa University
            </a>{" "}
            and I'm currently pursuing my{" "}
            <span className="font-semibold">
              Master of Science in Data and Web Engineering
            </span>{" "}
            from the same institution. I'm proficient in{" "}
            <span className="font-semibold">GOF Design Patterns</span> and an
            advocate of{" "}
            <span className="font-semibold">
              Object-Oriented Programming principles
            </span>
            .
          </p>

          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-600 dark:border-primary-400 p-6 rounded-r-lg my-8">
            <h3 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">
              My Approach
            </h3>
            <p className="mb-4">
              <span className="font-semibold text-primary-700 dark:text-primary-300">
                Collaborative Yet Independent
              </span>{" "}
              - I thrive in team environments where ideas flow freely and
              diverse perspectives create innovative solutions. Whether it's
              pair programming, leading agile sprints, or brainstorming with
              cross-functional teams, I believe that collaboration amplifies
              creativity and accelerates problem-solving.
            </p>
            <p>
              At the same time, I excel in{" "}
              <span className="font-semibold text-primary-700 dark:text-primary-300">
                independent work
              </span>{" "}
              - taking ownership of complex projects from conception to
              deployment. I'm highly self-motivated and can seamlessly adapt to
              roles that require autonomy, deep focus, and individual
              accountability. This versatility allows me to contribute
              effectively regardless of the project structure or team dynamics.
            </p>
          </div>

          <p>
            Throughout my career, I've had the privilege of working across
            diverse sectors - from{" "}
            <span className="font-semibold">
              government institutions and NGOs
            </span>{" "}
            to{" "}
            <span className="font-semibold">
              fast-paced startups and established corporations in UAE, Panama,
              Denmark, and Ethiopia
            </span>
            . This international experience has equipped me with a unique
            ability to adapt to different organizational cultures, communication
            styles, and project methodologies.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-text-light dark:text-text-dark">
              Technical Arsenal
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-base">
              <div>
                <p className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  Front-End:
                </p>
                <p className="text-sm">
                  React.js, Next.js, TypeScript, Vue.js, React Native, HTMX,
                  HTML5, CSS3, Bootstrap, TailwindCSS, Material UI, Ant Design
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  Back-End:
                </p>
                <p className="text-sm">
                  Node.js, Nest.js, Express.js, GraphQL, Ruby on Rails, Python,
                  PHP, Golang, REST API, ApolloServer
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  Databases & Caching:
                </p>
                <p className="text-sm">
                  PostgreSQL, MongoDB, MySQL, MS SQL Server, Redis,
                  ElasticSearch
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  GIS & Spatial Analysis:
                </p>
                <p className="text-sm">
                  Mapbox, ArcGIS Pro, QGIS, Leaflet, PostGIS, JOSM, Kepler.gl,
                  Deck.gl, OSM, HOT, Missing Maps
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  DevOps & Cloud:
                </p>
                <p className="text-sm">
                  Docker, Git, Jenkins, Ansible, AWS (EC2, S3, Lambda, Cognito),
                  Azure DevOps, GCP (VM, IAM), Firebase, BigQuery
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  Architecture & Patterns:
                </p>
                <p className="text-sm">
                  Microservices, Monolithic, CI/CD, GOF Design Patterns, OOP,
                  Agile/Scrum, TDD
                </p>
              </div>
            </div>
          </div>

          <p className="text-xl font-semibold text-center text-primary-600 dark:text-primary-400 mt-12">
            "Building solutions that matter, one line of code at a time."
          </p>
        </div>
      </div>
    </section>
  )
}
