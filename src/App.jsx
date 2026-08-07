import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Services from './components/services/services';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Services' element={<Services/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Portfolio' element={<Portfolio/>}/>
     </Routes>
    </>
  )
}

export default App
