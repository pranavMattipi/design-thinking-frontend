import React from 'react';

const UserUnderstanding = () => {
  return (
    <section id="user-understanding" className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">User Understanding</h2>
          <p className="text-gray-500 leading-relaxed text-lg">
            Bridging the gap between the producer and the consumer through deep empathy and persona mapping.
          </p>
        </div>

        {/* Primary Persona */}
        <div className="bg-gray-50/50 rounded-3xl p-10 border border-gray-100 shadow-sm space-y-10 hover-lift group">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-2xl shrink-0 border border-teal-100 transition-transform duration-300 group-hover:scale-110">
              RV
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Raju Venkateswara</h3>
              <p className="text-gray-400 font-medium text-sm mt-1 uppercase tracking-widest">The Traditional Weaver · 48y · Andhra Pradesh</p>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed text-lg">
              Raju has been weaving pattu sarees since age 16. He produces 2–3 sarees per month, each taking 10–15 days. He sells through agents who pay barely a fraction of the retail price.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6 border-t border-gray-100">
            <div>
              <p className="font-bold text-gray-900 mb-4 uppercase tracking-widest text-[10px]">Goals</p>
              <ul className="space-y-3">
                {[
                  'Earn a stable, dignified income',
                  'See his craft recognised beyond his village',
                  'Make weaving attractive for the next generation',
                ].map((g, i) => (
                  <li key={i} className="flex gap-4 text-gray-500 text-sm leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-gray-300 shrink-0"></span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-4 uppercase tracking-widest text-[10px]">Pain points</p>
              <ul className="space-y-3">
                {[
                  'No direct contact with customers',
                  'Cannot prove authenticity of handloom',
                  'Rising material costs and health strain',
                ].map((p, i) => (
                  <li key={i} className="flex gap-4 text-gray-500 text-sm leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-gray-300 shrink-0"></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">What he says</p>
            <p className="text-gray-600 italic text-xl font-medium leading-relaxed">
              "I make the saree. Someone else sells it. Someone else profits. I don't even know who wears it."
            </p>
          </div>
        </div>

        {/* Empathy Map */}
        <div className="space-y-10">
          <h3 className="text-2xl font-bold text-gray-900 px-4">Empathy map — Raju</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Says', text: '"The agent sets the price. I have no say."' },
              { label: 'Thinks', text: 'Wonders if the craft will survive after him' },
              { label: 'Does', text: 'Weaves 8–10 hours a day in poor lighting' },
              { label: 'Feels', text: 'Proud of his skill but economically invisible' },
            ].map((quad) => (
              <div key={quad.label} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover-lift group">
                <p className="font-bold text-gray-400 uppercase tracking-widest text-[10px] mb-4 group-hover:text-gray-900 transition-colors">{quad.label}</p>
                <p className="text-gray-600 font-medium text-lg leading-relaxed">{quad.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default UserUnderstanding;
