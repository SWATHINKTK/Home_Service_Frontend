import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import LandingPageBanner from '../../components/User/LandingPageSections/LandingPageBanner'
import LandingPageServiceSection from '../../components/User/LandingPageSections/LandingPageServiceSection'
import LandingPageBusiness from '../../components/User/LandingPageSections/LandingPageBusiness'
import LandingPageProcessSection from '../../components/User/LandingPageSections/LandingPageProcessSection'
import Footer from '../../components/User/Footer/Footer'

const UserLanding = () => {
  return (
    <>
       <Navbar user={true} special={false} />
       <LandingPageBanner />
       <LandingPageServiceSection />
       <LandingPageBusiness />
       <LandingPageProcessSection />
       <Footer />
    </>
  )
}

export default UserLanding;
