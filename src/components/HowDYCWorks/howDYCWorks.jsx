import React, { useState } from "react";
import "./howDYCWorks.css";

const HowDYCWorks = () => {
	const [selection, setSelection] = useState(1);
	return (
		<div className="how-dyc-works">
			<div className="how-dyc-works-selections">
				<div className="how-dyc-works-selection-container">
					<div className="how-dyc-works-selection" onClick={() => setSelection(1)}>
						<div className="how-dyc-works-selection-text">1. Understand the colors</div>
						{selection === 1 ? (
							<img src="/Arrow-UpDown.svg" alt="" className="how-dyc-works-selection-arrow-icon" />
						) : (
							<img
								src="/Arrow-UpDown.svg"
								alt=""
								className="how-dyc-works-selection-arrow-icon"
								style={{ transform: "rotate(180deg)" }}
							/>
						)}
					</div>
					{selection === 1 && (
						<div className="how-dyc-works-selection-subtext understand-colors">
							At the heart of DYC is our standardized four-color system, each representing a distinct set of effects.
						</div>
					)}
				</div>
				<div className="how-dyc-works-selection-container">
					<div className="how-dyc-works-selection" onClick={() => setSelection(2)}>
						<div className="how-dyc-works-selection-text">2. Match your desired effect </div>
						{selection === 2 ? (
							<img src="/Arrow-UpDown.svg" alt="" className="how-dyc-works-selection-arrow-icon" />
						) : (
							<img
								src="/Arrow-UpDown.svg"
								alt=""
								className="how-dyc-works-selection-arrow-icon"
								style={{ transform: "rotate(180deg)" }}
							/>
						)}
					</div>
					{selection === 2 && (
						<div className="how-dyc-works-selection-subtext">
							Your cannabis experience should align with your needs and your lifestyle. With DYC, you simply choose the color
							that matches your desired effect and see how it makes you feel. Start with purple, for example. Try a blue if the
							purple labeled product doesn't make you feel calm enough. If you want something more uplifting, try a yellow or a
							green.
						</div>
					)}
				</div>

				<div className="how-dyc-works-selection-container">
					<div className="how-dyc-works-selection" onClick={() => setSelection(3)}>
						<div className="how-dyc-works-selection-text">3. Target your effect </div>
						{selection === 3 ? (
							<img src="/Arrow-UpDown.svg" alt="" className="how-dyc-works-selection-arrow-icon" />
						) : (
							<img
								src="/Arrow-UpDown.svg"
								alt=""
								className="how-dyc-works-selection-arrow-icon"
								style={{ transform: "rotate(180deg)" }}
							/>
						)}
					</div>
					{selection === 3 && (
						<div className="how-dyc-works-selection-subtext">
							Choose where you want to experience your effect - in your mind, throughout your whole system, or primarily in
							your body. Then match it with your selected color for your intended state (Energize, Focus, Calm, or Rest)
						</div>
					)}
				</div>
				<div style={{ borderBottom: "1px solid black" }} className="how-dyc-works-selection-container">
					<div className="how-dyc-works-selection" onClick={() => setSelection(4)}>
						<div className="how-dyc-works-selection-text">4. Enjoy a consistent experience</div>
						{selection === 4 ? (
							<img src="/Arrow-UpDown.svg" alt="" className="how-dyc-works-selection-arrow-icon" />
						) : (
							<img
								src="/Arrow-UpDown.svg"
								alt=""
								className="how-dyc-works-selection-arrow-icon"
								style={{ transform: "rotate(180deg)" }}
							/>
						)}
					</div>
					{selection === 4 && (
						<div className="how-dyc-works-selection-subtext">
							Our color-coded system provides a trusted, reliable way to choose cannabis, giving you consistent results every
							time. Once a color has been matched to an intended effect, it will remain this way across all product types,
							brands, and geography as the underlying chemistry of the colors never changes.
						</div>
					)}
				</div>
			</div>
			<div className="how-dyc-works-image">
				{(() => {
					switch (selection) {
						case 1:
							return <img src="/Home-Step1-Colors.svg" className="how-dyc-works-works-image-tag" alt="Step 1" />;
						case 2:
							return (
								<video
									src="/Home-Step2-ColorSlider-Transparent_031025\DYC-ColorSlider-Revised-090924-vp9-chrome.webm"
									className="how-dyc-works-works-image-tag"
									alt="Step 2"
									autoPlay
									loop
									muted
									playsInline
								/>
							);
						case 3:
							return <img src="/Home-Step3-MindBodyBalanced.svg" className="how-dyc-works-works-image-tag" alt="Step 3" />;
						case 4:
							return (
								<video
									src="/Home-Step4-GeographyMap-Transparent_031025\industry-standard-map-v2-transparent-vp9-chrome.webm"
									className="how-dyc-works-works-image-tag"
									alt="Step 2"
									autoPlay
									loop
									muted
									playsInline
								/>
							);
						default:
							return <img src="/Home-Step1-Colors.svg" className="how-dyc-works-works-image-tag" alt="Default Step" />;
					}
				})()}
			</div>
		</div>
	);
};

export default HowDYCWorks;
