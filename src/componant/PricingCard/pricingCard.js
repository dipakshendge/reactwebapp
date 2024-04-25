import React from "react";
import './pricingCard.css';
import cal from '../../assets/calculator.PNG';
import rest from '../../assets/rest.PNG'



const PricingCard = () =>{
    return(
        <div className="row mt-5 ms-5 pt-5 pb-5">
                <div className="col mt-2">
                    <div className="card">
                        <img src={cal} alt="img not found" className="card-img-top" />
                        <div className="card-body text-center">
                            <div className="card-title h3">JavaScript Calculator</div>
                            <div className="card-text">
                                <p>
                                    HTML, CSS and JavaScript
                                </p>
                                <a href="https://dipakshendge.github.io/JavaScriptCalculator/" target="_blank"><button className="btn btn-primary">Live Preview</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col mt-2">
                    <div className="card">
                        <img src={rest} alt="" className="card-img-top"/>
                        <div className="card-body text-center">
                            <div className="card-title h3">Restaurant</div>
                            <div className="card-text">
                                <p>
                                    Restaurant static Website using Bootstrap, HTML and CSS 
                                </p>
                                <a href="https://dipakshendge.github.io/BootstrapProject/" target="_blank"><button className="btn btn-primary">Live Preview</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col mt-2">
                    <div className="card" >
                        <img src="https://media.istockphoto.com/id/1453715348/photo/nishikawa-gorge-a-beautiful-canyon-in-japan.jpg?s=1024x1024&w=is&k=20&c=yBEY7-oU4qJ8agdynFA69uhk4Cr_sOlyIZnRg0kkuyA=" alt="" className="card-img-top" />
                        <div className="card-body text-center">
                            <div className="card-title h3">Exortic Salad</div>
                            <div className="card-text">
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae accusantium non eaque aliquam iste tenetur veritatis cum dolor quisquam quo?
                                </p>
                                <a href="#"><button className="btn btn-primary">Go Somewhere</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default PricingCard;