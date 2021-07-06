import React from "react";
import "../App.css";
import FormPage from "./FormPage";

// import {
// 	FaFacebookF,
// 	FaTwitter,
// 	FaPinterest,
// 	FaInstagram,
// } from "react-icons/fa";
const Contact = () => {
	const [state] = React.useState({
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat.​",
	});

	return (
		<div id="contact">
			<div className="container">
				<div className="contactSection">
					<div className="row justifyConter">
						<div className="col-6">
							<div className="contactSection-logo">
								{/* <h1>Erneste {new Date().getFullYear()}</h1> */}
								<h2 className="mainHeader">Contact us</h2>
								<div className="commonBorder"></div>
							</div>
							<p>{state.text}</p>
							{/* <ul className="contactCircles">
								<li>
									<FaFacebookF className="contactIcon" />
								</li>
								<li>
									<FaTwitter className="contactIcon" />
								</li>
								<li>
									<FaPinterest className="contactIcon" />
								</li>
								<li>
									<FaInstagram className="contactIcon" />
								</li>
							</ul> */}
						</div>
					</div>
				</div>
			</div>
			<FormPage />
		</div>
	);
};

export default Contact;
