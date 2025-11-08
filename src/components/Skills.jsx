import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const groups = [
  {
    title: 'Core Competencies',
    items: [
      'User Experience',
      'Visual Design',
      'UI Design',
      'Design Thinking',
      'Wireframing',
      'Prototyping',
    ],
  },
  {
    title: 'Tools',
    items: [
      'Figma',
      'Sketch',
      'Adobe CC Suite',
      'XD',
      'Webflow',
      'Wix',
      'Google Analytics',
      'G Suite',
    ],
  },
  {
    title: 'Research & Optimization',
    items: [
      'Usability Testing',
      'A/B Testing',
      'Card Sorting',
      'Tree Testing',
      'Heuristic Evaluation',
      'CRO',
      'AI Tools & ChatGPT Prompts',
      'Procreate',
    ],
  },
];

const languages = [
  'English (Written & Spoken)',
  'Malayalam (Mother Tongue)',
  'Tamil (Spoken)',
  'Hindi (Written & Spoken)',
  'Kannada (Basic)',
  'French (Novice)',
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-gray-50 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">Skills & Tools</h2>
        <p className="mt-2 max-w-2xl text-gray-600">A versatile toolkit for shipping usable, beautiful, data‑driven experiences.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-medium text-gray-900">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-medium text-gray-900">Languages</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {languages.map((lang) => (
              <li key={lang} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 ring-1 ring-gray-200">
                {lang}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
