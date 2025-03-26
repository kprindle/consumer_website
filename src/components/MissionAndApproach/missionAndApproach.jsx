import React from "react";
import "./missionAndApproach.css";

const MissionAndApproach = () => {
	return (
		<div className="mission-and-approach-container">
			<div className="mission-and-approach-inner-container">
				<div className="our-mission">
					<div className="our-mission-text">
						<div className="our-mission-title">Our mission</div>
						<div className="our-mission-description">
							To bridge the gap between cannabis science and consumer experience. We translate complex Certificates of Analysis
							from state-licensed laboratories into user-friendly product profiles and then categorize them into colors -
							yellow for products likely to energize, green for those reported to have motivational effects, blue for products
							that most often have a calming influence, and purple for those with typically restful effects.
						</div>
					</div>
					<img src="/AboutPage/About-Mission.png" alt="Mission and Approach" className="mission-and-approach-image" />
				</div>
				<div className="our-mission our-approach">
					<img src="/AboutPage/About-Approach.png" alt="Mission and Approach" className="mission-and-approach-image" />
					<div className="our-mission-text">
						<div className="our-mission-title">Our approach</div>
						<div className="our-mission-description">
							Our approach demystifies the potential effects of cannabis, making the selection process easier and more reliable
							for consumers, boosting sales and improving the customer experience for dispensaries, and helping brands grow and
							market more confidently.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MissionAndApproach;
