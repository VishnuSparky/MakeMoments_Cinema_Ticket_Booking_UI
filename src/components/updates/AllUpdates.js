import React, { useContext } from 'react';
import UpdatesData from '../../api/UpdatesData';
import Data from '../../DataContext';

const AllUpdates = () => {
  const { updates } = useContext(Data);
  let updatesData = updates.length>0 ? updates : UpdatesData;

  return (
    <main className='updates'>
      <h2>updates</h2>
      {
        updatesData.map( movie => (
          <div>
            <img src={movie.poster} alt={movie.name} />
            <div className='details'>
              <h3> { movie.name} </h3>
              <p> actor : {movie.actor.name} </p>
              <p> actress : {movie.actress.name} </p>
              <p> director : {movie.director.name} </p>
              <p> music : {movie.music.name} </p>
            </div>
            <div className='casts'>
              <img src={movie.actor.image} alt={movie.actor.name} />
              <img src={movie.actress.image} alt={movie.actress.name} />
              <img src={movie.director.image} alt={movie.director.name} />
              <img src={movie.music.image} alt={movie.music.name} />
            </div>
          </div>
        ))
      }
    </main>
  )
}

export default AllUpdates;
