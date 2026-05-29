import React from 'react';

const secondaryResearchPoints = [
  'India has approximately 35 lakh handloom weavers. Numbers have fallen ~18% per decade due to falling earnings and no clear career pathway.',
  'Average daily income for a handloom weaver: ₹200–₹350 — well below minimum wage in most states.',
  'Machine-made sarees undercut handloom prices by 40–60% in markets like Dharmavaram.',
  'GI tags exist for Kanchipuram, Pochampally, Gadwal — but enforcement is minimal and consumer awareness is very low.',
  'Middlemen capture 40–60% of the final retail price, leaving weavers with a fraction of the value they create.',
  'Weaver gets ₹3,000–₹5,000 per saree. Retail price of the same saree: ₹12,000–₹25,000.',
];

const communityQuotes = [
  { text: 'Buyers have no way to know if a saree is handloom or machine-made. The seller just says it’s handloom.', source: 'textile retailer' },
  { text: 'My cousin who is a weaver earns less than a construction worker. He wants his son to study engineering.', source: 'community contact' },
  { text: 'When I buy a kanchi saree, I feel connected to something ancient. But I don\'t know the weaver\'s name, village, or story.', source: 'urban buyer' },
  { text: 'We have GI tags but nobody checks. Even government shops sell fake Kanchipuram.', source: 'design student' },
];

const keyInsights = [
  {
    title: '1. The weaver is invisible to the customer',
    body: 'Despite high emotional attachment to kanchi sarees, buyers have almost no information about the people who make them. This invisibility enables exploitation and removes a powerful source of perceived value.',
  },
  {
    title: '2. Authenticity cannot be verified at point of sale',
    body: 'There is no reliable, accessible signal that distinguishes handloom from powerloom at the moment a customer is deciding to buy. GI tags exist on paper but are absent in practice at retail level.',
  },
  {
    title: '3. Middlemen extract disproportionate value',
    body: 'The supply chain typically passes through 3–5 intermediaries. The weaver receives a fixed, often exploitative piece-rate that has not kept pace with material costs or inflation.',
  },
  {
    title: '4. Young people see no future in weaving without structural change',
    body: 'The decision to leave weaving is rational given current wages, conditions, and social status. Cultural appeals alone will not retain the next generation.',
  },
];

const ProblemDiscovery = () => {
  return (
    <section id="problem-discovery" className="bg-gray-50/50 py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Problem Discovery & Research</h2>
          <p className="text-gray-500 leading-relaxed text-lg">
            Exploring the structural crisis in traditional kanchi saree weaving through secondary research and community conversations.
          </p>
        </div>

        {/* Problem Area & Motivation */}
        <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover-lift">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Problem area and motivation</h3>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Traditional kanchi saree weaving in India — practised in Kanchipuram, Dharmavaram, Gadwal, and Pochampally — is a craft of extraordinary skill and cultural significance. Yet the weavers who produce these textiles face a structural crisis that has deepened over decades.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-500 leading-relaxed">
            <p>
              We chose this problem because it sits at the intersection of economic injustice, cultural erosion, and
              design opportunity. The weavers are not lacking in skill — they are lacking in visibility and fair value.
            </p>
            <p className="border-l border-gray-100 pl-8 italic">
              "Their incomes have stagnated while the cost of raw materials has risen. Machine-made imitations undercut handloom prices in the market."
            </p>
          </div>
        </div>

        {/* Research Process */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 px-4">Research process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Secondary Research */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover-lift group">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Secondary research — what the data shows</h4>
              <ul className="space-y-4">
                {secondaryResearchPoints.map((point, i) => (
                  <li key={i} className="flex gap-4 text-gray-600 leading-relaxed text-xs group-hover:translate-x-1 transition-transform">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-200 shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Conversations */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover-lift group">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Community conversations — key quotes</h4>
              <ul className="space-y-6">
                {communityQuotes.map((quote, i) => (
                  <li key={i} className="text-gray-600 leading-relaxed text-sm border-l-2 border-gray-50 pl-6 group-hover:border-gray-200 transition-colors">
                    <span className="italic">"{quote.text}"</span>
                    <span className="block mt-2 text-[10px] uppercase tracking-wider font-bold text-gray-400">— {quote.source}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 px-4">Key insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyInsights.map((insight, i) => (
              <div key={i} className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover-lift ${i === 0 ? 'md:col-span-2' : ''}`}>
                <p className="font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-[10px] text-gray-400">{i + 1}</span>
                  {insight.title.split('. ')[1]}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{insight.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemDiscovery;
