import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import { RiSmartphoneFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";
import { LiaLaptopCodeSolid } from "react-icons/lia";

function ServicesSection() {
  return (
    <>
        <div className="bg-[#f9f9ff]">
        <div className="lg:max-w-[1080px] max-w-full h-auto mx-auto block px-4 py-16 ">
            <div className='py-4'>
                <h2 className="text-center font-bold text-2xl md:text-3xl uppercase pb-2">My offered services</h2>
                <p className="text-[#666] text-center sm:w-3/4 sm:mx-auto md:w-1/2 ">Discover how I can elevate your digital presence with a tailored suite of frontend development services</p>
            </div>
            <div className="sm:flex sm:justify-between sm:items-start sm:flex-wrap ">
                <ServiceCard icon={RiSmartphoneFill} iconSize="text-[40px] mb-2" heading="Responsive Web Design" para="Create visually appealing and user-friendly websites that work seamlessly across various devices and screen sizes."/>
                <ServiceCard icon={FaCode} iconSize="text-[40px] mb-2" heading="Custom Website Development" para="Develop bespoke websites tailored to the unique needs and branding of your clients."/>
                <ServiceCard icon={FaReact} iconSize="text-[40px] mb-2" heading="React.js Development" para="Leverage the power of React.js to build dynamic and interactive user interfaces for single-page applications (SPAs) or complex web applications."/>
                <ServiceCard icon={SiTailwindcss} iconSize="text-[40px] mb-2" heading="Tailwind CSS Styling" para="Utilize the utility-first approach of Tailwind CSS to efficiently style and design your websites, ensuring a consistent and modern look."/>
                <ServiceCard icon={GrOptimize} iconSize="text-[40px] mb-2" heading="Performance Optimization" para="Optimize website performance by implementing best practices, minimizing load times, and enhancing the overall user experience."/>
                <ServiceCard icon={LiaLaptopCodeSolid} iconSize="text-[50px] mb-2" heading="E-commerce Integration" para="Integrate frontend solutions for e-commerce platforms, enhancing the shopping experience for users."/>
            </div>
        </div>
        </div> 
    </>
  )
}

export default ServicesSection
