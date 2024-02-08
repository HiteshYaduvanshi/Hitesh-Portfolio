import React from "react";
import htmlIcon from "../../assets/htmlIcon.png";
import cssIcon from "../../assets/cssIcon.png";
import jsIcon from "../../assets/jsIcon.png";
import reactIcon from "../../assets/reactIcon.png";
import tailwindIcon from "../../assets/tailwindIcon.png";
import bootstrapIcon from "../../assets/bootstrapIcon.png";

function SkillsSection() {
  return (
    <>
      <div className="bg-[#f9f9ff]">
        <div className="lg:max-w-[1080px] max-w-full mx-auto py-28">
          <div className="text-center px-4 mb-12">
            <h1 className="text-4xl font-bold mb-2 break-words">
              My Top Skills
            </h1>
            <p className="text-[#777777]">
              Unlocking the potential of a diverse skill set honed through
              academic excellence and hands-on experience
            </p>
          </div>
          <div className="px-4 sm:flex flex-wrap justify-center items-center">
            <div className=" sm:basis-1/3 my-10 h-36 flex justify-center items-center flex-col">
              <div className="w-28 h-28 object-cover">
                <img src={htmlIcon} alt="" />
              </div>
              <p className="font-bold uppercase text-2xl mt-5">html</p>
            </div>
            <div className=" sm:basis-1/3 my-10 h-36 flex justify-center items-center flex-col">
              <div className="w-28 h-28 object-cover">
                <img src={cssIcon} alt="" />
              </div>
              <p className="font-bold uppercase text-2xl mt-5">css</p>
            </div>
            <div className=" sm:basis-1/3 my-10 h-36 flex justify-center items-center flex-col">
              <div className="w-28 h-28 object-cover">
                <img src={jsIcon} alt="" />
              </div>
              <p className="font-bold uppercase text-2xl mt-5">javascript</p>
            </div>
            <div className=" sm:basis-1/3 my-10 h-36 flex justify-center items-center flex-col">
              <div className="w-28 h-28 flex justify-center items-center">
                <img src={bootstrapIcon} alt="" />
              </div>
              <p className="font-bold uppercase text-2xl mt-0">bootstrap</p>
            </div>
            <div className=" sm:basis-1/3 my-10 h-36 flex justify-center items-center flex-col">
              <div className="w-28 h-28 flex justify-center items-center">
                <img src={tailwindIcon} alt="" />
              </div>
              <p className="font-bold uppercase text-2xl mt-0">tailwind css</p>
            </div>
            <div className=" sm:basis-1/3 my-10 h-36 flex justify-center items-center flex-col">
              <div className="w-28 h-28 object-cover">
                <img src={reactIcon} alt="" />
              </div>
              <p className="font-bold uppercase text-2xl mt-0">react</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsSection;
