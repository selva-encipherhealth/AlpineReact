import React from 'react';
// Remove the following line as ReactDOM is not used
// import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../src/react/styles/custom.css";
import "../src/react/styles/style.css";
// Import your ModalProvider
import { ModalProvider } from './react/context/ModalContext'; // Update this path as per your project structure

import HomeOne from './react/components/homes/home/index.jsx';
import AboutPage from './react/components/about/index.jsx';
import Contact from './react/components/contact/index.jsx';
import Blogs from './react/components/blogs/index.jsx';
import Header from './react/components/layout/header/Header.jsx';
import Footer from './react/components/layout/footer/Footer.jsx';
import Career from './react/components/career/index.jsx';
import Services from './react/components/services/index.jsx';
import SingleService from './react/components/single-service/index.jsx';

function App() {
  return (
    // Wrap the app with ModalProvider
    <ModalProvider>
      <Router basename='alpineprohealth'>
        <Header headerPrimary={true} />
        <Routes>
          <Route path='/' element={<HomeOne />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/career' element={<Career />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/inpatient-medical-coding-services" element={<SingleService singleServiceName={"inpatient-medical-coding-services"}/>}  />
          <Route path="/services/outpatient-medical-coding-services" element={<SingleService singleServiceName={"outpatient-medical-coding-services"}/>}  />
          <Route path="/services/risk-adjustment" element={<SingleService singleServiceName={"risk-adjustment"}/>}  />
          <Route path="/services/value-added-services" element={<SingleService singleServiceName={"value-added-services"}/>}  />
          <Route path="/services/revenue-cycle-management" element={<SingleService singleServiceName={"revenue-cycle-management"}/>}  />
          <Route path="/services/physician-quality-reporting" element={<SingleService singleServiceName={"physician-quality-reporting"}/>}  />
        </Routes>
        <Footer />
      </Router>
    </ModalProvider>
  );
}

export default App;
