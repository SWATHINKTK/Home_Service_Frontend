import React  from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import LandingPageBanner from '../../components/User/LandingPageSections/LandingPageBanner'
import LandingPageServiceSection from '../../components/User/LandingPageSections/LandingPageServiceSection'
import LandingPageBusiness from '../../components/User/LandingPageSections/LandingPageBusiness'
import LandingPageProcessSection from '../../components/User/LandingPageSections/LandingPageProcessSection'
import Footer from '../../components/User/Footer/Footer'
import { Helmet } from 'react-helmet-async'


const UserLanding:React.FC = () => {
console.log("user landing")
  
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
       <Navbar user={true} special={false} />
       <div className='pt-24'>
       <LandingPageBanner />
       <LandingPageServiceSection />
       <LandingPageBusiness />
       <LandingPageProcessSection />
       <Footer />
       </div>
    </>
  )
}

export default UserLanding;
