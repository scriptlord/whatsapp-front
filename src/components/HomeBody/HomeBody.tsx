import { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import emoji from '../HomeFooter/assets/images/🙂@2x.png'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'

import encrypted from '../HomeNav/assets/images/encrypted-image/Frame 1995.png'
import demo1 from '../HomeNav/assets/images/image1/img14.png'
import demo2 from '../HomeNav/assets/images/image2/img16.png'
import demo3 from '../HomeNav/assets/images/image3/img15.png'



import './HomeBody.css'
  
function HomeBody({ messages }: { messages: any }) {

  console.log(messages,'from the homebody')
  const [state, setState] = useState({ message: ''})
  const [chat, setChat] = useState<any[]>([])

  // const socketRef = useRef()

  useEffect(() => {
     
    }, [chat])
  
  

  const onTextChange = (e: any) => {
    setState(prev => { return { ...prev, [e.target.name]: e.target.value } })
  }
  console.log(state)
  
  const sendMessage = (e:any) => {
    e.preventDefault()
    console.log(state, 'state')
    setChat([...chat, state])
    console.log(chat)
    setState({ message: '' })
  }
  console.log(chat)
  
	const renderChat = () => {
    return chat.map(({ message }, index) => (
      <div key={index}>
        <h3>
           <span>{message}</span>
        </h3>
      </div>
    ))
  }

  return (
    <div className ='chat_body'>
      <div className='encrypted'>
        <img className='encrypted' src={encrypted} alt='encrypted message' />
      </div>
      <div className='homebody__imageContainer'>
        <div className='homebody__image messageImage'>
          <img src={demo1} alt='dummyImage' />
        </div>
        <div className='homebody__image messageImage'>
          <img src={demo1} alt='dummyImage' />
        </div>
        <div className='homebody__image messageImage'>
          <img src={demo3} alt='dummyImage' />
        </div>
        <div className='homebody__image messageImage'>
          <img src={demo2} alt='dummyImage' />
        </div>
      </div>
      <div>
        <p className='homebody__text messageText'>
          Here are some photos you where asking about
          <span className='chat_timestamp'>{new Date().toUTCString()}</span>
        </p>
      </div>
      <div>
        <div className='homebody__audio messageAudio'></div>
      </div>
    
        <div className='homebody__text messageText sender'>
          {renderChat}
        </div>
     <div className='home__footer'>
      <img src={emoji} alt='emoji' />
      <AddBoxOutlinedIcon />
      <form>
        <input name='message' value={state.message} onChange={e => onTextChange(e)} type='text' placeholder='Say something' />
        <button onClick={sendMessage} type='submit'> Send </button>
      </form>
       <MicIcon />
    </div>
    </div>
  )
}



export default HomeBody
