import React from 'react';

const finalists = [
  {
    badge: 'Finalist 1',
    chosen: false,
    title: 'Weaver direct marketplace with QR-linked profiles',
    scores: { f: 5, d: 5, v: 5, total: 15 },
    description: "A cooperative-owned e-commerce platform where each listing is a weaver's personal storefront. Every saree's QR tag links to the weaver's name, village, photos, and a short bio — enabling direct purchase. The cooperative handles logistics; the weaver controls pricing and inventory.",
    whyF: "WhatsApp and Instagram infrastructure already exists. No new technology needs to be built from scratch — the platform layer can sit on top of existing tools with relatively low development cost.",
    whyD: "Solves both sides simultaneously: weavers earn more (middlemen removed) and buyers get a verified, personal, direct purchase experience. It addresses the core need of both our primary and secondary personas.",
    whyV: "Cooperative ownership means the platform is self-sustaining — no NGO or grant dependency. Transaction fees fund operations. Scales with every weaver who joins.",
    remarks: [
      "Requires sustained digital literacy training for weavers — without ongoing support, rural adoption stalls after the initial push.",
      "The QR profile infrastructure is shared with Finalist 2 (authenticity tags), making both solutions cheaper to build together than separately.",
      'Trust is the hardest thing to build: buyers need transparent proof that "weaver-sold" means the weaver actually benefited — payout visibility is non-negotiable.',
    ],
  },
  {
    badge: 'Finalist 2',
    chosen: false,
    title: 'QR authenticity tags + Certified Handloom label',
    scores: { f: 5, d: 5, v: 5, total: 15 },
    description: 'A scannable tag on every genuine pattu saree that instantly verifies: handloom or powerloom? The tag links to a verification page showing the weaver\'s name, cooperative registration, GI status, and completion date. A physical "Certified Handloom" label accompanies it.',
    whyF: "QR codes cost ₹0.50–₹2 per saree. No new device or infrastructure needed by the buyer — just a smartphone camera. Extremely low barrier to implementation at the cooperative level.",
    whyD: "Closes the single biggest barrier to premium pricing: the authenticity gap. Swathi (our buyer persona) explicitly said she would pay more if she could trust the claim. This makes trust visible.",
    whyV: "Once the verification database is live, it runs itself. Each new cooperative that joins expands coverage. The system becomes more valuable the more weavers use it — a positive network effect.",
    remarks: [
      "Needs a central certifying authority and enforcement — without consequences for counterfeiting the tag, bad actors will copy it within months.",
      "Works best as part of an ecosystem: the tag becomes far more powerful when it links to a weaver profile (Finalist 1) and a story video (Finalist 3).",
      "Consumer awareness campaigns must accompany rollout — a tag no one knows to scan changes nothing on its own.",
    ],
  },
  {
    badge: '★ Chosen for prototype',
    chosen: true,
    title: 'Weaver story cards + QR video links with every saree',
    scores: { f: 5, d: 5, v: 5, total: 15 },
    description: "A printed card attached to every saree at point of sale. One side: weaver's name, village, years of experience, and a short personal quote. Other side: a QR code linking to a 60-second mobile video of the actual weaving process — shot by the weaver or a community volunteer.",
    whyF: "No app, no digital literacy needed from the weaver at prototype stage. Story cards can be printed for ₹3–₹5 each. Videos can be shot on any smartphone and hosted on YouTube for free. Deployable within a week.",
    whyD: "Directly tests the core hypothesis: does emotional connection to the maker increase purchase intent and willingness to pay a premium? If yes, it immediately benefits weaver income without any supply chain change. Both personas benefit: Raju gets visibility and dignity; Swathi gets the story she's been missing.",
    whyV: "Story cards can evolve naturally into QR weaver profiles (Finalist 1) and authenticity tags (Finalist 2) once the model is validated. This is the lowest-cost starting point for a much larger ecosystem — making it both immediately viable and strategically sound.",
    remarks: [
      "Lowest implementation barrier of the three — a paper prototype can be in a buyer's hands within days, with zero development cost, making it the ideal first step before investing in platforms.",
      "Emotional storytelling is proven to increase perceived value and willingness to pay premium prices — if the hypothesis holds, this solution improves weaver income without requiring policy change or infrastructure.",
      "Risk of becoming a one-time novelty: the video library must be kept fresh and weavers need ongoing content support — a real operational cost that must be planned for before scaling.",
    ],
  },
];

