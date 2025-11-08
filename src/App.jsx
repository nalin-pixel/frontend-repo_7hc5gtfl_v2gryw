import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="text-base font-semibold tracking-tight">Gurupriyan A K</a>
          <nav className="hidden gap-6 text-sm text-gray-700 md:flex">
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#experience" className="hover:text-gray-900">Experience</a>
            <a href="#skills" className="hover:text-gray-900">Skills</a>
            <a href="#education" className="hover:text-gray-900">Education</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />

        {/* Interests / Contact anchor */}
        <section id="contact" className="w-full bg-gradient-to-b from-gray-50 to-white py-14">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">Other Interests</h2>
                <p className="mt-2 max-w-xl text-gray-600">Illustration, Digital Art, Fiction, Anime, Gaming, Cooking, Collecting Sneakers & Figurines</p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900">Get in touch</h3>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>
                    <a href="tel:+918147774970" className="hover:underline">Mobile: +91 81477 74970</a>
                  </li>
                  <li>
                    <a href="mailto:gpak1991@gmail.com" className="hover:underline">Email: gpak1991@gmail.com</a>
                  </li>
                  <li>
                    <a className="hover:underline" href="https://linkedin.com/in/gurupriyan-ankarath-0b56b487" target="_blank" rel="noreferrer">LinkedIn Profile</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
