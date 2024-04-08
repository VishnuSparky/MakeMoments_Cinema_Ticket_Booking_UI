import React, { useContext,useEffect } from 'react';
import Data from './DataContext';
import { useNavigate } from 'react-router-dom';
import './styles/notification.css';

const Notifications = () => {
    const { tickets, handleCancelTicket } = useContext(Data);
    const navigate = useNavigate();

    useEffect(()=>{
        window.scrollTo(0,0);
      },[]);

    const ticketDiv = (data, index) =>{
        let date = new Date(data.date);
        let day;
        switch (date.getDay()) {
            case 0:
                day = 'Sunday';
                break;
            case 1:
                day = 'Monday';
                break;
            case 2:
                day = 'Tuesday';
                break;
            case 3:
                day = 'Wednesday';
                break;
            case 4:
                day = 'Thusday';
                break;
            case 5:
                day = 'Friday';
                break;
            case 6:
                day = 'Saturday';
                break;
            default:
                day = 'Sunday';
                break;
        }
        return(
        <section key={index}>
            <img src={`${process.env.PUBLIC_URL}/assets/notify/movie.gif`} alt='ticket' />
            <div>
                <p> {data.movieName} </p>
                <p> Tamil 2D </p>
                <p> {`${day} | ${date.getDate()}.${date.getMonth()}.${date.getFullYear()} | ${data.show}`} </p>
                <p> -------------------------------------------- </p>
            </div>
            <div>
                <h4> TICKETS </h4>
                <p> Ticket no - {data.ticketNo} </p>
                <p> Selected seats - {data.no_of_tickets} </p>
                <p> Ticket price - {data.cost} /- </p>
                { data.snacks===0 ? <p>Snacks - not selected</p> : <p> Snacks - {data.snacks} </p>}
                <p> --------------------------------------------- </p>
                { data.snacks ? <p> Total Cost - {data.cost+data.snacks}</p> : <p>Total cost - {data.cost} </p> }
                <p> --------------------------------------------- </p>
            </div>
            <div>
                <h4> CONTACT DETAILS </h4>
                <p> Name - {data.userName} </p>
                <p> Phone no - 975432**** </p>
            </div>
            <div>
                <button onClick={()=>{ handleCancelTicket(data.ticketNo) }}> CANCEL TICKET </button>
            </div>
        </section>
        );
    }

  return (
    tickets && tickets.length > 0 ? 
        <main className='notification'>
            {
                tickets.map((tic,index)=>( ticketDiv(tic,index) ))
            }
            <button onClick={()=>{navigate('/home')}}> BACK TO HOME</button>
        </main>
    : <main className='notification'>
        <p className='notickets'> no tickets have booked... </p>
        <button onClick={()=>{navigate('/home')}}> BACK TO HOME</button>
    </main>
  )
}

export default Notifications;
