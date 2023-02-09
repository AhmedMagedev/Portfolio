import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testmonials from "./components/Testmonials";

export default function App() {
  return (
    <main className="text-gray-400 bg-impreza-dark body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testmonials /> */}
      <Contact />
    </main>
  );
}
