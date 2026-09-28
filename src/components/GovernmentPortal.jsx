import React from 'react';

export default function GovernmentPortal({ onNavigate }) {
  return (
    <div className="w-full min-h-screen bg-[#f8f9fb] text-[#191c1e] font-sans antialiased flex flex-col">
      {/* GOVT OF INDIA INSTITUTIONAL STRIP */}
      <div className="bg-[#0b2447] text-white px-6 py-1.5 flex items-center justify-between text-xs">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center justify-center font-bold tracking-wider text-[11px] text-[#ffe08e] border border-[#cea62c]/40 px-1.5 py-0.5 rounded">
              GOI • MeitY
            </span>
            <span className="text-[#c4c6cf] hidden md:inline">|</span>
            <span className="text-[#e1e2e4] text-[13px] font-semibold hidden md:inline">Government Innovation Procurement &amp; Monitoring Portal</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#e1e2e4] text-[11px] font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#ffe08e]">verified_user</span>
              GFR 2017 Rule 149(v) Compliance Hub
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
                <span className="bg-[#e7e8ea] text-[#44474e] text-[11px] font-semibold px-2 py-0.5 rounded border border-[#c4c6cf]">Gov Portal v2.4</span>
              </div>
              <span className="text-[9px] font-semibold text-gray-400 tracking-wider uppercase -mt-0.5">
                Launch. Pilot. Scale.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('landing')}
              className="px-4 py-2 bg-[#0b2447] text-white text-xs font-bold rounded-lg hover:bg-[#00172e] transition-colors cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* MAIN GOVERNMENT CONTROL ROOM CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-8 w-full flex-1 space-y-6">
        
        {/* Header Section */}
        <div className="bg-white border border-[#c4c6cf] rounded-2xl p-6 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="bg-[#d7e3ff] text-[#000f27] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Departmental Command &amp; Control
            </span>
            <h1 className="text-2xl font-extrabold text-[#000f27] mt-2">Municipal Corporation &amp; Ministry Challenge Tracker</h1>
            <p className="text-xs text-[#44474e] mt-1">
              Publish live problem statements, track blind evaluations, and oversee active sandbox escrow milestone progress.
            </p>
          </div>
          <button 
            onClick={() => alert("Redirecting to New Problem Statement Publication Form...")}
            className="px-5 py-2.5 bg-[#0b2447] text-white text-xs font-bold rounded-xl hover:bg-[#00172e] transition-colors shadow-xs cursor-pointer flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">add_circle</span>
            Publish New Challenge
          </button>
        </div>

        {/* Quick Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-[#c4c6cf] shadow-xs">
            <span className="text-xs font-semibold text-[#44474e] block">Active Published Challenges</span>
            <span className="text-2xl font-bold text-[#000f27] mt-1 block">14</span>
            <span className="text-[11px] text-green-700 font-semibold mt-1 block">↑ 3 added this week</span>
          </div>
          <div className="bg-white p-5 rounded-xl border border-[#c4c6cf] shadow-xs">
            <span className="text-xs font-semibold text-[#44474e] block">Proposals Under Blind Review</span>
            <span className="text-2xl font-bold text-[#000f27] mt-1 block">48</span>
            <span className="text-[11px] text-[#755b00] font-semibold mt-1 block">Expert Juries Active</span>
          </div>
          <div className="bg-white p-5 rounded-xl border border-[#c4c6cf] shadow-xs">
            <span className="text-xs font-semibold text-[#44474e] block">Active Sandbox Pilots</span>
            <span className="text-2xl font-bold text-[#000f27] mt-1 block">6</span>
            <span className="text-[11px] text-blue-700 font-semibold mt-1 block">Tranche-2 Disbursed</span>
          </div>
          <div className="bg-white p-5 rounded-xl border border-[#c4c6cf] shadow-xs">
            <span className="text-xs font-semibold text-[#44474e] block">Direct Procurement Ready</span>
            <span className="text-2xl font-bold text-[#000f27] mt-1 block">3</span>
            <span className="text-[11px] text-[#755b00] font-semibold mt-1 block">GFR 149(v) Qualified</span>
          </div>
        </div>

        {/* Active Problem Statements Table / List */}
        <div className="bg-white border border-[#c4c6cf] rounded-2xl p-6 shadow-xs">
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
            <h2 className="text-base font-bold text-[#000f27]">Published Government Problem Statements &amp; Progress</h2>
            <span className="text-xs font-semibold text-[#44474e]">Live Telemetry Feed</span>
          </div>

          <div className="space-y-4">
            
            {/* Challenge Item 1 */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#0b2447] text-white text-[10px] font-bold px-2 py-0.5 rounded">PRP-CH-044</span>
                  <span className="text-xs font-bold text-[#000f27]">AI-Powered Stormwater Drainage Clog Early-Detection</span>
                </div>
                <p className="text-xs text-[#44474e]">Municipal Corporation of Gurugram • Sub-surface acoustic sensors monitoring</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-blue-700 block">Stage 3: Sandbox Pilot</span>
                  <span className="text-[10px] text-gray-500">Milestone 2/3 Completed</span>
                </div>
                <button onClick={() => alert("Viewing detailed telemetry and escrow fund release logs...")} className="px-3 py-1.5 bg-white border border-[#0b2447] text-[#0b2447] text-xs font-bold rounded-lg hover:bg-gray-100 cursor-pointer">
                  Monitor Work
                </button>
              </div>
            </div>

            {/* Challenge Item 2 */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#0b2447] text-white text-[10px] font-bold px-2 py-0.5 rounded">PRP-CH-045</span>
                  <span className="text-xs font-bold text-[#000f27]">Automated Pothole &amp; Road Surface Profiling System</span>
                </div>
                <p className="text-xs text-[#44474e]">Ministry of Road Transport &amp; Highways • LiDAR &amp; Edge AI cameras</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-amber-700 block">Stage 2: Blind Evaluation</span>
                  <span className="text-[10px] text-gray-500">12 Proposals Under Review</span>
                </div>
                <button onClick={() => alert("Reviewing evaluation status...")} className="px-3 py-1.5 bg-white border border-[#0b2447] text-[#0b2447] text-xs font-bold rounded-lg hover:bg-gray-100 cursor-pointer">
                  Monitor Work
                </button>
              </div>
            </div>

            {/* Challenge Item 3 */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#0b2447] text-white text-[10px] font-bold px-2 py-0.5 rounded">PRP-CH-042</span>
                  <span className="text-xs font-bold text-[#000f27]">Real-time Air Quality Micro-Sensor Grid</span>
                </div>
                <p className="text-xs text-[#44474e]">CPCB Delhi • Low-cost calibration nodes</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-green-700 block">Stage 4: Scale &amp; Procurement</span>
                  <span className="text-[10px] text-gray-500">GFR 149(v) Order Issued</span>
                </div>
                <button onClick={() => alert("Viewing procurement order contract...")} className="px-3 py-1.5 bg-white border border-[#0b2447] text-[#0b2447] text-xs font-bold rounded-lg hover:bg-gray-100 cursor-pointer">
                  Monitor Work
                </button>
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#000f27] text-white border-t border-[#c4c6cf] mt-auto">
        <div className="w-full max-w-7xl mx-auto px-6 py-6 text-center text-xs text-gray-400">
          © 2026 ProcurePilot India. Government Innovation Portal under MeitY GFR 2017 Framework.
        </div>
      </footer>
    </div>
  );
}