import React, { useState } from 'react'
import { FaWhatsapp, FaEnvelope, FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FormGroup } from '@blueprintjs/core'
import './Card.css'
import GenerateLink, { TemplateType } from './GenerateLink'
import CurrentUserContext, { UserType } from '../../contextAPI/userContext'
import axios from 'axios'

type UserForm = {
  isSubmitting: boolean
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  password: string
  confirmPassword: string
}

const CardRegister = () => {
  const [formData, setFormData] = React.useState<UserForm>({
    isSubmitting: false,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  })

  const { isSubmitting, firstName, lastName, email, phoneNumber, password, confirmPassword } =
    formData

  const handleError = (error: any) => {
    alert(error)
    setFormData({
      ...formData,
      isSubmitting: false,
    })
  }

  const handleRegistration = (evt: React.FormEvent) => {
    evt?.preventDefault()

    if (isValid) {
      setFormData({ ...formData, isSubmitting: true })


      axios
        .post('http://localhost:5000/users/signup', {
          firstName,
          lastName,
          email,
          phoneNumber,
          password
        })
        .then(
          async (response: any) => {

            const userData  = response.data

            if (userData) {
              alert(
                'Registration successful. Please login and verify your email to access new features'
              )
              window.open('/login', '_self')

            } else {
              handleError('An error occurred: Possible causes => 1. user may already exist. 2. Phone number not correct 3. Passwords Do not match')
            }
          }
        )
        .catch((error: any) => {
          handleError(
            'An error occurred: Possible causes => 1. user may already exist. 2. Phone number not correct 3. Passwords Do not match'
          )
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
  const isValid = firstName && lastName && email && password

  return (
    <div className='container'>
      <form className='form__card' action='' onSubmit={handleRegistration}>
        <div>
          <div className='form__title'>
            <span className='whatsapp__icon'>
              <FaWhatsapp />
            </span>
            <p>WhatsApp Clone Team D</p>
          </div>
          <p className='form__header'>Connect with the world</p>
          <p className='form__text'>Register/Signup</p>
        </div>
        <div>
          <FormGroup label='First Name' labelFor='firstName'>
            {' '}
            <div className='input__div-1'>
              <span className='envelope'>
                <FaEnvelope />
              </span>
              <input
                className='card__input'
                id='firstName'
                type='text'
                value={firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                placeholder='First Name'
              />
            </div>
          </FormGroup>
          <FormGroup label='Last Name' labelFor='lastName'>
            {' '}
            <div className='input__div-1'>
              <span className='envelope'>
                <FaEnvelope />
              </span>
              <input
                className='card__input'
                id='lastName'
                type='text'
                value={lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                placeholder='Last Name'
              />
            </div>
          </FormGroup>
          <FormGroup label='Email' labelFor='email'>
            {' '}
            <div className='input__div-1'>
              <span className='envelope'>
                <FaEnvelope />
              </span>
              <input
                className='card__input'
                id='email'
                type='email'
                value={email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder='Email'
              />
            </div>
          </FormGroup>
          <FormGroup label='phoneNumber' labelFor='phoneNumber'>
            {' '}
            <div className='input__div-1'>
              <span className='envelope'>
                <FaEnvelope />
              </span>
              <input
                className='card__input'
                id='phoneNumber'
                type='number'
                value={phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                placeholder='Phone No'
              />
            </div>
          </FormGroup>
          <FormGroup label='Password' labelFor='password'>
            {' '}
            <div className='input__div-2'>
              <span className='lock'>
                <FaLock />
              </span>
              <input
                className='card__input'
                id='password'
                type='password'
                value={password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder='Password'
              />
            </div>
          </FormGroup>
          <FormGroup label='Confirm Password' labelFor='confirmPassword'>
            {' '}
            <div className='input__div-2'>
              <span className='lock'>
                <FaLock />
              </span>
              <input
                className='card__input'
                id='confirmPassword'
                type='password'
                value={confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                placeholder='Confirm Password'
              />
            </div>
          </FormGroup>
          <div>
            <button
              type='submit'
              className='card__button'
              disabled={isSubmitting}
            >
              <span className='button__text'>Register</span>
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
            dont have an account yet? <Link to='/login'>Login</Link>{' '}
          </p>
        </div>
      </form>
    </div>
  )
}

export default CardRegister
