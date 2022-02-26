import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import './App.css'
import CardLogin from './components/LoginRegister/CardLogin'
import CardRegister from './components/LoginRegister/CardRegister'
// import FacebookLogin from 'react-facebook-login'
// import SearchBar from './components/SearchBar';
//  import MainView from './components/MainView';
// import UserData from './Data.json';
import Profile from './pages/Profile'
import Home from './pages/Home';
// import Chat from './components/Chat/ConversationComponents'
import ChatContainer from './components/ChatContainer/ChatContainer'
import { CurrentUserProvider } from './contextAPI/userContext'


function App() {
  return (
    <>
      <CurrentUserProvider>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/' element={<Navigate replace to='/login' />} />
          <Route path='/login' element={<CardLogin />} />
          <Route path='/register' element={<CardRegister />} />
          <Route path='/home' element={<Home />} />
          <Route path='/chat' element={<ChatContainer />} />
        </Routes>
      </CurrentUserProvider>
    </>
  )
}

export default App
