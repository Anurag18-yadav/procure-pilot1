import React from 'react';
import Navbar from './Navbar';

export default function LandingPage({ onNavigate, onLogin, onRegister, onExploreChallenges }) {
  return (
    <div className="w-full min-h-screen bg-[#f8f9fb] text-[#191c1e] font-sans flex flex-col m-0 p-0 overflow-x-hidden">
      
      {/* Unified Global Header */}
      <Navbar onNavigate={onNavigate} />

      {/* Main Hero Section */}
      <section className="w-full px-6 md:px-16 py-20 lg:py-28 text-center flex-1 flex flex-col justify-center items-center bg-[#f8f9fb]">
        
        {/* Badge Indicator */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFF8E1] text-[#B26A00] border border-[#FFE082] text-xs font-bold rounded-full uppercase tracking-wider mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#B26A00] animate-pulse"></span>
          Public Procurement Innovation Platform • GFR 2017 Compliant
        </span>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#000f27] max-w-5xl mx-auto leading-tight tracking-tight">
          Government challenges, solved by the right startups — not just the biggest ones.
        </h1>

        {/* Hero Subtitle */}
        <p className="text-[#44474e] mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          ProcurePilot connects verified Indian startups with real government problem statements through blind, expert-led evaluation, secure institutional escrow, and monitored pilots.
        </p>
        
        {/* CTA Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button 
            type="button"
            onClick={onExploreChallenges || (() => onNavigate && onNavigate('challenges'))}
            className="px-8 py-4 bg-[#0b2447] text-white font-bold text-sm rounded-lg hover:bg-[#000f27] transition-all active:scale-[0.98] shadow-sm flex items-center gap-2"
          >
            <span>Explore Challenges</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>

          <button 
            type="button"
            onClick={onRegister || (() => onNavigate && onNavigate('register-1'))}
            className="px-8 py-4 border border-[#c4c6cf] bg-white text-[#000f27] font-bold text-sm rounded-lg hover:bg-[#f2f4f6] transition-all active:scale-[0.98]"
          >
            Post a Challenge / Register Startup
          </button>
        </div>

        {/* Stats & Trust Indicators Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl pt-10 border-t border-[#c4c6cf]/60">
          <div className="bg-white p-5 rounded-xl border border-[#c4c6cf]/60 shadow-xs text-center">
            <span className="block text-2xl lg:text-3xl font-extrabold text-[#000f27]">12+</span>
            <span className="text-xs font-semibold text-[#44474e] uppercase tracking-wider mt-1 block">Active Government Challenges</span>
          </div>
          <div className="bg-white p-5 rounded-xl border border-[#c4c6cf]/60 shadow-xs text-center">
            <span className="block text-2xl lg:text-3xl font-extrabold text-[#000f27]">45+</span>
            <span className="text-xs font-semibold text-[#44474e] uppercase tracking-wider mt-1 block">Verified Startups Onboarded</span>
          </div>
          <div className="bg-white p-5 rounded-xl border border-[#c4c6cf]/60 shadow-xs text-center">
            <span className="block text-2xl lg:text-3xl font-extrabold text-[#000f27]">₹6.4 Cr</span>
            <span className="text-xs font-semibold text-[#44474e] uppercase tracking-wider mt-1 block">Total Pilot Grants Awarded</span>
          </div>
          <div className="bg-white p-5 rounded-xl border border-[#c4c6cf]/60 shadow-xs text-center">
            <span className="block text-2xl lg:text-3xl font-extrabold text-[#157F4B]">100%</span>
            <span className="text-xs font-semibold text-[#44474e] uppercase tracking-wider mt-1 block">Double-Blind Jury Audit</span>
          </div>
        </div>

      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#000f27] text-white border-t border-gray-800 py-12 px-6 md:px-16 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-3 max-w-sm">
            <div className="text-xl font-bold flex items-center gap-2">
              ProcurePilot
              <span className="text-[10px] uppercase bg-white/10 text-gray-300 px-2 py-0.5 rounded">GovTech Sandbox</span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              National institutional procurement sandbox fostering transparent, double-blind evaluation of pioneering startup solutions across India's public sector.
            </p>
            <p className="text-xs text-gray-400 pt-2">
              © 2026 ProcurePilot. A prototype built for Smart India Hackathon 2026 — Team Snap DG.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-semibold text-gray-300">
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Protocols</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Blind Evaluation Framework</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Audit &amp; Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">General Financial Rules (GFR)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Institutional</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">RFP Submission Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vigilance Manual</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Statutory</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}