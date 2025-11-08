import React from 'react';
import Spline from '@splinetool/react-spline';
import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-200">UX | Research | Systems Thinking</span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl">
              Gurupriyan A K
            </h1>
            <p className="text-lg text-gray-700">
              UX Designer | Researcher · Bengaluru, India
            </p>
            <p className="max-w-xl text-base leading-relaxed text-gray-600">
              11+ years leading design initiatives, orchestrating design systems, specializing in usability improvements through
              rigorous user research and data‑driven design across Fin‑Tech, Fashion, F&B, Retail, and Sustainable E‑commerce.
            </p>

            {/* Quick Contacts */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a href="tel:+918147774970" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white transition hover:bg-black">
                <Phone className="h-4 w-4" /> Call
              </a>
              <a href="mailto:gpak1991@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 transition hover:border-gray-400">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="https://linkedin.com/in/gurupriyan-ankarath-0b56b487"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-700 transition hover:bg-blue-100"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 pt-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-gray-500" /> Bengaluru, India
            </div>
          </div>

          {/* 3D Spline Scene */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl ring-1 ring-gray-200 md:h-[540px]">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Subtle gradient overlay for readability (does not block interaction) */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
