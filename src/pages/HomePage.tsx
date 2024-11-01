import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ChallengePreview from '../components/ChallengePreview';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <ChallengePreview />
    </main>
  );
}