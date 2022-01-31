import React from 'react';

class Portfolio extends React.Component {
    render(){
        return(
            <div>
                <section className="portfolio" id="portfolio">
                    <div className="container">
                        <div className="section-heading">
                            <h1>Portfolio</h1>
                            <h6>Some of my Projects</h6>
                        </div>
                        <div className="portfolio-item" data-aos="fade-in" data-aos-duration="300ms">
                            <div className="portfolio-description has-margin-right">
                                <h6>My 1st Live Project</h6>
                                <h1>Developing an Officail Website for <b>Anandlok Ayurveda and Panchakarma Hospital, Nagpur</b></h1>
                                <p>
                                    This Project is a fully Functional Website. With all the features like, Contact forms, Responsivenes, Mobile as well as Laptop responsivenes
                                    <br/>
                                    <b>Visit Their Official Site <a href="https://www.anandlokayurved.com" target="_blank" rel="noreferrer">Anandlok Ayurveda</a></b>


                                </p>
                            </div>
                            <div className="portfolio-img has-margin-left">
                                <img src="images/anandlok.jpeg" alt="Anandlok Ayurveda"/>
                            </div>
                        </div>
                        <div className="portfolio-item" data-aos="fade-in" data-aos-duration="300ms">
                            <div className="portfolio-img has-margin-right">
                                <img src="images\QuizApp design.png" alt="Quiz App - 5th Project"/>
                            </div>
                            <div className="portfolio-description">
                                <h6>My Project</h6>
                                <h1>Quiz App Project</h1>
                                <p>
                                    This project is made with pure html, css and js. It is a simple quiz app. It includes a  highscore, 
                                    leaderboard which will inculde only top 5 high scores. The information is not stored in the database. It uses local storage.<br/>
                                    To check it in details, you can<br/><br/> <strorng>Right Click <i class="fas fa-angle-right"></i> Inspect <i class="fas fa-angle-right"></i> Applications <i class="fas fa-angle-right"></i> Local Storage</strorng>

                                </p>
                                <a href="https://quiz-app-5980b.web.app/" target="_blank" className="cta" rel="noreferrer">Visit Here</a>
                            </div>
                        </div>
                        
                        <div className="portfolio-item" data-aos="fade-in" data-aos-duration="300ms">
                            <div className="portfolio-description has-margin-right">
                                <h6>My Project</h6>
                                <h1>ToDo List</h1>
                                <p>
                                    This project is made with EJS, Nodejs and MongoDB at basic level. It is a simple todo list. 
                                    For backend I have used MongoDB. Main feature is anyone can use it &amp;<br/>
                                    "https://tranquil-stream-68506.herokuapp.com/" <br/>look at the URL of the Todo list it looks like a normal link(like he image at right it has title <b>Today</b>); and you can play with the link<br/>
                                    "https://tranquil-stream-68506.herokuapp.com/(addYourName or any title you want to give)".<br/>
                                    Visit the link Below and Play with it.


                                </p>
                                <a href="https://tranquil-stream-68506.herokuapp.com/" target="_blank" className="cta" rel="noreferrer">Visit Here</a>
                            </div>
                            <div className="portfolio-img has-margin-left">
                                <img src="images\ToDo design.png" alt="Breast Cancer Detection"/>
                            </div>
                        </div>
                        <div className="portfolio-item" data-aos="fade-in" data-aos-duration="300ms">
                            <div className="portfolio-img has-margin-right">
                                <img src="images/SpamMail.jpg" alt="Spam Mail"/>
                            </div>
                            <div className="portfolio-description">
                                <h6>My project</h6>
                                <h1>Spam Mail Detection</h1>
                                <p>
                                    This Project is related to Spam Mail Detection.
                                    This helps to check whether the mail recieved is 
                                    a spam(unsafe) or ham(safe).
                                </p>
                                <a href="https://github.com/Yashkapure06/Spam-mail-predection.git" target="_blank" className="cta" rel="noreferrer">Visit Here</a>
                            </div>
                        </div>
                        <div className="portfolio-item" data-aos="fade-in" data-aos-duration="300ms">
                            <div className="portfolio-description has-margin-right">
                                <h6>My Project</h6>
                                <h1>Breast Cancer Detection Project</h1>
                                <p>
                                    This Project is related to Breast Cancer Detection.
                                    This is an Machine Learning Project.
                                    For testing purposes, the dataset used is from <a href="https://www.kaggle.com/" target="_blank" rel="noreferrer">Kaggle</a>.
                                    The main library used is sklearn, pandas, numpy, Matplotlib and so on...


                                </p>
                                <a href="https://github.com/Yashkapure06/Breast-Cancer-Detection.git" target="_blank" className="cta" rel="noreferrer">Visit Here</a>
                            </div>
                            <div className="portfolio-img has-margin-left">
                                <img src="images\Breast Cancer.JPG" alt="Breast Cancer Detection"/>
                            </div>
                        </div>
                        
                        <div className="portfolio-item" data-aos="fade-in" data-aos-duration="300ms">
                            <div className="portfolio-img has-margin-right">
                                <img src="images\JarvisGUI.JPG" alt="Jarvis GUI- 1st Project"/>
                            </div>
                            <div className="portfolio-description">
                                <h6>My Project</h6>
                                <h1>Virtual AI Assistant</h1>
                                <p>
                                    This is my first project, inspired from Jarvis made by RDJ(Iron Man).
                                    The major Programming language used in this project is Python.
                                    This project does some similar tasks related to google assistant, siri,etc. 
                                    The major part of this project is the GUI to give a realistic look. 
                                </p>
                                <a href="https://github.com/Yashkapure06/Virtual-AI-Assistant.git" target="_blank" className="cta" rel="noreferrer">Visit Here</a>
                            </div>
                        </div>
                        <div className="portfolio-item" data-aos="fade-in" data-aos-duration="300ms">
                            <div className="portfolio-description has-margin-right">
                                <h6>My Project</h6>
                                <h1>Virtual Self Driving Car Project</h1>
                                <p>
                                    This Project is related to Self Driving Car .
                                    A self-driving car (sometimes called an autonomous car or driverless car) 
                                    is a vehicle that uses a combination of sensors, cameras, radar and artificial intelligence (AI) to travel
                                    between destinations without a human operator.
                                    
                                </p>
                                <a href="https://github.com/Yashkapure06/Self-Driving-Car-Virtual-.git" target="_blank" className="cta" rel="noreferrer">Visit Here</a>
                            </div>
                            <div className="portfolio-img has-margin-left">
                                <img src="images/SelfDrivingCar.jpg" alt="Self Driving Car"/>
                            </div>
                        </div>
                        <div className="experience-img" >
                            <img src="images/Group 1949.svg" alt="" />
                        </div>
                        
                    </div>
                </section>
            </div>
        )
    }
}
export default Portfolio;