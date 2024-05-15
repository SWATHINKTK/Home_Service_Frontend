import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import ServiceDetails from '../../components/User/Serivice/ServiceDeatils'

const ServiceDetailsPage:React.FC = () => {
  return (
    <>
    <Navbar user={true} special={false} />
    <ServiceDetails />
    </>
  )
}

export default ServiceDetailsPage
