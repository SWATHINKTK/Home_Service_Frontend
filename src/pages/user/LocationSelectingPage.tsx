import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import LocationSelecting from '../../components/User/LocationFetchig/LocationSelecting'
import Footer from '../../components/User/Footer/Footer'

const LocationSelectingPage:React.FC = () => {
  return (
    <>
        <Navbar user={true} special={false}/>
        <LocationSelecting />
        <Footer />
    </>
  )
}

export default LocationSelectingPage
