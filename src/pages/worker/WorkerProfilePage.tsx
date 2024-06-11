import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from '../../components/Common/Navbar/Navbar'
import ProfileLayout from '../../components/Worker/Profile/WorkerProfileLayout'
import WorkerProfile from '../../components/Worker/Profile/WorkerProfile'

const WorkerProfilePage: React.FC = () => {
  return (
    <>
        <Helmet>
        <title>Profile</title>
        </Helmet>
        <Navbar user={false} special={false}/>
        <ProfileLayout component={<WorkerProfile />}/>
    </>
  )
}

export default WorkerProfilePage
