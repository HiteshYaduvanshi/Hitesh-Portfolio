import React from "react";
import heroImg from "../../assets/hero-img.png"
import Resume from "../../assets/HItesh Resume 2024.pdf"

function HomeBanner() {
  return (
    <>
      <div className="w-full bg-[#f9f9ff]">
        <div className="lg:max-w-[1080px] max-w-full h-auto mx-auto block px-4 pt-12">
          <div className="md:flex items-center justify-between">
            <div className="md:basis-1/2">
              <span className="block uppercase tracking-[2px]">This is me</span>
              <h1 className="uppercase my-5 font-bold text-6xl break-words">Hitesh</h1>
              <p className="text-[#777777]">
                Frontend Developer | Transforming Ideas into Intuitive and
                Visually Stunning User Experiences.
              </p>
              <a href={Resume} download="hitesh_cv_jun_2025" className=" mt-5 text-white inline-block uppercase py-2.5 px-7 bg-gradient-to-r from-[#8490ff] to-[#62bdfc]">Download Resume</a>
            </div>
            <div className="md:basis-1/2">
                <img src={heroImg} alt="hero-img" width="90%"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
