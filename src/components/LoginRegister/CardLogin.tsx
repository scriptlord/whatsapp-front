import React, { useState, useContext } from 'react'
import { FaWhatsapp, FaEnvelope, FaLock } from 'react-icons/fa'
import { FormGroup, Callout } from '@blueprintjs/core'
import { Link } from 'react-router-dom'
import GenerateLink, { TemplateType } from './GenerateLink'
import './Card.css'
import CurrentUserContext, {UserType} from '../../contextAPI/userContext'
import axios from 'axios'

type UserForm = {
  isSubmitting: boolean
  email: string
  password: string
}

const CardLogin = () => {
  const [formData, setFormData] = React.useState<UserForm>({
    isSubmitting: false,
    email: '',
    password: '',
  })

  const { isSubmitting, email, password } = formData

  const { setCurrentUser } = React.useContext(CurrentUserContext)

    const handleError = (error: any) => {
      alert(error)
      setFormData({
        ...formData,
        isSubmitting: false,
      })
    }
console.log("i got here", email);
      const handleLogin = (evt: React.FormEvent) => {
        evt?.preventDefault()


        console.log({email, password})

        if (isValid) {
          setFormData({ ...formData, isSubmitting: true })

          axios
            .post('http://localhost:5000/users/login', {
              email,
              password,
            })
            .then(async (response: any) => {
              
              const userToken  = response?.data.accessToken
              const userData = response?.data.userData
    
              
              console.log("user", response?.data);

              if (userToken) {
                localStorage.setItem('key', userToken)
                localStorage.setItem('firstName', userData.firstName)
                localStorage.setItem('lastName', userData.lastName)
                localStorage.setItem('email', userData.email)
                localStorage.setItem('id', userData.id)
                localStorage.setItem("profilePic", userData.profilePic);
                setCurrentUser(userData)
                
                
                alert(
                  'Registration successful. Please verify your email to access new features'
                )
                window.open('/home', '_self')
              } else {
                console.log("this is the else")
                handleError(
                  'An error occurred: Possible causes => 1. user may already exist. 2. Phone number not correct 3. Passwords Do not match'
                )
              }
            })
            .catch((error: any) => {
            console.log("error.response.data");
            console.log(error);
              // handleError(
              //   'An error occurred: Possible causes => 1. user may already exist. 2. Phone number not correct 3. Passwords Do not match'
              // )
              setFormData({
                ...formData,
                isSubmitting: false,
              })
            })
        } else {
          handleError('Please fill out all fields')
          setFormData({ ...formData })
        }
      }
      const isValid = email && password

  return (
    <div className='container'>
      <form className='form__card' action='' onSubmit={handleLogin}>
        <div className='form__title'>
          <span className='whatsapp__icon'>
            <FaWhatsapp />
          </span>
          <p>WhatsApp Clone Team D</p>
        </div>
        <p className='form__header'>Login</p>
        <div>
          <FormGroup label='Email' labelFor='email'>
            <div className='input__div-1'>
              <span className='envelope'>
                <FaEnvelope />
              </span>
              <input
                className='card__input'
                id='email'
                value={email}
                type='email'
                placeholder='Email'
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </FormGroup>

          <FormGroup label='Password' labelFor='Password'>
            <div className='input__div-2'>
              <span className='lock'>
                <FaLock />
              </span>
              <input
                id='password'
                value={password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className='card__input'
                type='password'
                placeholder='Password'
              />
            </div>
          </FormGroup>

          <div>
            <button
              type='submit'
              className='card__button'
              disabled={isSubmitting}
            >
              <span className='button__text'>Login</span>
            </button>
          </div>
        </div>
        <div className='social__links'>
          <p>or continue with social profile</p>
          <div className='social__media'>
            <GenerateLink authMethod={TemplateType.GOOGLE} />
            <GenerateLink authMethod={TemplateType.FACEBOOK} />
          </div>
          <p>
            dont have an account yet? <Link to='/register'>Register</Link>{' '}
          </p>
        </div>
      </form>
    </div>
  )
}

export default CardLogin
