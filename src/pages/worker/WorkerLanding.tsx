import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from '../../components/Common/Navbar/Navbar';
import WorkerLandingPageBanner from '../../components/Worker/LandingPageSections/WorkerLandingPageBanner';
import LandingPageBusiness from '../../components/User/LandingSections/LandingPageBusiness';
import WorkerLandingPageProcessSection from '../../components/Worker/LandingPageSections/WorkerLandingPageProcessSection';
import WorkerFooter from '../../components/Worker/Footer/WorkerFooter';
import WorkerLandingPageService from '../../components/Worker/LandingPageSections/WorkerLandingPageService';


const WorkerLanding:React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Worker</title>
      </Helmet>
      <Navbar worker={true} special={true} />
      <WorkerLandingPageBanner />
      <WorkerLandingPageProcessSection />
      <LandingPageBusiness />
      <WorkerLandingPageService />
      <WorkerFooter />
    </>
  )
}

export default WorkerLanding
