import React from 'react';
import { Link } from 'react-router';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

const navBar = [
  { title: "GAMES", icon: null, path: "/home" },
  { title: "ABOUT", icon: <IoIosArrowDown />, path: "/about" },
  { title: "SEARCH", icon: <IoIosArrowDown />, path: "/search" },
  { title: "SUPPORT", icon: <IoIosArrowDown />, path: "/support" },
];

function Nav() {
  return (
    <nav className="bg-black opacity-80 text-white h-16 flex items-center justify-between px-6 shadow-md border-b-2 sticky top-0 z-50">
    
      <div className="flex justify-around gap-10  items-center ">
  
        <IoMdMenu className="lg:hidden text-white hover:text-gray-300 cursor-pointer text-3xl" />
        <div className="logo">
          <img
            src="https://www.activision.com/content/dam/atvi/global/firstparty/activision/activision_logo_white-text.png "
            alt="Activision Logo"
            className="h-10"
          />
        </div>
    
      <ul className="hidden lg:flex gap-10">
        {navBar.map((item, index) => (
          <li key={index} className="flex items-center cursor-pointer ">
            <Link
              to={item.path}
              className="hover:text-gray-300 transition font-medium "
            >
              {item.title}
            </Link>
            {item.icon && (
              <span className="text-sm group-hover:text-gray-300 transition">{item.icon}</span>
            )}
          </li>
        ))}
      </ul>
      </div>
      <div className="hidden lg:block">
      <button className="border border-blue-800 rounded-2xl px-4 py-1 bg-sky-700  uppercase text-sm tracking-widest transition">
          SIGN UP
        </button>
        <button className=" hover:border-white px-4 py-1 rounded uppercase text-sm tracking-widest transition">
          LOGIN
        </button>
      </div>
    </nav>
  );
}

export default Nav;