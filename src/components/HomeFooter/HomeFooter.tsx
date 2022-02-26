import React,{useState} from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import emoji from './assets/images/🙂@2x.png'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import firebase from '../databases/firebase'
import axios from 'axios'
import CurrentUserContext, { UserType } from '../../contextAPI/userContext'
import './HomeFooter.css'
import { ChatBox, Container, EmojiImage, MessageContainer, Message, MessageDiv, Encrypted, ProfileHeader, ProfileImage, EmojiPlus, } from '../Chat/Conversation.styles'
import { SearchContainer, SearchInput } from '../ContactList/ContactList.styles'
import Picker from 'emoji-picker-react'

function HomeFooter({userData}:{userData:any}) {
    // const [text, setText] = useState('')
    const [input, setInput] = useState('')
    const [pickerVisible, togglePicker] = useState(false)

    const onEmojiClick = (event: any, emojiObj: any) => {
      setInput(`  ${input}  ${emojiObj.emoji}  `)
      togglePicker(false)
    }
  
    const { currentUser, authIsLoading, handleLogout } = React.useContext(CurrentUserContext)

    let token = ''

    if (currentUser) {
      token = currentUser.key
    }

   const sendMessage = (e: any) => {
    //  e.preventDefault()
     if (input && e.key==='Enter') {

          axios
            .create({
              baseURL: 'http://localhost:5000',
              headers: {
                Accept: 'application/json',
                withCredentials: true,
                Authorization: `Bearer ${token}`,
              },
            })
            .post(
              `http://localhost:5000/messages/p-message/${userData.userId}`,
              {
                messageContent: input,
              }
            )
            .then(async (response: any) => {
              return response
            })
            .catch((error: any) => {
              console.log(error)
            })
        
      
      setInput('')
   }
  }

  return (
    <div>
      <ChatBox>
        <EmojiPlus>
          <EmojiImage
            src={'/Smile.png'}
            onClick={() => togglePicker(!pickerVisible)}
          />
          <img src='/Plus.svg' />
        </EmojiPlus>
        <SearchContainer>
          {pickerVisible && (
            <Picker
              pickerStyle={{
                position: 'absolute',
                bottom: '100px',
                left: '450px',
              }}
              onEmojiClick={onEmojiClick}
            />
          )}
          <SearchInput
            placeholder='Say something'
            value={input}
            onKeyDown={sendMessage}
            onChange={(e) => setInput(e.target.value)}
          />
        </SearchContainer>
        <button onClick={sendMessage} type='submit'>
          Send
        </button>
        <img src={'/Voice.svg'} />
      </ChatBox>
    </div>
  )
}

export default HomeFooter