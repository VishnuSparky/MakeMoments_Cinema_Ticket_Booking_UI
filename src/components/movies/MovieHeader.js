import React,{ useContext } from 'react';
import Data from '../../DataContext';
import { FaRegStar } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import '../../styles/movieheader.css';

const MovieHeader = () => {
  const { singleMovie } = useContext(Data);
  const navigate = useNavigate();

  return (
    <section className='movieHeader'>
      <img src={singleMovie.poster} alt='moviePoster' />
      <div>
        <div>
          <h2> {singleMovie.name} </h2>
          <p> {singleMovie.dimention} </p>
          <p> {singleMovie.language} </p>
        </div>
        <div>
          <p> {singleMovie.category} </p>
          <p> {singleMovie.duration} </p>
          <p> {singleMovie.about} </p>
          <div>
            <p>
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </p>
            <p> {singleMovie.ratings} {'['}{singleMovie.votes}{'votes]'} </p>
            <button onClick={()=>{ navigate('/movies/uploadReview')}}> RATE NOW </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieHeader;
