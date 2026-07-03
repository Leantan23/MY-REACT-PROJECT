import React from "react";

function Home (){
    return(
         <div className="home" >
            <section className="hero">
              <div className="homem">
               
            <p> ✋HELLO,  I'M NATNAEL ENYEW </p>  </div>
              <p> 👨🏽‍💻 Computer Science  Student and Beginner Web develper</p>
                 <p>🤩 I  enjoy building websites,solving problems , and learning new technologies
                
                </p>  

               < button  className="butt"> <a  href="https://github.com/leantan23">👁️ VIEW MY PROJECT 👁️</a></button>   
                       
            </section>
  <section className="skills">
<h2>✍🏻 My Skills</h2>

 <div className="skill-container">

  <div className="skill-card">
<h3>HTML</h3>
 <p>Building website structure.</p>
</div>

<div className="skill-card">
 <h3>CSS</h3>
 <p>Creating attractive designs.</p>
 </div>

 <div className="skill-card">
 <h3>JavaScript</h3>
 <p>Adding interactivity to websites.</p> </div>

 <div className="skill-card">
 <h3>React</h3>
 <p>Building modern web applications.</p>
 </div>

 <div className="skill-card">
 <h3>Java</h3>
 <p>Object-oriented programming.</p>
 </div>

 <div className="skill-card">
<h3>Git & GitHub</h3>
<p>Version control and collaboration.</p>
</div>
 </div>
</section>
                
                <section className="projects">
                  <h2>FEATURED PROJECTS</h2>
                       <div className="project-card">
                             <h3>👨🏻‍💼 PORTIFOLIO WEBSITE</h3>
                             <p>   <a  href="https://github.com/leantan23/Rportifolio"> 👉 portifolio using REACT + VITE. </a></p> 
                      </div>
                      <div className="project-card">
                             <h3> 🛒 SIMPLEFOOD ORDERING SYSTEM</h3>
                             <p><a href="https://github.com/leantan23/foodorderingsytem">👉  web based food ordering system using HTML ,CSS,JAVASCRIPT AND PHP.</a></p> 

                      </div>
                       <div className="project-card">
                             <h3>SIMPLEFOOD ORDERING SYSTEM</h3>
                             <p><a href="https://github.com/leantan23/foodorderingsytem">🛒  web based food ordering system using HTML ,CSS,JAVASCRIPT AND PHP.</a></p> 

                      </div>
                       <div className="project-card">
                             <h3>SIMPLEFOOD ORDERING SYSTEM</h3>
                             <p><a href="https://github.com/leantan23/foodorderingsytem">🛒  web based food ordering system using HTML ,CSS,JAVASCRIPT AND PHP.</a></p> 

                      </div>

                </section>

         </div>

    );
}
export default Home;
