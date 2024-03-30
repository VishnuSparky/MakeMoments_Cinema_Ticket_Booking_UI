import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DataContext} from './DataContext';
import Layout from './Layout';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';
import AllUpdates from './components/updates/AllUpdates';
import AllMovies from './components/movies/AllMovies';
import SingleMovie from './components/movies/SingleMovie';
import BookingIndex from './components/bookings/BookingIndex';
import SelectSeats from './components/bookings/SelectSeats';
import Payment from './components/bookings/Payment';
import Notifications from './Notifications';
import UploadReview from './components/movies/UploadReview';

function App() {
  
 return (
    <DataContext>
      <Routes>
        <Route path='/' element={ <Layout />} >
          <Route index element={<LandingPage />} />
          <Route path='home' element={<HomePage />} />
          <Route path='movies'>
            <Route index element={<AllMovies />} />
            <Route path='oneMovie' element={<SingleMovie />} />
            <Route path='uploadReview' element={<UploadReview />} />
          </Route>
          <Route path='book'>
            <Route index element={<BookingIndex />} />
            <Route path='selectSeat' element={<SelectSeats />} />
            <Route path='payment' element={<Payment />} />
          </Route>
          <Route path='updates' element={<AllUpdates />} />
          <Route path='login'>
            <Route index  element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>
          <Route path='notification' element={<Notifications />} />
        </Route>
      </Routes>
    </DataContext>
  );
}

export default App;