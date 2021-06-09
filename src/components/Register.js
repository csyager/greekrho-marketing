import Navbar from "./Navbar";
import GreekRho_Plus from "./../images/greekrho+_logo.png"

function Register() {
    return (
        <>
            <Navbar active="Register"/>
            <div className="container">
                <img src={GreekRho_Plus} className="img-responsive greekrho-plus-logo"/>
                <div className="paragraph-bubble">
                    <p>GreekRho+ is our tailored solution for hosting the GreekRho application in the cloud.  While our source code is free to use, there is a cost associated with running the application from servers on the cloud.  We've taken strides to reduce this cost as much as possible, so that the use of our product is as affordable as it is performant.  GreekRho+ takes away the stress of running your GreekRho instance yourself, and provides the support and maintenance of our engineers at an affordable price.  See the cost breakdown below to compare the cost of hosting the app yourself, vs. the cost of using GreekRho+.</p>
                    <h3>Cost Breakdown</h3>
                    <p>Hosting a full scale web app isn't easy, and can be expensive.  The trouble is, by doing it yourself you end up paying for more than you need.  By sharing infrastructure among a larger base of GreekRho users, you can reduce costs so you're only paying for what you use.  See below for a breakdown of the cost of the underlying infrastructure that we use, compared to our pricing model:</p>
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
                <div className="paragraph-bubble">
                    <p>If you're interested in registering for GreekRho+, fill out this form, and a representative will be in touch shortly.</p>
                    <form>
                        <div className="form-group">
                            <label for="registerName">Full Name</label>
                            <input type="text" className="form-control" id="registerName" placeholder="Full name" />
                        </div>
                        <div className="form-group">
                            <label for="registerEmail">Email Address</label>
                            <input type="email" className="form-control" id="registerEmail" placeholder="Email" />
                            <small className="form-text text-muted">This email will be used to reach out regarding your registration, but will not be saved for later use.</small>
                        </div>
                        <div className="form-group">
                            <label for="registerUniversity">College/University</label>
                            <input type="text" className="form-control" id="registerUniversity" placeholder="Name of College or University" />
                        </div>
                        <div className="form-group">
                            <label for="registerOrganization">Name of Organization</label>
                            <input type="text" className="form-control" id="registerOrganization" placeholder="Name of Organization" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;