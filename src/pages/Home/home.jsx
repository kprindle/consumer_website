import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Quiz from "../../components/Quiz/quiz";
import ReliabilityCarosoul from "../../components/ReliabilityCarosoul/reliabilityCarosoul";
import HowDYCWorks from "../../components/HowDYCWorks/howDYCWorks";
import "./home.css";

function Home({ isOpen }) {
	const [dycStandardOption, setDycStandardOption] = useState("full-panel-testing");
	const [imagesLoaded, setImagesLoaded] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		// Load images when the component is mounted
		const loadImages = async () => {
			const imageUrls = [
				"/Home-BadCOA-NoFullPanel.jpg",
				"/Home-HeaderBkg-Wide.jpg",
				"/Home-BadCOA-NotAllNatural.jpg",
				"/Home-Compliance-FarmBill.jpg",
				"/Home-Icon-Science-FullPanelTesting.svg",
				"/Home-Icon-AllNatural.svg",
				"/Home-Icon-Compliance.svg",
				"/Home-AsSeen-DalesReport.jpg",
				"/Home-AsSeen-CannabisTechToday.jpg",
				"/Home-AsSeen-Benzinga.jpg",
				"/Home-AsSeen-GreenState.jpg",
				"/Home-Partner-Flore.png",
				"/Home-Partner-BohemianChemist.png",
				"/Home-Partner-Arcanna.png",
				"/Home-Partner-SolSpirit.png",
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
		<div className="container">
			<div className="front-page">
				<div className="front-page-text-wrapper">
					<span className="opening-small-blue-text">SET THE STANDARD. BUILD A NETWORK. RAISE CONFIDENCE.</span>
					<span className="openening-title-green-large">
						Make informed <br></br>cannabis purchases
					</span>
					<div className="adhereing-to-high-standards">
						DYC is setting the industry standard with a four-color system that makes selecting the right cannabis product
						straightforward and stress-free.
					</div>
					<div className="color-dots-wrapper">
						<span className="color-dot" style={{ backgroundColor: "#e3deaa" }}></span>
						<span className="color-dot" style={{ backgroundColor: "#b1cbc1" }}></span>
						<span className="color-dot" style={{ backgroundColor: "#a3b9dd" }}></span>
						<span className="color-dot" style={{ backgroundColor: "#bcafd2" }}></span>
					</div>
				</div>
			</div>
			<div className="middle-portion">
				<div className="middle-portion-text-wrapper">
					<span className="setting-the-standard">
						Setting the <span style={{ fontWeight: "bold" }}>DYC Standard</span>
					</span>
					<span className="adhereing-to-high-standards" style={{ textAlign: "center" }}>
						All operators on the DYC Network must adhere to our high standards.
					</span>
					<div className="selection-buttons-wrapper">
						<button
							onClick={() => setDycStandardOption("full-panel-testing")}
							className={dycStandardOption === "full-panel-testing" ? "selection-button selected" : "selection-button"}>
							Full-panel testing
						</button>
						<button
							onClick={() => setDycStandardOption("all-natural")}
							className={dycStandardOption === "all-natural" ? "selection-button selected" : "selection-button"}>
							All natural ingredients
						</button>
						<button
							onClick={() => setDycStandardOption("law-complient")}
							className={dycStandardOption === "law-complient" ? "selection-button selected" : "selection-button"}>
							Compliant with federal & state law
						</button>{" "}
					</div>
				</div>
				<div className="middle-portion-bottom-section">
					<div className="middle-portion-bottom-section-left">
						{dycStandardOption === "full-panel-testing" && (
							<>
								<img className="standards-images" src="/Home-BadCOA-NoFullPanel.jpg"></img>
								<div className="blue-box-explanation">
									A COA only detailing active ingredients does not pass the DYC Standard and is not allowed in network until
									remedied.
								</div>
							</>
						)}
						{dycStandardOption === "all-natural" && (
							<>
								<img className="standards-images" src="/Home-BadCOA-NotAllNatural.jpg"></img>
								<div className="blue-box-explanation" style={{ top: "55%" }}>
									A COA that test for contaminants but shows synthetic compounds still does not pass the DYC Standard and is not
									allowed in network.
								</div>
							</>
						)}
						{dycStandardOption === "law-complient" && (
							<img className="farm-bill-image" src="/Home-Compliance-FarmBill.jpg"></img>
						)}
					</div>
					<div className="middle-portion-bottom-section-right">
						{dycStandardOption === "full-panel-testing" && (
							<div className="selectionDetailsContiner">
								<img style={{ width: "50px", marginBottom: "25px" }} src="/Home-Icon-Science-FullPanelTesting.svg" />
								<span className="selectionDetails">
									More than anaylizing active ingredients, we require all operators to screen for potential contaminants and
									residual chemicals to ensure standards of quality are met.
								</span>
								<button
									className="learn-more-button"
									onClick={() => {
										navigate("/science");
									}}>
									Learn More
								</button>
							</div>
						)}
						{dycStandardOption === "all-natural" && (
							<div className="selectionDetailsContiner">
								<img style={{ width: "50px", marginBottom: "50px" }} src="/Home-Icon-AllNatural.svg"  />
								<span className="selectionDetails">
									To join the DYC network, operators must prove their products are all-natural and do not use synthetically or
									chemically converted compounds like HHC or Delta 8.
								</span>
							</div>
						)}
						{dycStandardOption === "law-complient" && (
							<div className="selectionDetailsContiner">
								<img style={{ width: "50px", marginBottom: "25px" }} src="/Home-Icon-Compliance.svg" />
								<span className="selectionDetails">
									More than anaylizing active ingredients, we require all operators to screen for potential contaminants and
									residual chemicals to ensure standards of quality are met.
								</span>
							</div>
						)}
					</div>
				</div>
			</div>

			<div className="background-image">
				<span className="as-seen-in-tite">AS SEEN IN</span>
				<div className="as-seen-in-logos">
					<img className="as-seen-in-single" src="/Home-AsSeen-DalesReport-3.png" />
					<img className="as-seen-in-single" src="/Home-AsSeen-CannabisTechToday.jpg" />
					<img className="as-seen-in-single" src="/Home-AsSeen-Benzinga.jpg" />
					<img className="as-seen-in-single" src="/Home-AsSeen-GreenState.jpg" />
				</div>
				<Quiz />
			</div>
			<div className="shop-by-color-container">
				<div className="shop-by-color-text-container">
					<span className="shop-by-color-title">Shop by color with our trusted partners</span>
				</div>
				<div className="shop-by-color-partners-wrapper">
					<div className="shop-by-color-partner">
						<div className="shop-by-color-partner-logo">
							<img src="/Home-Partner-Flore.png" className="shop-by-color-partner-logo-image" />
						</div>
						<div className="shop-by-color-partner-name">SHOP IN STORE</div>
					</div>
					<div className="shop-by-color-partner">
						<div className="shop-by-color-partner-logo">
							<img src="/Home-Partner-BohemianChemist.png" className="shop-by-color-partner-logo-image" />
						</div>
						<div className="shop-by-color-partner-name">SHOP IN STORE</div>
					</div>
					<div className="shop-by-color-partner">
						<div className="shop-by-color-partner-logo">
							<img src="/Home-Partner-Arcanna.png" className="shop-by-color-partner-logo-image" />
						</div>
						<div className="shop-by-color-partner-name">FIND WHERE SOLD</div>
					</div>
					<div className="shop-by-color-partner">
						<div className="shop-by-color-partner-logo">
							<img src="/Home-Partner-SolSpirit.png" className="shop-by-color-partner-logo-image" />
						</div>
						<div className="shop-by-color-partner-name">FIND WHERE SOLD</div>
					</div>
				</div>
			</div>
			<div className="how-dyc-works-text">
				<span className="how-dyc-works-title">The only reliable way to shop for cannabis</span>
				<span className="adhereing-to-high-standards" style={{ maxWidth: "600px" }}>
					Our color-coded system is backed by more than 30,000 consumer reports on strains and their effects.
				</span>
			</div>
			<ReliabilityCarosoul />
			<div className="how-dyc-works-text">
				<span className="how-dyc-works-title">How DYC Works</span>
				<span className="adhereing-to-high-standards" style={{ maxWidth: "800px" }}>
					Stop feeling overwhelmed or confused when buying cannabis. DYC’s 4-color classification system sets an industry
					standard to make selecting products easier and more reliable.
				</span>
			</div>
			<HowDYCWorks />
			<div
				// style={{paddingBottom: "0"}}
				className="background-image" style={{paddingBottom: "5vh"}}>
				<div className="how-dyc-works-text">
					<span className="how-dyc-works-title">Take the guesswork out of buying cannabis</span>
					<span className="adhereing-to-high-standards">
						With Discover Your Color, you can say goodbye to trial and error and stop wasting money on recommendations from
						faulty website bots. Buying cannabis is as easy as choosing yellow, green, blue, or purple.
					</span>
				</div>
				<video
					src="/Effects-Rotator-Horizontal Version\Effect-Rotator-Horizontal_v1-vp9-chrome.webm"
					autoPlay
					loop
					muted
					playsInline
					width={"100%"}
					className="video-back"
				/>
			</div>
		</div>
	);
}
export default Home;
