import React, { useContext } from 'react';
import Data from '../../DataContext';
import { useNavigate } from 'react-router-dom';
import '../../styles/payment.css';

const Payment = () => {
    const { cost, selectedSeats,handlePayment } = useContext(Data);
    const navigate = useNavigate();
    if(!cost || selectedSeats.length <= 0){
        alert('please select your show');
        navigate('/');
    }
    
  return (
    <main className='payment'>
      <h2> choose payment method </h2>
      <section>
        <div>
            <img src={`${process.env.PUBLIC_URL}/assets/payment/gpay.png`} alt='gpay' />
            <img src={`${process.env.PUBLIC_URL}/assets/payment/gpayqr.png`} alt='qr code' />
        </div>
        <div>
            <img src={`${process.env.PUBLIC_URL}/assets/payment/paytm.png`} alt='paytm' />
            <img src={`${process.env.PUBLIC_URL}/assets/payment/paytmqr.png`} alt='qrcode' />
        </div>
        <div>
            <img src={`${process.env.PUBLIC_URL}/assets/payment/phonepe.png`} alt='phonepe' />
            <img src={`${process.env.PUBLIC_URL}/assets/payment/phonepeqr.png`} alt='qrcode' />
        </div>
      </section>
      <section>
        <input type='number' placeholder='please enter your transaction id here...' id='tid'/>
        <button onClick={(e)=>{
          const tid = document.getElementById('tid').value;
          if(tid.length === 13)
            handlePayment();
          else{
            alert('please enter valid Transaction id... :(');
          }
        }}> confirm </button>
      </section>
    </main>
  )
}

export default Payment;
