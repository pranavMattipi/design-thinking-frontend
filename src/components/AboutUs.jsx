import React from 'react';

const teamMembers = [
  { initials: 'SR', name: 'Shaon Ryan Ranjit', role: 'Research & Ideation', color: 'bg-teal-100 text-teal-700' },
  { initials: 'KS', name: 'K. Sai Harshith',   role: 'User Research',       color: 'bg-purple-100 text-purple-700' },
  { initials: 'PA', name: 'Param Ankam',        role: 'Ideation Lead',       color: 'bg-pink-100 text-pink-700' },
  { initials: 'AJ', name: 'Anirudh Jampana',    role: 'Problem Framing',     color: 'bg-blue-100 text-blue-700' },
  { initials: 'SV', name: 'Sreekar Vajja',      role: 'Evaluation',          color: 'bg-green-100 text-green-700' },
  { initials: 'PM', name: 'Pranav Mattipi',     role: 'Solution Design',     color: 'bg-amber-100 text-amber-700' },
];

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Header & Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About us</h2>
          <p className="text-gray-600 leading-relaxed">
            Pixel Poultry is a six-member design team brought together to apply design thinking to a real-world social
            challenge. Our team combines perspectives from engineering, arts, and technology, united by curiosity and a
            shared concern for craft communities.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mb-3 ${member.color}`}>
                {member.initials}
              </div>
              <p className="font-semibold text-gray-900 text-sm leading-snug">{member.name}</p>
              <p className="text-gray-500 text-xs mt-1">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Why Pattu Sarees */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Why pattu sarees?</h3>
          <p className="text-gray-600 leading-relaxed">
            Several of us grew up with pattu sarees as the centrepiece of weddings and festivals. Yet we realised we knew
            almost nothing about the people who made them — who they are, what they earn, or what challenges they face.
            That gap between cultural reverence and economic reality became our starting point. We wanted to design not
            for the product but for the producer.
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

export default AboutUs;
