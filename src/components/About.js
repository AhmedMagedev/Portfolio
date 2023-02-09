import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className=" container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ahmed
            <br className="hidden lg:inline-block" /> I love building amazing
            websites.
          </h1>
          <p className="mb-8 leading-relaxed py-5">
            An ambitious developer who’s passionate about learning Front-End web
            development new technologies and eager to refine my coding and
            debugging skills.
          </p>
          <div className="flex">
            <a
              href="mailto:ahmedmagedev@gmail.com"
              className="inline-flex text-white bg-impreza-orange border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-impreza-dark border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./avatar.png"
          />
        </div>
      </div>
    </section>
  );
}
