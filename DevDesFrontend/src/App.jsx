import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
