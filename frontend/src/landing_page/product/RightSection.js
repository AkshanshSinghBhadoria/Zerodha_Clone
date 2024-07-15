import React from 'react';

function RightSection({imageURL,productName,ProductDescription,learnMore}) {
    return (
        <div className='container'>
            <div className='row border-top p-5'>
                <div className='col-6 p-5'>
                    <h1>{productName}</h1>
                    <p>{ProductDescription}</p>
                    <a href={learnMore} style={{textDecoration: "none"}}>Learn More →</a>
                </div>
                <div className='col-6'>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;