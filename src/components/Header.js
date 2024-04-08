import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Data from '../DataContext';
import '../styles/header.css';

const Header = () => {
  const { userName, profile, handleLogOut } = useContext(Data);
 
  return (
    <header className='header' id='header'>
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/complexIcon.png`} alt='makemoments' title='MakeMoments'className='logo'/>
        <h3>MakeMoments<span>complex</span></h3>
      </div>
      <nav>
        <Link to={'/home'}>
          <img src={`${process.env.PUBLIC_URL}/assets/header/homeIcon.svg`} alt='home' />
          <p>Home</p>
        </Link>
        <Link to={'/movies'}>
          <img src={`${process.env.PUBLIC_URL}/assets/header/movieIcon.svg`} alt='movies' />
          <p>Movies</p>
        </Link>
        <Link to={'/movies'}>
          <img src={`${process.env.PUBLIC_URL}/assets/header/animeIcon.svg`} alt='anime' />
          <p>Anime</p>
        </Link>
        <Link to={'game'}>
          <img src={`${process.env.PUBLIC_URL}/assets/header/gameIcon.svg`} alt='game' />
          <p >Games</p>
        </Link>
        {
          userName && profile ?
            <div>
              <img src={profile} alt='profile' title='logout' />
              <button onClick={handleLogOut} > Log out {`(${userName})`} </button>
            </div>
          :  <Link to={'login'}>
              <img src={`${process.env.PUBLIC_URL}/assets/header/userIcon.svg`} alt='user' />
              <p> Log in </p>
            </Link>
        }
        <Link to={'notification'}>
          <img src={`${process.env.PUBLIC_URL}/assets/header/notificationIcon.svg`} alt='notification' />
          <p>Notify</p>
        </Link>
      </nav>
    </header>
  )
}

export default Header;