const whyReasons = [
  { num: '1', bold: 'Fastest to test.', text: 'Printed card + YouTube Short QR = prototypable in 3 days, no development cost, no technical dependencies.' },
  { num: '2', bold: 'Tests the critical assumption first.', text: "Before building a marketplace or certification system, we need to know: does knowing the weaver's story actually change buyer behaviour? The story card answers that question with minimal investment." },
  { num: '3', bold: 'Scales naturally into the full ecosystem.', text: 'Story cards → QR weaver profiles (Finalist 1) → authenticity certification (Finalist 2). This is the logical foundation, not a standalone solution.' },
  { num: '4', bold: 'Immediate human benefit.', text: 'Even at prototype scale, 10 weavers get a face, a name, and a story attached to their work — creating dignity and visibility regardless of outcome metrics.' },
];

const prototypePlan = [
  {
    phase: 'Phase 1 — Create (Week 1)',
    text: 'Identify 10 weavers in one village. Film 60-second weaving videos on mobile. Design and print story cards. Upload videos to YouTube (unlisted) and generate QR codes. Attach cards to 10 sarees.',
  },
  {
    phase: 'Phase 2 — Test (Week 2–3)',
    text: 'Attach cards to sarees sold at a local exhibition, city market stall, or via an existing retail partner. Observe: do customers scan? Do they share the video? Does price resistance change? Do they ask for the weaver by name?',
  },
  {
    phase: 'Phase 3 — Interview and iterate (Week 4)',
    text: 'Interview 10 buyers: what did the card make you feel? Would you pay more? Would you buy from the same weaver again? Interview 5 weavers: how did it feel to have your story shared? What would you change?',
  },
];

const SolutionFraming = () => {
  return (
    <section id="solution-framing" className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900">Solution Framing</h2>

        {/* Our three finalist solutions */}
        <h3 className="text-lg font-bold text-gray-900">Our three finalist solutions</h3>

        {/* Finalist Cards */}
        {finalists.map((f) => (
          <div
            key={f.badge}
            className={`bg-white rounded-2xl p-8 border shadow-sm space-y-5 ${f.chosen ? 'border-amber-300 ring-1 ring-amber-200' : 'border-gray-100'}`}
          >
            {/* Badge */}
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${f.chosen ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-700'}`}>
              {f.badge}
            </span>

            {/* Title & Scores */}
            <div>
              <p className="font-bold text-gray-900 text-base mb-2">{f.title}</p>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-lg font-medium">F: {f.scores.f}/5</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-lg font-medium">D: {f.scores.d}/5</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-lg font-medium">V: {f.scores.v}/5</span>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-bold">Total: {f.scores.total} / 15</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm">{f.description}</p>

            {/* Why scores */}
            {[['Why F = 5', f.whyF], ['Why D = 5', f.whyD], ['Why V = 5', f.whyV]].map(([label, text]) => (
              <div key={label}>
                <p className="font-semibold text-gray-800 text-sm mb-1">{label}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
              </div>
            ))}

            {/* Critical Remarks */}
            <div>
              <p className="font-semibold text-gray-800 text-sm mb-2">Three critical remarks</p>
              <ul className="space-y-2">
                {f.remarks.map((r, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Why we chose story card */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Why we chose the story card for prototyping</h3>
          <ol className="space-y-3">
            {whyReasons.map((r) => (
              <li key={r.num} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-gray-900 text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{r.num}</span>
                <span><span className="font-semibold text-gray-900">{r.bold}</span> {r.text}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Prototype Plan */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5">
          <h3 className="text-lg font-bold text-gray-900">Prototype plan</h3>
          {prototypePlan.map((phase) => (
            <div key={phase.phase}>
              <p className="font-semibold text-gray-900 text-sm mb-1">{phase.phase}</p>
              <p className="text-gray-600 leading-relaxed text-sm">{phase.text}</p>
            </div>
          ))}
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

export default SolutionFraming;
