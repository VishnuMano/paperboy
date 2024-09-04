import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import Support from './components/Support';
import Team from './components/Team';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <News />
      <Team />
      <Support />
    </div>
  );
}

export default App;
