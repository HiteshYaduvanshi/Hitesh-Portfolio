import React from "react";

function ContactInfoCard({icon:Icon,heading,paraFirst,paraSecond}) {
  return (
    <>
      <div className="mb-12 basis-1/3">
        <div className="relative max-w-32 min-w-max min-h-32 flex justify-center items-center mx-auto bg-gradient-to-r from-[#8490ff] to-[#62bdfc]">
          <Icon className="text-5xl text-[#f9f9ff]"/>
          <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45 bg-gradient-to-r -z-20 from-[#8490ff] to-[#62bdfc]"></div>
        </div>
        <h1 className="mt-9 text-center text-xl font-medium mb-1">{heading}</h1>
        <p className="text-[#777777] text-center">{paraFirst}</p>
        <p className="text-[#777777] text-center">{paraSecond}</p>
      </div>
    </>
  );
}

export default ContactInfoCard;
