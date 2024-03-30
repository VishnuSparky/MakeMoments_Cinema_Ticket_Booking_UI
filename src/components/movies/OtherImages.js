import React, { useContext } from 'react';
import Data from '../../DataContext';

const OtherImages = () => {
    const { singleMovie } = useContext(Data);

  return (
    <section>
        <img src={singleMovie.images[0]} alt='posers' />
        <img src={singleMovie.images[1]} alt='posers' />
        <img src={singleMovie.images[2]} alt='posers' />
    </section>
  )
}

export default OtherImages;
