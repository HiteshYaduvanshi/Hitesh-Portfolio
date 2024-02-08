import React from "react";
import Resume from "../../assets/HItesh Resume 2024.pdf"
import AboutIcon from "../../assets/about-1.png";
import Dot from "../../assets/dot.jpg";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdDateRange } from "react-icons/md";

function AboutHero() {
  return (
    <>
      <div className="lg:max-w-[1080px] max-w-full mx-auto py-16">
        <div className="sm:flex sm:justify-center sm:items-center">
          <div className="basis-1/2 m-5 relative">
            <img src={AboutIcon} alt="" className="" />
            <div className="absolute w-60 h-full top-0 left-5 border-8 border-blue-500 z-[-1]"></div>
            <div
              className="absolute w-60 h-full top-0 left-0 bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${Dot})`, zIndex: -2 }}
            ></div>
          </div>
          <div className="basis-1/2 m-5 mt-12 sm:mt-0">
            <h1 className="text-6xl font-bold capitalize">My Story</h1>
            <p className="my-8 text-[#777]">
              As a post-graduate, my story unfolds at the intersection of
              academic achievement and real-world application. Armed with
              specialized knowledge, I embark on a journey to translate theory
              into impactful solutions. Through my personal portfolio, I invite
              you to witness the narrative of my educational journey and the
              tangible impact it brings to the professional realm.
            </p>
            <div className="">
              <div className="w-full pr-5">
                <div className="text-[#999] my-2">
                  <MdLocationOn className="inline-block text-base mb-1 text-black" />
                  <span className="font-semibold ml-2 sm:w-[20%] inline-block text-black">
                    Location:
                  </span>{" "}
                  Sikanderpur Badha, Gurugram, Haryana, India
                </div>
                <div className="text-[#999] my-2">
                  <MdDateRange className="inline-block text-base mb-1 text-black" />
                  <span className="font-semibold ml-2 sm:w-[20%] inline-block text-black">
                    Age:
                  </span>{" "}
                  23 Year
                </div>
                <div className="text-[#999] my-2">
                  <MdLocalPhone className="inline-block text-base mb-1 text-black" />
                  <span className="font-semibold ml-2 sm:w-[20%] inline-block text-black">
                    Phone:
                  </span>{" "}
                  +91 8585961126
                </div>
                <div className="text-[#999] my-2">
                  <MdEmail className="inline-block text-base mb-1 text-black" />
                  <span className="font-semibold ml-2 sm:w-[20%] inline-block text-black">
                    Email:
                  </span>{" "}
                  hiteshyaduvanshi85@gmail.com
                </div>
              </div>
            </div>
            <a
              href={Resume}
              className=" mt-5 text-white inline-block uppercase py-2.5 px-7 bg-gradient-to-r from-[#8490ff] to-[#62bdfc]"
              download="Hitesh Resume 2024"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
