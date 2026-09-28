import React from 'react';

export default function StartupProfilePage({ onNavigate }) {
  return (
    <div className="w-full min-h-screen bg-[#f8f9fb] text-[#191c1e] font-sans antialiased flex flex-col">
      {/* GOVT OF INDIA INSTITUTIONAL STRIP */}
      <div className="bg-[#0b2447] text-white px-6 py-1.5 flex items-center justify-between text-xs">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center justify-center font-bold tracking-wider text-[11px] text-[#ffe08e] border border-[#cea62c]/40 px-1.5 py-0.5 rounded">
              GOI • DPIIT Recognized
            </span>
            <span className="text-[#c4c6cf] hidden md:inline">|</span>
            <span className="text-[#e1e2e4] text-[13px] font-semibold hidden md:inline">Startup Verified Profile &amp; Credential Registry</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#e1e2e4] text-[11px] font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#ffe08e]">verified</span>
              STQC Security Cleared
            </span>
          </div>
        </div>
      </div>

      {/* TOP NAVBAR */}
      <header className="bg-white border-b border-[#c4c6cf] sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('landing')}>
            <div className="w-10 h-10 rounded-full bg-[#0b2447] border border-[#d4af37]/60 flex items-center justify-center text-white shadow-xs">
              <svg className="w-5 h-5 text-white transform rotate-45 translate-x-[-1px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-bold tracking-tight flex items-center gap-2">
                <div>
                  <span className="text-[#0b2447]">Procure</span>
                  <span className="text-[#e6ac00]">Pilot</span>
                </div>
                <span className="bg-[#e7e8ea] text-[#44474e] text-[11px] font-semibold px-2 py-0.5 rounded border border-[#c4c6cf]">Startup Profile</span>
              </div>
              <span className="text-[9px] font-semibold text-gray-400 tracking-wider uppercase -mt-0.5">
                Launch. Pilot. Scale.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('challenges')}
              className="px-4 py-2 bg-[#0b2447] text-white text-xs font-bold rounded-lg hover:bg-[#00172e] transition-colors cursor-pointer"
            >
              Explore Challenges
            </button>
          </div>
        </div>
      </header>

      {/* MAIN STARTUP PROFILE CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-8 w-full flex-1 space-y-6">
        
        {/* Profile Header Banner */}
        <div className="bg-white border border-[#c4c6cf] rounded-2xl p-6 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#0b2447] text-white flex items-center justify-center text-2xl font-bold border-2 border-[#d4af37]">
              AS
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl font-extrabold text-[#000f27]">AcousticSense Technologies Pvt. Ltd.</h1>
                <span className="bg-green-100 text-green-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-green-300">
                  <span className="material-symbols-outlined text-[14px]">verified</span> Verified Startup
                </span>
              </div>
              <p className="text-xs text-[#44474e] mt-1">
                DPIIT Recognized (DPIIT10492) • Founded in 2024 • Gurgaon, Haryana
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-[11px] font-semibold text-[#44474e] block">Sandbox Rating</span>
              <span className="text-base font-bold text-[#000f27]">4.8 / 5.0 (9 Pilots)</span>
            </div>
            <button 
              onClick={() => alert("Downloading verified startup credentials & compliance dossier...")}
              className="px-4 py-2.5 bg-[#edeef0] text-[#191c1e] hover:bg-[#e7e8ea] text-xs font-semibold rounded-xl border border-[#c4c6cf] flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              Verified Dossier PDF
            </button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Verification Status & Skills */}
          <div className="space-y-6">
            
            {/* Verification Status Card */}
            <div className="bg-white border border-[#c4c6cf] rounded-2xl p-5 shadow-xs">
              <h2 className="text-sm font-bold text-[#000f27] uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0b2447]">security</span>
                Government Verification Status
              </h2>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="font-semibold text-[#44474e]">DPIIT Startup Recognition</span>
                  <span className="text-green-700 font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">check_circle</span> Active</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="font-semibold text-[#44474e]">STQC Environmental Test</span>
                  <span className="text-green-700 font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">check_circle</span> IS-13252 Passed</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="font-semibold text-[#44474e]">GST &amp; Financial Audit</span>
                  <span className="text-green-700 font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">check_circle</span> Verified</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="font-semibold text-[#44474e]">GFR 149(v) Exemption</span>
                  <span className="text-amber-700 font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">verified</span> Eligible</span>
                </div>
              </div>
            </div>

            {/* Core Skills & Tech Stack */}
            <div className="bg-white border border-[#c4c6cf] rounded-2xl p-5 shadow-xs">
              <h2 className="text-sm font-bold text-[#000f27] uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0b2447]">code</span>
                Technical Capabilities &amp; Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-[#0b2447] text-xs font-semibold rounded-lg border border-blue-200">Acoustic Signal Processing</span>
                <span className="px-3 py-1 bg-blue-50 text-[#0b2447] text-xs font-semibold rounded-lg border border-blue-200">Edge AI &amp; 1D-CNN</span>
                <span className="px-3 py-1 bg-blue-50 text-[#0b2447] text-xs font-semibold rounded-lg border border-blue-200">NavIC L5 Geotagging</span>
                <span className="px-3 py-1 bg-blue-50 text-[#0b2447] text-xs font-semibold rounded-lg border border-blue-200">IoT Hardware Design</span>
                <span className="px-3 py-1 bg-blue-50 text-[#0b2447] text-xs font-semibold rounded-lg border border-blue-200">MQTT / LoRaWAN Telemetry</span>
                <span className="px-3 py-1 bg-blue-50 text-[#0b2447] text-xs font-semibold rounded-lg border border-blue-200">IP68 Sub-surface Enclosures</span>
              </div>
            </div>

          </div>

          {/* Right 2 Columns: Previous Work & Active Proposals */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Previous Government & Municipal Work */}
            <div className="bg-white border border-[#c4c6cf] rounded-2xl p-6 shadow-xs">
              <h2 className="text-base font-bold text-[#000f27] mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0b2447]">history</span>
                Previous Government &amp; Municipal Work History
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xs font-bold text-[#000f27]">IoT Water Flow Sensor Deployment</h3>
                    <span className="text-[10px] font-bold bg-green-100 text-green-800 px-2 py-0.5 rounded">Successfully Completed</span>
                  </div>
                  <p className="text-[11px] text-[#44474e] mb-2">Client: Delhi Jal Board • Order Value: ₹35 Lakhs • Year: 2025</p>
                  <p className="text-xs text-[#191c1e] leading-relaxed">
                    Deployed 80 remote sub-surface flow sensors across South Delhi trunk lines with real-time SCADA integration and leak detection alerts.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xs font-bold text-[#000f27]">Smart Drain Siltation Early Warning System</h3>
                    <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Active Sandbox Pilot</span>
                  </div>
                  <p className="text-[11px] text-[#44474e] mb-2">Client: Municipal Corporation of Gurugram • Order Value: ₹42 Lakhs • Year: 2026</p>
                  <p className="text-xs text-[#191c1e] leading-relaxed">
                    Current ongoing deployment of acoustic sensors under ProcurePilot Stage 3 sandbox testing with GMDA command centre telemetry.
                  </p>
                </div>
              </div>
            </div>

            {/* Active Proposals Pipeline */}
            <div className="bg-white border border-[#c4c6cf] rounded-2xl p-6 shadow-xs">
              <h2 className="text-base font-bold text-[#000f27] mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0b2447]">assignment</span>
                Active Proposal Pipeline on ProcurePilot
              </h2>

              <div className="space-y-3">
                <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 flex justify-between items-center">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#0b2447]">PRP-2026-0447</span>
                    <h4 className="text-xs font-semibold text-[#000f27] mt-0.5">AI Stormwater Drainage Clog Early-Detection</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded border border-amber-200">Stage 2 Technical Review</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0b2447] text-white border-t border-[#c4c6cf] mt-auto">
        <div className="w-full max-w-7xl mx-auto px-6 py-6 text-center text-xs text-gray-400">
          © 2026 ProcurePilot India. Verified Startup Registry under MeitY Framework.
        </div>
      </footer>
    </div>
  );
}