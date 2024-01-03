import React from 'react'
import Background from './Background';
import Home from '../pages/Home';
import Carousel from '../pages/Carousel';
import Authors from '../pages/Authors';
import Test from '../pages/Test';
import Author from '../pages/Author';
import { Route, Router, Routes } from 'react-router-dom';
import Yeni from '../pages/Yeni';




export default function Dashboard() {
  return (
    <div>
        <Routes>
          <Route path='' element={<Carousel />} />
          <Route path='15yy' element={<Authors />} />
          <Route path='mevlana' element={<Author />} />
        </Routes>
       
    </div>
  )
}
