import React from 'react';

const reflections = [
  {
    title: 'Focus on problem understanding',
    text: 'We began with a surface understanding — weavers earn less than they should. But as we researched and empathised more deeply, we found the root cause is invisibility, not incompetence. Weavers are extraordinary craftspeople operating in a system designed to extract their value without acknowledging them. That reframing changed everything about our ideation: instead of asking how to make weavers more productive, we asked how to make them visible and directly connected to the people who value their work.',
  },
  {
    title: 'What we learned as individuals and as a team',
    text: 'Individually, we learned to generate and evaluate ideas without falling in love with the first good one. The scoring process — applying F, D, and V criteria rigorously — was humbling. As a team, we found that the best ideas came from the second or third round of brainwriting. The story card prototype emerged from combining an idea about authenticity tags with an idea about documentary content — neither team member had the full idea alone.',
  },
  {
    title: 'How our thinking evolved',
    text: 'Early in ideation, we gravitated toward technology solutions — apps, platforms, marketplaces. But our persona work reminded us that Raju has limited digital literacy and low bandwidth, and that Swathi needs emotional resonance before she needs a new app. That reality pushed us toward simpler, more human solutions. The story card is deliberately low-tech at the prototype stage — and that is a feature, not a limitation.',
  },
  {
    title: 'Surprises and unexpected turns',
    text: 'We were surprised to discover that our three finalist solutions are actually one ecosystem, not three competing ideas. The story card works better when it links to a weaver profile (Finalist 1). The weaver profile works better when it includes an authenticity certificate (Finalist 2). What we thought were competing options turned out to be a staged rollout plan — start with the card, build toward the profile, add certification last. That insight came from the evaluation process, not the ideation process.',
  },
  {
    title: 'Reflection on the state of pattu saree weaving',
    text: 'The pattu saree industry is not dying because of lack of demand — demand for authentic silk textiles is growing among the urban professional class and the Indian diaspora. It is dying because the system is extractive. Design thinking cannot fix the entire system. But it can find the leverage point — the simplest intervention that, if it works, creates the evidence and momentum for larger change. Making the weaver visible is that leverage point. If buyers connect with Raju before they buy, they will pay more, return more, and tell others. That changes the economics without requiring any policy change or large infrastructure investment. It is a place to start.',
  },
];

const Reflection = () => {
  return (
    <section id="reflection" className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900">Reflection &amp; Learning</h2>

        {/* Reflection Cards */}
        {reflections.map((item) => (
          <div key={item.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Reflection;
