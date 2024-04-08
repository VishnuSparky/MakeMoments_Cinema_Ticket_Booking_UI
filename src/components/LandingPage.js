import React,{ useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Data from '../DataContext';

const LandingPage = () => {
  const { setAuthPage, checkRefreshToken, setUserName, setAccessToken, setProfile, fetchMovies, setMovies } = useContext(Data);

  setTimeout(()=>{
    checkRefreshToken(setUserName, setAccessToken, setProfile);
  },5000);

  useEffect(()=>{
    setAuthPage(true);
    const requestData = async() => {
      const data = await fetchMovies();
      setMovies(data);
    }
    requestData();
  },[]);
 
  return (
    <main className='landing'>
      <section className='section1'>
        <video width={"100%"} height={"100%"} autoPlay loop muted>
          <source src= {`${process.env.PUBLIC_URL}/assets/landing/blackbg.mp4`}/>  
        </video>
        <div className='container'>
          <div className='firstChild'>
            <h2>make moments</h2>
            <p>The enterntainment based website to explore the various entertainment categories and we have seperate complex in offline and you can explore more... Enjoy your every moments with MAKE MOMENTS... </p>
          </div>
          <div className='landingGif'>
            <img src={`${process.env.PUBLIC_URL}/assets/landing/vjshouting.gif`} alt='vijayshouting'/>
            <img src={`${process.env.PUBLIC_URL}/assets/landing/DSanimegif.gif`} alt='demonslayer'/>
            <img src={`${process.env.PUBLIC_URL}/assets/landing/DBHcoin.gif`} alt='dbhcoin'/>
          </div>
        </div>
      </section>
      <section className='section2'>
        <video width={"100%"} height={"100%"} autoPlay loop muted>
          <source src= {`${process.env.PUBLIC_URL}/assets/landing/Landingpage.mp4`}/>  
        </video>
        <div className='container'>
          <h2>make moments <span>complex</span></h2>
          <p>We have seperate complex to watch movies in different types of screen with good screen quality and good sound systems to fullfill your heart and satify the brain </p>
        </div>      
      </section>
      <section className='section3'>
        <video width={"100%"} height={"100%"} autoPlay loop muted>
          <source src= {`${process.env.PUBLIC_URL}/assets/landing/IMAXBGVID.mp4`}/>  
        </video>
        <div className='container'>
          <h2>make moments<span>complex</span></h2>
          <p>Experience the different unique screens</p>
          <div className='landingGif'>
              <img src={`${process.env.PUBLIC_URL}/assets/landing/screena.jpeg`} alt='screen'/>
              <img src={`${process.env.PUBLIC_URL}/assets/landing/screenk.webp`} alt='screen'/>
              <img src={`${process.env.PUBLIC_URL}/assets/landing/screeni.webp`} alt='screen'/>
          </div>
        </div>
      </section>
      <section className='section4'>
        <video width={"100%"} height={"100%"} autoPlay loop muted>
          <source src= {`${process.env.PUBLIC_URL}/assets/landing/GOTBGVID.mp4`}/>  
        </video>
        <div className='container'>
          <h2> make moments <span>complex</span></h2>
          <p>Buy games in both online {'(links)'} and offline {'(disks)'}</p>
          <div className='landingGif'>
            <img src={`${process.env.PUBLIC_URL}/assets/landing/ghostoftshima.jpg`} alt='got'/>
            <img src={`${process.env.PUBLIC_URL}/assets/landing/venba.webp`} id="venba"alt='venba'/>
            <img src={`${process.env.PUBLIC_URL}/assets/landing/DBH.jpg`} alt='DBH'/>
          </div>
          <Link to={'home'}> Get started </Link>
        </div>
      </section>
    </main>
  )
}

export default LandingPage;
