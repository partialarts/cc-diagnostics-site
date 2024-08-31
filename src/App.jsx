import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import Nav from './components/common/Nav/Nav';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/common/Footer/Footer';
import Products from './components/Products/Products';
import About from './components/About/About';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import IndividualArticle from './components/News/components/IndividualArticle/IndividualArticle';

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
