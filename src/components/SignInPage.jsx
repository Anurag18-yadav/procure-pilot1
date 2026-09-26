import React, { useState } from 'react';

export default function SignInPage({ onSignInSuccess, onRegisterClick, onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Check default credentials
    if (email === 'officer@gov.in' && password === 'govtech2026') {
      if (onSignInSuccess) onSignInSuccess();
    } else {
      alert('Invalid Government Credentials! Use officer@gov.in and password govtech2026');
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f9fb] flex flex-col items-center justify-center p-6">
      <div className="bg-white border border-[#c4c6cf] rounded-2xl p-8 max-w-md w-full shadow-sm">
        <h2 className="text-2xl font-bold text-[#000f27] mb-2">Government Officer Login</h2>
        <p className="text-xs text-[#44474e] mb-6">Enter your authorized credentials to access the secure sandbox evaluation portal.</p>
        
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#000f27] mb-1">Official Email ID</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="officer@gov.in" 
              className="w-full px-3 py-2.5 border border-[#c4c6cf] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0b2447]"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#000f27] mb-1">Secure Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••" 
              className="w-full px-3 py-2.5 border border-[#c4c6cf] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0b2447]"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full py-3 bg-[#0b2447] text-white text-xs font-bold rounded-lg hover:bg-[#00172e] transition-colors shadow-xs cursor-pointer mt-2"
          >
            Sign In to Portal
          </button>
        </form>
      </div>
    </div>
  );
}