import Navbar from "./components/Navbar/Navbar"
import LandingPageBanner from "./components/user/LandingPageBanner"
import LandingPageBusiness from "./components/user/LandingPageBusiness"
import LandingPageServiceSection from "./components/user/LandingPageServiceSection"




function App() {
 
  return (
    <>
     <Navbar/>
      {/* <Login/> */}
      <LandingPageBanner/>
      <LandingPageServiceSection/>
      <LandingPageBusiness/>
    </>
  )
}

export default App
