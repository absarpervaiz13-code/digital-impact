import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Services from './components/services/services';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';


function App() {
//   const [count, setCount] = useState(0)
//  const [display,setDisplay] = useState(true)
//  const hidebutton =()=>{
//   setDisplay(!display)
//  }
//   const updatecount = () => {
//     setCount(count + 1)
//   }
//   const decreament = () => {
//     setCount(count - 1)
//   }
//   const reset = () => {
//     setCount(0)
//   }


  return (
    <>
      {/* <center>
        { display &&<h1>{count}</h1>}
        <button onClick={updatecount}>click to update</button>
        <button onClick={decreament}>click to decrease</button>
        <button onClick={reset}>click to reset</button>
        <button onClick={hidebutton}>{  (display)?'hidebtn':'showbtn'}</button>
      </center> */}
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
