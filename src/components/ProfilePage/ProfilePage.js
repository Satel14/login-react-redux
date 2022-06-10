import React from 'react'
import './style.css'
const ProfilePage = ({login}) => {
  return (
    <div className='welcome'>Welcome, {login}</div>
  )
}

export default ProfilePage