import React, { useState } from 'react';
import Navbar from './Navbar';

export default function RegisterStep1({ onNext, onLoginClick, onNavigate }) {
  const [selectedRole, setSelectedRole] = useState('startup');

  const handleContinue = () => {
    // You can pass the selectedRole if needed, currently proceeding to Step 2
    if (onNext) {
      onNext(selectedRole);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f9fb] flex flex-col m-0 p-0 overflow-x-hidden">
      <Navbar onNavigate={onNavigate} />

      <div className="flex-1 max-w-7xl mx-auto w-full p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sidebar Info */}
        <div className="lg:col-span-5 bg-[#000f27] text-white p-8 rounded-2xl shadow-sm space-y-6">
          <div className="inline-block px-3 py-1 bg-white/10 text-amber-300 text-[11px] font-bold rounded uppercase tracking-wider">
            NATIONAL PUBLIC SANDBOX PROGRAM
          </div>
          <h1 className="text-3xl font-extrabold leading-tight">
            Join India's Public Innovation Ecosystem
          </h1>
          <p className="text-xs text-gray-300 leading-relaxed">
            Onboard to the national procurement pilot infrastructure. Secure fast-tracked institutional testing, direct statutory validation, and fair opportunity access under central vigilance guidelines.
          </p>

          <div className="space-y-4 pt-4 border-t border-gray-800 text-xs">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-amber-400">verified</span>
              <div>
                <strong className="block text-white">DPIIT Fast-Track</strong>
                <span className="text-gray-400">Automated startup eligibility and certificate validation</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-amber-400">domain</span>
              <div>
                <strong className="block text-white">Department Sandboxes</strong>
                <span className="text-gray-400">Post verified operational problem statements in 15 minutes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Role Selection Form */}
        <div className="lg:col-span-7 bg-white border border-[#c4c6cf] rounded-2xl p-8 shadow-xs">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
            <div>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Step 1 of 3</span>
              <h2 className="text-xl font-bold text-[#000f27]">Select your operational role</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            
            {/* Startup Role Card */}
            <div 
              onClick={() => setSelectedRole('startup')}
              className={`p-5 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between ${selectedRole === 'startup' ? 'border-[#0b2447] bg-blue-50/30' : 'border-[#c4c6cf] hover:border-gray-400'}`}
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="material-symbols-outlined text-2xl text-[#0b2447]">rocket_launch</span>
                  <input type="radio" checked={selectedRole === 'startup'} readOnly className="accent-[#0b2447]" />
                </div>
                <h3 className="font-bold text-[#000f27] text-sm">Startup / Innovator</h3>
                <p className="text-[11px] text-[#44474e] mt-1">DPIIT-recognised startups deploying deep-tech prototypes and pilot deployments.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-[10px] font-bold text-gray-500">
                <span>Pre-seed to Series B</span>
                <span className="text-green-700 bg-green-50 px-2 py-0.5 rounded">Fast-track</span>
              </div>
            </div>

            {/* Government Department Role Card */}
            <div 
              onClick={() => setSelectedRole('government')}
              className={`p-5 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between ${selectedRole === 'government' ? 'border-[#0b2447] bg-blue-50/30' : 'border-[#c4c6cf] hover:border-gray-400'}`}
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="material-symbols-outlined text-2xl text-[#0b2447]">account_balance</span>
                  <input type="radio" checked={selectedRole === 'government'} readOnly className="accent-[#0b2447]" />
                </div>
                <h3 className="font-bold text-[#000f27] text-sm">Government Department</h3>
                <p className="text-[11px] text-[#44474e] mt-1">Central ministries, state departments, and municipal corporations posting problem briefs.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-[10px] font-bold text-gray-500">
                <span>RFP &amp; Sandbox Issuer</span>
                <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded">GFR 149</span>
              </div>
            </div>

          </div>

          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <button 
              type="button"
              onClick={onLoginClick}
              className="text-xs font-bold text-[#0b2447] hover:underline"
            >
              Already registered? Sign In
            </button>
            <button
              type="button"
              onClick={handleContinue}
              className="px-6 py-3 bg-[#0b2447] text-white text-xs font-bold rounded-lg hover:bg-[#00172e] transition-colors shadow-xs"
            >
              Continue as {selectedRole === 'startup' ? 'Startup' : 'Government'} &rarr;
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}