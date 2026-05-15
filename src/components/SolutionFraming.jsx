import React from 'react';

const finalists = [
  {
    badge: 'Finalist 1',
    chosen: false,
    title: 'Weaver direct marketplace with QR-linked profiles',
    scores: { f: 5, d: 5, v: 5, total: 15 },
    description: "A cooperative-owned e-commerce platform where each listing is a weaver's personal storefront. Every saree's QR tag links to the weaver's name, village, and bio.",
    whyF: "WhatsApp and Instagram infrastructure already exists. Low development cost using existing tools.",
    whyD: "Solves both sides: weavers earn more and buyers get a verified, personal purchase experience.",
    whyV: "Cooperative ownership means self-sustainability. Scales with every weaver who joins.",
    remarks: [
      "Requires digital literacy training",
      "QR profile infrastructure shared with Finalist 2",
      "Trust is the hardest thing to build",
    ],
  },
  {
    badge: 'Finalist 2',
    chosen: false,
    title: 'QR authenticity tags + Certified Handloom label',
    scores: { f: 5, d: 5, v: 5, total: 15 },
    description: 'A scannable tag that instantly verifies: handloom or powerloom? Links to a verification page showing the weaver\'s name and GI status.',
    whyF: "Extremely low cost (₹0.50 per saree). No new device needed by the buyer.",
    whyD: "Closes the biggest barrier: the authenticity gap. Trust made visible.",
    whyV: "Once the verification database is live, it runs itself.",
    remarks: [
      "Needs a central certifying authority",
      "Works best as part of an ecosystem",
      "Consumer awareness campaigns required",
    ],
  },
  {
    badge: '★ Chosen for prototype',
    chosen: true,
    title: 'Weaver story cards + QR video links with every saree',
    scores: { f: 5, d: 5, v: 5, total: 15 },
    description: "A printed card with the weaver's name, village, and personal quote. QR code links to a 60-second video of the actual weaving process.",
    whyF: "No app needed. Story cards can be printed for ₹3–₹5 each. Deployable within a week.",
    whyD: "Directly tests the core hypothesis: does emotional connection increase willingness to pay a premium?",
    whyV: "Lowest-cost starting point for a larger ecosystem.",
    remarks: [
      "Lowest implementation barrier",
      "Proven to increase perceived value",
      "Needs fresh content support to scale",
    ],
  },
];

const SolutionFraming = () => {
  return (
    <section id="solution-framing" className="bg-gray-50/50 py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Solution Framing</h2>
          <p className="text-gray-500 leading-relaxed text-lg">
            Narrowing down our research into actionable, high-impact design solutions.
          </p>
        </div>

        {/* Finalist Cards */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 px-4">Our finalist solutions</h3>
          <div className="space-y-6">
            {finalists.map((f) => (
              <div
                key={f.badge}
                className={`bg-white rounded-3xl p-10 border shadow-sm transition-all duration-300 hover-lift ${
                  f.chosen ? 'border-amber-200 ring-4 ring-amber-50 shadow-amber-900/5' : 'border-gray-100'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    f.chosen ? 'bg-amber-100 text-amber-700' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {f.badge}
                  </span>
                  <div className="flex gap-2">
                    <span className="bg-gray-50 text-gray-500 text-[10px] px-3 py-1 rounded-full font-bold">TOTAL: {f.scores.total}/15</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-gray-900 leading-tight">{f.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">{f.description}</p>
                    <div className="space-y-4 pt-4">
                      {[['Feasibility', f.whyF], ['Desirability', f.whyD], ['Viability', f.whyV]].map(([label, text]) => (
                        <div key={label} className="border-l-2 border-gray-50 pl-4">
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                          <p className="text-gray-500 text-xs leading-relaxed">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50/50 rounded-2xl p-8 space-y-6">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Critical Remarks</p>
                    <ul className="space-y-4">
                      {f.remarks.map((r, i) => (
                        <li key={i} className="flex gap-4 text-gray-500 text-xs leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-200 mt-1 shrink-0"></span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prototype Plan */}
        <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm hover-lift text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Prototype roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { phase: 'Phase 1', label: 'Create', desc: 'Identify weavers and film 60s videos.' },
              { phase: 'Phase 2', label: 'Test', desc: 'Attach cards and observe behavior.' },
              { phase: 'Phase 3', label: 'Iterate', desc: 'Interview buyers and weavers.' },
            ].map((p, i) => (
              <div key={p.phase} className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center mx-auto font-bold text-sm shadow-xl shadow-black/10">
                  {i + 1}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{p.phase}</p>
                  <p className="font-bold text-gray-900 text-lg">{p.label}</p>
                  <p className="text-gray-500 text-xs mt-2">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionFraming;
