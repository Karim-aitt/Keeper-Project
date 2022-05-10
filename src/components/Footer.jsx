import React from "react"


function Footer(){
    const date = new Date().getFullYear();
    console.log(date);
    return (
        <footer>
            <p>Copyright ⓒ {date}</p>
        </footer>
    )
}

export default Footer;