import React from 'react';
import { BookOpen, Users, Award, Terminal } from 'lucide-react';

export default function Features() {
  return (
    <div className="py-24 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Why Choose picoCTF?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            The perfect platform to start your cybersecurity journey
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Learning Focused",
                description: "Structured challenges with detailed explanations and hints"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Active Community",
                description: "Connect with fellow security enthusiasts and learn together"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Skill Progression",
                description: "Track your progress and earn achievements"
              },
              {
                icon: <Terminal className="h-8 w-8" />,
                title: "Real-World Skills",
                description: "Practice with scenarios based on actual security challenges"
              }
            ].map((feature, index) => (
              <div key={index} className="relative bg-gray-900 rounded-lg p-6">
                <div className="absolute top-6 left-6 text-orange-500">
                  {feature.icon}
                </div>
                <div className="mt-16">
                  <h3 className="text-xl font-medium text-white">{feature.title}</h3>
                  <p className="mt-2 text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}