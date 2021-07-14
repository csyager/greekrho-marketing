import React from "react";
import alderman from "./../images/alderman.jpeg"
import lawn from "./../images/lawn.jpeg"
import rotunda from "./../images/rotunda.jpeg"
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <Navbar active="Home"/>
        <div>
            <div className="square-overlay">     
            </div>
            <div className="triangle-overlay">
            </div>
            <div className="overlay-text">
                <h1 className="overlay-title">GreekRho</h1>     
                <p className="lead overlay-lead">The open-source online tool for student organizations</p>
            </div>
            
            <div id="carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 carousel-image" src={lawn} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-image" src={alderman} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-image" src={rotunda} alt="Third slide" />
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="paragraph-bubble">
                    <p>GreekRho is an open-source platform for student clubs, teams, and social groups to manage their day-to-day organizational needs. We believe that the best platform for small organizations is the one that we build together. That's why our platform is open source; you can download the code, change it to suit your needs, and run our code on any machine all for <b><i>free</i></b>.</p>
                    <p>Now, more than ever, we need to leverage modern organizational tools without shelling out to use them.  Let's work together, stop paying crazy fees for tools we don't use, and build a platform that works for us.</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card primary-card">
                            <div className="card-header"><Link to="/documentation">Documentation</Link></div>
                            <div className="card-body">
                                <p className="card-text">Browse our documentation library, including use guides and demonstration videos detailing the various features and uses of the GreekRho platform</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card primary-card">
                            <div className="card-header"><a href="https://github.com/csyager/greeklink-core" target="_blank" rel="noreferrer">Source Code</a></div>
                            <div className="card-body">
                                <p className="card-text">Examine the open-source codebase of the GreekRho platform on GitHub, where you can see the code, submit issues, and make contributions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card primary-card">
                            <div className="card-header"><Link to="/greekrho+">GreekRho+</Link></div>
                            <div className="card-body">
                                <p className="card-text">Looking for an affordable way to run your application?  GreekRho+ relies on shared infrastructure to deliver a solution that's <b>cheaper than trying to do it yourself.</b>  Click here to learn more!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;