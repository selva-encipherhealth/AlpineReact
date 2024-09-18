import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/style.css'; // Importing CSS files
import './styles/custom.css';

import Footer from '../../components/layout/footer/Footer';
import Header from '../../components/layout/header/Header';
import HireModal from '../../components/modals/HireModal';
import JobApplyModal from '../../components/modals/JobApplyModal';
import ScrollToTop from '../../components/ScrollToTop';
import ModalProvider from '../../context/ModalContext'; // Ensure this file exports a provider component

import SectionShapeBottom from './assets/images/home/section-shape-bottom.png';
import SectionShapeTop from './assets/images/home/section-shape-top.png';

function App() {
  return (
    <Router>
      <ModalProvider>
        <Header headerPrimary={false} />
        <div className="relative overflow-hidden">
          <img
            src={SectionShapeTop}
            alt="Shape"
            className="absolute top-[330px] right-0 -z-10"
          />
          <Routes>
            <Route path="/" element={<MainContent />} />
            {/* Add other routes here */}
          </Routes>
          <img
            src={SectionShapeBottom}
            alt="Shape"
            className="absolute bottom-0 left-0 -z-10"
          />
        </div>
        <Footer />
        <HireModal />
        <JobApplyModal />
        <ScrollToTop />
      </ModalProvider>
    </Router>
  );
}

function MainContent() {
  return (
    <div>
      {/* Render your main content here */}
    </div>
  );
}

export default App;
