import React from "react";

function Internship() {
  return (
    <section className="internship-section min-h-screen px-4 py-20 sm:px-6 sm:py-24 text-white" id="internship">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="internship-bubble bubble-1"></span>
        <span className="internship-bubble bubble-2"></span>
        <span className="internship-bubble bubble-3"></span>
        <span className="internship-bubble bubble-4"></span>
        <span className="internship-bubble bubble-5"></span>
        <span className="internship-bubble bubble-6"></span>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300 mb-3">Professional Experience</p>
          <h2 className="text-4xl font-bold text-white">Internship Experience</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Real-world internships that helped me build practical skills in data science, analytics, and software development.
          </p>
        </div>

        <div className="space-y-6">
          <article className="relative internship-card p-6 bg-slate-900/80 border border-slate-700 rounded-3xl shadow-xl shadow-slate-950/40">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">IBM SkillBuild</h3>
                <p className="text-sm text-slate-400">Data Analytics (Virtual) | Duration: 4 weeks</p>
              </div>
              <span className="text-sm font-semibold text-emerald-300">Role: Analyst</span>
            </div>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Completed a 4-week virtual data analytics internship focused on dataset exploration, reporting, and analytical problem solving using Python and data visualization tools.
            </p>
          </article>

          <article className="relative internship-card p-6 bg-slate-900/80 border border-slate-700 rounded-3xl shadow-xl shadow-slate-950/40">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">SmartBridge Data Analytics</h3>
                <p className="text-sm text-slate-400">Virtual | Duration: 4 weeks</p>
              </div>
              <span className="text-sm font-semibold text-emerald-300">Role: Analyst</span>
            </div>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Delivered actionable insights by analyzing business datasets, creating dashboards, and supporting data-driven decision-making across projects.
            </p>
          </article>

          <article className="relative internship-card p-6 bg-slate-900/80 border border-slate-700 rounded-3xl shadow-xl shadow-slate-950/40">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">Infosys Springboard</h3>
                <p className="text-sm text-slate-400">Python Development (Virtual) | Duration: 8 weeks</p>
              </div>
              <span className="text-sm font-semibold text-emerald-300">Role: Backend Developer</span>
            </div>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Worked on backend development tasks, building APIs and automation workflows in Python while honing server-side programming and software development skills.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Internship;
