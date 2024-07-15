import React from 'react';

function LeftSection({imageURL,productName,ProductDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (
        <div className='container'>
            <div className='row border-top p-5'>
                <div className='col-6 p-5'>
                    <img src={imageURL} />
                </div>
                <div className='col-1'></div>
                <div className='col-5 p-5'>
                    <h1>{productName}</h1>
                    <p>{ProductDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration: "none"}}> Try Demo →</a>
                        <a href={learnMore} style={{marginLeft:"70px", textDecoration: "none"}}>Learn More →</a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay} ><img src='media/images/googlePlayBadge.svg'/></a>
                        <a href={appStore} style={{marginLeft:"10px"}}> <img src='media/images/appstoreBadge.svg'/> </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;