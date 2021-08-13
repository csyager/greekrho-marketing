import React, { useState } from "react";
import alderman from "./../images/alderman.jpeg"
import lawn from "./../images/lawn.jpeg"
import rotunda from "./../images/rotunda.jpeg"
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

function LearnMoreButton(props) {
	if (props.learnMore) {
		return (
			<>Learn more <FontAwesomeIcon icon={ faCaretDown } /></>
		)
	} else {
		return (
			<>Show less <FontAwesomeIcon icon={ faCaretUp } /></>
		)
	}
}

function Home() {
	const [learnMore, setLearnMore] = useState(true);
	const [learnMoreFade, setLearnMoreFade] = useState("fade-in");

	const toggleLearnMore = () => {
		setLearnMoreFade("fade-out");
		setTimeout(() => {
			if (learnMore) {
				setLearnMore(false);
			} else {
				setLearnMore(true);
			}
			setLearnMoreFade("fade-in");
		}, 500);
	}

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
                <p className="lead overlay-lead">The open-source tool for student organizations</p>
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
					<p>GreekRho is the open-source platform for student clubs, teams, and social groups to manage their day-to-day orgizational needs.  Our solution is free to use, and is built on the contributions of our users, with the goal of providing everything you need to run your organization, without charging for what you don't.  <a data-toggle="collapse" href="#learn-more" aria-expanded="false" aria-controls="learn-more" onClick={toggleLearnMore} className={learnMoreFade} ><LearnMoreButton learnMore={learnMore} /></a></p>
					<div id="learn-more" className="collapse">
						<p>We believe that the best platform for student organizations is the one that we build together. That's why our platform is open source; our code can be freely used, shared, downloaded, and contributed to.  Our vision at GreekRho is of a world where talented students and creators can work together to build the tools they need, rather than pay for them.  Our application is purpose-built to be extendible, and the underlying infrastructure is built to be shared.  While you are free to run our application on whatever platform you wish, our infrastructure offering <b>GreekRho+</b> relies on efficiently sharing underlying resources, so that you only pay for what you need.</p>
						<p>Now, more than ever, we need to leverage modern organizational tools without shelling out to use them. Let's work together, stop paying for what we don't use, and build a platform that works for us.</p>
					</div>
               </div>
            </div>
            <div className="container">
                <div className="row">
					<div className="col-md-4">
                        <div className="card primary-card">
                            <div className="card-header"><Link to="/greekrho+">GreekRho+</Link></div>
                            <div className="card-body">
                                <p className="card-text">Looking for an affordable way to run your application?  GreekRho+ relies on shared infrastructure to deliver a solution that's <b>cheaper than trying to do it yourself.</b>  Click here to learn more!</p>
                            </div>
                        </div>
                    </div>

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
                                <p className="card-text">Open source means our code can be freely viewed, downloaded, and contributed to.  Examine the open-source codebase of the GreekRho platform on our Github repository.</p>
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
