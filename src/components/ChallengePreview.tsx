import React from 'react';
import { Lock, Unlock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ChallengePreview() {
  const navigate = useNavigate();
  
  const challenges = [
    {
      title: "Inspect Element",
      category: "Web Exploitation",
      points: 100,
      difficulty: "Easy",
      solved: true
    },
    {
      title: "Buffer Overflow",
      category: "Binary Exploitation",
      points: 200,
      difficulty: "Medium",
      solved: false
    },
    {
      title: "RSA Basics",
      category: "Cryptography",
      points: 150,
      difficulty: "Medium",
      solved: true
    },
    {
      title: "Memory Analysis",
      category: "Forensics",
      points: 300,
      difficulty: "Hard",
      solved: false
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Featured Challenges
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Start with these popular challenges
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              onClick={() => navigate('/challenges')}
              className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 hover:bg-gray-800/70 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{challenge.title}</h3>
                  <p className="text-gray-400 mt-1">{challenge.category}</p>
                </div>
                <div className="text-orange-500">
                  {challenge.solved ? <Unlock className="h-6 w-6" /> : <Lock className="h-6 w-6" />}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-500/10 text-orange-500">
                  {challenge.points} pts
                </span>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  challenge.difficulty === 'Easy' ? 'bg-green-500/10 text-green-500' :
                  challenge.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' :
                  'bg-red-500/10 text-red-500'
                }`}>
                  {challenge.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/challenges')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
          >
            View All Challenges
          </button>
        </div>
      </div>
    </div>
  );
}