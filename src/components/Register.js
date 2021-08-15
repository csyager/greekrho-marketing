import React, { useState } from "react";
import Navbar from "./Navbar";
import GreekRho_Plus from "./../images/greekrho+_logo.png";
import ClipLoader from "react-spinners/ClipLoader";

function RegisterForm(props) {
	const [formState, setFormState] = useState({
		registerName: "",
		registerEmail: "",
		registerUniversity: "",
		registerOrganization: "",
		registerNotes: ""
	});
	const [loadingState, setLoadingState] = useState(false);

	const changeHandler = (e) => {
		const {name, value} = e.target;
		setFormState(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const [submitState, setSubmitState] = useState("Submit");
	const [responseStatusCode, setResponseStatusCode] = useState(0);

	const submitHandler = async (e) => {
		e.preventDefault();
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				registerName: formState.registerName,
				registerEmail: formState.registerEmail,
				registerUniversity: formState.registerUniversity,
				registerNotes: formState.registerNotes
			})
		};
		setSubmitState("");
		setLoadingState(true);
		const response = await fetch('https://0r7mg5azkb.execute-api.us-east-1.amazonaws.com/register', requestOptions)
		const status = await response.status;
		console.log(status);
		setResponseStatusCode(status);
		setLoadingState(false);
		props.setFormSubmitted(true);
	}
	
	if (!props.formSubmitted) {
		return (
			<form onSubmit={submitHandler}>
				<div className="form-group">
					<label htmlFor="registerName">Full Name</label>
					<input type="text" className="form-control" id="registerName" name="registerName" placeholder="Full name" value={formState.registerName} onChange={changeHandler} required/>
				</div>
				<div className="form-group">
					<label htmlFor="registerEmail">Email Address</label>
					<input type="email" className="form-control" id="registerEmail" name="registerEmail" placeholder="Email" value={formState.registerEmail} onChange={changeHandler} required/>
					<small className="form-text text-muted">This email will be used to reach out regarding your registration, but will not be saved for later use.</small>
				</div>
				<div className="form-group">
					<label htmlFor="registerUniversity">College/University</label>
					<input type="text" className="form-control" id="registerUniversity" name="registerUniversity" placeholder="Name of College or University" value={formState.registerUniversity} onChange={changeHandler} required/>
				</div>
				<div className="form-group">
					<label htmlFor="registerOrganization">Name of Organization</label>
					<input type="text" className="form-control" id="registerOrganization" name="registerOrganization" placeholder="Name of Organization" value={formState.registerOrganization} onChange={changeHandler} required/>
				</div>
				<div className="form-group">
					<label htmlFor="registerNotes">Anything else we should know?</label>
					<textarea className="form-control" id="registerNotes" rows="4" name="registerNotes" placeholder="Enter any additional notes here." value={formState.registerNotes} onChange={changeHandler} />
				</div>
				<button type="submit" className="btn btn-primary"><ClipLoader color="#ffffff" size="20" loading={ loadingState } />{ submitState }</button>
			</form>
		);
	} else if (responseStatusCode === 200) {
		return (
			<div className="alert alert-success" role="alert">Your response has been successfully submitted!  A representative will be in touch shortly.</div>
		);
	} else {
		return (
			<div className="alert alert-danger" role="alert">Your response could not be submitted.  Error code { responseStatusCode }</div>
		);
	}
	
}

function Register() {
	const [formSubmitted, setFormSubmitted] = useState(false);
    return (
        <>
            <Navbar active="Register"/>
            <div className="container">
                <img src={GreekRho_Plus} className="img-responsive greekrho-plus-logo" alt="greekrho-plus-logo"/>
                <div className="paragraph-bubble">
                    <p>GreekRho+ is our tailored solution for hosting the GreekRho application in the cloud.  While our source code is free to use, there is a cost associated with running the application from servers on the cloud.  We've taken strides to reduce this cost as much as possible, so that the use of our product is as affordable as it is performant.  GreekRho+ takes away the stress of running your GreekRho instance yourself, and provides the support and maintenance of our engineers at an affordable price.  See the cost breakdown below to compare the cost of hosting the app yourself, vs. the cost of using GreekRho+.</p>
                    <p>If you're interested in registering for GreekRho+, fill out this form, and a representative will be in touch shortly.</p>
					<hr />
					<RegisterForm formSubmitted={ formSubmitted } setFormSubmitted={ setFormSubmitted }/>
                </div>
                <div className="paragraph-bubble">

                    <h3>Cost Breakdown</h3>
                    <p>Hosting a full scale web app isn't easy, and can be expensive.  The trouble is, by doing it yourself you end up paying for more than you need.  By sharing infrastructure among a larger base of GreekRho users, you can reduce costs so you're only paying for what you use.  We value transparency with our customers, which is why we're comfortable comparing our prices.  See below for a breakdown of the cost of the underlying infrastructure that we use, compared to our pricing model:</p>
                    <table className="table table-responsive-md">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">GreekRho+</th>
                                <th scope="col">AWS Service</th>
                                <th scope="col" style={{minWidth: "150px"}}>AWS Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Compute</th>
                                <td></td>
                                <td>EC2 t2.micro Instance</td>
                                <td>$8.64 / month</td>
                            </tr>
                            <tr>
                                <th scope="row">Load Balancing</th>
                                <td></td>
                                <td>Application Load Balancer</td>
                                <td>$16.74 / month</td>
                            </tr>
                            <tr>
                                <th scope="row">Relational Database</th>
                                <td></td>
                                <td>RDS db.t2.micro Instance</td>
                                <td>$13.39 / month</td>
                            </tr>
                            <tr>
                                <th scope="row">Total</th>
                                <td></td>
                                <td></td>
                                <td><b>$38.77 / month</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </>
    )
}

export default Register;
