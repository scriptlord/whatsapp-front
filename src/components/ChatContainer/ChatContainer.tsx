import { useState } from 'react'
import ContactListComponents from '../ContactList/ContactList'
import ConversationComponents from '../Chat/ConversationComponents'
import {ChatPlaceholder, Container, Placeholder} from './ChatContainer.styles'


function ChatContainer() {
  const [selectedChat, setChat] = useState()
  return (
    <Container>
      <ContactListComponents setChat={setChat} />
      {selectedChat ? (
        <ConversationComponents selectedChat={selectedChat} />
      ) : (
        <Placeholder>
          <ChatPlaceholder src='/welcome-placeholder.jpeg' />
          <span>Keep your phone connected</span>
          WhatsApp connects to your phone to sync messages.
        </Placeholder>
      )}
    </Container>
  )
}
export default ChatContainer
