import React from 'react';
import './OurNumbers.css';

const OurNumbers = () => {
  return (
    <section className="our-numbers-section">
      <h2>Our Numbers</h2>
      <p className="subtitle">Numbers on the books. And they are always growing.</p>
      <div className="cards">
        <div className="card light">
          <h3>3</h3>
          <p>LOCATIONS BETWEEN MILAN AND FLORENCE</p>
        </div>
        <div className="card dark">
          <h3>+10K</h3>
          <p>ON-MARKET REAL ESTATE AND OFF-MARKET</p>
        </div>
        <div className="card dark">
          <h3>+100</h3>
          <p>PROFESSIONAL DEGREES AND TITLES</p>
        </div>
        <div className="card light">
          <h3>+20K</h3>
          <p>INTERNATIONAL CUSTOMERS, MILLIONAIRES AND BILLIONAIRES</p>
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
