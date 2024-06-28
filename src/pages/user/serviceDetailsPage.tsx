import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import ServiceDetails from '../../components/User/Services/ServiceDeatils'
import Footer from '../../components/User/Footer/Footer'
import { Helmet } from 'react-helmet-async'

const ServiceDetailsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Service Details</title>
      </Helmet>
      <Navbar worker={false} special={false} />
      <div className='pt-28'>
        <ServiceDetails />
      </div>
      <Footer />
    </>
  )
}

export default ServiceDetailsPage
