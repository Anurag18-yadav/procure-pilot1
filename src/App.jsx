import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import DomainExpertDashboard from './components/DomainExpertDashboard';
import SignInPage from './components/SignInPage';
import ChallengesPage from './components/ChallengesPage';
import RegisterStep1 from './components/RegisterStep1';
import RegisterStep2 from './components/RegisterStep2';
import SubmitProposalStep1 from './components/SubmitProposalStep1';
import SubmitProposalStep2 from './components/SubmitProposalStep2';
import GovernmentPortal from './components/GovernmentPortal';
import StartupProfilePage from './components/StartupProfilePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  // Simple Hash-based routing sync so browser back/forward buttons work smoothly
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('landing');
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-white text-[#191c1e] selection:bg-[#cadaff]">
      {currentPage === 'landing' && (
        <LandingPage 
          onNavigate={navigateTo} 
          onExploreChallenges={() => navigateTo('challenges')}
          onRegister={() => navigateTo('register-1')}
        />
      )}

      {currentPage === 'dashboard' && (
        <DomainExpertDashboard 
          onPreviousProposal={() => alert("Showing previous anonymized proposal dossier.")}
          onNextProposal={() => alert("Loading next proposal dossier under GFR 149(v) guidelines.")}
        />
      )}

      {currentPage === 'government-portal' && (
        <GovernmentPortal onNavigate={navigateTo} />
      )}

      {currentPage === 'startup-profile' && (
        <StartupProfilePage onNavigate={navigateTo} />
      )}

      {currentPage === 'signin' && (
        <SignInPage 
          onSignInSuccess={() => navigateTo('dashboard')}
          onRegisterClick={() => navigateTo('register-1')}
          onNavigate={navigateTo}
        />
      )}

      {currentPage === 'challenges' && (
        <ChallengesPage 
          onNavigate={navigateTo}
          onSubmitProposal={() => navigateTo('proposal-1')}
        />
      )}

      {currentPage === 'register-1' && (
        <RegisterStep1 
          onNext={() => navigateTo('register-2')}
          onNavigate={navigateTo}
        />
      )}

      {currentPage === 'register-2' && (
        <RegisterStep2 
          onComplete={() => {
            alert("Startup Registration Completed & Verified under MeitY Sandbox!");
            navigateTo('landing');
          }}
          onNavigate={navigateTo}
        />
      )}

      {currentPage === 'proposal-1' && (
        <SubmitProposalStep1 
          onNext={() => navigateTo('proposal-2')}
          onNavigate={navigateTo}
        />
      )}

      {currentPage === 'proposal-2' && (
        <SubmitProposalStep2 
          onSubmit={() => {
            alert("Proposal submitted successfully into Blind Evaluation Escrow queue!");
            navigateTo('dashboard');
          }}
          onNavigate={navigateTo}
        />
      )}
    </div>
  );
}