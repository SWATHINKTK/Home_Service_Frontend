import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import Footer from '../../components/User/Footer/Footer';
import ServiceList from '../../components/User/Services/ServiceList';
import { Helmet } from 'react-helmet-async';

const ServicePage:React.FC = () => {
  return (
    <>
    <Helmet>
      <title>Services</title>
    </Helmet>
    <Navbar worker={false} special={false} />
    <div className='pt-28'>
    <ServiceList />
    </div>
    <Footer/>
    </>
  )
}

export default ServicePage;
