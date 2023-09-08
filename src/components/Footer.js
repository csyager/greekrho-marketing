import icon from "./../images/android-chrome-512x512.png"; 

function Footer() {

	const scrollToTopOfScreen = () => {
		document.documentElement.scrollTo(0, 0);
	};
	
	return (
		<footer className="footer">
			<div className="container footer-content">
				<div className="row">
					<div className="col-md-4">
						<table className="table table-borderless"> 
							<tbody>
								<tr>
									<td>
										<a className="footer-brand" href="/">
											<img src={icon} width="50" height="50" className="d-inline-block align-top" alt="" /> &nbsp; GreekRho	
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-md-4">
						<table className="table table-borderless">
							<tbody>
								<tr>
									<td>Contact us</td>
								</tr>
								<tr>
									<td><a href="mailto:support@greekrho.com">support@greekrho.com</a></td>
								</tr>
								<tr>
									<td><a href="/#/greekrho+" onClick={ scrollToTopOfScreen }>Learn about GreekRho+</a></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-md-4">
						<table className="table table-borderless">
							<tbody>
								<tr>
									<td>Resources</td>
								</tr>
								<tr>
									<td><a href="/#/documentation" onClick={ scrollToTopOfScreen }>Documentation</a></td>
								</tr>
								<tr>
									<td><a href="https://github.com/csyager/greeklink-core" target="_blank" rel="noreferrer">Source code</a></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
