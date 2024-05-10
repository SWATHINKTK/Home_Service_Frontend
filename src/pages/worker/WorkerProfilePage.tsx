import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import ProfileLayout from '../../components/Worker/Profile/WorkerProfileLayout'

const WorkerProfilePage: React.FC = () => {
  return (
    <>
        <Navbar user={false} special={false}/>
        <ProfileLayout/>
    </>
  )
}

export default WorkerProfilePage
