import React from "react";
import {Link} from "react-router-dom"
import EcommerceProject from "../../assets/ecommerce-project.png";
import TodoProject from "../../assets/todo-project.png";
import CurrencyConvertorProject from "../../assets/currancy-convertor-project.png";
import MovieProject from "../../assets/movie-project.png";
import StonePaperProject from "../../assets/stone-paper-scissor-project.png";

function PortfolioSection() {
  return (
    <>
      <div className="lg:max-w-[1080px] max-w-full mx-auto py-28">
        <div className="text-center px-4 mb-12">
          <h1 className="text-4xl font-bold mb-2 break-words">
            Latest Projects
          </h1>
          <p className="text-[#777777]">
          Embark on a journey through my most recent projects
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-start">
          <div className="sm:basis-1/2 basis-full p-5">
            <h1 className="text-3xl font-bold">E-Commerce Web : React JS</h1>
            <p className="my-4 text-[#666]">
              Built a feature-rich e-commerce website using React, incorporating
              React Router for seamless navigation and Context API for efficient
              state management. Developed a responsive user interface, enabling
              intuitive product browsing, cart management. Demonstrated
              proficiency in React, state management, and front-end development.
            </p>
            <a
              href="https://hiteshyaduvanshi.github.io/E-Commerce-Web-React/"
              target="_blank"
              className=" mt-5 text-white inline-block uppercase py-2.5 px-7 bg-gradient-to-r from-[#8490ff] to-[#62bdfc]"
            >
              View full project
            </a>
          </div>
          <div className="sm:basis-1/2 basis-full p-5">
            <a
              href="https://hiteshyaduvanshi.github.io/E-Commerce-Web-React/"
              target="_blank"
            >
              <img src={EcommerceProject} alt="" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start flex-col-reverse sm:flex-row">
          <div className="sm:basis-1/2 basis-full p-5">
            <a
              href="https://hiteshyaduvanshi.github.io/Default-todo-react/"
              target="_blank"
            >
              <img src={TodoProject} alt="" />
            </a>
          </div>
          <div className="sm:basis-1/2 basis-full p-5">
            <h1 className="text-3xl font-bold">Todo Web : React JS</h1>
            <p className="my-4 text-[#666]">
              Developed a specialized Todo application using React. Employed
              React state management to dynamically update the UI in real-time
              upon task deletion. Demonstrated expertise in React components and
              event handling to create a streamlined user experience. This
              project showcases a targeted skill set in React development.
            </p>
            <a
              href="https://hiteshyaduvanshi.github.io/Default-todo-react/"
              target="_blank"
              className=" mt-5 text-white inline-block uppercase py-2.5 px-7 bg-gradient-to-r from-[#8490ff] to-[#62bdfc]"
            >
              View full project
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start">
          <div className="sm:basis-1/2 basis-full p-5">
            <h1 className="text-3xl font-bold">
              Currency Convertor : React JS
            </h1>
            <p className="my-4 text-[#666]">
              Developed a currency converter application using React,
              integrating real-time currency exchange rates from an API.
              Designed a responsive user interface for seamless user experience.
              Implemented data fetching, state management, and dynamic
              rendering, showcasing proficiency in React, API integration, and
              front-end development.
            </p>
            <a
              href="https://hiteshyaduvanshi.github.io/CurrencyConvertor-react/"
              target="_blank"
              className=" mt-5 text-white inline-block uppercase py-2.5 px-7 bg-gradient-to-r from-[#8490ff] to-[#62bdfc]"
            >
              View full project
            </a>
          </div>
          <div className="sm:basis-1/2 basis-full p-5">
            <a
              href="https://hiteshyaduvanshi.github.io/CurrencyConvertor-react/"
              target="_blank"
            >
              <img src={CurrencyConvertorProject} alt="" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start flex-col-reverse sm:flex-row">
          <div className="sm:basis-1/2 basis-full p-5">
            <a
              href="https://hiteshyaduvanshi.github.io/Default-Movies-js/"
              target="_blank"
            >
              <img src={MovieProject} alt="" />
            </a>
          </div>
          <div className="sm:basis-1/2 basis-full p-5">
            <h1 className="text-3xl font-bold">Movie web : JS</h1>
            <p className="my-4 text-[#666]">
              Developed a dynamic movie website using JavaScript and Tailwind
              CSS, fetching data from an API. Implemented pagination for
              seamless content navigation and integrated a user-friendly feature
              allowing users to add cards to their favorites. Demonstrated
              proficiency in JavaScript, API integration, Tailwind CSS, and
              front-end development.
            </p>
            <a
              href="https://hiteshyaduvanshi.github.io/Default-Movies-js/"
              target="_blank"
              className=" mt-5 text-white inline-block uppercase py-2.5 px-7 bg-gradient-to-r from-[#8490ff] to-[#62bdfc]"
            >
              View full project
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start">
          <div className="sm:basis-1/2 basis-full p-5">
            <h1 className="text-3xl font-bold">
              Stone Paper Scissors Game : JS
            </h1>
            <p className="my-4 text-[#666]">
              Designed and implemented an engaging Stone-Paper-Scissors game
              using HTML, CSS, and JavaScript. Developed an interactive user
              interface allowing players to compete against the computer in a
              dynamic and responsive gaming environment. Implemented score
              tracking functionality, where the first player to reach 10 points
              is declared the winner. 
            </p>
            <a
              href="https://hiteshyaduvanshi.github.io/Default-Stone-Paper-Scissors-Game-js/"
              target="_blank"
              className=" mt-5 text-white inline-block uppercase py-2.5 px-7 bg-gradient-to-r from-[#8490ff] to-[#62bdfc]"
            >
              View full project
            </a>
          </div>
          <div className="sm:basis-1/2 basis-full p-5">
            <a
              href="https://hiteshyaduvanshi.github.io/Default-Stone-Paper-Scissors-Game-js/"
              target="_blank"
            >
              <img src={StonePaperProject} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioSection;
