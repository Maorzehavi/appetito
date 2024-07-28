import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>
      <NavLink to="/dishes">
        <button className=" text-white font-bold py-2 px-4 rounded">
          פסטות
        </button>
      </NavLink>

    </div>
  )
}

export default Home