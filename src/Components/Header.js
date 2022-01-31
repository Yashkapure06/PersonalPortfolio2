import React from 'react';

class Header extends React.Component {
    render(){
        return (
            <div>
                <header>
                    <img id="icon"  src="images/sun.JPG" alt="light mode"/>
                    <div className="left-circ" >
                            <img src="images/Group 1953.svg" alt="" />
                        </div>
                        <div className="circle-img" >
                            <img src="images/Group 1951.svg" alt="" />
                        </div>
                    
                </header>
            </div>
        )
    }
}
export default Header;