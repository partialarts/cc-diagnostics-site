import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import Nav from '../src/components/common/Nav/Nav';
import './App.css';
import Home from '../src/components/Home/Home';
import Footer from '../src/components/common/Footer/Footer';
import Products from '../src/components/Products/Products';
import About from '../src/components/About/About';
import News from '../src/components/News/News';
import Contact from '../src/components/Contact/Contact';
import IndividualArticle from '../src/components/News/components/IndividualArticle';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="article/:id" element={<IndividualArticle />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
