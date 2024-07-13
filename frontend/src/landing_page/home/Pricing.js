import React from 'react';

function Pricing() {
    return (
        <div className='container p-3'>
            <div className='row mx-5'>
                <div className='col-4 '>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='' style={{textDecoration: "none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col-6 border p-4'>
                            <h1 className='mb-4'>₹0</h1>
                            <p>Free equity delivery and<br/> direct mutual funds</p>
                        </div>
                        <div className='col-6 border p-4'>
                            <h1 className='mb-4'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;