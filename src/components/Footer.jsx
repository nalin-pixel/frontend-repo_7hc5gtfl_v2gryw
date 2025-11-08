import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Let’s build better experiences.</h3>
            <p className="mt-2 max-w-md text-sm text-gray-600">
              Available for product design, UX research, design systems, and conversion optimization engagements.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="flex flex-wrap items-center gap-3">
              <a href="tel:+918147774970" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 hover:bg-gray-50">
                <Phone className="h-4 w-4" /> +91 81477 74970
              </a>
              <a href="mailto:gpak1991@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 hover:bg-gray-50">
                <Mail className="h-4 w-4" /> gpak1991@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/gurupriyan-ankarath-0b56b487"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 hover:bg-gray-50"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Gurupriyan A K. All rights reserved.</p>
          <nav className="flex gap-4">
            <a href="#hero" className="hover:text-gray-700">Top</a>
            <a href="#projects" className="hover:text-gray-700">Projects</a>
            <a href="#experience" className="hover:text-gray-700">Experience</a>
            <a href="#skills" className="hover:text-gray-700">Skills</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
