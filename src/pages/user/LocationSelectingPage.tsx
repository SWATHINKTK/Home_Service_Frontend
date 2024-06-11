import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import LocationSelecting from '../../components/User/LocationFetchig/LocationSelecting'
import Footer from '../../components/User/Footer/Footer'
import { Helmet } from 'react-helmet-async'

const LocationSelectingPage:React.FC = () => {
  return (
    <>
        <Helmet>
        <title>Location</title>
        </Helmet>
        <Navbar user={true} special={false}/>
        <LocationSelecting />
        <Footer />
    </>
  )
}

export default LocationSelectingPage
