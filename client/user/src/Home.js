import React from 'react';
import './style.css';
import imgs from './images/bg.jpg';
const Home =()=>{
  return(
    <div className="home" id="res">
      <div className="home-top">
      <br/>
     
        <h1> Golden Horizon Bank </h1>
      </div>
      <img className="home-bottom" src={imgs} alt="Bank"/>
        </div>
    );
  }
export default Home;
