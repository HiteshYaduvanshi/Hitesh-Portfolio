import React from "react";
import ContactInfoCard from "../ContactInfoCard/ContactInfoCard";
import { IoLocation } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";

function ContactInfo() {
  return (
    <>
      <div className="lg:max-w-[1080px] max-w-full mx-auto">
        <div className="py-12 sm:flex sm:mx-auto sm:justify-between">
          <ContactInfoCard icon={IoLocation} heading="Address" paraFirst="Sikanderpur Badha Sector-85" paraSecond="Gurugram, Haryana" />
          <ContactInfoCard icon={IoMail} heading="Email" paraFirst="hiteshyaduvanshi85@gmail.com" />
          <ContactInfoCard icon={FaPhoneFlip} heading="Phone" paraFirst="+91 8585961126" />
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
