import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/common/Nav/Nav';
import './App.css'
import Home from './components/Home';
import GoogleSheets from './components/GoogleSheets';
import AirTable from './components/AirTable';
import Footer from './components/common/Nav/Footer'

function App() {
  return (
    <Router>
      <Nav />
      <Footer />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="googlesheets" element={<GoogleSheets />} />
        <Route path="airtable" element={<AirTable />} />
      </Routes>
    </Router>
  );
};

export default App;