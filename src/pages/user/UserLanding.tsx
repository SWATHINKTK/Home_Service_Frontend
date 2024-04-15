import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LandingPageBanner from '../../components/user/LandingPageBanner'
import LandingPageServiceSection from '../../components/user/LandingPageServiceSection'
import LandingPageBusiness from '../../components/user/LandingPageBusiness'
import LandingPageProcessSection from '../../components/user/LandingPageProcessSection'
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
