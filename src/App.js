import './App.css';
import Header from './components/Header';
import Hero from "./components/Hero";
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";
import Aboutother from './components/Aboutother';
import About from './components/About';
import React, { useState, useEffect} from 'react'
import MoonLoader from "react-spinners/MoonLoader";



function App() {

  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)

    }, 700/*time*/)
  },[])

  return (
    <div>
      {
        loading?
        <MoonLoader className='ronaldo'
        color="#fc0080"
        size={250}
        speedMultiplier={0.3}
/>
        :
        <div>
          <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/about' element={<Aboutother/>} />
          </Routes>
        </div>
      }
    </div>
    )
}

export default App;
