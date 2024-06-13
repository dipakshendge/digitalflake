import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './componants/login/login'
import './App.css'
import State from './pages/state'
import Wearhouse from './pages/wearhouse'
import City from './pages/city'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/state' element={<State />}/>
          <Route path='/city' element={<City />}/>
          <Route path='/wearhouse' element={<Wearhouse />}/>
          
          {/* <Route path='logout' element={<Logout />} /> */}
          
          {/* <Route path='/admin' element={<AdminLayout />}>
            <Route path='users' element={<AdminUsers />} />
            <Route path='contacts' element={<AdminContacts />} />
          </Route> */}
        </Routes>

        
      </BrowserRouter> 
    </>
  )
}

export default App
