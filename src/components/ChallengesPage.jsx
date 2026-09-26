import React from 'react';
import Navbar from './Navbar';

export default function ChallengesPage({ onSelectChallenge, onBackToHome, onNavigate }) {
  const challengesList = [
    {
      id: 1,
      category: "URBAN INFRASTRUCTURE",
      title: "AI-Powered Stormwater Drainage Clog Early-Detection System",
      dept: "Municipal Corporation of Gurugram",
      grant: "₹45,00,000",
      closing: "Closing in 4d 18h",
      statusColor: "text-[#157F4B]"
    },
    {
      id: 2,
      category: "SMART MOBILITY",
      title: "Autonomous Adaptive Traffic Signal Control System",
      dept: "Bengaluru Smart City Ltd",
      grant: "₹60,00,000",
      closing: "Closing in 12d 04h",
      statusColor: "text-[#157F4B]"
    },
    {
      id: 3,
      category: "AGRICULTURE TECH",
      title: "IoT-Based Soil Moisture and Micro-Irrigation Automated Valve",
      dept: "Ministry of Agriculture & Farmers Welfare",
      grant: "₹35,00,000",
      closing: "Closing in 8d 12h",
      statusColor: "text-[#157F4B]"
    },
    {
      id: 4,
      category: "PUBLIC HEALTH",
      title: "Low-Cost Teleconsultation Kiosks for Aspirational Districts",
      dept: "Haryana Health Department",
      grant: "₹50,00,000",
      closing: "Closing in 15d 02h",
      statusColor: "text-[#157F4B]"
    },
    {
      id: 5,
      category: "CLEAN ENERGY",
      title: "AI-Optimized Solar Panel Cleaning Autonomous Drones",
      dept: "Ministry of New and Renewable Energy",
      grant: "₹75,00,000",
      closing: "Closing in 6d 20h",
      statusColor: "text-[#157F4B]"
    },
    {
      id: 6,
      category: "GOVTECH SECURITY",
      title: "Blockchain-Based Land Registry &amp; Document Verification System",
      dept: "Department of Land Resources",
      grant: "₹90,00,000",
      closing: "Closing in 20d 10h",
      statusColor: "text-[#157F4B]"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8f9fb] flex flex-col m-0 p-0 overflow-x-hidden">
      <Navbar onNavigate={onNavigate || onBackToHome} />

      <div className="flex-1 p-6 md:p-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#c4c6cf]">
          <div>
            <h1 className="text-2xl font-bold text-[#000f27]">Active Open Challenges</h1>
            <p className="text-xs text-[#44474e] mt-1">Explore verified government problem statements and submit your startup proposals.</p>
          </div>
          <span className="bg-[#0b2447] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-2xs">
            {challengesList.length} Active Challenges
          </span>
        </div>

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challengesList.map((challenge) => (
            <div key={challenge.id} className="bg-white border border-[#c4c6cf] rounded-xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="bg-[#d7e3ff] text-[#000f27] text-[10px] font-bold px-2.5 py-1 rounded uppercase">
                  {challenge.category}
                </span>
                <h2 className="text-base font-bold text-[#000f27] mt-3 leading-snug">
                  {challenge.title}
                </h2>
                <p className="text-xs text-[#44474e] mt-2 leading-relaxed">
                  {challenge.dept} • Grant: <strong>{challenge.grant}</strong>
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-[#c4c6cf] flex items-center justify-between">
                <span className={`text-[11px] font-semibold ${challenge.statusColor}`}>{challenge.closing}</span>
                <button
                  type="button"
                  onClick={onSelectChallenge}
                  className="px-4 py-2 bg-[#0b2447] text-white text-xs font-bold rounded-lg hover:bg-[#00172e] transition-colors cursor-pointer"
                >
                  Apply Proposal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}