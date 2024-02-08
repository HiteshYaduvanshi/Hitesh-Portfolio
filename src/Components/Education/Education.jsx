import React from "react";

function Education() {
  return (
    <>
      <div className="lg:max-w-[1080px] max-w-full mx-auto py-28">
        <div className="text-center px-4 mb-12">
          <h1 className="text-4xl font-bold mb-2 break-words">
            My Qualifications
          </h1>
          <p className="text-[#777777]">
            Empowered by a solid educational foundation, well-equipped to excel
            as a frontend developer
          </p>
        </div>
        <ul className="px-5 lg:px-0">
          <li className="sm:w-[2px] sm:h-40 lg:mx-auto sm:relative pb-10 bg-[#f9f9ff]">
            <div className="sm:ml-10 mx-auto lg:left-14 sm:absolute p-8 shadow-md w-auto sm:w-[500px] lg:w-[350px] bg-[#f9f9ff]">
              <h2 className="font-semibold text-[18px] text-center">
                Master of Computer Applications
              </h2>
              <p className="text-center text-sm my-1">
                <span className="font-medium text-sm">Session:</span> 2021-2023
              </p>
            </div>
            <span className="hidden sm:block sm:absolute sm:left-1/2 sm:top-[40%] sm:transform -translate-x-1/2 sm:bg-[#8490ff] w-5 h-5 border-4 border-[#eee] rounded-full"></span>
          </li>
          <li className="sm:w-[2px] sm:h-40 lg:mx-auto sm:relative pb-10 bg-[#f9f9ff]">
            <div className="sm:ml-10 mx-auto lg:right-14 sm:absolute p-8 shadow-md w-auto sm:w-[500px] lg:w-[350px] bg-[#f9f9ff]">
              <h2 className="font-semibold text-[18px] text-center">
                Bachelor of Computer Applications
              </h2>
              <p className="text-center text-sm my-1">
                <span className="font-medium text-sm">Session:</span> 2018-2021
              </p>
            </div>
            <span className="hidden sm:block sm:absolute sm:left-1/2 sm:top-[40%] sm:transform -translate-x-1/2 sm:bg-[#8490ff] w-5 h-5 border-4 border-[#eee] rounded-full"></span>
          </li>
          <li className="sm:w-[2px] sm:h-40 lg:mx-auto sm:relative pb-10 bg-[#f9f9ff]">
            <div className="sm:ml-10 mx-auto lg:left-14 sm:absolute p-8 shadow-md w-auto sm:w-[500px] lg:w-[350px] bg-[#f9f9ff]">
              <h2 className="font-semibold text-[18px] text-center">
                Senior Secondary
              </h2>
              <p className="text-center text-sm my-1">
                <span className="font-medium text-sm">Session:</span> 2017-2018
              </p>
            </div>
            <span className="hidden sm:block sm:absolute sm:left-1/2 sm:top-[40%] sm:transform -translate-x-1/2 sm:bg-[#8490ff] w-5 h-5 border-4 border-[#eee] rounded-full"></span>
          </li>
          <li className="sm:w-[2px] sm:h-40 lg:mx-auto sm:relative pb-10 bg-[#f9f9ff]">
            <div className="sm:ml-10 mx-auto lg:right-14 sm:absolute p-8 shadow-md w-auto sm:w-[500px] lg:w-[350px] bg-[#f9f9ff]">
              <h2 className="font-semibold text-[18px] text-center">
                Matriculation
              </h2>
              <p className="text-center text-sm my-1">
                <span className="font-medium text-sm">Session:</span> 2015-2016
              </p>
            </div>
            <span className="hidden sm:block sm:absolute sm:left-1/2 sm:top-[40%] sm:transform -translate-x-1/2 sm:bg-[#8490ff] w-5 h-5 border-4 border-[#eee] rounded-full"></span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Education;
