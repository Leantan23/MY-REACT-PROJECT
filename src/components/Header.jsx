import React from "react";
import profile from "../assets/pic1.png"
import  { Link } from "react-router-dom";
function Header(){
      return(
        <header>
          <div className="logo-section">
          <img src={profile}/>

             <div className="name-section">
              <h1> NATNAEL ENYEW </h1>
              
               <p>  COMPUTER SCIENCE STUDENT |</p> 
                                 <p>    
                                  | BEGINNER WEB DEVELOPER</p> </div>
                                   </div>
              
           
           
              <nav>
                <Link to="/">HOME</Link>
               
                
                 <Link to="/about">ABOUT</Link>
     
                 <Link to="/contact">CONTACT</Link>      
                 
              </nav>
        </header>
     );
}
export default Header