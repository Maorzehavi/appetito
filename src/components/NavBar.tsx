import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";


function NavBar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { icon: <FaInstagram />, url: 'https://www.instagram.com/appetito.bar/' },
        { icon: <FaWhatsapp />, url: 'https://www.whatsapp.com/' },
        { icon: <CiMail />, url: 'mailto:' },
    ];

    const navItems = [
        { name: 'אודות', path: '/about' },
        { name: 'מנות', path: '/menu' },
        { name: 'בית', path: '/' },
    ];

    const handleOnClick = () => {
        if (sessionStorage.getItem('accessToken')) {
            navigate({ pathname: '/admin' });
        } else {
            navigate({ pathname: '/login' });
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='shadow-2xl sticky top-0'>
            <nav className={`flex justify-between bg-[#b8ac96] items-center relative p-6 bg-opacity-95 text-gray-700 text-2xl ${isOpen ? '':'rounded-b-lg shadow-inner'}`}>
                {/* Left Section - Logo */}
                <div className='flex items-center cursor-pointer text-4xl' onClick={handleOnClick}>
                    APPETITO
                </div>

                {/* Centered Nav Items - Reversed Order */}
                <div className={`${
                    isOpen ? 'block' : 'hidden'
                } md:flex md:flex-1 md:items-center md:gap-8 lg:gap-10 xl:gap-12 justify-center md:static absolute top-full left-0 w-full bg-opacity-95 bg-[#b8ac96] md:bg-transparent md:p-0 p-4 rounded-b-lg text-center`}>
                    {isOpen ? navItems.slice().reverse().map((item) => (
                        <NavLink onClick={toggleMenu}
                            key={item.path}
                            to={item.path}
                            className="block text-sm sm:text-xl lg:text-xl xl:text-2xl hover:text-gray-100 px-2 sm:px-4">
                            {item.name}
                        </NavLink>
                    )): navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className="block text-sm sm:text-xl lg:text-xl xl:text-2xl hover:text-gray-100 px-2 sm:px-4">
                            {item.name}
                        </NavLink>
                    ))
                    }
                </div>

                {/* Right Section - Hamburger Button & Social Icons */}
                <div className="flex items-center">
                    {/* Social Icons */}
                    <div className="flex justify-end gap-3 sm:px-3 md:px-4 xl:px-10">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.url}
                                to={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm sm:text-xl lg:text-xl xl:text-2xl hover:text-gray-100 font-bold">
                                {link.icon}
                            </NavLink >
                        ))}
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className='text-xl md:hidden ml-4'
                        onClick={toggleMenu}
                    >
                        <RxHamburgerMenu />
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
