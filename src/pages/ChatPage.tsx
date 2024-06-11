import React from 'react'
import ProfileLayout from '../components/Worker/Profile/WorkerProfileLayout'
import Conversation from '../components/Common/Chat/Conversation'
import Navbar from '../components/Common/Navbar/Navbar'

const ChatPage:React.FC = () => {
  return (
    <>
        <Navbar user={false} special={false} />
        <ProfileLayout component={<Conversation/>}/>
    </>
  )
}

export default ChatPage
