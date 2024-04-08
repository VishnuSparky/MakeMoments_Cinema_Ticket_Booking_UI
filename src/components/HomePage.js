import React,{ useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Data from '../DataContext';
import Update from './updates/Update';
import MollywoodData from '../api/MollywoodData';
import KollywoodData from '../api/KollywoodData';
import BollywoodData from '../api/BollywoodData';
import AnimeData from '../api/AnimeData';
import { FaSearch } from "react-icons/fa";
import '../styles/homePage.css';

const HomePage = () => {
  const { setAuthPage, kollywood, bollywood, mollywood, anime, movies, setMovieName } = useContext(Data);
  const navigate = useNavigate();
  useEffect(()=>{
    setAuthPage(false);
  },[setAuthPage]);

  const movieDiv = ( data, index ) => {
    return(
      <div key={index} className='glassmo'>
        <img src={data.poster} alt={data.name} />
      </div>
    );
  }
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  const handleSearch = (e) =>{
    const movie_name = document.getElementById('searchBox').value.toLowerCase().trim();
    setMovieName(movie_name);
    navigate('/movies/oneMovie')
  }

  return (
    <main className='homePage'>
      <Update />
      <section className='searchBox'>
        <input type='text' id='searchBox' placeholder='Search here...' list='movie-list'/>
        <button id='searchbtn' onClick={handleSearch}>  <FaSearch /> </button>
        <datalist id='movie-list'>
          {
            movies.length>0 ?
              movies.map( (m,i) => ( <option value={`${m.name}`} key={i}></option>))
            : KollywoodData.map( (m,i) => ( <option value={`${m.name}`} key={i}></option>))
          }
        </datalist>

      </section>
      <section className='movies'>
        <h2> M O V I E S </h2>
        <div className='kollywood'>
            <h3> KOLLYWOOD </h3>
            <div>
                { kollywood.length>0 ? 
                    kollywood.map((movie,index)=> (movieDiv(movie, index)))
                  : KollywoodData.map((movie, index) => (movieDiv(movie,index)))
                }
            </div>                
        </div>
        <div className='allMovies'>
            <h3> ALL MOVIES </h3>
            <div>
                { bollywood.length>0 ? 
                    bollywood.map((movie,index)=> (movieDiv(movie, index)))
                  : BollywoodData.map((movie, index) => (movieDiv(movie,index)))
                }
                { mollywood.length>0 ? 
                    mollywood.map((movie,index)=> (movieDiv(movie, index)))
                  : MollywoodData.map((movie, index) => (movieDiv(movie,index)))
                }
              </div>
        </div>
        <Link to={'/movies'}>SEE ALL {'>>'}</Link>
      </section>
      <div id='onepunchmanEye' className='onepunchmanEye'>
        <img src={`${process.env.PUBLIC_URL}/assets/homepage/onepunchmanEye.gif`} alt='anime gif'/>
      </div>
      <section className='animes'>
        <h2> A N I M E S </h2>
        <div>
        { anime.length>0 ? 
                anime.map((movie,index)=> (movieDiv(movie, index)))
              : AnimeData.map((movie, index) => (movieDiv(movie,index)))
            }
        </div>
        <Link to={'/movies'}>SEE ALL {'>>'}</Link>
      </section>
      <div id='onepunchmanEye' className='onepunchmanEye'>
        <img src={`${process.env.PUBLIC_URL}/assets/homepage/connoreye.gif`} alt='anime gif'/>
      </div>
      <section className='games'>
        <h2> G A M E S </h2>
        <div>
          <div className='glassmo'>
            <Link to={'/game'}>
              <img src={`${process.env.PUBLIC_URL}/assets/homepage/DBH.jpg`} alt='game1' />
            </Link>
          </div>
          <div className='glassmo'>
            <img src={`${process.env.PUBLIC_URL}/assets/homepage/GOT.jpg`} alt='game2' title='Coming soon...'/>
          </div>
          <div className='glassmo'>
            <img src={`${process.env.PUBLIC_URL}/assets/homepage/Stray.webp`}  alt='game3'  title='Coming soon...'/>
          </div>
          <div className='glassmo'>
            <img src={`${process.env.PUBLIC_URL}/assets/homepage/Venba.webp`}  alt='game4' title='Coming soon...' />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage;