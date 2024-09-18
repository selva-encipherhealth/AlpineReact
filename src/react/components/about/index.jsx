'use client';

import { Breadcrumb } from '../common/Breadcrumb';
import AboutCompany from './AboutCompany';
import AboutCounter from './AboutCounter';
import AboutMission from './AboutMission';
import AboutTimeline from './AboutTimeline';
import useLoader from '../../hooks/useLoader';
import Loader from '../common/Loader';

const AboutPage = () => {
  const loading = useLoader();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumb title="About Company" />
      <AboutCompany />
      <AboutCounter />
      <AboutMission />
      <AboutTimeline />
    </>
  );
};

export default AboutPage;
