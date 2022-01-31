import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <div>
        <section className="social-media about" id="skills">
            <div className="section-heading">
                <h1>Skills</h1>
                <h6>Some of my Frontend And Backend Skills</h6>
            </div>
        <div className="social-media">
            <div className="container">
                
                <div className="about-details" data-aos="fade-up" data-aos-delay="300ms" >
                    <ul className="nav-list">

                        
                        <li>
                            <i className="fab fa-html5 learning-icons"></i>
                        </li>
                        <li>
                            <i className="fab fa-css3 learning-icons"></i>
                        </li>
                        <li>
                            <i className="fab fa-js learning-icons"></i>
                        </li>
                        <li className="learning-icons">
                            <i className="devicon-git-plain"></i>
                        </li>
                        <li>
                            <i className="fab fa-github learning-icons"></i>
                        </li>
                    </ul>
                    <br/><br/><br/>
                    <ul className="nav-list">
                        <li>
                            <i className="fab fa-node learning-icons"></i>
                        </li>
                        <li>
                            <i className="fab fa-react learning-icons"></i>
                        </li>
                        <li>
                            <i className="fab fa-python learning-icons"></i>
                        </li>
                        <li className="learning-icons">
                            <i className="devicon-bash-plain"></i>
                        </li>
                        
                    </ul>
                    <br/><br/><br/>
                    <ul className="nav-list">
                        
                        <li className="learning-icons">
                            <i className="devicon-vscode-plain"></i>
                        </li>
                        <li className="learning-icons">
                            <i className="devicon-bootstrap-plain"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
        <section className="social-media about" id="skills">
        <div className="section-heading">
            <h1>Skills</h1>
            <h6>Currently Learning</h6>
        </div>
        <div className="social-media">
            <div className="container">
                
                <div className="about-details" data-aos="fade-up" data-aos-delay="300ms" >
                    <ul className="nav-list">

                        
                        <li className="learning-icons">
                            <i className="devicon-mysql-plain-wordmark"></i>    
                        </li>
                        <li className="learning-icons">
                            <i className="devicon-mongodb-plain-wordmark"></i>
                        </li>
                        <li className="learning-icons">
                            <i className="devicon-nodejs-plain"></i>
                        </li>
                        <li className="learning-icons">
                            <i className="devicon-firebase-plain-wordmark"></i>
                        </li>
                        <li className="learning-icons">
                            <i className="devicon-php-plain"></i>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
        </section>
      </div>
    );
  }
}
export default Skills;
