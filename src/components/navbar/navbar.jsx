import React from "react";
import './navbar.css'
import digitalimpactlogo from '../../assets/digital-impact-logo.png'
import { Link } from "react-router-dom";




const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav-main">
                    <img className="img-1" src={digitalimpactlogo} alt="" height={100} width={100} />
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                    </ul>
                    <button className="nav-btt">Contact Us</button>
                </div>
                <div className="bottomline"></div>
            </nav>






        </>
    )
}
export default Navbar