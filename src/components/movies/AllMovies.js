import React, { useContext } from 'react';
import Data from '../../DataContext';
import KollywoodData from '../../api/KollywoodData';
import BollywoodData from '../../api/BollywoodData';
import MollywoodData from '../../api/MollywoodData';
import AnimeData from '../../api/AnimeData';
import { useNavigate } from 'react-router-dom';

const AllMovies = () => {
  const { kollywood, bollywood, mollywood, anime, setMovieName } = useContext(Data);
  const navigate = useNavigate();

  const moveToMovie = (e) =>{
    const button = e.target;
    const moviename = button.parentElement.firstChild.textContent.toLowerCase().trim();
    setMovieName(moviename);
    navigate('oneMovie');
  }

  const movieContainer = (data, index) =>{
    return (
      <div className='singleMovie' key={index}>
        <img src={data.poster} alt={data.name} />
        <div className='details'>
          <img src={data.poster} alt={data.name} />
          <div>
            <h3> {data.name} </h3>
            <p> {data.category} </p>
            <p> {data.duration} </p>
            <p> {data.about} </p>
            <button onClick={moveToMovie}> get info </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className='allMovies'>
      <h1> M O V I E S </h1>

      <section className='container'>
        <div className='heading'>
          <h2> KOLLYWOOD </h2>
          <div className='bookAnimation'> book now </div>
        </div>
        <div className='movies'>
          {
            kollywood.length>0 ? 
              kollywood.map( (movie, index) => (movieContainer(movie, index)))
              : KollywoodData.map( (movie, index) => movieContainer(movie, index))
          }
        </div>
      </section>
      <section className='container'>
      <div className='heading'>
          <h2> BOLLYWOOD </h2>
          <div className='bookAnimation'> book now </div>
        </div>
        <div className='movies'>
        {
            bollywood.length>0 ? 
              bollywood.map( (movie, index) => (movieContainer(movie, index)))
              : BollywoodData.map( (movie, index) => movieContainer(movie, index))
          }
        </div>
      </section>
      <section className='container'>
      <div className='heading'>
          <h2> MOLLYWOOD </h2>
          <div className='bookAnimation'> book now </div>
        </div>
        <div className='movies'>
        {
            mollywood.length>0 ? 
              mollywood.map( (movie, index) => (movieContainer(movie, index)))
              : MollywoodData.map( (movie, index) => movieContainer(movie, index))
          }
        </div>
      </section>
      <section className='container'>
        <div className='heading'>
          <h2> ANIME </h2>
          <div className='bookAnimation'> book now </div>
        </div>
        <div className='movies'>
        {
            anime.length>0 ? 
              anime.map( (movie, index) => (movieContainer(movie, index)))
              : AnimeData.map( (movie, index) => movieContainer(movie, index))
          }
        </div>
      </section>
    </main>
  )
}

export default AllMovies;
