import React from 'react';

const stats = [
  { number: '17', label: 'HMW questions explored' },
  { number: '6',  label: 'Team members' },
  { number: '3',  label: 'Finalist solutions' },
  { number: '1',  label: 'Prototype chosen' },
];

const tags = [
  { label: 'Income & wages',       color: 'bg-green-100 text-green-800 border border-green-300' },
  { label: 'Authenticity & IP',    color: 'bg-purple-100 text-purple-800 border border-purple-300' },
  { label: 'Workforce pipeline',   color: 'bg-orange-100 text-orange-800 border border-orange-300' },
  { label: 'Customer connection',  color: 'bg-blue-100 text-blue-800 border border-blue-300' },
  { label: 'Working conditions',   color: 'bg-amber-100 text-amber-800 border border-amber-300' },
  { label: 'Global demand',        color: 'bg-emerald-100 text-emerald-800 border border-emerald-300' },
];

const HomeInfo = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Our Mission */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Our mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a student design team working to revive and sustain the livelihoods of traditional pattu saree weavers
            through human-centred design. Pattu silk weaving is a centuries-old craft embedded in the identity of
            communities across Kanchipuram, Dharmavaram, Pochampally, and Gadwal. Yet today's weavers face an
            invisible crisis — falling wages, rising imitation products, ageing artisans, and a younger generation
            that sees no future in the loom.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Using design thinking — from empathy and research through ideation, evaluation, and prototyping — we set out
            to understand this crisis from the inside and design solutions that work for real weavers in real conditions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
            >
              <p className="text-4xl font-bold text-gray-900 mb-1">{stat.number}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* The Design Challenge */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-900">The design challenge</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            How might we ensure that traditional pattu saree weaving remains a dignified, economically viable, and
            culturally celebrated livelihood — for the weavers who practise it today and the generations that might
            carry it forward?
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* Down Arrow */}
        <div className="flex justify-center pt-2">
          <svg className="w-6 h-6 text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

      </div>
    </section>
  );
};

export default HomeInfo;
