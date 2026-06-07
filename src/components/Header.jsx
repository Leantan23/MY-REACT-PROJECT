import React from "react";
import profile from "../assets/pic1.png"
import  { Link } from "react-router-dom";
function Header(){
      return(
        <header>
          <div className="logo-section">
           <a> <img src={profile}/> </a> </div>

             <div className="name-section">
              <h1> NATNAEL ENYEW </h1>
              
               <p>  &nbsp; &nbsp;  &nbsp; &nbsp;COMPUTER SCIENCE STUDENT |</p> 
                                 <p>    &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; | BEGINNER WEB DEVELOPER</p> </div>
              
              <nav>
                <Link to="/">HOME</Link>
               
                
                 <Link to="/about">ABOUT</Link>
     
                 <Link to="/contact">CONTACT</Link>      
                 
              </nav>
        </header>
     );
}
export default Header