import React from 'react';

const ideationData = [
  {
    hmw: 'HMW: Career attractiveness for young weavers',
    contributors: [
      {
        name: 'Shaon Ryan Ranjit',
        ideas: ['Paid training stipends', 'Heritage career campaigns', 'Comfortable workspaces'],
      },
      {
        name: 'K. Sai Harshith',
        ideas: ['Skill certificates', 'Entrepreneurship support', 'Clear career growth paths'],
      },
    ],
  },
  {
    hmw: 'HMW: Income and financial stability',
    contributors: [
      {
        name: 'Param Ankam',
        ideas: ['Direct-to-customer platforms', 'Fair-share cooperatives', 'Fixed salary + incentives'],
      },
      {
        name: 'Anirudh Jampana',
        ideas: ['Minimum wage policies', 'Global export opportunities', 'Low-interest loom loans'],
      },
    ],
  },
];

const contributorColors = {
  'Shaon Ryan Ranjit':  'bg-teal-50 text-teal-600 border-teal-100',
  'K. Sai Harshith':   'bg-purple-50 text-purple-600 border-purple-100',
  'Param Ankam':        'bg-pink-50 text-pink-600 border-pink-100',
  'Anirudh Jampana':   'bg-blue-50 text-blue-600 border-blue-100',
  'Sreekar Vajja':      'bg-green-50 text-green-600 border-green-100',
  'Pranav Mattipi':     'bg-amber-50 text-amber-600 border-amber-100',
};

const Ideation = () => {
  return (
    <section id="ideation" className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ideation</h2>
          <p className="text-gray-500 leading-relaxed text-lg">
            Using the 6-3-5 brainwriting method to generate human-centered solutions.
          </p>
        </div>

        {/* Intro */}
        <div className="bg-gray-50/50 rounded-3xl p-10 border border-gray-100 shadow-sm hover-lift">
          <p className="text-gray-600 leading-relaxed text-center italic">
            "6 team members, 3 ideas per round, multiple rounds — followed by silent dot-voting and scoring."
          </p>
        </div>

        {/* HMW Sections */}
        <div className="space-y-12">
          {ideationData.map((section) => (
            <div key={section.hmw} className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 px-4">{section.hmw}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.contributors.map((contributor) => (
                  <div
                    key={contributor.name}
                    className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover-lift group"
                  >
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border ${contributorColors[contributor.name] || 'bg-gray-100 text-gray-700'}`}>
                      {contributor.name}
                    </span>
                    <ul className="space-y-3">
                      {contributor.ideas.map((idea, i) => (
                        <li key={i} className="flex gap-4 text-gray-500 text-sm leading-relaxed group-hover:translate-x-1 transition-transform">
                          <span className="mt-2 w-1 h-1 rounded-full bg-gray-200 shrink-0"></span>
                          <span>{idea}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ideation;
