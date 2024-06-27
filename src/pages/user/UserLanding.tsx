import React  from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import LandingPageBanner from '../../components/User/LandingSections/LandingPageBanner'
import LandingPageServiceSection from '../../components/User/LandingSections/LandingPageServiceSection'
import LandingPageBusiness from '../../components/User/LandingSections/LandingPageBusiness'
import LandingPageProcessSection from '../../components/User/LandingSections/LandingPageProcessSection'
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
