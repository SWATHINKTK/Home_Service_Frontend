import Navbar from "./components/Navbar/Navbar"
import LandingPageBanner from "./components/user/LandingPageBanner"
import LandingPageBusiness from "./components/user/LandingPageBusiness"
import LandingPageProcessSection from "./components/user/LandingPageProcessSection"
import LandingPageServiceSection from "./components/user/LandingPageServiceSection"




function App() {
 
  return (
    <>
     <Navbar/>
      {/* <Login/> */}
      <LandingPageBanner/>
      <LandingPageServiceSection/>
      <LandingPageBusiness/>
      <LandingPageProcessSection />
    </>
  )
}

export default App
