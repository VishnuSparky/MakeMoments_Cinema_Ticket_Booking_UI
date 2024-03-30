import React,{ useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Data from '../DataContext';
import Update from './updates/Update';
import MollywoodData from '../api/MollywoodData';
import KollywoodData from '../api/KollywoodData';
import BollywoodData from '../api/BollywoodData';
import AnimeData from '../api/AnimeData';

const HomePage = () => {
const { setAuthPage, kollywood, bollywood, mollywood, anime } = useContext(Data);
  useEffect(()=>{
    setAuthPage(false);
  },[setAuthPage]);

  const movieDiv = ( data, index ) => {
    return(
      <div key={index}>
        <img src={data.poster} alt={data.name} />
      </div>
    );
  }

  return (
    <main className='homePage'>
      <Update />
      <section className='searchBox'>
        <input type='text' id='searchBox'/>
      </section>
      <section className='movies'>
        <h2> movies </h2>
        <div className='kollywood'>
            <h3> kollywood </h3>
            { kollywood.length>0 ? 
                kollywood.map((movie,index)=> (movieDiv(movie, index)))
              : KollywoodData.map((movie, index) => (movieDiv(movie,index)))
            }
        </div>
        <div className='allMovies'>
            <h3> allmovies </h3>
            { bollywood.length>0 ? 
                bollywood.map((movie,index)=> (movieDiv(movie, index)))
              : BollywoodData.map((movie, index) => (movieDiv(movie,index)))
            }
            { mollywood.length>0 ? 
                mollywood.map((movie,index)=> (movieDiv(movie, index)))
              : MollywoodData.map((movie, index) => (movieDiv(movie,index)))
            }
        </div>
        <Link to={'/movies'}>see all{'>>'}</Link>
      </section>
      <div id='onepunchmanEye'></div>
      <section className='animes'>
        <h2> animes </h2>
        <div className='anime'>
        { anime.length>0 ? 
                anime.map((movie,index)=> (movieDiv(movie, index)))
              : AnimeData.map((movie, index) => (movieDiv(movie,index)))
            }
        </div>
        <Link to={'/movies'}>see all{'>>'}</Link>
      </section>
    </main>
  )
}

export default HomePage;