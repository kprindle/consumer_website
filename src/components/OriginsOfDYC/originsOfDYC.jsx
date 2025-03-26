import React from "react";
import "./originsOfDYC.css";
import OriginsTimeline from "../OriginsTimeline/originsTimeline";

const OriginsOfDYC = () => {
	return (
		<div className="origins-container">
			<div className="origins-inner-container">
				<span className="origins-title">The origins of DYC</span>
				<span className="origins-description">
					It's taken over 25 years, 30,000 consumer reports, and 1 fateful introduction to create DYC.
				</span>
				<div className="dr-t-and-livi-descriptions">
					<div className="profile-container">
						<div className="headshot-and-name" style={{ borderBottom: "15px solid #dfefe8" }}>
							<img className="headshot" src="/AboutPage/About-DrT.png" />
							<span className="name">Dr. Jean Talleyrand</span>
						</div>
						<span className="profile-description">
							Dr. Talleyrand currently provides specialized Medical Cannabis consultations in California.
						</span>
					</div>
					<div className="profile-container">
						<div className="headshot-and-name" style={{ borderBottom: "15px solid #46784e" }}>
							<img className="headshot" src="/AboutPage/About-Livi.png" />
							<span className="name">Livi Mckay</span>
						</div>
						<span className="profile-description">
							Livi advocates strongly for a nationwide system for personalized medicine and therapeutics.
						</span>
					</div>
				</div>
			</div>
			<OriginsTimeline />
			<div className="DYC-creation">
				<span className="DYC2024">
					<strong>2024:</strong>
				</span>
				<span className="DYC2024">Dr. Talleyrand and Livi join forces to create</span>
				<img style={{width: "30%", marginTop: "5vh"}} src="/AboutPage\About-DYC-logo-centered.png" />
			</div>
		</div>
	);
};

export default OriginsOfDYC;
