import React, { useContext } from 'react';
import Data from '../../DataContext';
import { useNavigate } from 'react-router-dom';

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
            <img src='' alt='gpay' />
            <img src='' alt='qr code' />
        </div>
        <div>
            <img src=''alt='paytm' />
            <img src='' alt='qrcode' />
        </div>
        <div>
            <img src='' alt='phonepe' />
            <img src='' alt='qrcode' />
        </div>
      </section>
      <section>
        <input type='text' placeholder='please enter your transaction id here...' />
        <button onClick={handlePayment}> confirm </button>
      </section>
    </main>
  )
}

export default Payment;
