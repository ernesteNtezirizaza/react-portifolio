import React from "react";
import "../App.css";

const About = () => {
	const [header] = React.useState({
		subHeader: "About Me",
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
	});
	const [state] = React.useState([
		{ id: 1, title: "Name", text: "Ntezirizaza Erneste" },
		{ id: 2, title: "Email", text: "erneste.ntezirizaza@gmail.com" },
		{ id: 3, title: "Phone", text: "+250 783015117" },
		{ id: 4, title: "Linkedin", text: "Erneste" },
	]);
	return (
		<div id="about">
			<div className="container">
				<div className="common">
					<h1 className="mainHeader">{header.subHeader}</h1>
					<p className="mainContent">{header.text}</p>
					<div className="commonBorder"></div>
				</div>
				<div className="row  h-650 alignCenter">
					<div className="col-6">
						<div className="about__img">
							<img src="/images/man.jpg" alt="man" />
						</div>
					</div>
					<div className="col-6">
						<div className="about__info">
							<h1>Hi There</h1>
							<div className="about__info-p1">
								In id nulla magna. Nullam posuere fermentum
								mattis. Nunc id dui at sapien faucibus fermentum
								ut vel diam. Nullam tempus, nunc id efficitur
								sagittis, urna est ultricies eros, ac porta sem
								turpis
							</div>
							<div className="about__info-p2">
								nunc id efficitur sagittis, urna est ultricies
								eros, ac porta sem turpis porta sem turpis quis
								leo. Nulla in feugiat elit
							</div>
							<div className="info__contacts">
								<div className="row">
									{state.map((info) => (
										<div className="col-6">
											<strong>{info.title}</strong>
											<p>{info.text}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
