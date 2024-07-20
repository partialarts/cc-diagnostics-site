import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/common/Nav/Nav';
import './App.css'
import Home from './components/Home/Home';
import GoogleSheets from './components/GoogleSheets';
import AirTable from './components/AirTable';
import Footer from './components/common/Footer/Footer'
import Technology from './components/Technology/Technology';
import About from './components/About/About';
import News from './components/News/News';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Nav />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="technology" element={<Technology />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;