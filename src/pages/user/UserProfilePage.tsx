import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import ProfileLayout from '../../components/User/ProfileLayout/ProfileLayout'
import UserProfile from '../../components/User/ProfileLayout/UserProfile';
import { Helmet } from 'react-helmet-async';

const UserProfilePage:React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Navbar user={true} special={false} />
      <ProfileLayout component={<UserProfile />} />
    </>
  );
}

export default UserProfilePage;
