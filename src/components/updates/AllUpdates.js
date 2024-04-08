import React, { useContext } from 'react';
import UpdatesData from '../../api/UpdatesData';
import Data from '../../DataContext';
import '../../styles/allupdates.css';

const AllUpdates = () => {
  const { updates } = useContext(Data);
  let updatesData = updates.length>0 ? updates : UpdatesData;

  return (
    <main className='AllUpdatesPage'>
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
              <img src={movie.actor.pic} alt={movie.actor.name} />
              <img src={movie.actress.pic} alt={movie.actress.name} />
              <img src={movie.director.pic} alt={movie.director.name} />
              <img src={movie.music.pic} alt={movie.music.name} />
            </div>
          </div>
        ))
      }
    </main>
  )
}

export default AllUpdates;
