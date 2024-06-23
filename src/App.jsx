import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/common/Nav/Nav';
import './App.css'
import LandingPage from './components/LandingPage';
import GoogleSheets from './components/GoogleSheets';
import AirTable from './components/AirTable';

function App() {
return (
<Router>
      <Nav />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<LandingPage />} /> 
        <Route path="googlesheets" element={<GoogleSheets />} />
        <Route path="airtable" element={<AirTable />} />
      </Routes>
    </Router>
);
};

export default App;