import React, { useState } from 'react'
import editIcon from './assets/images/editIcon.png'
import dummyImage from './assets/images/dummyPImage.png'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded'
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded'
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'
import { IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'

function ProfileSideLeft() {
  const [alertName, setAlertName] = useState(false)
  const [alertAbout, setAlertAbout] = useState(false)
  const [isEditingName, setIsEditingName] = useState({
    editing: false,
    msg1: 'save',
    msg2: '',
  })
  const [isEditingAbout, setIsEditingAbout] = useState({
    editing: false,
    msg1: 'save',
    msg2: '',
  })

  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [userName, setUserName] = useState('Your Name')
  const [userAbout, setUserAbout] = useState('No Calls, Whatsapp only')
  const [toUpload, setToUpload] = useState(false)
  const [selectFile, setSelectFile] = useState(null)
  // const hidden = false

  const handleAboutSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!about) {
      // display error
    } else {
      //edit the about
      setTimeout(() => {
        if (isEditingAbout.msg2 === 'save') setAlertAbout(false)
        setIsEditingAbout({
          ...isEditingAbout,
          editing: true,
          msg2: 'save',
        })
        setUserAbout(about)
      }, 1000)
    }
  }

  const handleNameSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name) {
      // display error
    } else {
      //edit the name
      setTimeout(() => {
        if (isEditingName.msg2 === 'save') setAlertName(false)
        setIsEditingName({
          ...isEditingName,
          editing: true,
          msg2: 'save',
        })
        setUserName(name)
      }, 1000)
    }
  }
  const handleNameClick = () => {
    setTimeout(() => {
      if (!alertName) setAlertName(true)
      else setAlertName(false)
    }, 1000)
  }
  const handleAboutClick = () => {
    setTimeout(() => {
      if (!alertAbout) setAlertAbout(true)
      else setAlertAbout(false)
    }, 1000)
  }
  const handleImageUpload = () => {
    console.log('i was clicked')
    setTimeout(() => {
      setToUpload(true)
    }, 1000)
  }
  const handleFileSelect = (event?: any) => {
    event.preventDefault()
    console.log(event.target.files)
  }

  const uploader = (event: any) => {
    setTimeout(() => {
      setSelectFile(event.target.files)
    }, 1000)
  }
  // useEffect(()=>{
  // const fetchUser = async () =>{
  //   axios.get('/')
  // }
  // }, [])

  return (
    <div className='profile__leftSection'>
      {/* <!-- beginning of fullscreen minimize and close icons --> */}
      <div className='profile__leftSectionIcons'>
        <CancelOutlinedIcon className='profile__leftSectionIcon close' />
        <MinimizeRoundedIcon className='profile__leftSectionIcon minimize' />
        <FullscreenRoundedIcon className='profile__leftSectionIcon fullscreen' />
      </div>
      {/* <!-- end of fullscreen minimize and close icons -->

     <!-- back to chat space begins --> */}
      <div className='profile__goBack'>
        <div className='profile__goBackArrow'>
          <Link to={`/home`}>
            <IconButton>
              <KeyboardBackspaceRoundedIcon />
            </IconButton>
          </Link>
        </div>
        <div className='profile__goBackText'>Profile</div>
      </div>
      {/* <!-- back to chat space ends -->

     <!-- upload image begins --> */}

      <div className='profile__upload'>
        {!toUpload && (
          <div className='profile__btnImage' onClick={handleImageUpload}>
            <div className='profile__uploadImage'>
              <img src={dummyImage} alt='' />
            </div>
            <div className='profile__uploadIcon'>
              <PhotoCameraOutlinedIcon className='camera' />
            </div>

            <div className='profile__uploadText'>Change Profile Picture</div>
          </div>
        )}
        {toUpload && (
          <form action=''>
            <input
              type='file'
              id='myFile'
              name='filename'
              onChange={handleFileSelect}
            />
            <input type='submit' onClick={uploader} />
          </form>
        )}
      </div>

      {/* <!-- upload image ends -->

     <!-- text sections begin --> */}
      <div className='profile__detailsName'>
        <div className='profile__details flex'>
          <div className='profile__text'>Your Name</div>
          <div className='profile__textIcon'>
            <button className='profile__btn' onClick={handleNameClick}>
              <img src={editIcon} alt='' />
            </button>
          </div>
        </div>
        {alertName && (
          <div>
            <form
              action=''
              className='profile__form'
              onSubmit={handleNameSubmit}
            >
              <input
                className='profile__input'
                type='text'
                value={name}
                placeholder='your name'
                onChange={(event) => {
                  setName(event.target.value)
                }}
              />
              <button type='submit' className='profile__submitBtn'>
                {isEditingName.editing
                  ? isEditingName.msg2
                  : isEditingName.msg1}
              </button>
              <button
                className='profile__submitBtn'
                onClick={() => {
                  setTimeout(() => {
                    setAlertName(false)
                  }, 1000)
                }}
              >
                back
              </button>
            </form>
          </div>
        )}
        <div className='profile__textName'>{userName}</div>
        <div className='profile__textDesc'>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </div>
      </div>
      <div className='profile__detailsAbout'>
        <div className='profile__details flex'>
          <div className='profile__text'>About</div>
          <div className='profile__textIcon'>
            <button className='profile__btn' onClick={handleAboutClick}>
              <img className='profile__btnImage' src={editIcon} alt='' />
            </button>
          </div>
        </div>
        {alertAbout && (
          <div>
            <form
              action=''
              className='profile__form'
              onSubmit={handleAboutSubmit}
            >
              <input
                className='profile__input'
                type='text'
                value={about}
                placeholder='No calls whatsapp only'
                onChange={(event) => {
                  setAbout(event.target.value)
                }}
              />
              <button type='submit' className='profile__submitBtn'>
                {isEditingAbout.editing
                  ? isEditingAbout.msg2
                  : isEditingAbout.msg1}
              </button>
              <button
                className='profile__submitBtn'
                onClick={() => {
                  setTimeout(() => {
                    setAlertAbout(false)
                  }, 1000)
                }}
              >
                back
              </button>
            </form>
          </div>
        )}
        <div className='profile__textAbout'>{userAbout}</div>
      </div>
      {/* <!-- text sections end --> */}
    </div>
  )
}

export default ProfileSideLeft
