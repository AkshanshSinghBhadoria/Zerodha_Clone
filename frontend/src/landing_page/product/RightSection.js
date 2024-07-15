import React from 'react';

function RightSection({imageURL,productName,ProductDescription,kiteconnect}) {
    return (
        <div className='container'>
            <div className='row border-top p-5'>
                <div className='col-5 p-5'>
                    <h1>{productName}</h1>
                    <p>{ProductDescription}</p>
                    <a href={kiteconnect} style={{textDecoration: "none"}}>Kite Connect →</a>
                </div>
                <div className='col-6'>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;