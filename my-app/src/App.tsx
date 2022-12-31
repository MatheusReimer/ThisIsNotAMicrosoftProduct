import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Courses from './components/Courses';



function App() {
  return (
    
    <div className='relative h-screen bg-[#eeeeee] lg:h[140vh]'>
      <Header/>
      <main className=' relative h-[200vh] bg-[#eeeeee]'>
        <Banner/>
      </main>
      <section id="section2"className='relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]'>
        <Courses/>
      </section>

      
    </div>
  );
}

export default App;
