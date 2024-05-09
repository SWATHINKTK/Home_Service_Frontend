import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import Footer from '../../components/User/Footer/Footer';
import ServiceList from '../../components/User/Serivice/ServiceList';

const ServicePage:React.FC = () => {
  return (
    <>
    <Navbar user={true} />
    <ServiceList />
    <Footer/>
    </>
  )
}

export default ServicePage;
