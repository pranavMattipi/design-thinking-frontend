import React from 'react';

const ideationData = [
  {
    hmw: 'HMW: Career attractiveness for young weavers',
    contributors: [
      {
        name: 'Shaon Ryan Ranjit',
        ideas: [
          'Provide paid training with stipends so learners earn while they learn',
          'Run campaigns promoting weaving as a respected heritage career',
          'Build modern, well-lit, and comfortable weaving workspaces',
        ],
      },
      {
        name: 'K. Sai Harshith',
        ideas: [
          'Give young weavers awards, recognition, and skill certificates',
          'Offer entrepreneurship support so weavers can launch their own brand',
          'Create clear career growth paths: trainer, designer, master weaver',
        ],
      },
    ],
  },
  {
    hmw: 'HMW: Income and financial stability',
    contributors: [
      {
        name: 'Param Ankam',
        ideas: [
          'Build direct-to-customer selling platforms to cut out middlemen',
          'Start cooperatives where profits are shared fairly among weavers',
          'Introduce a fixed monthly salary plus incentive model for steady income',
        ],
      },
      {
        name: 'Anirudh Jampana',
        ideas: [
          'Push for government-backed minimum wage policies for weavers',
          'Open up export opportunities for premium sarees in international markets',
          'Provide easy access to low-interest loans for loom upgrades',
        ],
      },
    ],
  },
  {
    hmw: 'HMW: Protecting from imitation',
    contributors: [
      {
        name: 'Param Ankam',
        ideas: [
          'Add QR-based authenticity verification tags to every genuine saree',
          'Promote and legally enforce GI tagging for protected weaving regions',
          'Educate customers on how to tell handloom apart from powerloom sarees',
        ],
      },
      {
        name: 'Anirudh Jampana',
        ideas: [
          'Use blockchain-based tracking for premium saree collections',
          'Create a "Certified Handloom" branding and labelling system',
          'Penalise retailers caught selling fake sarees under the handloom name',
        ],
      },
    ],
  },
  {
    hmw: 'HMW: Storytelling and emotional connection',
    contributors: [
      {
        name: 'Shaon Ryan Ranjit',
        ideas: [
          'Attach weaver story cards with every saree sold',
          'Use QR codes linking to videos of the actual weaving process',
          'Create mini-documentaries about weaver families and their craft',
        ],
      },
      {
        name: 'K. Sai Harshith',
        ideas: [
          'Allow customers to customise sarees with personal design choices',
          'Offer live "meet the weaver" video interactions for buyers',
          'Promote "buy one, support a family" campaigns to build emotional connection',
        ],
      },
    ],
  },
  {
    hmw: 'HMW: Connect weavers directly with customers',
    contributors: [
      {
        name: 'Pranav Mattipi',
        ideas: [
          'Build an e-commerce platform owned and managed by weaver communities',
          'Use QR codes on sarees that link directly to weaver profiles',
          'Organise direct sales fairs in cities and malls',
        ],
      },
      {
        name: 'Sreekar Vajja',
        ideas: [
          'Use WhatsApp Business catalogs managed by cooperatives',
          'Host live video shopping sessions with weavers selling in real time',
          'Partner with ethical fashion stores for direct supply contracts',
        ],
      },
    ],
  },
  {
    hmw: 'HMW: Safer working conditions',
    contributors: [
      {
        name: 'K. Sai Harshith',
        ideas: [
          'Introduce ergonomic loom setups and seating for all weavers',
          'Provide protective gear for thread handling tasks',
          'Ensure proper lighting in workspaces to reduce eye strain',
        ],
      },
      {
        name: 'Shaon Ryan Ranjit',
        ideas: [
          'Encourage scheduled breaks and regular health checkups',
          'Provide physiotherapy support in weaving communities',
          'Use improved tools for warping and thread tension control',
        ],
      },
    ],
  },
  {
    hmw: 'HMW: Government and private sector involvement',
    contributors: [
      {
        name: 'Pranav Mattipi',
        ideas: [
          'Establish CSR funding programmes for loom upgrades and weaver training',
          'Push for government-sponsored exhibitions and trade fairs',
          'Provide low-interest loans and procurement subsidies for weavers',
        ],
      },
      {
        name: 'Sreekar Vajja',
        ideas: [
          'Start public-private partnerships for global marketing of pattu sarees',
          'Provide free insurance and pension schemes through government schemes',
          'Create artisan welfare programmes covering education and housing needs',
        ],
      },
    ],
  },
];

const contributorColors = {
  'Shaon Ryan Ranjit':  'bg-teal-100 text-teal-800',
  'K. Sai Harshith':   'bg-purple-100 text-purple-800',
  'Param Ankam':        'bg-pink-100 text-pink-800',
  'Anirudh Jampana':   'bg-blue-100 text-blue-800',
  'Sreekar Vajja':      'bg-green-100 text-green-800',
  'Pranav Mattipi':     'bg-amber-100 text-amber-800',
};

const Ideation = () => {
  return (
    <section id="ideation" className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900">Ideation</h2>

        {/* Intro */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
          <p className="text-gray-600 leading-relaxed">
            We used an adapted 6-3-5 brainwriting method — 6 team members, 3 ideas per round, multiple
            rounds — followed by a silent dot-voting and scoring phase. Below are the
            contributor-attributed ideas per HMW area.
          </p>
        </div>

        {/* HMW Sections */}
        {ideationData.map((section) => (
          <div key={section.hmw}>
            <h3 className="text-base font-bold text-gray-900 mb-3">{section.hmw}</h3>
            <div className="space-y-3">
              {section.contributors.map((contributor) => (
                <div
                  key={contributor.name}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm"
                >
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${contributorColors[contributor.name] || 'bg-gray-100 text-gray-700'}`}>
                    {contributor.name}
                  </span>
                  <ul className="space-y-2">
                    {contributor.ideas.map((idea, i) => (
                      <li key={i} className="flex gap-3 text-gray-600 leading-relaxed text-sm">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                        <span>{idea}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

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

export default Ideation;
