import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4 className="">Support Portal</h4>
        <a href="" style={{ color: "white" }}>Track tickets</a>
      </div>
      <div className="row p-5 mx-5">
      <div className="col-6 mb-5">
        <h1 className="fs-4">Search for an answer or browse help topics to create a ticket</h1>
        <input placeholder="Eg. How do i activate F&O, why is my order getting rejected..." /> <br/><br/>
        <a href="" style={{ color: "white",fontSize:"18px",marginLeft:"1rem" }}>Track account opening </a>
        <a href="" style={{ color: "white",fontSize:"18px",marginLeft:"1rem" }}>Track segment activation </a>
        <a href="" style={{ color: "white",fontSize:"18px",marginLeft:"1rem" }}>Intraday margins </a> <br/>
        <a href="" style={{ color: "white",fontSize:"18px",marginLeft:"1rem" }}>Kite user manual</a>
      </div>
      <div className="col-6">
        <h1 className="fs-4" style={{marginLeft:"20px"}}>Featured</h1>
        <ol style={{marginLeft:"20px"}}>
            <li style={{marginBottom:"20px"}}><a href="" style={{ color: "white"}}>Surveillance measure on scrips - July 2024 </a></li>
            <li><a href="" style={{ color: "white"}}>Latest Intraday leverages and Square-off timings </a></li>
        </ol>
      </div>
      </div>
    </section>
  );
}

export default Hero;
