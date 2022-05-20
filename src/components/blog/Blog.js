import React, {useState} from 'react'
import Navbar from '../base/Navbar';
import Hero from '../homepage/Hero';
import Body from '../homepage/Body';
import Sidebar from '../base/Sidebar';
import Footer from '../base/Footer';

const Blog = () => {
    const [name,setName] = useState('mario');
    const [age,setAge] = useState('25');

    const Blog = () => {
        setName('luigi');
        setAge('30');

    }

  return (
      <div className='home'>
      <h2>Blog</h2>
      <p>{name} is {age} years old</p>
      <button onClick={Blog}>Click</button>
      </div>

    );
 }
    
//     <>
//     <Navbar/>
//     <Hero/>
//     <Body/>
//     <Sidebar/>
//     <Footer/>
//     </>
  

export default Blog;