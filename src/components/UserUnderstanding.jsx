import React from 'react';

const UserUnderstanding = () => {
  return (
    <section id="user-understanding" className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900">User Understanding</h2>

        {/* Primary Persona */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-gray-900">Primary persona — the traditional weaver</h3>

          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg shrink-0">
              RV
            </div>
            <div>
              <p className="font-semibold text-gray-900">Raju Venkateswara</p>
              <p className="text-sm text-gray-500">48 years old · Master weaver · Dharmavaram, Andhra Pradesh</p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
            Raju has been weaving pattu sarees since age 16, learning from his father. He owns one pit loom and
            produces 2–3 sarees per month, each taking 10–15 days of full-time work. He sells through a local agent
            who visits monthly and pays ₹3,000–₹5,000 per saree — well below the retail price of ₹12,000–₹25,000.
            His monthly income averages ₹8,000–₹12,000, barely covering household expenses for his family of four.
            His 22-year-old son has moved to Bengaluru for IT work; Raju fears the craft will die with his generation.
          </p>

          {/* Goals */}
          <div>
            <p className="font-semibold text-gray-900 mb-2">Goals</p>
            <ul className="space-y-2">
              {[
                'Earn a stable, dignified income from weaving without depending on a single middleman',
                'See his craft valued and recognised beyond his village',
                'Find a way to make weaving attractive enough for younger family members to continue',
              ].map((g, i) => (
                <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pain Points */}
          <div>
            <p className="font-semibold text-gray-900 mb-2">Pain points</p>
            <ul className="space-y-2">
              {[
                "Has no direct contact with customers — doesn't know what buyers think of his work",
                'Cannot prove his sarees are authentic handloom; buyers trust the agent, not him',
                "Rising silk and zari costs eat into thin margins; agents don't adjust rates",
                'Works 10+ hours daily in poor lighting with no ergonomic support; back and eye strain are chronic',
                'No social security, health insurance, or pension — one illness can collapse the household',
              ].map((p, i) => (
                <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div className="border-l-4 border-gray-300 pl-4">
            <p className="font-semibold text-gray-700 text-sm mb-1">What he says</p>
            <p className="text-gray-600 italic leading-relaxed">
              "I make the saree. Someone else sells it. Someone else profits. I don't even know who wears it."
            </p>
          </div>
        </div>

        {/* Secondary Persona */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-gray-900">Secondary persona — the urban buyer</h3>

          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg shrink-0">
              SP
            </div>
            <div>
              <p className="font-semibold text-gray-900">Swathi Prasad</p>
              <p className="text-sm text-gray-500">34 years old · Software engineer · Hyderabad</p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
            Swathi grew up watching her mother and grandmother wear pattu sarees for festivals and weddings. She buys
            1–2 sarees a year, spending ₹10,000–₹30,000, and values both aesthetics and cultural heritage. She shops
            mostly at established saree stores or occasionally online. She cannot tell handloom from machine-made and
            has been deceived before. She would pay more for a guaranteed authentic saree if she could trust the claim.
            She follows some weaving-related Instagram accounts but has never interacted with a weaver directly.
          </p>

          {/* Goals */}
          <div>
            <p className="font-semibold text-gray-900 mb-2">Goals</p>
            <ul className="space-y-2">
              {[
                'Buy authentic, high-quality pattu sarees she can trust',
                'Feel connected to the cultural heritage and story behind what she wears',
                'Know her purchase supports the artisan community rather than intermediaries',
              ].map((g, i) => (
                <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pain Points */}
          <div>
            <p className="font-semibold text-gray-900 mb-2">Pain points</p>
            <ul className="space-y-2">
              {[
                'No reliable way to verify authenticity at point of purchase',
                'Sarees feel anonymous — no story, no face, no origin',
                'Uncertain whether paying premium prices actually benefits the weaver',
              ].map((p, i) => (
                <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div className="border-l-4 border-gray-300 pl-4">
            <p className="font-semibold text-gray-700 text-sm mb-1">What she says</p>
            <p className="text-gray-600 italic leading-relaxed">
              "I want to buy the real thing and support the people who made it. But I can't tell if what I'm buying
              is handloom or a machine copy. There's no way to know."
            </p>
          </div>
        </div>

        {/* Empathy Map */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Empathy mapping — Raju (primary user)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                label: 'Says',
                text: '"The agent sets the price. I have no say." · "My son doesn\'t want to weave." · "I don\'t know who buys my sarees."',
              },
              {
                label: 'Thinks',
                text: 'Wonders if the craft will survive · Feels pride in mastery but shame about income · Questions whether working harder changes anything',
              },
              {
                label: 'Does',
                text: 'Weaves 8–10 hours a day · Negotiates minimally with agents · Attends cooperative meetings occasionally · Looks for ways to cut material costs',
              },
              {
                label: 'Feels',
                text: 'Proud of craft skill · Frustrated by economic invisibility · Anxious about the future · Hopeful when he hears of weavers succeeding online',
              },
            ].map((quad) => (
              <div key={quad.label} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                <p className="font-semibold text-gray-900 mb-2">{quad.label}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{quad.text}</p>
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

export default UserUnderstanding;
