import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ChallengesPage from './pages/ChallengesPage';
import ScoreboardPage from './pages/ScoreboardPage';
import LearnPage from './pages/LearnPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/scoreboard" element={<ScoreboardPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}