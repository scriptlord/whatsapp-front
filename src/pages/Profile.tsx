import React, {useState} from 'react';
import ProfileSideLeft from '../components/mainProfile/ProfileSideLeft'
import ProfileSideRight from '../components/mainProfile/ProfileSideRight'


import '../components/mainProfile/assets/Profile.css'

function Profile() {

  return <div className='profile flex'>
     <ProfileSideLeft/>
     <ProfileSideRight/>
  </div>
}

export default Profile;
