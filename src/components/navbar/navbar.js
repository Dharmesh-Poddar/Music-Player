import React, { Component } from 'react';
import './navbar.css';

export default function Navbar(){
   
   return(
    <nav className="navbar">
       
  

  
     <ul className="nav-links">
       <li>
           <a href="/" className="nav-link">Home </a>

       </li>
       <li>
           <a href="/" className="nav-link">About  </a>
           
       </li>
       
       <li>
           <a href="/" className="nav-link active">Tours </a>
           
       </li>
     </ul>


 </nav>

   );


}