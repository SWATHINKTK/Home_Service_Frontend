import React from 'react'
import ProfileLayout from '../components/Worker/Profile/WorkerProfileLayout'
import Chat from '../components/Common/Chat/Chat'
import Navbar from '../components/Common/Navbar/Navbar'

const ChatPage = () => {
  return (
    <>
        <Navbar user={false} special={false} />
        <ProfileLayout component={<Chat/>}/>
    </>
  )
}

export default ChatPage
