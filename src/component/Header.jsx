import React,{useState} from "react";
import "./navbar.css"


function Header(){
    const [nav,setNav] = useState(false)
    const handleNav=()=>setNav(!nav)
    



    return <div className="navbar">
        <h1 className="title">
            Travel.
        </h1>    


        <ul className="navmenu">
            <li>Home</li>
            <li>Destination</li>
            <li>Views</li>
            <li>Book</li>
            <li>Packages</li>
            <li>Contact</li>
        </ul>

        <div className="socials">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-user"></i>
        </div>

        <div className="hamburger" onClick={handleNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            
        </div>
        <div className={nav ? 'mobile-menu active' : "mobile-menu"}>

            <ul className="mobile-nav">
            <li>Home</li>
            <li>Destination</li>
            <li>Views</li>
            <li>Book</li>
            <li>Packages</li>
            <li>Contact</li>
            </ul>
            <div className="mobile-menu-bottom">
                <div className="mobile-buttons">
                    <button id="button">Search</button>
                    <button id="button">Account</button>
                </div>
                <div className="icons">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-solid fa-hotel"></i>
                <i class="fa-brands fa-pinterest"></i>
                </div>
            </div>
        </div>
      


        
    </div>

}



export default Header;