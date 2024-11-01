import React from 'react';

export default function AboutPage() {
  return (
    <main className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">About picoCTF</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-400">
          picoCTF is a free computer security education program with original content built on a capture-the-flag framework created by security and privacy experts at Carnegie Mellon University.
        </p>
      </div>
    </main>
  );
}