import React, { useState } from 'react';

export default function ReviewSubmitProposal({ onBack, onSubmitProposal, onEditStep }) {
  const [declarationChecked, setDeclarationChecked] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!declarationChecked) {
      alert("Please accept the statutory affirmation before submitting.");
      return;
    }
    onSubmitProposal();
  };

  return (
    <div className="bg-[#f8f9fb] text-[#191c1e] font-sans antialiased min-h-screen flex flex-col selection:bg-[#cadaff] selection:text-[#000f27]">
      {/* Government of India Official Top Bar */}
      <div className="bg-[#000f27] text-[#e1e2e4] text-[11px] font-semibold border-b border-[#74777f]/20">
        <div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-4 h-2.5 bg-[#FF9933] rounded-xs shadow-inner"></span>
            <span className="tracking-wide">GOVERNMENT OF INDIA • MINISTRY OF ELECTRONICS &amp; IT • DPIIT SANDBOX</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#e1e2e4]/80">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              GFR 2017 &amp; CVC Audited Portal
            </span>
            <span className="text-[#e1e2e4]/80">Security Level: NIC Tier-IV Certified</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-[#c4c6cf] sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded bg-[#0b2447] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl">account_balance</span>
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-bold text-[#000f27] tracking-tight flex items-center gap-2">
                ProcurePilot
                <span className="text-[10px] font-semibold tracking-wider uppercase bg-[#0b2447] text-white px-1.5 py-0.5 rounded">GovTech</span>
              </div>
              <span className="text-xs text-[#44474e]">Public Procurement Innovation Platform</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <span className="text-[#44474e] hover:text-[#000f27] cursor-pointer py-1">Challenges</span>
            <span className="text-[#44474e] hover:text-[#000f27] cursor-pointer py-1">Workflow</span>
            <span className="border-b-2 border-[#000f27] text-[#000f27] font-semibold pb-1 cursor-pointer">Evaluations</span>
            <span className="text-[#44474e] hover:text-[#000f27] cursor-pointer py-1">Institutional Framework</span>
          </nav>
          <div className="flex items-center gap-3">
            <button className="h-10 px-4 bg-white border border-[#000f27] text-[#000f27] text-xs font-semibold rounded-lg hover:bg-[#f2f4f6] transition-colors">
              Officer Sign In
            </button>
            <button className="h-10 px-4 bg-[#0b2447] text-white text-xs font-semibold rounded-lg hover:bg-[#000f27] transition-colors flex items-center gap-2">
              <span>Register Startup</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </header>

      {/* Sticky Proposal Context Strip */}
      <div className="bg-white border-b border-[#c4c6cf] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#cadaff] text-[#4f5f7f] flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">deployed_code</span>
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-base text-[#000f27] font-semibold">AI-Powered Stormwater Drainage Clog Early-Detection System</span>
                <span className="font-mono text-xs text-[#4e5f7e] bg-[#f2f4f6] px-2 py-0.5 rounded border border-[#c4c6cf]/60 font-medium">MCG-URB-2026-089</span>
              </div>
              <p className="text-xs text-[#44474e] mt-0.5">Municipal Corporation of Greater Gurugram • Smart Urban Infrastructure Challenge</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FFF8E1] text-[#B26A00] border border-[#FFE082] text-[11px] font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B26A00] animate-pulse"></span>
              DRAFT READY FOR SUBMISSION
            </span>
            <div className="h-4 w-px bg-[#c4c6cf]"></div>
            <span className="text-xs text-[#4e5f7e] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#157F4B]">cloud_done</span>
              Autosaved 14:02 IST
            </span>
          </div>
        </div>
      </div>

      {/* 5-Step GovTech Stepper */}
      <div className="bg-[#f2f4f6] border-b border-[#c4c6cf]/80 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <ol aria-label="Proposal Progress" className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {/* Step 1 Complete */}
            <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-[#c4c6cf]/60 cursor-pointer" onClick={() => onEditStep && onEditStep(1)}>
              <div className="w-6 h-6 rounded-full bg-[#E8F5E9] text-[#157F4B] flex items-center justify-center shrink-0 border border-[#C8E6C9]">
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#4e5f7e]">Step 1</span>
                <span className="block text-xs font-semibold text-[#191c1e] truncate">Eligibility</span>
              </div>
            </li>
            {/* Step 2 Complete */}
            <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-[#c4c6cf]/60 cursor-pointer" onClick={() => onEditStep && onEditStep(2)}>
              <div className="w-6 h-6 rounded-full bg-[#E8F5E9] text-[#157F4B] flex items-center justify-center shrink-0 border border-[#C8E6C9]">
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#4e5f7e]">Step 2</span>
                <span className="block text-xs font-semibold text-[#191c1e] truncate">Solution</span>
              </div>
            </li>
            {/* Step 3 Complete */}
            <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-[#c4c6cf]/60 cursor-pointer" onClick={() => onEditStep && onEditStep(3)}>
              <div className="w-6 h-6 rounded-full bg-[#E8F5E9] text-[#157F4B] flex items-center justify-center shrink-0 border border-[#C8E6C9]">
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#4e5f7e]">Step 3</span>
                <span className="block text-xs font-semibold text-[#191c1e] truncate">Technical Approach</span>
              </div>
            </li>
            {/* Step 4 Complete */}
            <li className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-[#c4c6cf]/60 cursor-pointer" onClick={() => onEditStep && onEditStep(4)}>
              <div className="w-6 h-6 rounded-full bg-[#E8F5E9] text-[#157F4B] flex items-center justify-center shrink-0 border border-[#C8E6C9]">
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#4e5f7e]">Step 4</span>
                <span className="block text-xs font-semibold text-[#191c1e] truncate">Commercials</span>
              </div>
            </li>
            {/* Step 5 Active */}
            <li className="flex items-center gap-2.5 p-2 rounded-lg bg-[#0b2447] text-white border border-[#0b2447] shadow-xs col-span-2 md:col-span-1">
              <div className="w-6 h-6 rounded-full bg-[#cea62c] text-[#4f3d00] flex items-center justify-center font-bold text-xs shrink-0">
                5
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#b1c7f3]">Current Step</span>
                <span className="block text-xs text-white font-semibold truncate">Review &amp; Submit</span>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* Main Content Canvas */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT COLUMN (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Completeness Checklist Card */}
            <div className="bg-white border border-[#c4c6cf] rounded-xl p-6">
              <div className="flex items-center justify-between border-b border-[#c4c6cf]/80 pb-4 mb-4">
                <h3 className="text-base text-[#000f27] font-bold">Submission Readiness Checklist</h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#E8F5E9] text-[#157F4B] border border-[#C8E6C9]">5/5 PASSED</span>
              </div>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5E9] text-[#157F4B] flex items-center justify-center shrink-0 mt-0.5 border border-[#C8E6C9]">
                    <span className="material-symbols-outlined text-[13px]">check</span>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#191c1e] leading-tight">DPIIT Recognition Validated</p>
                    <p className="text-[11px] font-mono text-[#4e5f7e]">ID: DIPP-98421 (Active)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5E9] text-[#157F4B] flex items-center justify-center shrink-0 mt-0.5 border border-[#C8E6C9]">
                    <span className="material-symbols-outlined text-[13px]">check</span>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#191c1e] leading-tight">Technical Approach Documented</p>
                    <p className="text-[11px] text-[#4e5f7e]">Edge telemetry &amp; sensor specs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5E9] text-[#157F4B] flex items-center justify-center shrink-0 mt-0.5 border border-[#C8E6C9]">
                    <span className="material-symbols-outlined text-[13px]">check</span>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#191c1e] leading-tight">2 Schematics Uploaded &amp; Scanned</p>
                    <p className="text-[11px] text-[#4e5f7e]">Antivirus &amp; EXIF metadata scrubbed</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5E9] text-[#157F4B] flex items-center justify-center shrink-0 mt-0.5 border border-[#C8E6C9]">
                    <span className="material-symbols-outlined text-[13px]">check</span>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#191c1e] leading-tight">3 Pilot Milestones Totaling ₹45,00,000</p>
                    <p className="text-[11px] text-[#4e5f7e]">Tranche caps strictly compliant</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5E9] text-[#157F4B] flex items-center justify-center shrink-0 mt-0.5 border border-[#C8E6C9]">
                    <span className="material-symbols-outlined text-[13px]">check</span>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#191c1e] leading-tight">STQC Pre-Testing Waiver Attached</p>
                    <p className="text-[11px] text-[#4e5f7e]">Clause 12.4 Sandbox provision</p>
                  </div>
                </li>
              </ul>

              {/* Evaluation Masking Notice */}
              <div className="mt-6 p-4 rounded-lg bg-[#f2f4f6] border border-[#c4c6cf]">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#0b2447] text-[20px] shrink-0 mt-0.5">shield_person</span>
                  <div>
                    <h4 className="text-xs font-bold text-[#000f27]">Double-Blind Protocol Active</h4>
                    <p className="text-xs text-[#44474e] mt-1 leading-relaxed">
                      Your startup name and founders will be masked to the 5-member academic jury. Scoring will be purely technical.
                    </p>
                    <div className="mt-2 text-[11px] font-mono text-[#4e5f7e] bg-white px-2 py-1 rounded inline-block border border-[#c4c6cf]/60">
                      Assigned Mask ID: <span className="font-bold text-[#000f27]">PROP-BLIND-2026-X81</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bid Integrity & Escrow Card */}
            <div className="bg-white border border-[#c4c6cf] rounded-xl p-6">
              <h4 className="text-base text-[#000f27] font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4e5f7e]">verified_user</span>
                Bid Integrity &amp; Escrow
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg border border-[#c4c6cf] bg-[#f8f9fb]">
                  <div className="w-8 h-8 rounded bg-[#000f27] text-white flex items-center justify-center shrink-0 font-bold text-xs">
                    SBI
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold text-[#4e5f7e] uppercase block">Institutional Escrow</span>
                    <span className="text-xs font-medium text-[#000f27] block">State Bank of India (Main Branch)</span>
                    <span className="text-[11px] font-mono text-[#44474e]">A/C: ••••••••8492 (IFSC: SBIN0000691)</span>
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-[#157F4B] font-semibold">
                      <span className="material-symbols-outlined text-[13px]">check_circle</span>
                      Node Authenticated
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg border border-[#c4c6cf] bg-[#f8f9fb]">
                  <div className="w-8 h-8 rounded bg-[#cadaff] text-[#4f5f7f] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">hub</span>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold text-[#4e5f7e] uppercase block">Govt e-Marketplace Code</span>
                    <span className="text-xs font-medium text-[#000f27] block">GeM Vendor ID: GEMV-2024-IN810</span>
                    <span className="text-[11px] text-[#44474e]">Primary Category: IoT Environmental Telemetry</span>
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-[#157F4B] font-semibold">
                      <span className="material-symbols-outlined text-[13px]">check_circle</span>
                      Active &amp; Compliant
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Institutional Regulatory Reference */}
            <div className="p-4 rounded-xl border border-dashed border-[#c4c6cf] text-center bg-[#f2f4f6]/50">
              <p className="text-[11px] text-[#4e5f7e]">
                Statutory Compliance: Governed by Section 149(v) of GFR 2017 for Public Procurement of Innovative Technologies.
              </p>
            </div>
          </aside>

          {/* RIGHT COLUMN (8 cols) */}
          <section className="lg:col-span-8">
            <div className="bg-white border border-[#c4c6cf] rounded-xl p-8 shadow-none">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#c4c6cf] pb-6 gap-4">
                <div>
                  <h2 className="text-2xl text-[#000f27] font-bold">Final Proposal Review</h2>
                  <p className="text-sm text-[#44474e] mt-1">
                    Please examine the consolidated dossier. Once signed and submitted, the technical envelope is locked cryptographically.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E3F2FD] text-[#1B5FA8] border border-[#BBDEFB] text-[11px] font-semibold whitespace-nowrap self-start sm:self-auto">
                  <span className="material-symbols-outlined text-[14px]">visibility_off</span>
                  Ready for Blind Jury Evaluation
                </span>
              </div>

              {/* Section 1: Eligibility & Statutory Verification */}
              <div className="py-6 border-b border-[#c4c6cf]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base text-[#000f27] font-bold flex items-center gap-2">
                    <span>1. Eligibility &amp; Statutory Verification</span>
                  </h3>
                  <button onClick={() => onEditStep && onEditStep(1)} className="text-xs font-semibold text-[#000f27] hover:underline flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">edit</span> Edit
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#f2f4f6] p-4 rounded-lg border border-[#c4c6cf]/60">
                  <div>
                    <span className="block text-[11px] font-semibold uppercase text-[#4e5f7e]">Entity Legal Name</span>
                    <span className="text-sm text-[#000f27] font-semibold">RoadTech Labs Pvt Ltd</span>
                    <span className="block text-[11px] text-[#44474e]">CIN: U72900DL2022PTC394812</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase text-[#4e5f7e]">DPIIT Recognition</span>
                    <span className="text-sm text-[#000f27] font-semibold">DIPP-98421</span>
                    <span className="block text-[11px] text-[#157F4B]">Validated via API Gateway</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase text-[#4e5f7e]">Statutory Exemption</span>
                    <span className="text-sm text-[#000f27] font-semibold">GFR 149(v) Exemption Claimed</span>
                    <span className="block text-[11px] text-[#44474e]">Relaxation in Prior Turnover/Experience</span>
                  </div>
                </div>
              </div>

              {/* Section 2: Solution Overview */}
              <div className="py-6 border-b border-[#c4c6cf]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base text-[#000f27] font-bold flex items-center gap-2">
                    <span>2. Solution Overview</span>
                  </h3>
                  <button onClick={() => onEditStep && onEditStep(2)} className="text-xs font-semibold text-[#000f27] hover:underline flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">edit</span> Edit
                  </button>
                </div>
                <div className="bg-[#f2f4f6] p-4 rounded-lg border border-[#c4c6cf]/60 space-y-3">
                  <div>
                    <span className="block text-[11px] font-semibold uppercase text-[#4e5f7e]">Project Title &amp; Scope</span>
                    <p className="text-sm text-[#000f27] font-semibold">
                      Acoustic-Inference Sensor Network for Sub-surface Stormwater Conduit Monitoring
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-[#c4c6cf]/40">
                    <div>
                      <span className="block text-[11px] font-semibold uppercase text-[#4e5f7e]">Target Deployment Area</span>
                      <p className="text-xs text-[#191c1e]">Sector 29 &amp; DLF Phase 1-4 Drainage Arteries (42 Junctions Coverage)</p>
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold uppercase text-[#4e5f7e]">Primary Outcome Indicator</span>
                      <p className="text-xs text-[#191c1e]">90-minute pre-flood silt sediment anomaly detection</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Technical Approach & Milestones */}
              <div className="py-6 border-b border-[#c4c6cf]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base text-[#000f27] font-bold flex items-center gap-2">
                    <span>3. Technical Approach &amp; Milestones</span>
                  </h3>
                  <button onClick={() => onEditStep && onEditStep(3)} className="text-xs font-semibold text-[#000f27] hover:underline flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">edit</span> Edit
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#f2f4f6] p-4 rounded-lg border border-[#c4c6cf]/60">
                    <div>
                      <span className="block text-[11px] font-semibold uppercase text-[#4e5f7e]">Core Methodology</span>
                      <p className="text-xs text-[#000f27] font-medium">Edge-computed acoustic resonance frequency analysis</p>
                      <p className="text-[11px] text-[#44474e] mt-0.5">Continuous low-power transducer nodes with vibration spectral baseline.</p>
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold uppercase text-[#4e5f7e]">Software &amp; Telemetry Stack</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        <span className="px-2 py-0.5 rounded bg-white border border-[#c4c6cf] text-[11px] font-mono text-[#000f27] font-medium">LoRaWAN</span>
                        <span className="px-2 py-0.5 rounded bg-white border border-[#c4c6cf] text-[11px] font-mono text-[#000f27] font-medium">TensorFlow Lite</span>
                        <span className="px-2 py-0.5 rounded bg-white border border-[#c4c6cf] text-[11px] font-mono text-[#000f27] font-medium">PostGIS</span>
                        <span className="px-2 py-0.5 rounded bg-white border border-[#c4c6cf] text-[11px] font-mono text-[#000f27] font-medium">Docker</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#c4c6cf] rounded-lg overflow-hidden">
                    <div className="bg-[#f2f4f6] px-4 py-2 border-b border-[#c4c6cf] flex items-center justify-between text-[11px] font-semibold">
                      <span className="uppercase tracking-wider text-[#4e5f7e]">Pilot Delivery Timeline (3 Stages)</span>
                      <span className="text-[#000f27] font-bold">Total: ₹45,00,000</span>
                    </div>
                    <div className="divide-y divide-[#c4c6cf]/60 text-xs">
                      <div className="px-4 py-2.5 flex items-center justify-between bg-white">
                        <span className="font-medium text-[#000f27]">Stage 1: Calibration &amp; Baseline Mapping (10 Junctions)</span>
                        <span className="font-mono text-[#4e5f7e] font-semibold">₹10,00,000 (Month 1)</span>
                      </div>
                      <div className="px-4 py-2.5 flex items-center justify-between bg-white">
                        <span className="font-medium text-[#000f27]">Stage 2: Full Sensor Mesh Deployment &amp; MCG SCADA Integration</span>
                        <span className="font-mono text-[#4e5f7e] font-semibold">₹20,00,000 (Month 3)</span>
                      </div>
                      <div className="px-4 py-2.5 flex items-center justify-between bg-white">
                        <span className="font-medium text-[#000f27]">Stage 3: Monsoon Real-World Stress Test &amp; Automated Alerts</span>
                        <span className="font-mono text-[#4e5f7e] font-semibold">₹15,00,000 (Month 6)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Commercial & Tranche Schedule */}
              <div className="py-6 border-b border-[#c4c6cf]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base text-[#000f27] font-bold flex items-center gap-2">
                    <span>4. Commercial &amp; Tranche Schedule</span>
                  </h3>
                  <button onClick={() => onEditStep && onEditStep(4)} className="text-xs font-semibold text-[#000f27] hover:underline flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">edit</span> Edit
                  </button>
                </div>
                <div className="bg-[#f2f4f6] p-4 rounded-lg border border-[#c4c6cf]/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="block text-[11px] font-semibold uppercase text-[#4e5f7e]">Total Pilot Grant Requested</span>
                    <div className="text-2xl text-[#000f27] font-bold mt-0.5">
                      ₹45,00,000 <span className="text-xs font-normal text-[#44474e]">(Rupees Forty-Five Lakhs Only)</span>
                    </div>
                    <p className="text-xs text-[#44474e] mt-1">
                      100% milestone-linked escrow release via SBI node. Zero upfront mobilization advance requested.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#c4c6cf] text-right shrink-0">
                    <span className="text-[11px] font-semibold text-[#157F4B] uppercase block">GFR 172 Compliance</span>
                    <span className="text-xs font-medium text-[#000f27]">Performance Bank Guarantee (PBG): Exemption Under Startup India</span>
                  </div>
                </div>
              </div>

              {/* Legal Declaration & Digital Signature Box */}
              <div className="my-6 p-5 rounded-lg bg-[#f2f4f6] border border-[#c4c6cf] space-y-4">
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox"
                    id="declaration-check"
                    checked={declarationChecked}
                    onChange={(e) => setDeclarationChecked(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-[#74777f] text-[#0b2447] focus:ring-[#cea62c]"
                  />
                  <label htmlFor="declaration-check" className="text-xs text-[#191c1e] leading-relaxed cursor-pointer select-none">
                    <strong className="text-[#000f27] font-semibold">Statutory Affirmation:</strong> I solemnly affirm under General Financial Rules (GFR) 2017 and Central Vigilance Commission (CVC) guidelines that the technical disclosures are proprietary to <span className="font-medium text-[#000f27]">RoadTech Labs Pvt Ltd</span>, contain no plagiarised IP, and that our team agrees to blind peer-scoring by IIT/NIT empanelled juries without administrative recourse.
                  </label>
                </div>

                <div className="pt-3 border-t border-[#c4c6cf] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-[#E8F5E9] text-[#157F4B] flex items-center justify-center shrink-0 border border-[#C8E6C9]">
                      <span className="material-symbols-outlined text-[20px]">fingerprint</span>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase text-[#4e5f7e] block">Digital Signature (Class 3 DSC)</span>
                      <span className="text-xs text-[#000f27] font-bold">DSC Token Attached: Er. Ananya Sharma</span>
                      <span className="text-[11px] font-mono text-[#44474e] block">Lead Architect &amp; Director • Token #NIC-DSC-98104</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#E8F5E9] text-[#157F4B] border border-[#C8E6C9] text-[11px] font-semibold">
                    DSC ATTACHED
                  </span>
                </div>
              </div>

              {/* Action Buttons Bar */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button 
                  type="button" 
                  onClick={onBack}
                  className="w-full sm:w-auto h-10 px-4 bg-white border border-[#000f27] text-[#000f27] text-xs font-semibold rounded-lg hover:bg-[#f2f4f6] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                  <span>Back to Commercials</span>
                </button>
                
                <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
                  <button 
                    type="button" 
                    onClick={() => alert("Downloading Proposal Summary PDF...")}
                    className="w-full sm:w-auto h-10 px-4 bg-white border border-[#c4c6cf] text-[#44474e] text-xs font-semibold rounded-lg hover:bg-[#e7e8ea] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    <span>Download Proposal Summary (PDF)</span>
                  </button>
                  
                  <button 
                    type="button" 
                    onClick={handleSubmit}
                    className="w-full sm:w-auto h-10 px-6 bg-[#0b2447] hover:bg-[#000f27] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Submit Proposal to MCG Sandbox</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Cryptographic Timestamp Footer Note */}
              <div className="mt-4 pt-3 border-t border-[#c4c6cf]/60 flex items-center justify-end gap-1.5 text-[11px] text-[#4e5f7e] font-mono">
                <span className="material-symbols-outlined text-[13px]">lock</span>
                <span>256-bit NIC Cryptographic Timestamp will be generated upon confirmation</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#000f27] text-white border-t border-[#c4c6cf] mt-12">
        <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-3 max-w-sm">
            <div className="text-xl font-bold text-white flex items-center gap-2">
              ProcurePilot
              <span className="text-[10px] uppercase bg-[#e1e2e4] text-[#000f27] px-2 py-0.5 rounded font-normal">GOVTECH PLATFORM</span>
            </div>
            <p className="text-xs text-[#e1e2e4] leading-relaxed">
              National institutional procurement sandbox fostering transparent, double-blind evaluation of pioneering startup solutions across India's public sector.
            </p>
            <p className="text-xs text-[#e1e2e4] pt-2">
              © 2026 ProcurePilot. Ministry of Electronics &amp; IT, Government of India. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-semibold text-[#e1e2e4]">
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Protocols</h4>
              <ul className="space-y-2">
                <li><a className="hover:text-[#ffe08e] transition-colors" href="#">Blind Evaluation Framework</a></li>
                <li><a className="hover:text-[#ffe08e] transition-colors" href="#">Audit &amp; Compliance</a></li>
                <li><a className="hover:text-[#ffe08e] transition-colors" href="#">General Financial Rules (GFR)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Institutional</h4>
              <ul className="space-y-2">
                <li><a className="hover:text-[#ffe08e] transition-colors" href="#">RFP Submission Portal</a></li>
                <li><a className="hover:text-[#ffe08e] transition-colors" href="#">Vigilance Manual</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Statutory</h4>
              <ul className="space-y-2">
                <li><a className="hover:text-[#ffe08e] transition-colors" href="#">Terms of Service</a></li>
                <li><a className="hover:text-[#ffe08e] transition-colors" href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}