import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {

const navItems = [
    {name: 'Home', path: '/'},
    {name: 'Dishes', path: '/dishes'}
]
  return (
    <div>
        <nav className="flex justify-between bg-gray-800 p-4">
            <div className="text-white font-bold">Restaurant</div>
            <div className="flex">
            {navItems.map((item) => (
                <NavLink key={item.path} to={item.path}>
                    <button className="text-white font-bold py-2 px-4 rounded">
                        {item.name}
                    </button>
                </NavLink>
            ))}
            </div>
        </nav>
    </div>
  )
}

export default NavBar