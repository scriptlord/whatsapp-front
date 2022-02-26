import { contactList } from '../HomeBody/mockData'
import {ContactInfo, ContactItem, ContactName, Container, MessageText, MessageTime, ProfileIcon, ProfileImage, ProfileInfoDiv, SearchBox, SearchContainer, SearchIcon, SearchInput} from './ContactList.styles'

const ContactComponent = (props: any) => {
  const { userData, setChat } = props
  return (
    <ContactItem onClick={() => setChat(userData)}>
      <ProfileIcon src={userData.profilePic} />
      <ContactInfo>
        <ContactName>{userData?.name}</ContactName>
        <MessageText>{userData?.lastText}</MessageText>
      </ContactInfo>
      <MessageTime> {userData?.lastTextTime}</MessageTime>
    </ContactItem>
  )
}
const ContactListComponents = (props: any) => {
  return (
    <Container>
      <ProfileInfoDiv>
        <ProfileImage src='/profile/theindiandev.jpeg' />
      </ProfileInfoDiv>
      <SearchBox>
        <SearchContainer>
          <SearchIcon src={'/search-icon.svg'} />
          <SearchInput placeholder='Search or start new chat' />
        </SearchContainer>
      </SearchBox>
      {contactList.map((userData) => (
        <ContactComponent
          key={userData.id}
          userData={userData}
          setChat={props.setChat}
        />
      ))}
    </Container>
  )
}
export default ContactListComponents
