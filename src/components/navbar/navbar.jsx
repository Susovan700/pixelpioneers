import React from "react";
import "./navbar.css";

function Navbar(){
    return(
    <div className="navbar">
        <div className="logo">
           <h1>Susovan</h1>
        </div>
        <ul className="menu">
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
    </div>
    )
}

export default Navbar;