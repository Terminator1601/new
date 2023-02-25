import React from 'react';
// import './App.css';
import LandingPage from './LandingPage/LandingPage.js';
import {BrowserRouter as Router,Route} from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' element={<LandingPage />} />
      </Router>
      <h1>hiiiiii</h1>
    </div>
  );
}

export default App;
