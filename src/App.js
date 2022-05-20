import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Postdetails from './components/postdetails/Postdetails';

import Blog from './components/blog/Blog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/postdetails' element={<Postdetails/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App