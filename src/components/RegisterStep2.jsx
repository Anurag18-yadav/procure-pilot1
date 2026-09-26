import React, { useState } from 'react';

export default function RegisterStep2({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    entityName: 'RoadTech Labs Pvt Ltd',
    dpiitReg: 'DIPP-98421',
    yearFounded: '2022',
    sector: 'Urban Infrastructure & Smart Mobility',
    teamSize: '11–25 employees',
    website: 'https://roadtechlabs.in',
    city: 'Bengaluru',
    state: 'Karnataka',
    declarationChecked: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.declarationChecked) {
      alert("Please accept the statutory declaration to proceed.");
      return;
    }
    onNext(formData);
  };

  return (
    <div className="bg-[#f8f9fb] text-[#191c1e] font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-[#ffe08e] selection:text-[#241a00]">
      {/* Main Split-Screen Container */}
      <main className="w-full min-h-screen flex flex-col lg:flex-row">
        {/* LEFT 45% COLUMN: Institutional Brand Continuity Panel */}
        <section className="w-full lg:w-[45%] bg-[#0b2447] text-white flex flex-col justify-between p-8 md:p-12 lg:p-16 relative overflow-hidden border-r border-[#10315e]">
          {/* Top: Official Emblem & Header Identity */}
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center p-2 text-white">
                <span className="material-symbols-outlined text-[28px]">account_balance</span>
              </div>
              <div>
                <span className="block text-[11px] font-semibold tracking-wider uppercase text-[#d9dadc]">
                  Government of India • Ministry of Commerce &amp; Industry
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-xl font-bold tracking-tight text-white">ProcurePilot</span>
                  <span className="h-2 w-2 rounded-full bg-[#C9A227] inline-block"></span>
                  <span className="text-[11px] text-[#C9A227] font-semibold tracking-wide ml-2 px-2 py-0.5 rounded bg-[#C9A227]/10 border border-[#C9A227]/30">
                    STARTUP PORTAL
                  </span>
                </div>
              </div>
            </div>

            <div className="h-[1px] w-full bg-white/10 my-4"></div>

            {/* Middle: Authority Value Statement */}
            <div className="space-y-3 pt-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C9A227]/15 border border-[#C9A227]/30 text-[#FFE08E] text-[11px] font-semibold">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                <span>Statutory Fast-Track Channel</span>
              </div>
              <h1 className="text-3xl text-white font-semibold tracking-tight leading-tight">
                Fast-Track DPIIT Verification
              </h1>
              <p className="text-sm text-[#d9dadc] leading-relaxed">
                Provide your statutory corporate credentials for instant validation against the Startup India national database.
              </p>
            </div>

            {/* 3 Trust Verification Bullets */}
            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#C9A227]/20 border border-[#C9A227]/40 flex items-center justify-center text-[#FFE08E] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">payments</span>
                </div>
                <div>
                  <h2 className="text-base text-white font-medium">Zero Tender Fee Exemption</h2>
                  <p className="text-xs text-[#e1e2e4]/80 mt-0.5">
                    Exempt from EMD and prior turnover criteria under GFR 149(v).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#157F4B]/20 border border-[#157F4B]/40 flex items-center justify-center text-[#86EFAC] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">hub</span>
                </div>
                <div>
                  <h2 className="text-base text-white font-medium">Instant DPIIT API Match</h2>
                  <p className="text-xs text-[#e1e2e4]/80 mt-0.5">
                    Real-time recognition verification via MCA &amp; DPIIT registry.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-200 shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                </div>
                <div>
                  <h2 className="text-base text-white font-medium">Encrypted Document Vault</h2>
                  <p className="text-xs text-[#e1e2e4]/80 mt-0.5">
                    Tamper-proof storage on secure National Informatics Centre cloud.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Support Contact Info */}
          <div className="pt-8 border-t border-white/10 mt-8 relative z-10">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#d9dadc] text-[20px]">support_agent</span>
              <p className="text-xs text-[#d9dadc]">
                Need help? Call Toll-Free <span className="text-white font-medium">1800 115 565</span> or email <span className="text-white font-medium underline underline-offset-2">helpdesk@procurepilot.gov.in</span>
              </p>
            </div>
          </div>

          {/* Background Geometry Overlay */}
          <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-white/[0.02] pointer-events-none border border-white/[0.05]"></div>
        </section>

        {/* RIGHT 55% COLUMN: Clean White Form Container */}
        <section className="w-full lg:w-[55%] bg-white flex items-center justify-center p-6 md:p-10 lg:p-12">
          <div className="w-full max-w-[580px] py-4">
            {/* Top Progress Stepper (Step 2 of 3) */}
            <nav aria-label="Registration Progress" className="mb-8 pb-6 border-b border-[#c4c6cf]">
              <div className="flex items-center justify-between relative">
                {/* Step 1: Role Selection (Completed) */}
                <div className="flex items-center gap-3 z-10">
                  <div className="w-9 h-9 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] text-[#157F4B] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">check</span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="block text-[11px] font-semibold text-[#157F4B]">Step 1</span>
                    <span className="block text-xs font-semibold text-[#191c1e]">Role: Startup</span>
                  </div>
                </div>

                {/* Connecting Track 1-2 */}
                <div className="flex-1 h-[2px] bg-[#157F4B] mx-2 sm:mx-4"></div>

                {/* Step 2: Startup Details (Active) */}
                <div className="flex items-center gap-3 z-10">
                  <div className="w-9 h-9 rounded-full bg-[#0b2447] text-white flex items-center justify-center ring-2 ring-[#C9A227] ring-offset-2">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="block text-[11px] text-[#000f27] font-semibold">Step 2 (Active)</span>
                    <span className="block text-xs text-[#000f27] font-bold">Startup Details</span>
                  </div>
                </div>

                {/* Connecting Track 2-3 */}
                <div className="flex-1 h-[2px] bg-[#e1e2e4] mx-2 sm:mx-4"></div>

                {/* Step 3: Verification & Compliance (Upcoming) */}
                <div className="flex items-center gap-3 z-10 opacity-70">
                  <div className="w-9 h-9 rounded-full bg-[#edeef0] text-[#74777f] flex items-center justify-center border border-[#c4c6cf]">
                    <span className="text-xs font-medium">3</span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="block text-[11px] font-semibold text-[#74777f]">Step 3</span>
                    <span className="block text-xs text-[#74777f]">Compliance</span>
                  </div>
                </div>
              </div>
            </nav>

            {/* Form Header */}
            <header className="mb-6">
              <h2 className="text-2xl text-[#000f27] font-bold tracking-tight">
                Startup Credentials &amp; Profile
              </h2>
              <p className="text-sm text-[#44474e] mt-1">
                Fields marked with <span className="text-[#ba1a1a] font-semibold">*</span> are verified directly against DPIIT records.
              </p>
            </header>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Col 1: Entity Name */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#191c1e] mb-1.5" htmlFor="entityName">
                    Startup Entity Name <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input 
                    className="w-full h-10 px-3 bg-white border border-[#c4c6cf] rounded-lg text-sm text-[#191c1e] focus:outline-none focus:border-[#0b2447] focus:ring-1 focus:ring-[#0b2447]" 
                    id="entityName" 
                    name="entityName" 
                    type="text" 
                    value={formData.entityName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Col 2: DPIIT Recognition Number */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#191c1e] mb-1.5" htmlFor="dpiitReg">
                    DPIIT Recognition Number <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <div className="relative">
                    <input 
                      className="w-full h-10 pl-3 pr-9 bg-white border border-[#157F4B] rounded-lg text-sm text-[#191c1e] focus:outline-none focus:border-[#157F4B] focus:ring-1 focus:ring-[#157F4B]" 
                      id="dpiitReg" 
                      name="dpiitReg" 
                      type="text" 
                      value={formData.dpiitReg}
                      onChange={handleChange}
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-[#157F4B]">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#157F4B] mt-1 flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-[14px]">check</span> Verified against Startup India Registry ({formData.dpiitReg})
                  </p>
                </div>

                {/* Col 1: Year Founded */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#191c1e] mb-1.5" htmlFor="yearFounded">
                    Year Founded <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input 
                    className="w-full h-10 px-3 bg-white border border-[#c4c6cf] rounded-lg text-sm text-[#191c1e] focus:outline-none focus:border-[#0b2447] focus:ring-1 focus:ring-[#0b2447]" 
                    id="yearFounded" 
                    max="2026" 
                    min="1990" 
                    name="yearFounded" 
                    type="number" 
                    value={formData.yearFounded}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Col 2: Sector / Domain */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#191c1e] mb-1.5" htmlFor="sector">
                    Sector / Domain <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      className="w-full h-10 px-3 pr-8 bg-white border border-[#c4c6cf] rounded-lg text-sm text-[#191c1e] focus:outline-none focus:border-[#0b2447] focus:ring-1 focus:ring-[#0b2447] appearance-none" 
                      id="sector" 
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                    >
                      <option>Urban Infrastructure &amp; Smart Mobility</option>
                      <option>Defence &amp; Aerospace</option>
                      <option>Artificial Intelligence &amp; Robotics</option>
                      <option>CleanTech &amp; Renewable Energy</option>
                      <option>Healthcare &amp; MedTech</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-[#44474e]">
                      <span className="material-symbols-outlined text-[20px]">expand_more</span>
                    </div>
                  </div>
                </div>

                {/* Col 1: Core Team Size */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#191c1e] mb-1.5" htmlFor="teamSize">
                    Core Team Size <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      className="w-full h-10 px-3 pr-8 bg-white border border-[#c4c6cf] rounded-lg text-sm text-[#191c1e] focus:outline-none focus:border-[#0b2447] focus:ring-1 focus:ring-[#0b2447] appearance-none" 
                      id="teamSize" 
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                    >
                      <option>1–10 employees</option>
                      <option>11–25 employees</option>
                      <option>26–50 employees</option>
                      <option>51–100 employees</option>
                      <option>100+ employees</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-[#44474e]">
                      <span className="material-symbols-outlined text-[20px]">expand_more</span>
                    </div>
                  </div>
                </div>

                {/* Col 2: Official Website */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#191c1e] mb-1.5" htmlFor="website">
                    Official Website
                  </label>
                  <input 
                    className="w-full h-10 px-3 bg-white border border-[#c4c6cf] rounded-lg text-sm text-[#191c1e] focus:outline-none focus:border-[#0b2447] focus:ring-1 focus:ring-[#0b2447]" 
                    id="website" 
                    name="website" 
                    placeholder="https://" 
                    type="url" 
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

                {/* Col 1: Registered City */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#191c1e] mb-1.5" htmlFor="city">
                    Registered City <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input 
                    className="w-full h-10 px-3 bg-white border border-[#c4c6cf] rounded-lg text-sm text-[#191c1e] focus:outline-none focus:border-[#0b2447] focus:ring-1 focus:ring-[#0b2447]" 
                    id="city" 
                    name="city" 
                    type="text" 
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Col 2: State / UT */}
                <div>
                  <label className="block text-[13px] font-semibold text-[#191c1e] mb-1.5" htmlFor="state">
                    State / UT <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      className="w-full h-10 px-3 pr-8 bg-white border border-[#c4c6cf] rounded-lg text-sm text-[#191c1e] focus:outline-none focus:border-[#0b2447] focus:ring-1 focus:ring-[#0b2447] appearance-none" 
                      id="state" 
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    >
                      <option>Delhi (NCT)</option>
                      <option>Karnataka</option>
                      <option>Maharashtra</option>
                      <option>Tamil Nadu</option>
                      <option>Telangana</option>
                      <option>Gujarat</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-[#44474e]">
                      <span className="material-symbols-outlined text-[20px]">expand_more</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* File-Upload Dropzone */}
              <div className="pt-2">
                <label className="block text-[13px] font-semibold text-[#191c1e] mb-1.5">
                  DPIIT Certificate / Incorporation Document <span className="text-[#ba1a1a]">*</span>
                </label>
                <div className="border border-dashed border-[#c4c6cf] rounded-xl bg-[#F6F7F9] p-4 text-center hover:bg-[#edeef0] transition-colors duration-150 cursor-pointer">
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    <div className="w-9 h-9 rounded-full bg-[#e1e2e4] flex items-center justify-center text-[#000f27]">
                      <span className="material-symbols-outlined text-[22px]">cloud_upload</span>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[13px] font-semibold text-[#191c1e]">
                        Upload DPIIT Certificate or Certificate of Incorporation (PDF, max 10MB)
                      </p>
                      <p className="text-xs text-[#44474e]">
                        Drag and drop or <span className="text-[#000f27] font-semibold underline underline-offset-2">browse file</span>
                      </p>
                    </div>
                    {/* Active Uploaded Badge Indicator */}
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E8F5E9] border border-[#C8E6C9] text-[#157F4B] text-xs">
                      <span className="material-symbols-outlined text-[16px]">description</span>
                      <span className="font-medium">DPIIT_Cert_RoadTech.pdf (1.4 MB)</span>
                      <span className="font-semibold text-[10px] uppercase tracking-wide bg-[#157F4B] text-white px-1.5 py-0.5 rounded">Ready</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statutory Consent Checkbox */}
              <div className="pt-3 pb-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    className="mt-1 w-4 h-4 rounded border-[#c4c6cf] text-[#0b2447] focus:ring-2 focus:ring-[#C9A227] focus:ring-offset-1" 
                    type="checkbox"
                    name="declarationChecked"
                    checked={formData.declarationChecked}
                    onChange={handleChange}
                  />
                  <span className="text-xs text-[#44474e] leading-normal select-none">
                    I declare under penalty of GFR sanctions that the information provided is true and authorise <strong class="text-[#191c1e] font-semibold">ProcurePilot</strong> to verify records with MCA21, DPIIT, and GeM portals under applicable statutory provisions.
                  </span>
                </label>
              </div>

              {/* Bottom Navigation Buttons */}
              <div className="pt-4 flex items-center justify-between gap-4 border-t border-[#c4c6cf]">
                <button 
                  type="button" 
                  onClick={onBack}
                  className="h-10 px-4 bg-white border border-[#000f27] text-[#000f27] font-semibold text-sm rounded-lg hover:bg-[#edeef0] transition-colors duration-150 active:scale-[0.98] inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  Back to Role
                </button>
                <button 
                  type="submit"
                  className="h-10 px-6 bg-[#0b2447] text-white font-semibold text-sm rounded-lg hover:bg-[#000f27] focus:ring-2 focus:ring-[#C9A227] focus:ring-offset-2 transition-all duration-150 active:scale-[0.98] inline-flex items-center gap-2"
                >
                  Continue to Verification (Step 3)
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-[#c4c6cf] py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[#44474e] text-xs gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-[#000f27]">verified</span>
            <span>Secured by National Informatics Centre (NIC) • GFR 2017 Compliant</span>
          </div>
          <div className="flex items-center gap-4 text-[#74777f] text-[11px] font-semibold">
            <a className="hover:text-[#000f27] transition-colors" href="#compliance">Vigilance Manual</a>
            <span>•</span>
            <a className="hover:text-[#000f27] transition-colors" href="#terms">Audit &amp; Terms</a>
            <span>•</span>
            <a className="hover:text-[#000f27] transition-colors" href="#privacy">Data Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}