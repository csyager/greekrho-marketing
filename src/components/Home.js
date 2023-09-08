import React, { useState } from "react";
import chapel from "./../images/chapel.jpeg"
import lawn from "./../images/lawn.jpg"
import rotunda from "./../images/rotunda.jpg"
import Navbar from "./Navbar";
import NavLink from "./NavLink";
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
                        <img className="d-block w-100 carousel-image" src={chapel} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-image" src={rotunda} alt="Third slide" />
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="paragraph-bubble">
					<p>GreekRho is the open-source platform for student clubs, teams, and social groups to manage their day-to-day organizational needs.  Our goal is to provide a cost-effective way to recruit new members, manage organizational schedules and goals, and streamline communication within your organization.  <a data-toggle="collapse" href="#learn-more" aria-expanded="false" aria-controls="learn-more" onClick={toggleLearnMore} className={learnMoreFade} ><LearnMoreButton learnMore={learnMore} /></a></p>
					<div id="learn-more" className="collapse">
						<p>We believe that the best platform for student organizations is one that we build together. That's why our platform is open source; our code can be freely used, shared, downloaded, and contributed to.  Nobody knows your organization's needs better than you do, which is why our application is purpose-built to be extendible.  Whatever your needs, GreekRho is a great place to start.</p>
                        <p>While you are free to run our application on whatever platform you wish, our infrastructure offering <NavLink to="/greekrho+"><b>GreekRho+</b></NavLink> relies on efficiently sharing underlying resources, so that we can pass infrastructure savings to our customers.  GreekRho+ also runs our supported releases, giving you access to the most up-to-date versions of the platform.</p>
					</div>
               </div>
            </div>
            <div className="container">
                <div className="row">
					<div className="col-md-4">
                        <div className="card primary-card">
                            <div className="card-header"><NavLink to="/greekrho+">GreekRho+</NavLink></div>
                            <div className="card-body">
                                <p className="card-text">Want to use GreekRho but don't want to worry about the code?  We've got you covered.  GreekRho+ relies on shared infrastructure to deliver a solution that's <b>cheaper than doing it yourself.</b>  Click here to learn more!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card primary-card">
                            <div className="card-header"><NavLink to="/documentation">Documentation</NavLink></div>
                            <div className="card-body">
                                <p className="card-text">Browse our documentation library, including use guides and demonstration videos detailing the various features and uses of the GreekRho platform.</p>
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
