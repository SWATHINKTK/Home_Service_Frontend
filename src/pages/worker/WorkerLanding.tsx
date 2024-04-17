import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import WorkerLandingPageBanner from '../../components/worker/landing/WorkerLandingPageBanner';
import LandingPageBusiness from '../../components/user/landingPage/LandingPageBusiness';
import WorkerLandingPageProcessSection from '../../components/worker/landing/WorkerLandingPageProcessSection';
import WorkerFooter from '../../components/worker/WorkerFooter';
import WorkerLandingPageService from '../../components/worker/landing/WorkerLandingPageService';


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
