import React from 'react';

const secondaryResearchPoints = [
  'India has approximately 35 lakh handloom weavers, of whom a significant portion work with silk. Average daily income for a handloom weaver ranges between ₹200–₹350 — well below minimum wage in most states.',
  'Powerloom production has grown rapidly. In segments like Dharmavaram, machine-made sarees sold under the "silk" label undercut handloom prices by 40–60%, directly eroding the market for authentic products.',
  'GI (Geographical Indication) tags exist for weaves like Kanchipuram, Pochampally ikat, and Gadwal — but enforcement is minimal and consumer awareness is very low.',
  'The Ministry of Textiles\' Handloom Census shows the number of handloom workers has declined by nearly 18% over a decade due to falling earnings and the absence of a clear career pathway.',
  'Middlemen capture 40–60% of the final price, leaving weavers with a fraction of the value their craft generates.',
  'Online platforms exist but have low adoption among weavers due to digital literacy gaps and lack of trust infrastructure (no authenticity signals for buyers).',
];

const communityQuotes = [
  '"Buyers at markets have no way to know if a saree is handloom or machine-made. The seller just says it\'s handloom." — textile retailer',
  '"My cousin who is a weaver earns less than a construction worker. He wants his son to study engineering." — community contact',
  '"When I buy a pattu saree, I feel connected to something ancient. But I don\'t know the weaver\'s name, village, or story." — urban buyer',
  '"We have GI tags but nobody checks. Even government shops sell fake Kanchipuram." — design student',
];

const keyInsights = [
  {
    title: '1. The weaver is invisible to the customer',
    body: 'Despite high emotional attachment to pattu sarees, buyers have almost no information about or connection to the people who make them. This invisibility both enables exploitation and removes a powerful source of perceived value.',
  },
  {
    title: '2. Authenticity cannot be verified at point of sale',
    body: 'There is no reliable, accessible signal that distinguishes handloom from powerloom at the moment a customer is deciding to buy. GI tags exist on paper but are absent in practice at the retail level.',
  },
  {
    title: '3. Middlemen extract disproportionate value',
    body: 'The supply chain from weaver to customer typically passes through 3–5 intermediaries. Each adds margin while the weaver receives a fixed, often exploitative piece-rate that has not kept pace with material costs or inflation.',
  },
  {
    title: '4. Young people see no future in weaving without structural change',
    body: 'The decision to leave weaving is rational given current wages, working conditions, and social status. No amount of cultural appeals will retain the next generation without tangible economic improvement.',
  },
  {
    title: '5. The craft itself is not the problem — the market system is',
    body: 'Pattu sarees retain deep cultural prestige and customer willingness to pay premium prices — but that premium is not reaching the weavers. The design problem is systemic, not product-level.',
  },
];

const ProblemDiscovery = () => {
  return (
    <section id="problem-discovery" className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900">Problem Discovery &amp; Research</h2>

        {/* Problem Area & Motivation */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Problem area and motivation</h3>
          <p className="text-gray-600 leading-relaxed">
            Traditional pattu saree weaving in India — practised in regions like Kanchipuram (Tamil Nadu),
            Dharmavaram, Gadwal, and Pochampally (Andhra Pradesh &amp; Telangana) — is a craft of extraordinary
            skill and cultural significance. Yet the weavers who produce these textiles face a structural crisis
            that has deepened over decades. Their incomes have stagnated while the cost of raw materials has risen.
            Machine-made imitations undercut handloom prices in the market, and customers cannot reliably
            distinguish authentic from fake. Young people are leaving weaving villages for urban wage labour, and
            the pool of skilled weavers is shrinking with each generation.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We chose this problem because it sits at the intersection of economic injustice, cultural erosion, and
            design opportunity. The weavers are not lacking in skill — they are lacking in visibility, fair value,
            and systemic support.
          </p>
        </div>

        {/* Research Process */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Research process</h3>
          <div className="space-y-4">

            {/* Secondary Research */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">Secondary research — what the data shows</h4>
              <ul className="space-y-3">
                {secondaryResearchPoints.map((point, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-400 shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Conversations */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Community conversations</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                We spoke informally with people who have direct or indirect connections to weaving communities —
                family members, textile retailers, and design students who had visited weaving villages. Key themes
                that emerged:
              </p>
              <ul className="space-y-3">
                {communityQuotes.map((quote, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 leading-relaxed italic">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-400 shrink-0 not-italic"></span>
                    <span>{quote}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Key Insights */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Key insights from research</h3>
          <div className="space-y-4">
            {keyInsights.map((insight, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <p className="font-semibold text-gray-900 mb-2">{insight.title}</p>
                <p className="text-gray-600 leading-relaxed">{insight.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Down Arrow */}
        <div className="flex justify-center">
          <svg className="w-6 h-6 text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

      </div>
    </section>
  );
};

export default ProblemDiscovery;
