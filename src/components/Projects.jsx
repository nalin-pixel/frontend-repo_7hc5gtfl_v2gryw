import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'eCommerce platform UX (GCC region)',
    desc: 'Localized shopping journeys, improved product discovery and checkout completion.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1704541253392-cc9ae53ddd94?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxlQ29tbWVyY2UlMjBwbGF0Zm9ybSUyMFVYJTIwJTI4R0NDfGVufDB8MHx8fDE3NjI1NzQ2MzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Fintech products',
    desc: 'Invoice discounting, vendor dashboard, trading page for liquidity workflows.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1733222765056-b0790217baa9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwcHJvZHVjdHN8ZW58MHwwfHx8MTc2MjU3NDYzNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Meat products eCommerce usability',
    desc: 'Improved browse-to-buy funnels with clearer taxonomy and content hierarchy.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'HRMS and Payroll dashboard',
    desc: 'Task-focused navigation, modular widgets, and audit-friendly histories.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'CMS and POS modules',
    desc: 'Optimized flows for ROI improvements across catalog and in-store checkout.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Branding & Presentations',
    desc: 'Logos, web interfaces, investor presentations for early-stage startups.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=1400&auto=format&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">Projects & Case Studies</h2>
            <p className="mt-2 max-w-2xl text-gray-600">Selected work spanning FinTech, Fashion, F&B, Retail, and Sustainability.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-xl border border-gray-200">
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                <a href={item.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline">
                  View case study <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
