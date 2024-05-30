import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import ProfileLayout from '../../components/Worker/Profile/WorkerProfileLayout'
import WorkerProfile from '../../components/Worker/Profile/WorkerProfile'

const WorkerProfilePage: React.FC = () => {
  return (
    <>
        <Navbar user={false} special={false}/>
        <ProfileLayout component={<WorkerProfile />}/>
    </>
  )
}

export default WorkerProfilePage
