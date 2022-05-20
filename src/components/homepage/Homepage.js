import React, {useState} from 'react'
import Body from './Body';
import Hero from './Hero';
import Navbar from '../base/Navbar';
import Sidebar from '../base/Sidebar';
import Footer from '../base/Footer';

function Homepage() {
    const [count,setCount] = useState(3)
  return (
    <>
    <Navbar />
    <Hero/>
    <Body count={count}/>
    <div><button onClick={()=>setCount(count+1)}> addCount</button></div>
    <div><button onClick={()=>setCount(count-1)}> reduceCount</button></div>
    <Sidebar/>
    <Footer/>
    </>
  )
}

export default Homepage