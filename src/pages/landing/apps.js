import React from "react"
import AppsData from "../../data/apps.json"

const apps = () => {
  return (
    <>
      <div className="text-4xl font-bold text-yellow-400 text-center">
        {AppsData.title}
      </div>
      <div className="gird grid-cols-1 md:grid-cols-3">
        {AppsData.apps.map(apps => {
          return (
            <div className="shadow-md text-center">
              <div className="text-lg font-semibold text-red-600">
                {apps.title}
              </div>
              <div>{apps.description}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default apps
