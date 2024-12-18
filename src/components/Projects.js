import React from 'react';
import { CodeIcon } from '@heroicons/react/solid';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400body-font pb-10">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
          {projects
            .sort((a, b) => a.order - b.order)
            .map((project) => (
              <a href={project.link} key={project.image} className="block">
                <div className="flex relative h-[400px]">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-orange-800 bg-secondary opacity-0 hover:opacity-100 h-60">
                    <h2 className="tracking-widest text-sm title-font font-medium text-accent mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
