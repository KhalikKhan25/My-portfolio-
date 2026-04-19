import React from "react";

function Certifications() {
  return (
    <section className="min-h-screen px-4 py-20 sm:px-6 sm:py-24 text-white" id="certifications">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300 mb-3">Certifications</p>
          <h2 className="text-4xl font-bold text-white">Professional Certifications</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Certifications that demonstrate my skills in data science, Python, machine learning, and modern web development.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="p-6 bg-slate-900/80 border border-slate-700 rounded-3xl shadow-xl shadow-slate-950/40">
            <h3 className="text-xl font-semibold text-white">Machine Learning</h3>
            <p className="mt-2 text-sm text-slate-400">NPTEL - IIT Madras</p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Completed coursework in supervised and unsupervised learning, model evaluation, and practical ML applications.
            </p>
          </div>

          <div className="p-6 bg-slate-900/80 border border-slate-700 rounded-3xl shadow-xl shadow-slate-950/40">
            <h3 className="text-xl font-semibold text-white">Python Programming</h3>
            <p className="mt-2 text-sm text-slate-400">Geeks for Geeks</p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Gained strong command over core Python programming, data structures, and scripting for automation.
            </p>
          </div>

          <div className="p-6 bg-slate-900/80 border border-slate-700 rounded-3xl shadow-xl shadow-slate-950/40">
            <h3 className="text-xl font-semibold text-white">Data Science & ML</h3>
            <p className="mt-2 text-sm text-slate-400">Geeks for Geeks</p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Covered data analysis, visualization, machine learning models, and data-driven project workflows.
            </p>
          </div>

          <div className="p-6 bg-slate-900/80 border border-slate-700 rounded-3xl shadow-xl shadow-slate-950/40">
            <h3 className="text-xl font-semibold text-white">LeetCode Problem Solving</h3>
            <p className="mt-2 text-sm text-slate-400">LeetCode</p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Solved 110+ problems across algorithms and data structures. <a href="https://leetcode.com/u/khalikkhan4983/" target="_blank" rel="noreferrer" className="text-cyan-300 underline hover:text-cyan-200">View profile</a>
            </p>
          </div>

          <div className="p-6 bg-slate-900/80 border border-slate-700 rounded-3xl shadow-xl shadow-slate-950/40">
            <h3 className="text-xl font-semibold text-white">Full-Stack Web Development</h3>
            <p className="mt-2 text-sm text-slate-400">FreeCodeCamp</p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Learned modern frontend and backend technologies including React, Node.js, and REST APIs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
