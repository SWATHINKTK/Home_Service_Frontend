import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar';
import WorkerLandingPageBanner from '../../components/Worker/LandingPageSections/WorkerLandingPageBanner';
import LandingPageBusiness from '../../components/User/LandingPageSections/LandingPageBusiness';
import WorkerLandingPageProcessSection from '../../components/Worker/LandingPageSections/WorkerLandingPageProcessSection';
import WorkerFooter from '../../components/Worker/Footer/WorkerFooter';
import WorkerLandingPageService from '../../components/Worker/LandingPageSections/WorkerLandingPageService';


const WorkerLanding = () => {
  return (
    <>
    <Navbar user={false} />
    <WorkerLandingPageBanner />
    <WorkerLandingPageProcessSection />
    <LandingPageBusiness />
    <WorkerLandingPageService />
    <WorkerFooter />
    </>
  )
}

export default WorkerLanding
