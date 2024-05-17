import React from 'react'
import Navbar from '../../components/Common/Navbar/Navbar'
import ProfileLayout from '../../components/User/ProfileLayout/ProfileLayout'
import UserProfile from '../../components/User/ProfileLayout/UserProfile';

const UserProfilePage:React.FC = () => {
  return (
    <>
      <Navbar user={true} special={false} />
      <ProfileLayout component={<UserProfile />} head='Account Information' />
    </>
  );
}

export default UserProfilePage;
