import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import FAQSection from './FAQSection';


const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/faq" element={<FAQSection />} />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;
