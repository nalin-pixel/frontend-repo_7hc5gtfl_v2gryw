import React from 'react';

const experiences = [
  {
    role: 'Lead UI/UX Designer',
    company: 'Gravity Engineering Services',
    location: 'Remote',
    period: 'Feb 2024 – Present',
  },
  {
    role: 'UX Webflow Consultant',
    company: 'The Kreatr',
    location: 'Bengaluru',
    period: 'Mar 2023 – Feb 2024',
  },
  {
    role: 'Senior User Experience Designer',
    company: 'Screenroot',
    location: '',
    period: 'Nov 2022 – Feb 2023',
  },
  {
    role: 'UX Researcher',
    company: 'Anatta',
    location: '',
    period: 'Jun 2021 – Sep 2022',
  },
  {
    role: 'Senior UX Designer',
    company: 'Modista Box',
    location: 'Bengaluru',
    period: 'Jan 2020 – May 2021',
  },
  {
    role: 'User Experience Designer-III',
    company: 'KredX',
    location: 'Bengaluru',
    period: 'Dec 2018 – Mar 2020',
  },
  {
    role: 'Senior User Interface Designer',
    company: 'Licious',
    location: 'Bengaluru',
    period: 'Jun 2016 – Dec 2018',
  },
  {
    role: 'Web & Graphic Designer',
    company: 'Rasbor EDEM Total Recall Slyds',
    location: '',
    period: 'Sep 2013 – Apr 2016',
  },
];

const highlights = [
  'Led e-commerce and CMS portal UX, improved conversion rates, reduced bounce rates',
  'Developed user personas, wireframes, prototypes',
  'Collaborated with cross-functional teams, integrated user feedback for iteration cycles',
  'Specialized in usability testing (A/B testing, card sorting, tree testing, heuristics)',
];

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">Experience</h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              A decade crafting usable products for FinTech, Fashion, F&B, Retail and Sustainable e‑commerce.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ul className="space-y-4">
            {experiences.map((exp) => (
              <li key={`${exp.company}-${exp.role}`} className="rounded-xl border border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{exp.role}</h3>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                <p className="mt-1 text-gray-700">{exp.company}{exp.location ? ` · ${exp.location}` : ''}</p>
              </li>
            ))}
          </ul>

          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Key Achievements</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
