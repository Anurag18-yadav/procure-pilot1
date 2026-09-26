import React, { useState, useEffect } from 'react';

import LandingPage from './components/LandingPage';
import SignInPage from './components/SignInPage';
import RegisterStep1 from './components/RegisterStep1';
import RegisterStep2 from './components/RegisterStep2';
import SubmitProposalStep1 from './components/SubmitProposalStep1';
import SubmitProposalStep2 from './components/SubmitProposalStep2';
import ChallengesPage from './components/ChallengesPage';
import DomainExpertDashboard from './components/DomainExpertDashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [userRole, setUserRole] = useState('startup');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        // Protect dashboard route if not authenticated
        if (event.state.page === 'dashboard' && !isAuthenticated) {
          setCurrentPage('signin');
        } else {
          setCurrentPage(event.state.page);
        }
      } else {
        setCurrentPage('landing');
      }
    };

    window.addEventListener('popstate', handlePopState);
    if (!window.history.state) {
      window.history.replaceState({ page: 'landing' }, '');
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isAuthenticated]);

  const navigateTo = (pageName) => {
    // Security check: If trying to access dashboard without auth, force redirect to signin
    if (pageName === 'dashboard' && !isAuthenticated) {
      setCurrentPage('signin');
      window.history.pushState({ page: 'signin' }, '', '#signin');
    } else {
      setCurrentPage(pageName);
      window.history.pushState({ page: pageName }, '', `#${pageName}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f9fb] text-[#191c1e] font-sans antialiased flex flex-col justify-start items-stretch m-0 p-0 overflow-x-hidden">
      <main className="w-full flex-1 flex flex-col items-stretch">
        {currentPage === 'landing' && (
          <LandingPage 
            onNavigate={(page) => navigateTo(page)}
            onLogin={() => navigateTo('signin')}
            onRegister={() => navigateTo('register-1')}
            onExploreChallenges={() => navigateTo('challenges')}
          />
        )}

        {currentPage === 'signin' && (
          <SignInPage 
            onNavigate={(page) => navigateTo(page)}
            onSignInSuccess={() => {
              setIsAuthenticated(true);
              navigateTo('dashboard');
            }}
            onRegisterClick={() => navigateTo('register-1')}
          />
        )}

        {currentPage === 'register-1' && (
          <RegisterStep1 
            onNext={(role) => {
              setUserRole(role);
              navigateTo('register-2');
            }}
            onLoginClick={() => navigateTo('signin')}
            onNavigate={(page) => navigateTo(page)}
          />
        )}

        {currentPage === 'register-2' && (
          <RegisterStep2 
            role={userRole}
            onBack={() => navigateTo('register-1')}
            onNext={() => navigateTo('proposal-1')}
            onNavigate={(page) => navigateTo(page)}
          />
        )}

        {currentPage === 'proposal-1' && (
          <SubmitProposalStep1 
            onNext={() => navigateTo('proposal-2')}
            onBack={() => navigateTo('challenges')}
            onNavigate={(page) => navigateTo(page)}
          />
        )}

        {currentPage === 'proposal-2' && (
          <SubmitProposalStep2 
            onBack={() => navigateTo('proposal-1')}
            onNext={() => {
              setIsAuthenticated(true);
              navigateTo('dashboard');
            }}
            onNavigate={(page) => navigateTo(page)}
          />
        )}

        {currentPage === 'challenges' && (
          <ChallengesPage 
            onSelectChallenge={() => navigateTo('proposal-1')}
            onBackToHome={() => navigateTo('landing')}
            onNavigate={(page) => navigateTo(page)}
          />
        )}

        {currentPage === 'dashboard' && (
          isAuthenticated ? (
            <DomainExpertDashboard 
              onLogout={() => {
                setIsAuthenticated(false);
                navigateTo('signin');
              }}
              onNavigateHome={() => navigateTo('landing')}
              onNavigate={(page) => navigateTo(page)}
            />
          ) : (
            // Fallback secure redirect if somehow accessed directly
            <SignInPage 
              onNavigate={(page) => navigateTo(page)}
              onSignInSuccess={() => {
                setIsAuthenticated(true);
                navigateTo('dashboard');
              }}
              onRegisterClick={() => navigateTo('register-1')}
            />
          )
        )}
      </main>
    </div>
  );
}