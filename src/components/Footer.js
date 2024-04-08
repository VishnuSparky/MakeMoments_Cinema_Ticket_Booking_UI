import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <h2> ABOUT US </h2>
      <h4> ADDRESS </h4>
      <address> Gokhale Rd, chinna chokkikulam, Madurai, Naganakulam, Tamil Nadu 625002, Near Vishal De Mall </address>
      <div>
        <a href='https://www.instagram.com/mr.mind_freak?igsh=N2MwaHY5emV0Z2s0' target="_blank"> Instagram (KR) </a>
        <a href='https://www.instagram.com/vishnusparky?igsh=MTRoc2xyczZmZGR1NA' target="_blank"> Instagram (RK) </a>
      </div>
      <div className='footerimg'>
        <div>
          <img src={`${process.env.PUBLIC_URL}/assets/footer/footer1.png`}  alt='' />
          <h4>HOME FOOD AVAILABLE</h4>
        </div>
        <div>
           <img src={`${process.env.PUBLIC_URL}/assets/footer/footer2.png`}  alt='' />
           <h4>FREE WIFI</h4>
        </div>
        <div>
           <img src={`${process.env.PUBLIC_URL}/assets/footer/footer3.png`}  alt='' />
           <h4>PARKING AVAILABLE</h4>
        </div>
      </div>

    </footer>
  )
}

export default Footer;
