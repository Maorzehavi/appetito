import React from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function NavBar() {
    const navigate = useNavigate();

    const navLinks = [
        {icon: <FaInstagram/>, url: 'https://www.instagram.com/appetito.bar/'},
        {icon: <FaWhatsapp/>, url: 'https://www.whatsapp.com/'},
        {icon: <CiMail/>, url: 'mailto:'},
    ];

    const navItems = [
        // {name: 'ניהול', path: '/admin'},
        {name: 'אודות', path: '/about'},
        {name: 'מנות', path: '/menu'},
        {name: 'בית', path: '/'},
    ];

    const handleOnClick = () => {
        if (sessionStorage.getItem('accessToken')) {
            navigate({pathname: '/admin'});
        } else {
            navigate({pathname: '/login'});
        }
    }

    return (
        <div className='shadow-2xl sticky top-0'>
            <nav className="flex flex-wrap justify-between bg-[#b8ac96] items-center relative p-12 bg-opacity-90 shadow-inner text-gray-700 ">
                {/* Left Section (Empty for spacing) */}
                <div className='absolute ' onClick={handleOnClick}> APPETITO</div>
                {/* Logo */}
                <div className="flex flex-1"></div>
                {/* Centered Nav Items */}
                <div className="flex sm:gap-3 md:gap-8 lg:gap-10 xl:gap-12 absolute left-1/2 transform -translate-x-1/2 ">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:text-gray-100 px-2 sm:px-4">
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* Right Section for Social Icons */}
                <div className="flex flex-1 justify-end ml-8 gap-3 sm:px-3 md:px-4 xl:px-10">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.url}
                            to={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:text-gray-100 font-bold">
                            {link.icon}
                        </NavLink >
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
