import React from 'react'
import AboutImg from '../../assets/persional-img.png'
import { NavLink } from 'react-router-dom'

function HomeAbout() {
  return (
    <>
        <div className="lg:max-w-[1080px] max-w-full h-auto mx-auto block px-4 pt-12">
            <div className="md:flex items-center justify-between md:flex-row-reverse">
                <div className="md:basis-1/2 p-4">
                    <span className="inline-block uppercase tracking-[2px]">About ME</span>
                    <h1 className="uppercase my-5 font-bold text-3xl">Personal Details</h1>
                    <p className="text-[#777777]">Hey, I'm Hitesh, a frontend developer with a passion for crafting digital experiences. By day, I code sleek and responsive websites, and by night, I dive into the ever-evolving world of web technologies.</p>
                    <p className="text-[#777777] mt-3">From pixel-perfect designs to seamless user interactions, I thrive on bringing ideas to life in the browser. My toolbox includes HTML, CSS, JavaScript, and a sprinkle of React JS, Tailwind CSS and other tools.</p>
                    <NavLink to="/Hitesh-Portfolio/about" className=" mt-5 text-white inline-block uppercase py-2.5 px-7 bg-gradient-to-r from-[#8490ff] to-[#62bdfc]">view full details</NavLink>
                </div>
                <div className="md:basis-1/2">
                    <img src={AboutImg} alt="" />
                </div>
            </div>
        </div> 
    </>
  )
}

export default HomeAbout
