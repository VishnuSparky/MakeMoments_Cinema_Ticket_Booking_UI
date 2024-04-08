import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieHeader from './MovieHeader';
import Data from '../../DataContext';
import '../../styles/uploadreview.css';

const UploadReview = () => {
    const { handleUploadReview,singleMovie } = useContext(Data);
    const [ content, setContent ] = useState('write your text here...');
    const navigate = useNavigate();
    if(!singleMovie){
      navigate('/home');
    }

    const handleClick = () =>{
        const hashtag = document.getElementById('reviewHashtag').value;
        const rating = Number(document.getElementById('reviewRating').value);
        handleUploadReview(content, hashtag, rating);
    }

  return (
    <main className='uploadReview'>
        <img src={singleMovie.poster} alt='moviePoster' />
        <div className='reviewContainer'>
          <MovieHeader />
          <section>
              <input type='text' id='reviewHashtag' placeholder='#good' />
              <input type='number' id='reviewRating' placeholder='3.5' min={1} max={5}/>
              <textarea id='reviewContent' value={content} onChange={(e)=>{ setContent(e.target.value); }} />
              <button onClick={handleClick}> Submit </button>
          </section>
        </div>
    </main>
  )
}

export default UploadReview;
