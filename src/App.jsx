import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Picks_Table from './routes/Picks_Table';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Picks_Table />
      <Footer/>
    </>
  )
}

export default App
