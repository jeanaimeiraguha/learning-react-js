import React from 'react';


const NavigationBar = () => {
  return (
    <nav className="navbar ">
      
      <div className="navbar-brand">Iraguha Tech</div>
      <ul className="navbar-links mx-8">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact">Register</a></li>
      </ul>
      {/* <hr /> */}
    </nav>
   
    
  );
}
export default NavigationBar
