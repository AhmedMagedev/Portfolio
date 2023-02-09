import React from "react";
import { skills } from "../data";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { FaReact } from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiMongodb,
  SiWordpress,
  SiGithub,
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto mb-10">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-impreza-gray rounded flex p-4 h-full items-center">
              <FaReact className="text-impreza-orange w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">React</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-impreza-gray rounded flex p-4 h-full items-center">
              <SiFirebase className="text-impreza-orange w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">
                Firebase
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-impreza-gray rounded flex p-4 h-full items-center">
              <SiTailwindcss className="text-impreza-orange w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">
                Tailwind css
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-impreza-gray rounded flex p-4 h-full items-center">
              <SiNextdotjs className="text-impreza-orange w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">Next.js</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-impreza-gray rounded flex p-4 h-full items-center">
              <SiGraphql className="text-impreza-orange w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">GraphQl</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-impreza-gray rounded flex p-4 h-full items-center">
              <SiMongodb className="text-impreza-orange w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">Mongodb</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-impreza-gray rounded flex p-4 h-full items-center">
              <SiWordpress className="text-impreza-orange w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">
                Wordpress
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-impreza-gray rounded flex p-4 h-full items-center">
              <SiGithub className="text-impreza-orange w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">Github</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
