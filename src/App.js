import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Quiz />
    </div>
  );
}

export default App;