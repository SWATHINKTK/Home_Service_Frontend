import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import ServiceDetails from '../../components/User/Serivice/ServiceDeatils'
import Footer from '../../components/User/Footer/Footer'

const ServiceDetailsPage:React.FC = () => {
  return (
    <>
    <Navbar user={true} special={false} />
    <ServiceDetails />
    <Footer />
    </>
  )
}

export default ServiceDetailsPage
