import React from "react";
import { HeaderMenue } from "../index";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="lg:max-w-[1080px] max-w-full h-auto mx-auto block">
        <div className="flex content-center justify-between">
          <div className="basis-1/4 p-4">
            <Link to="/">
              <h1 className="font-bold text-xl">Hitesh.Dev</h1>
            </Link>
          </div>
          <div className="p-4 sm:hidden">
            <HeaderMenue />
          </div>
          <div className="basis-[40%] p-4 hidden sm:block">
            <ul className="flex justify-around">
              <li className="cursor-pointer font-medium">
                <NavLink
                  to="/Hitesh-Portfolio/"
                  end
                  className={({ isActive }) =>
                    `${isActive ? "text-[#3B82F6]" : "text-black"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="cursor-pointer font-medium">
                <NavLink
                  to="/Hitesh-Portfolio/about"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#3B82F6]" : "text-black"}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="cursor-pointer font-medium">
                <NavLink
                  to="/Hitesh-Portfolio/portfolio"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#3B82F6]" : "text-black"}`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="cursor-pointer font-medium">
                <NavLink
                  to="/Hitesh-Portfolio/contact"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#3B82F6]" : "text-black"}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
