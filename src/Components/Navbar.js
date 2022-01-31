import React from 'react';

class NavBar extends React.Component {
    render() {
        return(
            <div>
                    <div className="menu-toggler">
                        <div className="bar half start"></div>
                        <div className="bar"></div>
                        <div className="bar half end"></div>
                    </div>
                    <nav className="top-nav">
                        <ul className="nav-list">
                            <li>
                                <a href= "Portfolio.html" className="nav-link">Home</a>

                            </li>
                            <li>
                                <a href="#about" className="nav-link">About</a>

                            </li>
                            <li>
                                <a href="#services" className="nav-link">Achievements</a>

                            </li>
                            <li>
                                <a href="#skills" className="nav-link">Skills</a>

                            </li>
                            <li>
                                <a href="#portfolio" className="nav-link">Portfolio</a>

                            </li>
                            <li>
                                <a href="#experience" className="nav-link">Experience</a>

                            </li>
                        
                        </ul>
                    </nav>
                    
            </div>
        )
    }
}
export default NavBar