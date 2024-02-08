import React from "react";
import ContactImg from "../../assets/contact-1.jpg";

function ContactForm() {
  return (
    <>
      <div className="lg:max-w-[1080px] max-w-full mx-auto">
        <div className="py-12 sm:flex sm:mx-auto sm:justify-between">
          <div className="sm:basis-1/2 p-4">
            <div className="shadow-md p-4 w-full h-full">
              <h1 className="text-2xl font-medium">Contact Us</h1>
              <form
                className="mt-8"
                action="https://formspree.io/f/xleqjoqd"
                method="POST"
              >
                <label
                  className="uppercase text-xs text-[#0779e4] font-bold block"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="w-full border-b-2 border-[#eee] mt-3 mb-8 outline-none placeholder:font-medium"
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                  required
                />
                <label
                  className="uppercase text-xs text-[#0779e4] font-bold block"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full border-b-2 border-[#eee] mt-3 mb-8 outline-none placeholder:font-medium"
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  required
                />
                <label
                  className="uppercase text-xs text-[#0779e4] font-bold block"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-full border-b-2 border-[#eee] mt-3 mb-8 outline-none placeholder:font-medium"
                  type="text"
                  placeholder="Subject"
                  id="subject"
                  name="subject"
                  required
                />
                <label
                  className="uppercase text-xs text-[#0779e4] font-bold block"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full border-b-2 border-[#eee] mt-3 mb-8 outline-none placeholder:font-medium resize-none"
                  name="message"
                  id="message"
                  rows="10"
                  placeholder="Message"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="inline-block uppercase py-3 px-8 bg-gradient-to-r from-[#8490ff] to-[#62bdfc] text-white font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="sm:basis-1/2 p-4">
            <img
              src={ContactImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
