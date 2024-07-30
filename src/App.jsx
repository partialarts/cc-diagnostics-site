import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/common/Nav/Nav';
import './App.css';
import Home from './components/Home/Home';
import GoogleSheets from './components/GoogleSheets';
import AirTable from './components/AirTableTest';
import Footer from './components/common/Footer/Footer';
import Technology from './components/Technology/Technology';
import About from './components/About/About';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Articles from './components/News/components/Articles';
import IndividualArticles from './components/News/IndvidualNewsItems/IndividualArticles';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="technology" element={<Technology />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
        <Route path="news/articles" element={<Articles />} />
        <Route path="article/:id" element={<IndividualArticles />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
