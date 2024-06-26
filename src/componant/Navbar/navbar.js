import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import {FaBars, FaTimes} from "react-icons/fa"
const Navbar= () =>{

    const [click, setClick]=useState(false)
    const handleClick=()=> setClick(!click)

    const [color, setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY>1){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    window.addEventListener("scroll",changeColor);
    return(
        <div className={color?"header header-bg":"header"}>
            <Link to="/" className="logo">
                <h1 className={click ? "heading":"heading-bg"}>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active":"nav-menu"}>
                <li className="btn btn-secondary">
                    <Link to="/">Home</Link>
                </li>
                <li className="btn btn-secondary">
                    <Link to="/project">Project</Link>
                </li>
                <li className="btn btn-secondary">
                    <Link to="/about">About</Link>
                </li>
                <li className="btn btn-secondary">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? ( <FaTimes size={20} style={{color:"#fff"}}/>) :(<FaBars size={20} style={{color:"#fff"}}/>)}
            </div>
        </div>
    )
}
export default Navbar;