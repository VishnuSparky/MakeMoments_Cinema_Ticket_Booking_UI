import React, { useContext } from 'react';
import Data from './DataContext';
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
    const { tickets, handleCancelTicket } = useContext(Data);
    const navigate = useNavigate();

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
            <img src='' alt='ticket' />
            <div>
                <p> {data.movieName} </p>
                <p> Tamil 2D </p>
                <p> {`${day} | ${date.getDate()}.${date.getMonth()}.${date.getFullYear()} | ${data.show}`} </p>
                <p> ------------------------------------------------------------------------------------ </p>
            </div>
            <div>
                <h4> TICKETS </h4>
                <p> Ticket no - {data.ticketNo} </p>
                <p> Selected seats - {data.no_of_tickets} </p>
                <p> Ticket price - {data.cost} /- </p>
                <p> ------------------------------------------------------------------------------------ </p>
            </div>
            <div>
                <h4> CONTACT DETAILS </h4>
                <p> Name - {data.userName} </p>
                <p> Phone no - 975432**** </p>
            </div>
            <div>
                <button onClick={()=>{navigate('/')}}> BACK TO HOME</button>
                <button onClick={()=>{ handleCancelTicket(data.ticketNo) }}> CANCEL TICKET </button>
            </div>
        </section>
        );
    }

  return (
    tickets.length > 0 ? 
        <main className='notification'>
            {
                tickets.map((tic,index)=>( ticketDiv(tic,index) ))
            }
        </main>
    : <main className='notification'>
        <p> no tickets have booked... </p>
    </main>
  )
}

export default Notifications;
