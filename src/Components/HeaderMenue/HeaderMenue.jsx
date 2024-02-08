import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: translateX(-30px);
    opacity: 1;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const BurgerContainer = styled.div`
  cursor: pointer;
  z-index: 999;
`;

const BurgerLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 5px 0;
  transition: 0.4s;
`;

const AnimatedBurgerLine = styled(BurgerLine)`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const CloseButton = styled.div`
  position: fixed;
  top: -10px;
  right: 10px;
  z-index: 998;
  cursor: pointer;
`;

function HeaderMenue() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <BurgerContainer onClick={toggleMenu}>
        {[1, 2, 3].map((index) => (
          <AnimatedBurgerLine
            key={index}
            style={{
              transform: isOpen
                ? `rotate(${index === 1 ? 45 : -45}deg)`
                : "rotate(0)",
              backgroundColor: isOpen ? "transparent" : "#333",
            }}
          />
        ))}
      </BurgerContainer>
      {isOpen && (
        <>
          <CloseButton onClick={closeMenu}>
            <p className="text-6xl">&times;</p>
          </CloseButton>
          <div className="absolute top-[80px] left-0 px-7 w-full bg-[#000] z-50">
            <ul className="text-center">
              <li className="m-3 text-white text-xl">
                <NavLink
                  to="/Hitesh-Portfolio/"
                  end
                  className={({ isActive }) =>
                    `${isActive ? "text-[#3B82F6]" : "text-white"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="m-3 text-white text-xl">
                {" "}
                <NavLink
                  to="/Hitesh-Portfolio/about"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#3B82F6]" : "text-white"}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="m-3 text-white text-xl">
                {" "}
                <NavLink
                  to="/Hitesh-Portfolio/portfolio"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#3B82F6]" : "text-white"}`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="m-3 text-white text-xl">
                {" "}
                <NavLink
                  to="/Hitesh-Portfolio/contact"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#3B82F6]" : "text-white"}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default HeaderMenue;
