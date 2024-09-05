// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import only what's needed
import { HelmetProvider } from 'react-helmet-async';
import Nav from './components/common/Nav/Nav';
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
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
        <Route path="news/:id" element={<IndividualArticle />} />
      </Routes>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
