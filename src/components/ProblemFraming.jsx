import React from 'react';

const hmwQuestions = [
  'HMW make traditional pattu saree weaving more attractive to young weavers as a career?',
  'HMW increase the income and financial stability of pattu saree weavers?',
  'HMW reduce the time required to produce a pattu saree without losing authenticity?',
  'HMW preserve traditional weaving techniques while allowing modern innovation?',
  'HMW create more awareness about the cultural value of pattu sarees among younger customers?',
  'HMW connect weavers directly with customers to reduce middlemen exploitation?',
  'HMW make pattu sarees more affordable for wider audiences while maintaining quality?',
  'HMW ensure fair wages and better working conditions for traditional weavers?',
  'HMW encourage fashion designers to use pattu saree fabrics in modern clothing styles?',
  'HMW help traditional weavers adopt digital platforms for selling and marketing?',
  'HMW improve access to raw materials like silk and zari at reasonable costs?',
  'HMW make weaving communities more sustainable and economically independent?',
  'HMW increase demand for authentic handwoven pattu sarees in global markets?',
  'HMW protect pattu sarees from imitation and machine-made duplicates?',
  'HMW improve training programmes so more people can learn traditional weaving skills?',
  'HMW make the weaving process safer and less physically exhausting for weavers?',
  'HMW build stronger branding for specific weaving regions like Kanchipuram or Dharmavaram?',
];

const ProblemFraming = () => {
  return (
    <section id="problem-framing" className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900">Problem Framing</h2>

        {/* Point of View Statement */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Point of view statement</h3>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              Raju, a master pattu saree weaver with 30+ years of experience, needs a way to connect his craft
              directly with the customers who value it — because the current system of middlemen makes him
              economically invisible, keeps his income far below the value he creates, and gives him no mechanism
              to prove the authenticity of his handloom work.
            </p>
          </div>
        </div>

        {/* HMW Questions */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            17 How Might We questions
          </h3>
          <div className="space-y-2">
            {hmwQuestions.map((q, i) => (
              <div
                key={i}
                className="bg-white border-l-4 border-gray-300 rounded-r-xl pl-4 pr-6 py-4 shadow-sm hover:border-gray-500 hover:shadow-md transition-all"
              >
                <p className="text-gray-700 leading-relaxed text-sm">{q}</p>
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

export default ProblemFraming;
