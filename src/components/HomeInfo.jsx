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

        {/* Our Mission Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-gray-900 hover-lift border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold mb-6 text-gray-900">Our mission</h2>
          
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light max-w-4xl">
            <p>
              We are a student design team working to revive and sustain the livelihoods of traditional pattu saree weavers 
              through human-centred design. Pattu silk weaving is a centuries-old craft embedded in the cultural identity of 
              communities across Kanchipuram, Dharmavaram, Pochampally, and Gadwal.
            </p>
            <p>
              Yet today's weavers face an invisible crisis — falling wages, rising imitation products, ageing artisans, and a 
              younger generation that sees no future in the loom. Using design thinking — from empathy and research 
              through ideation, evaluation, and prototyping — we set out to understand this crisis from the inside and design 
              solutions that work for real weavers in real conditions.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5 mt-10">
            {[
              { label: 'Income & wages', color: 'bg-[#e6f4f1] text-[#2c7a7b]' },
              { label: 'Authenticity & IP', color: 'bg-[#f0effb] text-[#553c9a]' },
              { label: 'Workforce pipeline', color: 'bg-[#fdf2f2] text-[#9b2c2c]' },
              { label: 'Customer connection', color: 'bg-[#ebf8ff] text-[#2b6cb0]' },
              { label: 'Working conditions', color: 'bg-[#fffaf0] text-[#9c4221]' },
              { label: 'Global demand', color: 'bg-[#f0fff4] text-[#276749]' },
            ].map((tag) => (
              <span 
                key={tag.label} 
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight border border-gray-200 ${tag.color}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {[
            { value: '17', label: 'HMW questions' },
            { value: '6', label: 'Team members' },
            { value: '25+', label: 'Ideas scored' },
            { value: '10', label: 'Shortlisted' },
            { value: '3', label: 'Finalists' },
            { value: '1', label: 'Prototype chosen' },
          ].map((stat) => (
            <div 
              key={stat.label} 
              className="bg-white p-6 rounded-2xl text-center hover-lift border border-gray-100 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                {stat.label}
              </div>
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
