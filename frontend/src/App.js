import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import Team from './components/Team';
import Support from './components/Support';

const App = () => {
  const newsRef = useRef(null);
  const teamRef = useRef(null);
  const supportRef = useRef(null);

  const scrollToNews = () => {
    if (newsRef.current) {
      newsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSupport = () => {
    if (supportRef.current) {
      supportRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar scrollToNews={scrollToNews} scrollToTeam={scrollToTeam} scrollToSupport={scrollToSupport} />
      <Hero />
      <News ref={newsRef} />
      <Team ref={teamRef} />
      <Support ref={supportRef} />
    </div>
  );
};

export default App;
