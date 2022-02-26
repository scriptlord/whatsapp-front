import React from 'react'
import dummyIcon from './assets/images/profiledummyicon.png';

function ProfileSideRight() {
  
  return (
    <div className='profile__rightSection'>
      <img src={dummyIcon} alt='' />
      <h1 className='profile__rightHeader'>
        Keep your phone <br /> connected
      </h1>
      <div>
        <h3 className='profile__rightParag'>
          Whatsapp connects to your phone to sync messages. To reduce <br />{' '}
          data usage. connect your phone to Wi-Fi.
        </h3>
      </div>
    </div>
  )
}

export default ProfileSideRight;
