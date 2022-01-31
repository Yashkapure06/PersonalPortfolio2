import React from 'react';


class Footer extends React.Component {
    render(){
    
        return (
            <div>
                <footer style={{"background-color":"rgba(128,128,128,1)"}}>
                    <span style={{"height": "64px", "width": "64px", "margin-left": "0px", "margin-right": "auto", "margin-top": "0px", "right": "20px", "bottom": "20px", "box-shadow": "2px 2px 8px 0 rgba(128,128,128,1)"}}>
                        <div>
                            <p style={{"text-align":"center", "color":"black"}}>&copy; 2021 , Designed &amp; Developed by <a href="https://www.instagram.com/_yashkapure_/" className="" target="_blank" rel="noreferrer">Yash Kapure</a>&nbsp;</p>
                        </div>
                    </span>
                </footer>
            </div>
        )
    
    }
}
export default Footer;