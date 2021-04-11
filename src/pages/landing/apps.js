import React from "react"
import AppsData from "../../data/apps.json"

const apps = () => {
  return (
    <>
      <div className="text-4xl font-bold text-yellow-400 text-center">
        {AppsData.title}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {AppsData.apps.map(apps => {
          return (
            <div className="shadow-md max-w-xs rounded overflow-hidden shadow-lg my-2">
              <img
                class="w-full"
                src={ apps.img? apps.img : ""}
                alt={apps.img? apps.img:""}
              />
              <div className="text-center p-5">
                <div className="text-lg font-semibold text-red-600 pb-2">
                  {apps.title}
                </div>
                <div>{apps.description}</div>
                <div className="bg-red-500 text-white text-sm inline-block rounded-full text-white bg-yellow-400 hover:bg-yellow-500 duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1  opacity-90 hover:opacity-100">
                  <a href={apps.url[0]}>View details</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default apps
