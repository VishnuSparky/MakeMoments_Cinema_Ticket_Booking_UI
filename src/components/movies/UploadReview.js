import React, { useContext, useState } from 'react';
import MovieHeader from './MovieHeader';
import Data from '../../DataContext';

const UploadReview = () => {
    const { handleUploadReview } = useContext(Data);
    const [ content, setContent ] = useState('write your text here...');

    const handleClick = () =>{
        const hashtag = document.getElementById('reviewHashtag').value;
        const rating = Number(document.getElementById('reviewRating').value);
        handleUploadReview(content, hashtag, rating);
    }

  return (
    <main className='uploadReview'>
        <MovieHeader />
        <section>
            <input type='text' id='reviewHashtag' placeholder='#good' />
            <input type='text' id='reviewRating' placeholder='3.5'/>
            <textarea id='reviewContent' value={content} onChange={(e)=>{ setContent(e.target.value); }} />
            <button onClick={handleClick}> submit </button>
        </section>
    </main>
  )
}

export default UploadReview;
