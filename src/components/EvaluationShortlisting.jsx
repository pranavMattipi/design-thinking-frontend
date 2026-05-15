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

const totalBadge = (total, top10) => {
  if (total === 15) return 'bg-green-100 text-green-700 font-bold';
  if (total === 14) return 'bg-green-100 text-green-700 font-bold';
  if (total === 13) return 'bg-green-100 text-green-700 font-bold';
  if (total === 12) return 'bg-amber-100 text-amber-700 font-bold';
  return 'bg-orange-100 text-orange-700 font-bold';
};

const EvaluationShortlisting = () => {
  return (
    <section id="evaluation-shortlisting" className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900">Evaluation &amp; Shortlisting</h2>

        {/* Criteria Cards */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Evaluation criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { letter: 'F', label: 'Feasibility', desc: 'Can it realistically be implemented given resources, tech, and logistics?' },
              { letter: 'D', label: 'Desirability', desc: 'Does it address real needs of weavers and customers?' },
              { letter: 'V', label: 'Viability', desc: 'Is it sustainable and scalable long-term?' },
            ].map((c) => (
              <div key={c.letter} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <p className="text-3xl font-bold text-gray-900 mb-1">{c.letter}</p>
                <p className="text-sm font-semibold text-gray-700 mb-2">{c.label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            Each criterion scored 1–5. Maximum total: 15. Ideas scoring 13 or above were shortlisted. All ideas
            were scored by the full team and discussed before finalising ratings.
          </p>
        </div>

        {/* Scoring Table */}
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-4">Full scoring table — all ideas rated</h3>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[2rem_1fr_2rem_2rem_2rem_3.5rem] gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500">
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
                className={`grid grid-cols-[2rem_1fr_2rem_2rem_2rem_3.5rem] gap-2 px-4 py-3 border-b border-gray-50 items-center text-sm ${row.top10 ? 'bg-white' : 'bg-white'}`}
              >
                <span className="text-gray-400 text-xs">{row.id}</span>
                <span className="text-gray-800 leading-snug text-xs">
                  {row.idea}
                  {row.top10 && (
                    <span className="ml-1.5 inline-block px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px] font-semibold align-middle">Top 10</span>
                  )}
                </span>
                <span className="text-center text-gray-600 text-xs">{row.f}</span>
                <span className="text-center text-gray-600 text-xs">{row.d}</span>
                <span className="text-center text-gray-600 text-xs">{row.v}</span>
                <span className="flex justify-center">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${totalBadge(row.total, row.top10)}`}>
                    {row.total}/15
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Conclusion</h3>
          <p className="text-gray-600 leading-relaxed">
            Our top three ideas all scored a perfect 15/15 and cluster around a single core insight: the weaver
            is invisible to the customer, and making that invisibility disappear — through story, verification,
            and direct connection — is the highest-leverage design move available. Ideas scoring below 13 were
            excluded for either low feasibility (e.g. blockchain at village scale) or insufficient desirability
            (e.g. solutions that help weavers but give customers no reason to engage differently).
          </p>
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

export default EvaluationShortlisting;
