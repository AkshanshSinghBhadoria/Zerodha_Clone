import React from 'react';

function Stats() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h1>Trust with confidence</h1>
                    <h2>Customer-first always</h2>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
                    
                    <h2>No spam or gimmicks</h2>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    
                    <h2>The Zerodha universe</h2>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    
                    <h2>Do better with money</h2>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src='media\images\ecosystem.png' style={{width: "95%"}}></img>
                    <div>
                        <a href=''>Explore our products<i class="fa-solid fa-arrow-right"></i></a>
                        <a href=''>Try Kite demo<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;