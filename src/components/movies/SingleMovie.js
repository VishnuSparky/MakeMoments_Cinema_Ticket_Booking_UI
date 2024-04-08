import React, { useContext, useEffect } from 'react';
import Data from '../../DataContext';
import { useNavigate } from 'react-router-dom';
import MovieHeader from './MovieHeader';
import CastCrew from './CastCrew';
import OtherImages from './OtherImages';
import Reviews from './Reviews';
import '../../styles/singlemovie.css';

const SingleMovie = () => {
  const { userName,fetchScreenData, singleMovie } = useContext(Data);
  const navigate = useNavigate();

  const handleBookNow = () => {
    if(!userName) navigate('/login');
    fetchScreenData();
    navigate('/book');
  }

  if(!singleMovie){
    navigate('/');
  }

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  return (
    singleMovie ?
    <main className='movie'>
      <img src={singleMovie.poster} alt='movieBg' />
      <div className='moviecontainer'>
        <MovieHeader />
        <OtherImages />
        <CastCrew />
        <Reviews />
        { singleMovie.screening && userName ? <button onClick={handleBookNow}> BOOK NOW </button> : <p> Please Login... </p>}
      </div>
    </main> : <p> loading...</p>

  )
}

export default SingleMovie;
