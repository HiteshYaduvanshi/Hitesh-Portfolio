import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-[#222222]">
        <div className="lg:max-w-[1080px] max-w-full mx-auto min-h-72 py-16">
          <div className="flex justify-center items-center flex-wrap">
            {/* <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center my-3 text-2xl mx-4">
                <FaFacebookF />
            </div>
            <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center my-3 text-2xl mx-4">
                <FaInstagram />
            </div>
            <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center my-3 text-2xl mx-4">
                <FaTwitter />
            </div> */}
            <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center my-3 text-2xl mx-4">
              <a
                href="https://github.com/HiteshYaduvanshi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center my-3 text-2xl mx-4">
              <a
                href="https://www.linkedin.com/in/hitesh-yaduvanshi-6455531b1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="my-12">
            <ul className="flex justify-around items-center flex-wrap">
              <li className="cursor-pointer m-3 font-medium text-[#999]">
                <NavLink
                  to="/Hitesh-Portfolio/"
                  end
                  className={({ isActive }) =>
                    `${isActive ? "text-[#3B82F6]" : "text-[#999]"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="cursor-pointer m-3 font-medium text-[#999]">
                <NavLink
                  to="/Hitesh-Portfolio/about"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#3B82F6]" : "text-[#999]"}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="cursor-pointer m-3 font-medium text-[#999]">
                <NavLink
                  to="/Hitesh-Portfolio/portfolio"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#3B82F6]" : "text-[#999]"}`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="cursor-pointer m-3 font-medium text-[#999]">
                <NavLink
                  to="/Hitesh-Portfolio/contact"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#3B82F6]" : "text-[#999]"}`
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

export default Footer;
