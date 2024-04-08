import React from 'react';
import {useEffect} from 'react';
import '../../styles/games.css';


const DBH = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

  return (
    <main className='gamepage'>
    <article>
        <img src={`${process.env.PUBLIC_URL}/assets/games/dbhcoin.gif`} alt='gamebg' />
    <div className='container'>
      <section>
        <img src={`${process.env.PUBLIC_URL}/assets/games/dbhimg.png`} alt='gamePoster' />
        <div className='details'>
            <h3> DETROIT BECOMES HUMANS</h3>
            <p> Detroit: Become Human puts the destiny of both mankind and androids in your hands, taking you to a near future where machines have become more intelligent than humans. Every choice you make affects the outcome of the game, with one of the most intricately branching narratives ever created. </p> 
            <div className='rrd'>
                <div>
                    <div>
                        <p>RECENT REVIEWS:</p>
                        <p>Overwhelmingly Positive (2,828)</p>
                        <p>ALL REVIEWS:</p>
                        <p>Very Positive (93,581)</p>
                    </div>
                    <div>
                        <p>RELEASE DATE:</p>
                        <p>18 Jun, 2020</p>
                    </div>
                    <div>
                        <p>DEVELOPER,PUBISHER:</p>
                        <p>Quantic Dream</p>
                    </div>
                </div>
                <img src={`${process.env.PUBLIC_URL}/assets/games/dbh1.png`} alt='robot2'/>
            </div>
        </div>
      </section>
      <section>
        <img src={`${process.env.PUBLIC_URL}/assets/games/dbh2.png`} alt='gameImage' />
        <img src={`${process.env.PUBLIC_URL}/assets/games/dbh3.png`} alt='gameImage' />
        <img src={`${process.env.PUBLIC_URL}/assets/games/dbh4.png`} alt='gameImage' />
      </section>
    </div>
    </article>
      <ul>
        <p> MINIMUM: </p>
        <li> Requires a 64-bit processor and operating system </li>
        <li> OS: Windows 10 (64 bit) </li>
        <li> Processor: Intel Core i5-2300 @ 2.8 GHz or AMD Ryzen 3 1200 @ 3.1GHz or AMD FX-8350 @ 4.2GHz </li>
        <li> Memory: 8 GB RAM </li>
        <li> Graphics: Nvidia GeForce GTX 780 or AMD HD 7950 with 3GB VRAM minimum (Support of Vulkan 1.1 required) </li>
        <li> Storage: 55 GB available space </li>
      </ul>
      <ul>
         <p> RECOMMENDED: </p>
        <li> Requires a 64-bit processor and operating system </li>
        <li> OS: Windows 10 (64 bit) </li>
        <li> Processor: Intel Core i5-6600 @ 3.3 GHz or AMD Ryzen 3 1300 X @ 3.4 GHz </li>
        <li> Memory: 12 GB RAM </li>
        <li> Graphics: Nvidia GeForce GTX 1060 or AMD Radeon RX 580 with 4GB VRAM minimum (Support of Vulkan 1.1 required) </li>
        <li> Storage: 55 GB available space </li>
      </ul>
      <section className='cornorgif'>
        <img src={`${process.env.PUBLIC_URL}/assets/games/dbhcoin.gif`} alt='gif'/>
      </section>
      <section className='enddes'>
         <p>The developers describe the content like this:</p>
         <p>This Game may contain content not appropriate for all ages, or may not be appropriate for viewing at work: Frequent Violence or Gore, General Mature Content</p>
      </section>
      <section className='getnowbtn'>
        <a href='https://store.steampowered.com/app/1222140/Detroit_Become_Human/' target='_blank'> Get Now </a>
      </section>
      <section className='thirdpartyicon'>
        <img src={`${process.env.PUBLIC_URL}/assets/games/steam.png`} alt='gameImage' />
        <img src={`${process.env.PUBLIC_URL}/assets/games/xbox.png`} alt='gameImage' />
        <img src={`${process.env.PUBLIC_URL}/assets/games/epic.png`} alt='gameImage' />
      </section>
    </main>
  )
}

export default DBH;
