import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Data from '../../DataContext';
import MovieHeader from '../movies/MovieHeader';
import '../../styles/bookindex.css';

const BookingIndex = () => {
    const navigate = useNavigate();
    const { screen, singleMovie , setTime, setDate, setSnacksCost, snacksCost, time, userName } = useContext(Data);  
    let toDate = new Date();
    let fromDate = new Date();
    if(screen){
      toDate = new Date(screen.to);
      fromDate = new Date(screen.from);
    }
    const handleSelectSeats = (e) =>{
      e.preventDefault();
      if(!time){
        alert('please select show time');
        return;
      }
      let date = new Date(document.getElementById('selectDate').value); 
      if(!date){
        alert('please select date');
        document.getElementById('selectDate').focus();
        return;
      }
      if( date.getFullYear() <= toDate.getFullYear()){
        if( date.getMonth() <= toDate.getMonth()){
          if( date.getDate() <= toDate.getDate())
            setDate(document.getElementById('selectDate').value)
        }
      } else {
        alert(`movie is available only within ${fromDate.getDate()}/${fromDate.getMonth()}/${fromDate.getFullYear()} and ${toDate.getDate()}/${toDate.getMonth()}/${toDate.getFullYear()}`);
        return;
      }
      navigate('selectSeat');
    }

    if(!screen){
      navigate('/movies');
    }
    
  return (
    <main className='bookIndex'>
      <img src={singleMovie.poster} alt='moviePoster' />
      <div className='bookIndexContainer'>
        <MovieHeader />
        <h1>{`Screen ${screen.screenName}`}</h1>
        <form>
          <div>
              <p> SHOW TIME </p>
              <div className='selectTime'>
                  <input type='radio' name='time' value='10.00AM' onClick={(e)=>{setTime(e.target.value)}} />
                  <label htmlFor='time'> 10.00AM</label>
                  <input type='radio' name='time' value='1.00PM' onClick={(e)=>{setTime(e.target.value)}} />
                  <label htmlFor='time'> 1.00PM</label>
                  <input type='radio' name='time' value='4.30PM' onClick={(e)=>{setTime(e.target.value)}} />
                  <label htmlFor='time'> 4.30PM</label>
              </div>
              <div>
                <p>DATE:</p>
                <input type='date' id='selectDate' />
              </div>
         </div>
         <div>
            <p> From : {`${fromDate.getDate()}/${fromDate.getMonth()}/${fromDate.getFullYear()}`} </p>
            <p> To : {`${toDate.getDate()}/${toDate.getMonth()}/${toDate.getFullYear()}`} </p>
         </div>
            <div className='snacks'>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/assets/snacks/popcorn.png`} alt='popcorn' />
                <figcaption>Pop corn <span>Rs.100</span></figcaption>
                <button onClick={(e)=>{
                  e.preventDefault();
                  setSnacksCost(snacksCost+100);
                  alert(`Pop corn +1 added...Snacks costs ${snacksCost} + 100 `); }}> ADD </button>
              </figure>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/assets/snacks/burger.png`}  alt='burger' />
                <figcaption> Burger <span>Rs.120</span></figcaption>
                <button onClick={(e)=>{
                  e.preventDefault();
                  setSnacksCost(snacksCost+120);
                  alert(`Burger +1 added...Snacks costs ${snacksCost} +120 `); }}> ADD </button>
              </figure>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/assets/snacks/coca.png`}  alt='coca' />
                <figcaption> Coca <span>Rs.80</span></figcaption>
                <button onClick={(e)=>{
                  e.preventDefault();
                  setSnacksCost(snacksCost+80);
                  alert(`Coca +1 added...Snacks costs ${snacksCost} + 80`); }}> ADD </button>
              </figure>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/assets/snacks/water.png`}  alt='water' />
                <figcaption> water <span>Rs.0</span></figcaption>
                <button onClick={(e)=>{
                  e.preventDefault();
                  setSnacksCost(snacksCost+0);
                  alert(`get free water bottle`); }}> ADD </button>
              </figure>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/assets/snacks/samosa.png`} alt='samosa' />
                <figcaption> Samosa <span>Rs.75</span></figcaption>
                <button onClick={(e)=>{
                  e.preventDefault();
                  setSnacksCost(snacksCost+75);
                  alert(`Samosa +1 added...Snacks costs ${snacksCost} + 75`); }}> ADD </button>
              </figure>
            </div>
            { userName ? <button onClick={handleSelectSeats}> SELECT SEATS </button> : <button onClick={()=>{ navigate('/login')}}> log in </button>}
        </form>
      </div>
    </main>
  )
}

export default BookingIndex;
