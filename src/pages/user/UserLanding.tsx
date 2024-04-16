import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LandingPageBanner from '../../components/user/landingPage/LandingPageBanner'
import LandingPageServiceSection from '../../components/user/landingPage/LandingPageServiceSection'
import LandingPageBusiness from '../../components/user/landingPage/LandingPageBusiness'
import LandingPageProcessSection from '../../components/user/landingPage/LandingPageProcessSection'
import Footer from '../../components/user/Footer'

const UserLanding = () => {
  return (
    <>
       <Navbar user={true} />
       <LandingPageBanner />
       <LandingPageServiceSection />
       <LandingPageBusiness />
       <LandingPageProcessSection />
       <Footer />
    </>
  )
}

export default UserLanding;
