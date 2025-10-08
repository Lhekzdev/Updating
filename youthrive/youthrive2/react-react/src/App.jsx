import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './components/Car'
import Bottle from './components/Bottle'
import Blog from './components/Blog/Blog'
import ItBerries from './components/Itberries/ItBerries'
import Nav from './components/nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Error from './components/error/Error'
import Details from './components/details/Details'
import Latest from './components/latestpage/Latest'


// import Basics from './components/Basics'
// import Home from './components/Home'

// import Books from './components/Books'




// js environ

function App() {
// js environ
  return (
  
     <div>
        <Nav />
        {/* < Details/> */}
        {/* < Books/>
        < Basics/>
        
        < Home/> */}
     
        {/* router step 3 */}
        <Routes>
          <Route path='/bottle' element={<Bottle />} />
          <Route path='/car' element={<Car />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/Latest' element={<Latest />} />
          {/* /blog/sidosids */}
          <Route path='/blog/:id' element={<Details />} /> 
           <Route path='*' element={<Error />} /> 
        </Routes>
     </div> 
  
  )
}

// js environ

export default App
