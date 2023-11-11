import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SignIn from './Pages/signIn/SignIn';
import Footer from './components/Footer/Footer';
import BlueSection from './components/BlueSection/BlueSection';
import JoinUsSection from './components/JoinUsSection/JoinUsSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/home/HomePage';
import About from './Pages/about/About';
import Italy from './Pages/Italy/Italy';
import Destinations from './Pages/destinations/destinations';
import Contact from './Pages/contact/Contact';
import Faq from './Pages/faq/Faq';
import Blog from './Pages/blog/Blog';

function App() {
  return (
    <div className='wrapper'>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <HomePage />
          } />

          <Route path='/destinations' element={
            <Destinations />
          } />
          <Route path='/signIn' element={
            <SignIn/>
          }/>

          <Route path='/about' element={
            <About />
          } />

          <Route path='/blog' element={
            <Blog />
          } />

          <Route path='/Italy' element={
              <Italy />
          } />

          <Route path='/contact' element={
            <Contact />
          } />
          <Route path='/country' />

          <Route path='/faq' element={
            <Faq />
          } />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
