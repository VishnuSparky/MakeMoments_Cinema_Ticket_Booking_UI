import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Data from '../DataContext';

const Header = () => {
  const { userName, profile, handleLogOut } = useContext(Data);
  return (
    <header className='header' id='header'>
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/complexIcon.png`} alt='makemoments' title='MakeMoments'className='logo'/>
        <h3>MakeMoments<span>complex</span></h3>
      </div>
      <nav>
        <Link to={'/'}>
          <img src={`${process.env.PUBLIC_URL}/assets/header/homeIcon.svg`} alt='home' />
          <p>home</p>
        </Link>
        <Link to={'AllMovies'}>
          <img src={`${process.env.PUBLIC_URL}/assets/header/movieIcon.svg`} alt='movies' />
          <p>movies</p>
        </Link>
        <Link to={'AllAnimes'}>
          <img src={`${process.env.PUBLIC_URL}/assets/header/animeIcon.svg`} alt='anime' />
          <p>anime</p>
        </Link>
        <Link to={'AllGames'}>
          <img src={`${process.env.PUBLIC_URL}/assets/header/gameIcon.svg`} alt='game' />
          <p>games</p>
        </Link>
        {
          userName && profile ?
            <div>
              <img srt={profile} alt='profile' title='logout' />
              <button onClick={handleLogOut}> log out {`(${userName})`} </button>
            </div>
          :  <Link to={'login'}>
              <img src={`${process.env.PUBLIC_URL}/assets/header/userIcon.svg`} alt='user' />
              <p> Log in </p>
            </Link>
        }
        <Link to={'notification'}>
          <img src={`${process.env.PUBLIC_URL}/assets/header/notificationIcon.svg`} alt='notification' />
          <p>notification</p>
        </Link>
        <Link to={'about'}>
          <img src={`${process.env.PUBLIC_URL}/assets/header/aboutIcon.svg`} alt='notification' />
          <p>about us</p>
        </Link>
      </nav>
    </header>
  )
}

export default Header;
