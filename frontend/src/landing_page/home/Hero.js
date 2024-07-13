import React from 'react';

function Hero() {
    return (
      <div className='container p-5 mb-5'>
        <div className='row text-center'>
            <img src='media/images/homeHero.png' alt='hero img' className='mb-5' ></img>
            <h1 className='mt-5'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button className='p-2 fs-5 btn btn-primary mb-5' style={{width: "15%", margin: "0 auto"}}>Sign Up Now</button>
        </div>
      </div>
    );
}

export default Hero;