import React from 'react'
import {BrowserRouter, Link,Route, Routes} from 'react-router-dom';
import {logo, logo2} from './assets';
import { Home,CreatePost,Chat,Codex } from './pages';
import './App.css';
import './normal.css';

const App = () => {
  return (
  <BrowserRouter>
  <header className='w-full flex justify-between items-center bg-white sm:px-8 px--4 py-4 border-b border-b-[#e6ebf4]'>
    <Link to="/">
      <img src={logo2} alt="logo" className='w-36' />
      <img src={logo} alt="logo" className='w-28 ml-12' />
    </Link>
    <div className='mx-5'>
    <Link to="/codex" className='font-inter font-medium bg-[#0070ad] text-white px-5 py-3  rounded-md'>
      Codex
      </Link>
    <Link to="/chat" className='font-inter font-medium bg-[#0070ad] text-white px-5 py-3 mx-2 rounded-md'>
      Chat
      </Link>
    <Link to="/create-post" className='font-inter font-medium bg-[#0070ad] text-white px-5 py-3 rounded-md'>Create</Link>
    </div>
  </header>
  <main className='sm:p-8 px-4 py-8 w-full bg-[#E5E4E2] min-h-[calc (100vh-73px)]'>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/codex' element={<Codex />} />
      <Route path='/create-post' element={<CreatePost />} />
      <Route path='/chat' element={<Chat />} />
     </Routes>
  </main>
  </BrowserRouter>
  )
}

export default App