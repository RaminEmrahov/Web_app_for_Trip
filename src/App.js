import React from 'react';
import './App.css';
import SignIn from './Pages/signIn/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/home/HomePage';
import About from './Pages/about/About';
import Italy from './Pages/Italy/Italy';
import Destinations from './Pages/destinations/destinations';
import Contact from './Pages/contact/Contact';
import Faq from './Pages/faq/Faq';
import Blog from './Pages/blog/Blog';
import ForgotPassword from './Pages/forgotPassword/ForgotPassword';
import TripPlanning from './Pages/tripPlanning/TripPlanning';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/tripPlanning' element={<TripPlanning />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/destinations'>
          <Route index element={<Destinations />} />
          <Route path=":Italy" element={<Italy />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/country' />
        <Route path='/faq' element={<Faq />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;