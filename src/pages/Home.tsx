import React, { useEffect, useState } from 'react'
import SideBar from '../components/sideBars/SideBar'
import '../components/sideBars/style/sidebar.css'
import FriendContextWrapper from '../components/sideBars/context/FriendsContext'
import MainContent from '../components/sideBars/MainContent'
import CurrentUserContext, { UserType } from '../contextAPI/userContext'
import Pusher from 'pusher-js'
import axios from 'axios'
import ProfileSideRight from '../components/mainProfile/ProfileSideRight'

function Home() {
  const { currentUser, authIsLoading, messages, setMessages } =
    React.useContext(CurrentUserContext)

  const [userId, setUserId] = useState('')
  console.log(currentUser, "this is the current user")

          let token: string

          if (currentUser) {
            token = currentUser.key
          }


  
  useEffect(() => {
    var pusher = new Pusher('5ffb74548f527f931d01', {
      cluster: 'mt1',
    })

    var channel = pusher.subscribe('messages')
    channel.bind('inserted', (newMessage: any) => {
      alert(JSON.stringify(newMessage))
      setMessages([...messages, newMessage])
    })

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  const content = () => {
    if (authIsLoading) {
      return <div>Loading...</div>
    } else if (!token) {
      window.open('/login', '_self')
    } else {
      return (
        <FriendContextWrapper>
          <div className='majorContainer'>
            <SideBar setUserId={setUserId} />
            {userId ? (
              <MainContent userId={userId} messages={messages} />
            ) : (
              <ProfileSideRight />
            )}
          </div>
        </FriendContextWrapper>
      )
    }
  }
  return <div>{content()}</div>
}

export default Home