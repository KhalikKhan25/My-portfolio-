import React from "react";

function About() {
  return (
<section id="about" className="about-section min-h-screen px-4 py-20 sm:px-6 sm:py-24 text-white">
      <div className="about-decorations pointer-events-none">
        <div className="about-glow about-glow-1"></div>
        <div className="about-glow about-glow-2"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300 mb-3">Who I Am</p>
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A passionate Computer Science student with a focus on Data Science, combining technical expertise with real-world experience through internships and projects.
          </p>
        </div>


        {/* Content */}
        <div className="w-full px-4 sm:px-8 lg:px-16">
          <p className="mb-8 text-lg leading-relaxed text-slate-200">
            I am Khalik Khan, a B.Tech Computer Science student specializing in
            Data Science at Buddha Institute of Technology, Gorakhpur.
            I am passionate about building intelligent systems and modern
            full-stack web applications using AI and data-driven technologies.
          </p>

          {/* Academic Details */}
          <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-400">Academic Details</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-slate-200">B.Tech Computer Science Engineering</h4>
                    <p className="text-sm text-slate-400">Buddha Institute of Technology, Gorakhpur</p>
                  </div>
                  <span className="text-purple-400 font-semibold text-sm">2022 - 2026</span>
                </div>
                <p className="text-slate-300 text-sm">
                  Specializing in Data Science with focus on AI, Machine Learning, and Full-Stack Development
                </p>
              </div>
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-lg border border-blue-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-400">Achievements & Certifications</h3>
            </div>
            <div className="space-y-4">
              {/* GATE Achievement */}
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-slate-200">GATE CSE 2026</h4>
                    <p className="text-sm text-slate-400">Graduate Aptitude Test in Engineering</p>
                  </div>
                  <span className="text-blue-400 font-semibold text-sm">Qualified</span>
                </div>
                <p className="text-slate-300 text-sm">
                  Score: 464/1000 | Demonstrated strong foundation in Computer Science fundamentals
                </p>
              </div>

              {/* Certifications */}
              <div className="space-y-3">
                <h4 className="font-medium text-slate-200 mb-3">Professional Certifications</h4>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div>
                    <h5 className="font-medium text-slate-200">Machine Learning</h5>
                    <p className="text-sm text-slate-400">NPTEL - IIT Madras</p>
                  </div>
                  <span className="text-green-400 font-semibold">62%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div>
                    <h5 className="font-medium text-slate-200">Python Programming</h5>
                    <p className="text-sm text-slate-400">Geeks for Geeks</p>
                  </div>
                  <span className="text-green-400 font-semibold">Certified</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div>
                    <h5 className="font-medium text-slate-200">Data Science and Machine Learning</h5>
                    <p className="text-sm text-slate-400">Geeks for Geeks</p>
                  </div>
                  <span className="text-green-400 font-semibold">Certified</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mb-8 text-lg leading-relaxed text-slate-200">
            I have completed multiple internships in Data Analytics and Python
            Development including IBM SkillBuild, Smart Bridge Data Analytics,
            and Infosys Springboard Python Development program.
          </p>


          <p className="text-lg leading-relaxed text-slate-200">
            My expertise includes Web Development, Machine Learning,
            Data Analytics, and Dashboard Development using modern tools
            like React, Flask, FastAPI, Power BI, and SQL-based databases.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;