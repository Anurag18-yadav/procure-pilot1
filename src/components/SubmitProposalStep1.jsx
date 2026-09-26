import React from 'react';
import Navbar from './Navbar';

export default function SubmitProposalStep1({ onNext, onBack, onNavigate }) {
  return (
    <div className="w-full min-h-screen bg-[#f8f9fb] flex flex-col m-0 p-0 overflow-x-hidden">
      {/* Standard Unified Header */}
      <Navbar onNavigate={onNavigate} />

      <div className="flex-1 p-6 md:p-12 max-w-7xl mx-auto w-full">
        {/* Step Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#c4c6cf]">
          <div>
            <span className="text-xs font-bold text-[#157F4B] uppercase tracking-wider">RFP / Pilot Submission</span>
            <h1 className="text-2xl font-bold text-[#000f27] mt-1">Step 1: Eligibility &amp; Statutory Verification</h1>
          </div>
          <button 
            type="button"
            onClick={onBack}
            className="px-4 py-2 border border-[#c4c6cf] text-xs font-semibold rounded-lg bg-white hover:bg-[#f2f4f6] transition-colors"
          >
            &larr; Back
          </button>
        </div>

        {/* Form Container */}
        <div className="bg-white border border-[#c4c6cf] rounded-xl p-8 shadow-xs max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#000f27] mb-2">Startup Entity Details &amp; GFR 149(v) Compliance</h2>
          <p className="text-xs text-[#44474e] mb-6">
            Please provide your DPIIT registration details and verify statutory compliance under public procurement guidelines.
          </p>

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-[#000f27] mb-1">Registered Entity Name</label>
              <input 
                type="text" 
                placeholder="e.g. RoadTech Labs Pvt Ltd" 
                className="w-full px-3 py-2.5 border border-[#c4c6cf] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0b2447]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#000f27] mb-1">DPIIT Recognition Number</label>
              <input 
                type="text" 
                placeholder="e.g. DIPP98421" 
                className="w-full px-3 py-2.5 border border-[#c4c6cf] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0b2447]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#000f27] mb-1">Core Innovation Brief</label>
              <textarea 
                rows="4" 
                placeholder="Briefly describe your technological approach..." 
                className="w-full px-3 py-2.5 border border-[#c4c6cf] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0b2447]"
              ></textarea>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={onNext}
                className="px-6 py-3 bg-[#0b2447] text-white text-xs font-bold rounded-lg hover:bg-[#000f27] transition-colors shadow-xs"
              >
                Save &amp; Continue to Step 2 &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}