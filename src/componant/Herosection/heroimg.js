import "./heroimg.css";
import BImge from "../../assets/bgimg.jpg"
import {Link} from "react-router-dom"

const HeroImg=()=>{
    return(
       <div className="hero">
            <div className="mask">
                <img className="Into-img" src={BImge} alt="bgImg"/>
            </div>
            <div className="content">
                <p>Hi, I'am Dipak</p>
                <h1>Front End Developer.</h1>
                <div className="Button">
                <Link to="/project" className="button" >Projects</Link>
                <Link to="/contact" className="button btn-light" >Contacts</Link>
            </div>
            </div>
            
       </div>
    )
}

export default HeroImg;