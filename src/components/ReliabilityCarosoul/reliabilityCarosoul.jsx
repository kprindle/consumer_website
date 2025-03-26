import React, { useRef, useState } from "react";
import "./reliabilityCarosoul.css";

const ReliabilityCarosoul = () => {
	const containerRef = useRef(null);
	const [isAtStart, setIsAtStart] = useState(true);
	const [isAtEnd, setIsAtEnd] = useState(false);

	const checkScrollPosition = () => {
		const container = containerRef.current;
		setIsAtStart(container.scrollLeft <= 0);
		setIsAtEnd(container.scrollLeft >= container.scrollWidth - container.clientWidth);
	};

	const scrollLeft = () => {
		containerRef.current.scrollLeft -= 350;
		setTimeout(checkScrollPosition, 100);
	};

	const scrollRight = () => {
		containerRef.current.scrollLeft += 350;
		setTimeout(checkScrollPosition, 100);
	};

	return (
		<>
			<div className="reliability-carosoul-container">
				<div className="reliability-carosoul-component-container" ref={containerRef} onScroll={checkScrollPosition}>
					<div className="reliability-carosoul-component">
						<div className="reliability-carosoul-component-content">
							<img src="/Home-Icon-IndustryStandard.svg" className="reliability-carosoul-component-image" />
							<div className="reliability-carosoul-component-content-text">An industry standard</div>
							<div className="reliability-carosoul-component-content-subtext">
								DYC helps you choose products based on their effects on you. Then, once you know you like a color, you can trust
								that you'll always like that color - because they mean the same thing wherever you go
							</div>
						</div>
					</div>
					<div className="reliability-carosoul-component">
						<img src="/Home-Icon-EasyToUse.svg" className="reliability-carosoul-component-image" />
						<div className="reliability-carosoul-component-content-text">Easy to use</div>
						<div className="reliability-carosoul-component-content-subtext">
							You don't need to know chemistry - you don't even need to know the difference between indica and sativa. With
							DYC's industry-standard four-color system, selecting the right cannabis product is straightforward and
							stress-free.
						</div>
					</div>
					<div className="reliability-carosoul-component">
						<img src="/Home-Icon-Science-FullPanelTesting.svg" className="reliability-carosoul-component-image" />
						<div className="reliability-carosoul-component-content-text">Science-backed</div>
						<div className="reliability-carosoul-component-content-subtext">
							Unlike other recommendation tools based on vague claims and anecdotal evidence, our system is rooted in extensive
							research. We complied data from over 30,000 consumer reports, ensuring our colors accurately match your
							expectations.
						</div>
					</div>
					<div className="reliability-carosoul-component">
						<img src="/Home-Icon-SavesMoney.svg" className="reliability-carosoul-component-image" />
						<div className="reliability-carosoul-component-content-text">Saves money</div>
						<div className="reliability-carosoul-component-content-subtext">
							There is no cost to use DYC - but you'll save money on the trial-and-error process of buying cannabis. Our
							reliable categorization means you're more likely to get the effect you want the first time around.
						</div>
					</div>
					<div className="reliability-carosoul-component">
						<img src="/Home-Icon-Educational.svg" className="reliability-carosoul-component-image" />
						<div className="reliability-carosoul-component-content-text">Educational</div>
						<div className="reliability-carosoul-component-content-subtext">
							Feel empowered with every buying decision you make. DYC transforms you from a novice to a knowledgeable consumer,
							allowing you to choose strains that align with your personal preferences.
						</div>
					</div>
				</div>
			</div>
			<div className="carosoul-arrows-container">
				<div className="carosoul-arrow" onClick={scrollLeft} style={{ opacity: isAtStart ? 0.5 : 1 }}>
					<img src="/Arrow-LeftRight.svg" style={{ transform: 'rotate(180deg)' }} />
				</div>
				<div className="carosoul-arrow" onClick={scrollRight} style={{ opacity: isAtEnd ? 0.5 : 1 }}>
					<img src="/Arrow-LeftRight.svg" />
				</div>
			</div>
		</>
	);
};

export default ReliabilityCarosoul;
