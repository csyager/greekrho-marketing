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
					<label htmlFor="registerName">Name</label>
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
					<input type="text" className="form-control" id="registerOrganization" name="registerOrganization" placeholder="e.g., Delta Sig" value={formState.registerOrganization} onChange={changeHandler} required/>
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
					<p>Run GreekRho on the GreekRho+ network!  There's a lot that goes into hosting a web application.  By utilizing the GreekRho network, you benefit from the scale and performance of a platform using state-of-the-art AWS-powered infrastructure.  We've done the heavy-lifting so you don't have to!</p>
					<p>GreekRho+ also gives you access to the most up-to-date supported releases of GreekRho.  This means that your application will be supported by our team of engineers, and will automatically be kept up-to-date with regular updates.</p>
                    <p>If you're interested in registering for GreekRho+, fill out this form, and a representative will be in touch shortly.</p>
					<hr />
					<RegisterForm formSubmitted={ formSubmitted } setFormSubmitted={ setFormSubmitted }/>
                </div>
            </div>
        </>
    )
}

export default Register;
