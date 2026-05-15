import React from 'react';

const reflections = [
  {
    title: 'Focus on problem understanding',
    text: 'We began with a surface understanding — weavers earn less than they should. But as we researched more deeply, we found the root cause is invisibility, not incompetence. That reframing changed everything: instead of asking how to make weavers more productive, we asked how to make them visible.',
  },
  {
    title: 'Individual and team learning',
    text: 'We learned to generate and evaluate ideas without falling in love with the first good one. The scoring process was humbling. As a team, we found that the best ideas came from the second or third round of brainwriting.',
  },
  {
    title: 'Evolution of thinking',
    text: 'Early on, we gravitated toward technology. But our persona work reminded us that Raju has limited digital literacy and Swathi needs emotional resonance. That reality pushed us toward simpler, more human solutions like story cards.',
  },
  {
    title: 'Unexpected turns',
    text: 'We discovered that our finalist solutions are actually one ecosystem, not three competing ideas. What we thought were competing options turned out to be a staged rollout plan — start with the card, build toward the profile.',
  },
];

const Reflection = () => {
  return (
    <section id="reflection" className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Reflection & Learning</h2>
          <p className="text-gray-500 leading-relaxed text-lg">
            What we discovered about the craft, the system, and ourselves during this journey.
          </p>
        </div>

        {/* Reflection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reflections.map((item) => (
            <div key={item.title} className="bg-gray-50/50 rounded-3xl p-10 border border-gray-100 shadow-sm hover-lift group">
              <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-black transition-colors">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Final Insight */}
        <div className="bg-gray-900 rounded-3xl p-12 text-center hover-lift">
          <p className="text-white/50 text-[10px] uppercase tracking-[0.5em] font-bold mb-6">Final Leverage Point</p>
          <p className="text-white text-2xl font-medium leading-relaxed max-w-2xl mx-auto italic">
            "Making the weaver visible is the leverage point. If buyers connect with Raju before they buy, they will pay more, return more, and tell others."
          </p>
        </div>

      </div>
    </section>
  );
};

export default Reflection;
