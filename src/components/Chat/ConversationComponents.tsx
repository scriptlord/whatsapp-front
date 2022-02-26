import { useState, useEffect, useContext } from 'react'
import {
  ChatBox,
  Container,
  EmojiImage,
  MessageContainer,
  Message,
  MessageDiv,
  Encrypted,
  ProfileHeader,
  ProfileImage,
  EmojiPlus,
} from './Conversation.styles'
import { SearchContainer, SearchInput } from '../ContactList/ContactList.styles'
import encrypted from '../HomeNav/assets/images/encrypted-image/Frame 1995.png'
import Picker from 'emoji-picker-react'
import CurrentUserContext from '../../contextAPI/userContext'

// import { messagesList } from '../HomeBody/mockData'

const ConversationComponents = (props: any) => {
  const { selectedChat, messages, userData } = props
  const [messageList, setMessageList] = useState([])
  const { currentUser } = useContext(CurrentUserContext)

  useEffect(() => {
    setMessageList(messages)
  }, [messages])

  console.log(messageList, 'this is the message list')
  return (
    <>
      <MessageContainer>
        <Encrypted>
          <img className='encrypted' src={encrypted} alt='encrypted message' />
        </Encrypted>
        {messageList.map((messageData: any) => {
          console.log(
            messageData,
            'this is the message data from conversations'
          )
          //           if (
          //             messageData.senderId === currentUser.id ||
          //             messageData.receiverId === userData.userId
          //           ){
          // if (
          //   messageData.senderId === currentUser.id ||
          //   messageData.receiverId === currentUser.id
          // )
          //   return (
          //     <MessageDiv isSender={messageData.senderId !== userData.userId}>
          //       <Message isSender={messageData.senderId !== userData.userId}>
          //         {messageData.message}
          //       </Message>
          //     </MessageDiv>
          //   )
          //           }
          if (
            messageData.senderId === currentUser.id &&
            messageData.receiverId === userData.userId
          )
            return (
              <MessageDiv isSender={messageData.senderId !== userData.userId}>
                <Message isSender={messageData.senderId !== userData.userId}>
                  {messageData.message}
                </Message>
              </MessageDiv>
            )
          if (messageData.receiverId === currentUser.id) {
            if (
              messageData.receiverId !== userData.userId &&
              messageData.senderId !== userData.userId
            )
              return <div></div>
            else
              return (
                <MessageDiv isSender={messageData.senderId !== userData.userId}>
                  <Message isSender={messageData.senderId !== userData.userId}>
                    {messageData.message}
                  </Message>
                </MessageDiv>
              )
          }

          // if (
          //   messageData.receiverId !== currentUser.id &&
          //   messageData.senderId === currentUser.id
          // )
          //    (
          //     <div></div>
          //   )
          if (
            messageData.receiverId !== userData.userId &&
            messageData.receiverId === currentUser.id
          )
            return (
              <MessageDiv isSender={messageData.senderId !== userData.userId}>
                <Message isSender={messageData.senderId !== userData.userId}>
                  {messageData.message}
                </Message>
              </MessageDiv>
            )
        })}
      </MessageContainer>
    </>
  )
}
export default ConversationComponents
