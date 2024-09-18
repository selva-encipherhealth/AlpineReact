import 'swiper/css';
import '@/styles/style.css';
import '@/styles/custom.css';

import JobApplyModal from '@/components/modals/JobApplyModal';
import HireModal from '@/components/modals/HireModal';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import { ModalProvider } from '@/context/ModalContext';

export const metadata = {
  title: 'ALPINE PRO HEALTH',
  description: 'Alpine Pro Health is a Medical coding company which deals with US Healthcare industry (Medical Coding & RCM) by providing Quality services with our clients within the turnaround time.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ModalProvider>
          <Header headerPrimary={true} />
          {children}
          <Footer />
          <HireModal />
          <JobApplyModal />
          <ScrollToTop />
        </ModalProvider>
      </body>
    </html>
  );
}
