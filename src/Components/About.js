import React from 'react';

class About extends React.Component {
    render() {
        return(
            <div>
                <section className="about" id="about">
                    <div className="container">
                        <div className="profile-img" >
                            <img src="images/DSC_0095.JPG" data-aos="fade-up" data-aos-delay="300ms" alt="Profile "/>
                            
                        </div>
                        <div className="skills-img" >
                            <img src="images/blackball.svg" alt="" />
                        </div>
                        
                        <div className="about-details" data-aos="fade-up" data-aos-delay="300ms" >
                            <div className="about-heading">
                                <h1>About</h1>
                                <h6>Myself</h6>
                            </div>
                            <br/>
                            <h3> Hi! This is Yash. </h3>
                            <br/>
                            <p>
                            A Programmer who loves to learn more about programming.
                            I also have some good knowledge of web development.
                            I also love to learn new things.
                            </p>
                            <p>
                            A Tea 🍵 Lover and sometimes coffee☕.
                            <p>
                                The Sport I love is Cricket🏏.
                            </p>
                                
                                <br/> 
                                <br/>
                                <a href="https://drive.google.com/file/d/1DD6JVT0a0SYXaEU-sjip1II41VLRuTop/view?usp=sharing" target="_blank" className="cta" rel="noreferrer">Checkout my Resume</a>
                                {/* <!-- <p>Sorry Page is unavailable..</p> --> */}
                            
                                
                            </p>
                            <br/>
                        
                            <address>
                            <a href="mailto:yashkapure06@gmail.com" ><button class="btn"><span>Hire me  <strong>📩</strong></span></button></a>
                            </address>
                            
                            <div className="social-media"  >
                                <ul className="nav-list"  >
                                    <li>
                                            <a href="https://www.linkedin.com/in/yash-kapure-9090a01a9"  target="_blank" className="icon-link" rel="noreferrer">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/Yashkapure06"  target="_blank" className="icon-link" rel="noreferrer">
                                            <i className="fab fa-github-square"></i>
                                        </a>
                                    </li>
                                    <li>
                                            <a href="https://www.instagram.com/_yashkapure_" target="_blank" className="icon-link" rel="noreferrer">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    <li>
                                        <a href="https://twitter.com/KapureYash?s=09" target="_blank"  className="icon-link" rel="noreferrer">
                                            <i className="fab fa-twitter-square"></i>
                                        </a>
                                    </li>
                                    {/* <!-- <li> 
                                        <a href="https://medium.com/@yashkapure06" target="_blank"  className="icon-link">
                                            <i className="fab fa-medium"></i>
                                        </a>
                                     </li> --> */}
                                    <li>
                                        <a href="https://join.skype.com/invite/v9gV0DecPXmG" target="_blank" className="icon-link" rel="noreferrer">
                                            <i className="fab fa-skype"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        
                    </div>
                </section>
            </div>
        )
    }
}
export default About;