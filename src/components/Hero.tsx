import React from 'react';
import { Flag, Shield, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Hero() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Learn Cybersecurity</span>
            <span className="block text-orange-500">Through Challenges</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join millions of cybersecurity enthusiasts in the world's largest CTF learning platform. Practice your skills, compete with others, and learn as you go.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
            <button
              onClick={() => navigate(isAuthenticated ? '/challenges' : '/learn')}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 md:text-lg md:px-10"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/challenges')}
              className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-500 bg-gray-800 hover:bg-gray-700 md:text-lg md:px-10"
            >
              View Challenges
            </button>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 text-center">
              <div className="flex justify-center">
                <Flag className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">300+ Challenges</h3>
              <p className="mt-2 text-gray-400">From beginner to advanced levels across multiple categories</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 text-center">
              <div className="flex justify-center">
                <Trophy className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Global Competition</h3>
              <p className="mt-2 text-gray-400">Compete with players worldwide and climb the leaderboard</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Learn Security</h3>
              <p className="mt-2 text-gray-400">Master cybersecurity concepts through hands-on practice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}