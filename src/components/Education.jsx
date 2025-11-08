import React from 'react';

const Education = () => {
  return (
    <section id="education" className="w-full bg-gray-50 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">Education & Certifications</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-medium text-gray-900">Design Thinking from Insights to Viability</h3>
            <p className="mt-1 text-sm text-gray-700">Stanford GSB</p>
            <p className="text-sm text-gray-500">May – Aug 2021</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-medium text-gray-900">E‑Commerce UX Professional</h3>
            <p className="mt-1 text-sm text-gray-700">Baymard Institute</p>
            <p className="text-sm text-gray-500">Issued Nov 2021</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-medium text-gray-900">Diploma of Web Graphic Design</h3>
            <p className="mt-1 text-sm text-gray-700">Wings Creations College</p>
            <p className="text-sm text-gray-500">Dec 2013 – Mar 2015</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
