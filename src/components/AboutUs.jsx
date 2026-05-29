import React from 'react';

const teamMembers = [
  { initials: 'SR', name: 'Shaon Ryan Ranjit', role: 'Research & Ideation', color: 'bg-teal-50 text-teal-600 border-teal-100' },
  { initials: 'KS', name: 'K. Sai Harshith', role: 'User Research', color: 'bg-purple-50 text-purple-600 border-purple-100' },
  { initials: 'PA', name: 'Param Ankam', role: 'Ideation Lead', color: 'bg-pink-50 text-pink-600 border-pink-100' },
  { initials: 'AJ', name: 'Anirudh Jampana', role: 'Problem Framing', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { initials: 'RJ', name: 'Ruthvik Jasthi', role: 'Evaluation', color: 'bg-green-50 text-green-600 border-green-100' },
  { initials: 'PM', name: 'Pranav Mattipi', role: 'Solution Design', color: 'bg-amber-50 text-amber-600 border-amber-100' },
];

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Header & Description */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About us</h2>
          <p className="text-gray-500 leading-relaxed text-lg">
            Pixel Poultry is a six-member design team brought together to apply design thinking to a real-world social
            challenge. Our team combines perspectives from engineering, arts, and technology.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-center text-center hover-lift group"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-4 transition-transform duration-300 group-hover:scale-110 border ${member.color}`}>
                {member.initials}
              </div>
              <p className="font-bold text-gray-900 text-sm leading-snug">{member.name}</p>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mt-2">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Why Kanchi Sarees */}
        <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-10 hover-lift">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why kanchi sarees?</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Several of us grew up with kanchi sarees as the centrepiece of weddings and festivals. Yet we realised we knew
            almost nothing about the people who made them.
          </p>
          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-gray-500 leading-relaxed italic">
              "That gap between cultural reverence and economic reality became our starting point. We wanted to design not
              for the product but for the producer."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
