import React from "react"
import { Link } from "gatsby"

const AppCards = ({ apps }) => {
  return (
    <div className="overflow-hidden shadow-md rounded-md hover:shadow-2xl duration-300 justify-self-stretch flex flex-col bg-white">
      <div className="h-36 w-full flex flex-col items-center justify-center overflow-hidden">
        <img
          loading="lazy"
          placeholder="blurred"
          style={{ maxHeight: "10rem" }}
          className="h-auto w-auto bg-cover mx-auto"
          src={apps?.image}
          alt={apps?.title}
        />
      </div>
      <div className="text-center p-5 ">
        <div className="text-lg font-semibold text-red-600 pb-2">
          {apps?.title}
        </div>
        <div className="text-justify line-clamp-3">{apps?.description}</div>
        <div className="my-2 cursor-pointer text-white  rounded-full  bg-yellow-600 hover:bg-yellow-500 duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1  opacity-90 hover:opacity-100 ">
          <Link to="/apps">
            <span>View details</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AppCards
