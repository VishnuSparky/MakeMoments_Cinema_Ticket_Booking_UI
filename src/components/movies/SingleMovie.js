import React, { useContext, useEffect } from 'react';
import Data from '../../DataContext';
import { useNavigate } from 'react-router-dom';
import MovieHeader from './MovieHeader';
import CastCrew from './CastCrew';
import OtherImages from './OtherImages';
import Reviews from './Reviews';

const SingleMovie = () => {
  const { userName,fetchScreenData, singleMovie } = useContext(Data);
  const navigate = useNavigate();

  const handleBookNow = () => {
    if(!userName) navigate('/login');
    fetchScreenData();
    navigate('/book');
  }

 /*  useEffect(()=>{
    if(!singleMovie){
      navigate('/');
    }
  },[]); */

  return (
    singleMovie ?
    <main className='movie'>
      <img src={singleMovie.poster} alt='movieBg' />
      <MovieHeader />
      <OtherImages />
      <CastCrew />
      <Reviews />
      { singleMovie.screening ? <button onClick={handleBookNow}> BOOK NOW </button> : <p> not screening...</p>}
    </main> : <p> loading...</p>
  )
}

export default SingleMovie;
