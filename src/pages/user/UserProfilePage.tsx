import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import ProfileLayout from '../../components/User/ProfileLayout/ProfileLayout'

const UserProfile:React.FC = () => {
  return (
    <>
      <Navbar user={true} />
      <ProfileLayout />
    </>
  );
}

export default UserProfile
