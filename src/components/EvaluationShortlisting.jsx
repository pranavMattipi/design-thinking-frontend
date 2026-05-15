import React from 'react';

const allIdeas = [
  { id: 1,  idea: 'Weaver-to-customer direct platform with QR-linked weaver profiles', f: 5, d: 5, v: 5, total: 15, top10: true },
  { id: 2,  idea: "QR authenticity tags + 'Certified Handloom' labelling system",      f: 5, d: 5, v: 5, total: 15, top10: true },
  { id: 3,  idea: 'Weaver story cards + QR video links with every saree sold',         f: 5, d: 5, v: 5, total: 15, top10: true },
  { id: 4,  idea: 'Instagram reels showcasing the full weaving journey',               f: 5, d: 5, v: 4, total: 14, top10: true },
  { id: 5,  idea: 'Live video shopping sessions with weavers in real time',            f: 5, d: 4, v: 5, total: 14, top10: true },
  { id: 6,  idea: 'Region-specific logos and branding per weaving cluster',            f: 4, d: 5, v: 5, total: 14, top10: true },
  { id: 7,  idea: 'Build direct-to-customer selling platform (cut middlemen)',         f: 4, d: 5, v: 4, total: 13, top10: true },
  { id: 8,  idea: 'Ergonomic loom setups + weaver health support programmes',         f: 5, d: 5, v: 3, total: 13, top10: true },
  { id: 9,  idea: 'Community-owned cooperative brands and profit-sharing',             f: 4, d: 5, v: 4, total: 13, top10: true },
  { id: 10, idea: 'Short-term certified weaving courses with credentials',             f: 4, d: 5, v: 4, total: 13, top10: true },
  { id: 11, idea: 'Weaving village tourism with live demos and paid workshops',        f: 4, d: 4, v: 5, total: 13, top10: false },
  { id: 12, idea: 'Partner with fashion designers for modern silk garments',           f: 4, d: 4, v: 4, total: 12, top10: false },
  { id: 13, idea: 'Fixed monthly salary + incentive model for weavers',               f: 4, d: 5, v: 3, total: 12, top10: false },
  { id: 14, idea: 'Lightweight silk-blend sarees at lower price points',              f: 4, d: 4, v: 4, total: 12, top10: false },
  { id: 15, idea: 'Digital design planning before weaving begins',                    f: 4, d: 4, v: 4, total: 12, top10: false },
  { id: 16, idea: 'CSR funding programmes for loom upgrades and training',            f: 3, d: 4, v: 5, total: 12, top10: false },
  { id: 17, idea: 'Semi-automatic looms for faster production',                       f: 4, d: 4, v: 4, total: 12, top10: false },
  { id: 18, idea: 'Government-backed minimum wage for weavers',                       f: 3, d: 5, v: 4, total: 12, top10: false },
  { id: 19, idea: 'Introduce weaving as vocational subject in schools',               f: 3, d: 5, v: 4, total: 12, top10: false },
  { id: 20, idea: 'Heritage weaving schools for younger generation',                  f: 3, d: 5, v: 4, total: 12, top10: false },
  { id: 21, idea: 'WhatsApp Business catalogs managed by cooperatives',               f: 5, d: 3, v: 3, total: 11, top10: false },
  { id: 22, idea: 'Bulk purchasing through cooperatives for raw materials',           f: 4, d: 4, v: 3, total: 11, top10: false },
  { id: 23, idea: 'Documentary videos spotlighting regional artisans',                f: 4, d: 4, v: 3, total: 11, top10: false },
  { id: 24, idea: 'Apprenticeship programmes with paid training',                     f: 3, d: 5, v: 3, total: 11, top10: false },
  { id: 25, idea: 'Blockchain-based tracking for premium sarees',                     f: 2, d: 4, v: 5, total: 11, top10: false },
];

const totalBadge = (total) => {
  if (total >= 13) return 'bg-green-50 text-green-700 border-green-100 font-bold';
  if (total === 12) return 'bg-amber-50 text-amber-700 border-amber-100 font-bold';
  return 'bg-orange-50 text-orange-700 border-orange-100 font-bold';
};

const EvaluationShortlisting = () => {
  return (
    <section id="evaluation-shortlisting" className="bg-gray-50/50 py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Evaluation & Shortlisting</h2>
          <p className="text-gray-500 leading-relaxed text-lg">
            We evaluated 25+ ideas against three core criteria to identify the most impactful solutions for weavers.
          </p>
        </div>

        {/* Criteria Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { letter: 'F', label: 'Feasibility', desc: 'Can it realistically be implemented given resources?' },
            { letter: 'D', label: 'Desirability', desc: 'Does it address real needs of weavers and customers?' },
            { letter: 'V', label: 'Viability', desc: 'Is it sustainable and scalable long-term?' },
          ].map((c) => (
            <div key={c.letter} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center hover-lift group">
              <p className="text-4xl font-bold text-gray-900 mb-2 transition-transform duration-300 group-hover:scale-110">{c.letter}</p>
              <p className="text-sm font-bold text-gray-700 uppercase tracking-widest mb-4">{c.label}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Scoring Table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover-lift">
          <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-gray-900">Scoring Table — Top Shortlisted Ideas</h3>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Score ≥ 13 required</span>
          </div>
          
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Header */}
              <div className="grid grid-cols-[3rem_1fr_3rem_3rem_3rem_5rem] gap-4 px-8 py-4 bg-gray-50/50 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>#</span>
                <span>Idea</span>
                <span className="text-center">F</span>
                <span className="text-center">D</span>
                <span className="text-center">V</span>
                <span className="text-center">Total</span>
              </div>
              {/* Rows */}
              {allIdeas.map((row) => (
                <div
                  key={row.id}
                  className="grid grid-cols-[3rem_1fr_3rem_3rem_3rem_5rem] gap-4 px-8 py-5 border-b border-gray-50 items-center text-sm transition-colors duration-200 hover:bg-gray-50/80 group"
                >
                  <span className="text-gray-400 font-mono text-xs">{row.id.toString().padStart(2, '0')}</span>
                  <span className="text-gray-900 font-medium leading-snug">
                    {row.idea}
                    {row.top10 && (
                      <span className="ml-3 inline-block px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[9px] font-bold uppercase tracking-wider align-middle border border-blue-100">Shortlisted</span>
                    )}
                  </span>
                  <span className="text-center text-gray-500 font-medium">{row.f}</span>
                  <span className="text-center text-gray-500 font-medium">{row.d}</span>
                  <span className="text-center text-gray-500 font-medium">{row.v}</span>
                  <span className="flex justify-center">
                    <span className={`px-3 py-1 rounded-full text-[10px] border ${totalBadge(row.total)}`}>
                      {row.total}/15
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover-lift">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Conclusion</h3>
          <p className="text-gray-600 leading-relaxed text-lg text-center max-w-2xl mx-auto">
            Our top three ideas all scored a perfect 15/15. Making the weaver visible through story, verification,
            and direct connection is the highest-leverage design move available.
          </p>
        </div>

      </div>
    </section>
  );
};

export default EvaluationShortlisting;
