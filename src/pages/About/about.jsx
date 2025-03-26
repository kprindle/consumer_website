import React, { useState, useEffect } from "react";
import OriginsOfDYC from "../../components/OriginsOfDYC/originsOfDYC";
import MissionAndApproach from "../../components/MissionAndApproach/missionAndApproach";
import "./about.css";

function About() {
	const [imagesLoaded, setImagesLoaded] = useState(false);

	useEffect(() => {
		// Load images when the component is mounted
		const loadImages = async () => {
			const imageUrls = [
				"/AboutPage/About-Header.jpg",
				"/AboutPage/About-Approach.png",
				"/AboutPage/About-Approach.png",
			];

			const promises = imageUrls.map(async (url) => {
				const img = new Image();
				img.src = url;
				await new Promise((resolve) => {
					img.onload = resolve;
				});
			});

			await Promise.all(promises);
			setImagesLoaded(true);
		};

		loadImages();
	}, []);
	return (
		<>
			<div className="about-header">
				<div className="header-text-container">
					<span className="title">ABOUT US</span>
					<span className="subtitle">Ending the confusion around cannabis effects</span>
					<span className="description">
						At Discover Your Color, we envision a world where choosing cannabis is as straightforward as picking any wellness
						product.
					</span>
				</div>
			</div>
			<MissionAndApproach />
			<OriginsOfDYC />
		</>
	);
}

export default About;
