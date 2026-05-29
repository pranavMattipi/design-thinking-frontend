import React from 'react';

const hmwQuestions = [
  'HMW make traditional kanchi saree weaving more attractive to young weavers?',
  'HMW increase the income and financial stability of kanchi saree weavers?',
  'HMW preserve traditional techniques while allowing modern innovation?',
  'HMW connect weavers directly with customers to reduce exploitation?',
  'HMW help traditional weavers adopt digital platforms for marketing?',
  'HMW protect kanchi sarees from imitation and machine-made duplicates?',
];

const ProblemFraming = () => {
  return (
    <section id="problem-framing" className="bg-gray-50/50 py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Problem Framing</h2>
          <p className="text-gray-500 leading-relaxed text-lg">
            Defining the core challenge and identifying the leverage points for intervention.
          </p>
        </div>

        {/* Point of View Statement */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 px-4">Point of view statement</h3>
          <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover-lift">
            <p className="text-gray-700 text-xl font-medium leading-relaxed italic">
              "Raju, a master kanchi saree weaver, needs a way to connect his craft directly with the customers who value it — because the current system makes him economically invisible."
            </p>
          </div>
        </div>

        {/* HMW Questions */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 px-4">
            How Might We questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hmwQuestions.map((q, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl px-8 py-6 border border-gray-100 shadow-sm hover-lift group"
              >
                <div className="flex gap-4 items-center">
                  <span className="text-[10px] font-bold text-gray-300 group-hover:text-gray-900 transition-colors uppercase tracking-widest">HMW {i + 1}</span>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">{q}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemFraming;
