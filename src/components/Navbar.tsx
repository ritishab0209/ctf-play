import React, { useState } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SignInModal from './SignInModal';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, signOut } = useAuth();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/challenges', label: 'Challenges' },
    { path: '/scoreboard', label: 'Scoreboard' },
    { path: '/learn', label: 'Learn' },
    { path: '/about', label: 'About' },
  ];

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  return (
    <>
      <nav className="bg-gray-900/50 backdrop-blur-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold text-orange-500">picoCTF</Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        isActivePath(link.path)
                          ? 'text-white bg-gray-800'
                          : 'text-gray-300 hover:text-orange-500'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {isAuthenticated ? (
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <User className="h-5 w-5" />
                      <span>{user?.email}</span>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsSignInOpen(true)}
                    className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActivePath(link.path)
                      ? 'text-white bg-gray-800'
                      : 'text-gray-300 hover:text-orange-500'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="px-2">
                {isAuthenticated ? (
                  <>
                    <div className="px-3 py-2 text-gray-300">
                      <div className="flex items-center space-x-2">
                        <User className="h-5 w-5" />
                        <span>{user?.email}</span>
                      </div>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full mt-2 flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Sign Out</span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsSignInOpen(true);
                    }}
                    className="w-full bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </>
  );
}