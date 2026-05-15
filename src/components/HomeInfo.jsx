import React from 'react';

const stats = [
  { number: '17', label: 'HMW questions explored' },
  { number: '6',  label: 'Team members' },
  { number: '3',  label: 'Finalist solutions' },
  { number: '1',  label: 'Prototype chosen' },
];

const tags = [
  { label: 'Income & wages',       color: 'bg-green-50 text-green-700 border-green-100 hover:bg-green-100 hover:border-green-200' },
  { label: 'Authenticity & IP',    color: 'bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100 hover:border-purple-200' },
  { label: 'Workforce pipeline',   color: 'bg-orange-50 text-orange-700 border-orange-100 hover:bg-orange-100 hover:border-orange-200' },
  { label: 'Customer connection',  color: 'bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100 hover:border-blue-200' },
  { label: 'Working conditions',   color: 'bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100 hover:border-amber-200' },
  { label: 'Global demand',        color: 'bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100 hover:border-emerald-200' },
];

const HomeInfo = () => {
  return (
    <section className="bg-gray-50/50 text-gray-900 py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Our Mission */}
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover-lift">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Our mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            We are a student design team working to revive and sustain the livelihoods of traditional pattu saree weavers
            through human-centred design.
          </p>
          <p className="text-gray-500 leading-relaxed italic border-l-4 border-gray-100 pl-6 my-8">
            Pattu silk weaving is a centuries-old craft embedded in the identity of
            communities across Kanchipuram, Dharmavaram, Pochampally, and Gadwal. Yet today's weavers face an
            invisible crisis — falling wages, rising imitation products, and ageing artisans.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Using design thinking — from empathy and research through ideation, evaluation, and prototyping — we set out
            to understand this crisis from the inside and design solutions that work for real weavers in real conditions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 hover-lift group"
            >
              <p className="text-5xl font-bold text-gray-900 mb-2 transition-transform duration-300 group-hover:scale-110">{stat.number}</p>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* The Design Challenge */}
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover-lift">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">The design challenge</h2>
          <p className="text-gray-700 text-xl font-medium leading-relaxed mb-8">
            How might we ensure that traditional pattu saree weaving remains a dignified, economically viable, and
            culturally celebrated livelihood?
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border cursor-default ${tag.color}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeInfo;
