import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section min-h-screen px-6 py-24 text-white">
      <div className="contact-decorations pointer-events-none">
        <div className="contact-glow contact-glow-1"></div>
        <div className="contact-glow contact-glow-2"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300 mb-3">Get in touch</p>
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="mt-4 text-slate-400">
            I am available for opportunities in data science and modern web development.
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-700 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Email</h3>
              <p className="text-slate-300">khalikkhan4983@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Location</h3>
              <p className="text-slate-300">Gorakhpur, Uttar Pradesh, India</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/Khalik-khan-b54a89315" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">
                linkedin.com/in/Khalik-khan-b54a89315
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
