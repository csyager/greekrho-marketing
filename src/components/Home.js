import React from "react";
import alderman from "./../images/alderman.jpeg"
import lawn from "./../images/lawn.jpeg"
import rotunda from "./../images/rotunda.jpeg"
import icon from "./../images/android-chrome-192x192.png"

function Home() {
    return (
        <div>
            <div className="square-overlay">     
            </div>
            <div className="triangle-overlay">
            </div>
            <div className="overlay-text">
                <h1 className="overlay-title">GreekRho</h1>     
                <p className="lead overlay-lead">Enabling Greek organizations in the new normal</p>
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
                <div className="home-paragraph">
                    <p>GreekRho is an open-source platform for student clubs, teams, and social groups to manage their day to day organizational needs.  We believe that the best platform for small organizations is the one that we build together.  That's why our platform is fully open source; you can download the code, change it to suit your needs, and use it all for <i><b>free</b></i>.  Yes, you read that right.  Our code base is free to use under the MIT License, meaning you can take our work and use it to springboard your own project.  Or, if that sounds like a lot of work, you're welcome to contribute to our code base and make it better for everyone who uses it.</p>
                    <p>Now, more than ever, we need to leverage modern organizational tools without shelling out to use them.  Let's work together, stop paying crazy fees for tools we don't use, and build a platform that works for us.</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card primary-card">
                            <div className="card-header"><a href="/demos">Demos</a></div>
                            <div className="card-body">
                                <p className="card-text">Browse our library of demonstration videos detailing the various features and uses of the GreekRho platform</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card primary-card">
                            <div className="card-header"><a href="https://github.com/csyager/greeklink-core" target="_blank">Source Code</a></div>
                            <div className="card-body">
                                <p className="card-text">Examine the open-source codebase of the GreekRho platform</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card primary-card">
                            <div className="card-header"><a href="/register">Register</a></div>
                            <div className="card-body">
                                <p className="card-text">GreekRho is made more affordable by sharing infrastructure.  Register to use the official GreekRho platform here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;