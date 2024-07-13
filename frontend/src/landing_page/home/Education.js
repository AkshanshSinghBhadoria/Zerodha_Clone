import React from 'react';

function Education() {
    return (
        <div className='container mt-5'>
            <div className='row mx-5'>
                <div className='col-6 '>
                    <img src='media\images\education.svg' style={{width: "70%"}}></img>
                </div>
                <div className='col-6 mt-5'>
                    <h1 className='mb-4 fs-3' style={{opacity: "0.85"}}>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' className='' style={{textDecoration: "none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' className='' style={{textDecoration: "none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;