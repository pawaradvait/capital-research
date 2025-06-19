import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Body from './components/Body'
import All from './components/All'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs';

function App() {

  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<All />} />
        </Routes>
      </Router>
      <Footer/>
      </>
  )
}

export default App
