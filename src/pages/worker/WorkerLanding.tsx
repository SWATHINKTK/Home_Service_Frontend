import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import WorkerLandingPageBanner from '../../components/worker/WorkerLandingPageBanner';
import LandingPageBusiness from '../../components/user/LandingPageBusiness';
import WorkerLandingPageProcessSection from '../../components/worker/WorkerLandingPageProcessSection';
import WorkerFooter from '../../components/worker/WorkerFooter';
import WorkerLandingPageService from '../../components/worker/WorkerLandingPageService';


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
