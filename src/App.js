import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your ModalProvider
import { ModalProvider } from './react/context/ModalContext'; // Update this path as per your project structure

import HomeOne from './react/components/homes/home/index.jsx';
import AboutPage from './react/components/about/index.jsx';
import Contact from './react/components/contact/index.jsx';
import Blogs from './react/components/blogs/index.jsx';

function App() {
  return (
    // Wrap the app with ModalProvider
    <ModalProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomeOne />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blogs />} />
        </Routes>
      </Router>
    </ModalProvider>
  );
}

export default App;
