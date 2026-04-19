import React from "react";
import profile from "../assets/profile.png";
import resume from "../assets/Khalik_Khan_Resume.pdf";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
<section id="home" className="hero-section bg-slate-950 text-white min-h-screen flex items-center px-6 sm:px-8 md:px-12">
      <div className="hero-decorations pointer-events-none">
        <div className="hero-circle hero-circle-1"></div>
        <div className="hero-circle hero-circle-2"></div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col-reverse gap-12 md:flex-row md:gap-20 items-center justify-between w-full relative z-10">


        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2">

          <p className="text-blue-400 text-lg mb-2">
            HELLO I'M
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            Khalik Khan
          </h1>


          {/* Typing Animation */}
          <h2 className="text-2xl sm:text-3xl text-blue-400 font-semibold mb-4">

            <TypeAnimation
              sequence={[
                "Data Scientist",
                1500,
                "Full Stack Developer",
                1500,
                "AI Developer",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </h2>


          <p className="text-gray-400 mb-6 max-w-lg">
            I build intelligent web applications, machine learning models,
            dashboards, and modern full-stack solutions using React,
            Flask, FastAPI and Data Science tools.
          </p>


          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

            {/* Hire Me */}
            <a
              href="mailto:khalikkhan4983@gmail.com"
              className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Hire Me
            </a>


            {/* Resume Download */}
            <a
              href={resume}
              download
              className="border border-blue-400 px-6 py-2 rounded-lg hover:bg-blue-400 hover:text-black transition"
            >
              Download Resume
            </a>


            {/* LinkedIn */}
            <a
              href="https://in.linkedin.com/in/khalik-khan-b54a89315"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-500 px-6 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              LinkedIn
            </a>


            {/* GitHub */}
            <a
              href="https://github.com/KhalikKhan25"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-500 px-6 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              GitHub
            </a>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="profile-card rounded-[36px] border border-white/10 bg-white/5 p-1 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] backdrop-blur-xl max-w-[360px] w-full">
            <div className="rounded-[30px] overflow-hidden bg-white/10">
              <img
                src={profile}
                alt="Khalik Khan"
                className="w-full block"
              />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;