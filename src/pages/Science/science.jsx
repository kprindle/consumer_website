import React, { useState, useEffect } from "react";
import "./Science.css";

function Science() {
	const [imagesLoaded, setImagesLoaded] = useState(false);

	useEffect(() => {
		// Load images when the component is mounted
		const loadImages = async () => {
			const imageUrls = ["/SciencePageScience-1-ISHquestion.jpg", "/SciencePage/Science-Header.jpg"];

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
		<div classsName="science-container">
			<div className="science-header">
				<div className="header-text-container">
					<span className="title">SCIENCE</span>
					<span className="subtitle">Solving the problem of cannabis classification</span>
				</div>
			</div>
			<nav className="science-nav">
				<a href="#PROBLEM">PROBLEM</a>
				<a href="#CLASSIFICATION">CLASSIFICATION</a>
				<a href="#VALIDATION">VALIDATION</a>
				<a href="#CERTIFICATION">CERTIFICATION</a>
				<a href="#APPLICATION">APPLICATION</a>
			</nav>
			<div className="science-content-container">
				<div className="science-content" id="PROBLEM">
					<span className="title" style={{ marginTop: "8vh" }}>
						PROBLEM
					</span>
					<span className="science-text-header">
						Cultivators and retail employees use unvalidated anecdotes to classify cannabis flowers
					</span>
					<span className="science-text" style={{ borderBottom: "1px solid black", marginBottom: "8vh" }}>
						<strong>Cannabis contains many active ingredients.</strong> When consumed, these ingredients are associated with
						many different effects. This many-to-many relationship can be described as molecular clusters intertwined in a web
						of psychological and physiological events. Traditional pharmaceutical studies have created oversimplified models
						of a single Cannabis ingredient causing a single effect. The approach is not well suited for botanical Cannabis
						uses. Studying botanical Cannabis necessitates a broader model where ingredients are evaluated in synergy.¹
					</span>
					<img src="/SciencePage\Science-1-ISHquestion.jpg" alt="" className="science-image" />
					<div className="science-blue-text-container">
						<span className="science-blue-title">
							The sative/indica distinction as commonly applied in lay literature is total nonsense and an exercise in
							futility.
						</span>
						<span className="quoted-in-science">- Dr. Ethan Russo (2016²)</span>
					</div>
				</div>
				<div className="science-content">
					<div id="CLASSIFICATION"></div>
					<span className="title" style={{ marginTop: "8vh" }}>
						CLASSIFICATION
					</span>
					<span className="science-text-header">
						30 years of research proves that cannabis can be classified scientifically.
					</span>
					<span className="science-text">
						<strong>DYC Classification.</strong> The most accurate research on real world Cannabis evaluates relationships
						between the plant's active ingredients. Traditionally, research has focused on THC to describe its effects. On the
						other hand, consumers have used “sativa”, “hybrid”, or “indica” to identify Cannabis types without knowing the
						chemical composition of Cannabis. However, “sativa”, “hybrid”, or “indica” are phenotypic descriptors of Cannabis
						and not predictive of its effects.<sup>3</sup> As an alternative, consumers have used aroma as an ad hoc
						determinant of Cannabis types. Preliminary evidence suggests Cannabis aroma may be more predictive of subjective
						pleasurable effects than THC content.<sup>4</sup> From the community's perspective, the aroma classification
						somewhat worked. However, an aroma based system is not logistically available to consumers. Packaging requirements
						restrict access to Cannabis aroma. Health and safety standards don't permit open containers of Cannabis where
						consumers might be able to smell the flower. In response, DYC presents a simple classification system that
						communicates the plant's characteristics by symbol and color. The system involves objective measures, contributes
						to inventory management, and creates quality assurance (QA).
					</span>
					<span className="science-text" style={{ borderBottom: "1px solid black" }}>
						Although Cannabis sativa contains many active ingredients, two cannabinoids stand out in highest content. THCA and
						CBDA are Cannabis dominant cannabinoids. They are derived from a single precursor, CBGA. Their relationship is
						represented by molecular and genetic links. As an expression of Cannabis, THCA and CBDA are associated with a
						ratio of enzymes that produce them, namely THCA synthase and CBDA synthase.<sup>5</sup> Consequently, THCA and
						CBDA are seen in Mendelian distribution where Type I (high THCA/low CBDA), Type II (equivalent THCA/CBDA), and
						Type III (low THCA/high CBDA) identify three cannabinoid chemotypes.<sup>6</sup> Clinical evidence supports a
						predictive effect to the relationship between the Cannabis dominant cannabinoids.<sup>7</sup>
					</span>
					<span className="black-bold-header">What contributes to effect?</span>
					<span className="black-header">Cannabis constituents and consumer attributes identified and tested against.</span>
				</div>
				<div className="cannabis-and-consumer-tables">
					<img className="tables" src="/SciencePage/Science-2-Contributes-Cannabis.svg" />
					<img className="tables" src="/SciencePage/Science-2-Contributes-Consumer.svg" />
				</div>
				<div className="science-content" style={{ borderTop: "1px solid black", paddingTop: "8vh" }}>
					<span className="science-text">
						Cannabis potency labeling is misleading despite the regulatory requirements for unbiased third party testing.
						<sup>8</sup>
						Labels list the content of single active ingredients without describing the relationship between ingredients. Poor
						labeling impacts medical patients who want to control dosage as well as customers expecting an effect. Operators,
						who are required to identify single measures of THC and CBD, fail to communicate the composite of active
						constituents that actually contribute to potency.
					</span>
					<span className="science-text">
						Government definition for hemp draws a line at 0.3% THC. The distinction creates a situation where a single plant
						could be identified as hemp and marijuana. Confusion ensues as the hemp industry sells products under far less
						regulations than the marijuana industry. The same product might be sold in both industries as consumers are
						uncertain which to trust. From the operator's perspective, conflicting laboratory protocols make lab comparisons
						diffcult, the standards used vary from lab to lab, and sampling bias increases variance. The DYC solution
						establishes a standard that normalizes interlab variability yet ensures consistency.
					</span>
					<span className="science-text">
						<strong>Dual Classifications.</strong> Incorporating both cannabinoid and terpene ratios in a dual classification
						system, presents an objective alternative to “sativa,” “hybrid,” or “indica”. As a primary classification, Type I,
						Type II, and Type III represent the most effective chemical relationships in Cannabis. Dominant cannabinoid ratios
						accurately portray the relationship. Cannabis Type I is the most psychoactive type with the highest ratio of THCA
						to CBDA. Cannabis Type II has more balanced levels of THCA and CBDA and may be ideal for pain or sleep. Cannabis
						Type III contains the least amount of THCA, yet results in an extensive range of effects including reducing
						inflammation, reducing anxiety, and attenuating pediatric seizures.
					</span>
					<span className="science-text" style={{ borderBottom: "1px solid black" }}>
						DYC incorporates a second classification using Cannabis terpenes. Although lower in content, terpenes have been
						recognized as important constituents in Cannabis.<sup>9</sup> They are volatile organic hydrocarbons that are a
						component of the essential oil in most plants. Whether ingested or inhaled, terpenes also contribute to Cannabis
						flavor and aroma. When combined with cannabinoids, they commonly act in synergy.<sup>10</sup> The Cannabis
						research organization, CESC, has evaluated the relationship between Cannabis terpenes and reported on its
						influence on consumer effects.<sup>11</sup>
					</span>
					<div className="science-blue-text-container">
						<span className="science-blue-title" style={{ marginTop: "8vh" }}>
							Cannabis constituents and consumer attributes present a many to many relationship that must be incorporated into
							any predictive classification system.
						</span>
					</div>
					<div id="VALIDATION"></div>
					<span className="title" style={{ marginTop: "8vh" }}>
						VALIDATION
					</span>
					<span className="science-text-header">Community-driven feedback in line with research results.</span>
					<span className="science-text">
						<strong>DYC Validation.</strong> The DYC system has been validated using a database of laboratory tests associated
						with over 30,000 consumer responses.12 The system associates natural biochemical clusters in Cannabis with
						different effects. Dominant cannabinoid clusters are represented by Type I, II, or III and natural terpene
						clusters are represented by a DYC designated color. YELLOW represents a cluster of terpenes that are associated
						with an energetic and creative effect, whereas GREEN represents terpenes that result in more focused and
						productive effects. BLUE represents a cluster of terpenes that can be relaxing yet euphoric, whereas PURPLE
						terpenes are attenuated resulting in drowsiness and sleep. It's important to note that people are different.
						Cannabis requires an initial period of consumer trial and error (i.e. discover your color) prior to predicting its
						effects.
					</span>
					<span className="science-text">
						<strong>Quality Cannabis Relies on Validated Evaluations.</strong> The To validate its symbols and colors, DYC
						partnered with the CESC's Dosing Project Initiative, an epidemiological study on community-acquired Cannabis
						products and their effects. Based on the work of Dr. Jean Talleyrand, M.D. and Dr. John Abrams, Ph.D. the Dosing
						Project applies multivariate analysis to consumer reported data, determining effective doses of Cannabis while
						optimizing side effect profiles The Dosing Project Initiative validates DYC classifications, as they are supported
						by consumer trial and error to inform best practices.
					</span>
					<span className="science-text" style={{ padding: "0", margin: 0 }}>
						<strong>Principle Objectives:</strong>
					</span>
					<ul style={{ borderBottom: "1px solid black", paddingBottom: "8vh", marginBottom: "8vh" }}>
						<li className="science-text" style={{ padding: "0", margin: 0, marginLeft: "24px" }}>
							DYC Cannabis classification system applies symbols and colors to cannabinoids and terpenoids
						</li>
						<li className="science-text" style={{ padding: "0", margin: 0, marginLeft: "24px" }}>
							Evaluations of consumer effects validate the classifications
						</li>
						<li className="science-text" style={{ padding: "0", margin: 0, marginLeft: "24px" }}>
							Ongoing analysis establishes a dynamic algorithm
						</li>
					</ul>
					<span className="black-bold-header">Three types of cannabis</span>
					<span
						className="black-bold-header"
						style={{ color: "grey", fontSize: "24px", fontFamily: "articulat cf, sans-serif", fontWeight: "400" }}>
						<strong style={{ color: "rgb(83, 83, 83)" }}>Type I -</strong> THC dominant,{" "}
						<strong style={{ color: "rgb(83, 83, 83)" }}>Type II -</strong> Balanced THC and CBD, and{" "}
						<strong style={{ color: "rgb(83, 83, 83)" }}>Type III -</strong> CBD dominant.
					</span>
					<img src="/SciencePage\Science-3-Type123.png" alt="" className="science-image science-image-2" />
					<span
						className="science-text"
						style={{
							borderTop: "1px solid black",
							paddingTop: "8vh",
							paddingBottom: "8vh",
							borderBottom: "1px solid black",
						}}>
						<strong>Dosing Project Study.</strong> In the Dosing Project study below, consumers respond categorically to
						questions on Cannabis dose and the effect on chronic pain. The contingency analysis depicts the probability of a
						therapeutic effect after smoking or vaporizing Cannabis flowers. In each graph, the width of a column indicates
						the number of observed responses. Green represents the probability of a complete therapeutic response, whereas
						yellow, red, and purple indicate almost complete, somewhat complete, and no therapeutic response, respectively.
						The most popular dose is reported as 3-4 puffs. With Type I Cannabis use the dose-effect relationship increases
						(right). Consumers are most likely to have a complete therapeutic response when consuming 1 or more grams.
						However, comparisons of all Cannabis types creates a confused picture (left). In conclusion, the likelihood of a
						therapeutic effect is dependent on the type and dose of Cannabis used. The analysis validates the benefit of
						cannabinoid classifications to accurately evaluate the dose-effect relationship.
					</span>
					<span className="black-bold-header" style={{ marginTop: "8vh" }}>
						The Dosing Project Meets DYC
					</span>
					<span
						className="black-bold-header"
						style={{ color: "grey", fontSize: "28px", fontFamily: "articulat cf, sans-serif", fontWeight: "400" }}>
						Dose-Effect contingency analysis
					</span>
					<img src="/SciencePage/Science-4-DoseEffect-ContingencyAnalysis.png" className="science-image-3" />
					<span
						className="science-text"
						style={{
							marginTop: "8vh",
							borderTop: "1px solid black",
							paddingTop: "8vh",
							paddingBottom: "8vh",
							borderBottom: "1px solid black",
						}}>
						<strong>
							The DYC algorithm models the relationship between terpene clusters, aroma, and reported “sativa-hybrid-indica”
							effects.
						</strong>{" "}
						Ideally, multivariate analysis can be used to describe relationships between Cannabis terpenes. In the above
						graph, Type I Cannabis is represented by three terpene-derived chemotypes. A scatter plot overlays the chemotypes
						to the aroma and proposed effects of smoked or vaporized Cannabis. Fuel, earth, and floral aromas correlate with
						energetic (sativa), neutral (hybrid), and sedative (indica) effects. The algorithm suggests two “sativa’
						chemotypes. The “indica” cultivars comprise three-quarters of the data set, primarily due to localized sources.
						The canonical center represents an overlap of attenuated terpenes suggesting a fourth chemotype. This analysis
						proposes a terpene classification system that can be applied to predict consumer effects.
					</span>
					<span className="black-bold-header" style={{ marginTop: "8vh" }}>
						DYC algorithm classifies Indica-Hybrid-Sativa
					</span>
					<span
						className="black-bold-header"
						style={{ color: "grey", fontSize: "28px", fontFamily: "articulat cf, sans-serif", fontWeight: "400" }}>
						The relationship between terpene clusters, aroma, and reported effects.
					</span>
					<img
						src="/SciencePage\Science-5-DYCalgorithm.png"
						style={{ width: "80%", alignItems: "center", margin: "0 auto", paddingBottom: "8vh" }}
					/>
					<span
						className="science-text"
						style={{
							marginTop: "8vh",
							borderTop: "1px solid black",
							paddingTop: "8vh",
							paddingBottom: "8vh",
							marginBottom: "8vh",
							borderBottom: "1px solid black",
						}}>
						<strong>Consumer responses are associated with terpene clusters.</strong> Many of the terpenes produced in
						Cannabis interact with cannabinoids.<sup>13</sup> In this proof of concept analysis, Type I DYC colors are
						compared to a large database of both positive and negative consumer responses. After smoking Type I Cannabis
						flowers, respondents identify the effects they experienced. All four colors were associated with consumer
						responses indicating that the effects were universal. Some effects were more prevalent than others. For example,
						significantly more consumers felt energetic after using a DYC yellow or relaxed after using a DYC blue, green, or
						purple.
					</span>
					<span className="black-bold-header" style={{ marginTop: "8vh" }}>
						Consumer Responses
					</span>
					<img className="science-image-3" src="/SciencePage\Science-6-ConsumerResponses.png" />
					<span
						className="science-text"
						style={{
							marginTop: "8vh",
							borderTop: "1px solid black",
							paddingTop: "8vh",
							paddingBottom: "8vh",
							marginBottom: "8vh",
							borderBottom: "1px solid black",
						}}>
						<strong>Product comparisons validate the model.</strong> DYC classifications provide objectivity, which introduces
						consumers to quality assurance. Operators can use the classifications to improve their inventory management and
						maintain a broad range of products. DYC also provides a structure for product comparisons. The 3D graph below
						depicts a Type I flower inventory at a Cannabis dispensary. Four cultivars (strains) were identified for study.
						Three are located at the extremes indicating that they have the highest terpene content. The fourth cultivar is at
						the canonical center where each of the three terpene clusters have attenuated. An analysis of the four cultivars
						demonstrates effects from different terpene profiles. Repeat analysis tracks trends or drifts in terpene content
						as cultivators experiment with crossing and hybridization.
					</span>
					<img className="science-image-3" src="/SciencePage\Science-7-FlightStudy.png" />
					<span
						className="science-text"
						style={{
							marginTop: "8vh",
							borderTop: "1px solid black",
							paddingTop: "8vh",
						}}>
						<strong>The DYC model depicts outliers.</strong>{" "}
						<ul>
							<li style={{ padding: "0", margin: 0, marginLeft: "24px" }}>
								Cultivars that are chemically exceptional stand out.
							</li>
							<li style={{ padding: "0", margin: 0, marginLeft: "24px" }}>
								Products that are supplemented or altered also stand out
							</li>
						</ul>
					</span>
					<span className="science-text">
						<strong>Focus groups and case studies contribute to a narrative.</strong> An important contribution to the
						validation of Cannabis products involves qualitative responses. Qualitative analysis focuses on effects that are
						difficult to measure. For example, the psychoactive effect of Cannabis is difficult to quantify and can be
						assessed in a narrative. Discourse and themes associated with the Cannabis "high" demonstrate dihherent
						perspectives. Qualitative analysis provides a broader perspective of the DYC classification system.
					</span>
					<img src="/SciencePage\Science-7.5-Cannabis-Interstitial.png" />
					<div id="CERTIFICATION"></div>
					<span className="title" style={{ marginTop: "8vh" }}>
						CERTIFICATION
					</span>
					<span className="science-text-header">Consumer-friendly certification sets the standard for the industry.</span>
					<span className="science-text">
						<strong>DYC Certification.</strong> Scientific methodology uses a comprehensive approach to the many to many
						relationships between Cannabis constituents and their multiple effects. Certification attests to product
						consistency and facilitates the appropriate use of Cannabis.
					</span>
					<span
						className="science-text"
						style={{ marginBottom: "8vh", paddingBottom: "8vh", borderBottom: "1px solid black" }}>
						<strong>Predicting an association between color, dose, and effect.</strong> In the analysis on the top left, three
						DYC colors are evaluated for the safe and effective dosage when treating pain. Multiple correspondence analysis is
						applied to discover associations between categorical variables. In this example, there are five dosage categories,
						1-2 puffs, 3-4 puffs, 5-6 puffs, ½ gram, and 1 gram. The safest and most effective dose among the cohort of
						respondents is indicated by the proximity of the DYC colored arrow to each dosage category (blue dot). This
						analysis suggests an appropriate color and dose for treating pain.
					</span>
					<span className="black-bold-header" style={{ marginTop: "8vh" }}>
						Predicting an association between color, dose, and effect.
					</span>
					<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
						<img style={{ width: "50%" }} src="/SciencePage\Science-8-ColorDoseEffect.png" />
					</div>
					<span
						className="science-text"
						style={{
							marginTop: "8vh",
							borderTop: "1px solid black",
							paddingTop: "8vh",
							paddingBottom: "8vh",
							marginBottom: "8vh",
							borderBottom: "1px solid black",
						}}>
						<strong>Value vs Price.</strong> Terpenes contribute to consumer experiences.<sup>14</sup> In the example on the
						next page, DYC terpene classifications are overlaid with consumer prices to validate market trends. The analysis
						models three terpene profiles from a Type I Cannabis flower inventory in San Francisco where terpene content is
						considered a maker of quality. As terpene content increases, higher prices are assigned to the product. Wholesale
						and retail prices can be compared to objectively assess the value of products. The analysis provides an
						opportunity to compare value with price. Applying a value-price index improves consumer and operator purchasing
						decisions.
					</span>
					<span className="black-bold-header" style={{ marginTop: "8vh" }}>
						Validating market trends
					</span>
					<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
						<img style={{ width: "80%" }} src="/SciencePage\Science-9-MarketTrends.png" />
					</div>
					<span
						className="science-text"
						style={{
							marginTop: "8vh",
							borderTop: "1px solid black",
							paddingTop: "8vh",
							paddingBottom: "8vh",
							marginBottom: "8vh",
							borderBottom: "1px solid black",
						}}>
						<strong>Achieving certification necessitates an assessment of product safety.</strong> Although Cannabis is not
						toxic, it can cause adverse events particularly for the inexperienced user. Cannabis induced adverse events are
						commonly attributed to delta-9 THC content or marijuana. Marijuana is defined as the Cannabis plant with a THC
						content greater than 0.3%. However, Cannabis contains many other active ingredients that interact with THC. Thus,
						it is more accurate to create an index, incorporating the multiple constituents of the Cannabis flower rather than
						solely THC content. CESC's safety index was developed in the above example using the dosage of consumed
						cannabinoids per kilogram body weight. Logistic regression determines which dose is at a fifty percent probability
						of a complete or almost complete therapeutic response to pain. Likewise, we calculate which dose has a fifty
						percent probability of reported adverse events. The results are expressed as a ratio or index and are used to
						compare products by class. In the above example, Type I DYC PURPLE Cannabis flowers have a greater safety index
						than Type I DYC YELLOW Cannabis flowers.
					</span>
					<span className="black-bold-header">Assessing product safety</span>
					<span
						className="black-bold-header"
						style={{ color: "grey", fontSize: "24px", fontFamily: "articulat cf, sans-serif", fontWeight: "400" }}>
						This index is devised by calculating the probability of adverse events and an effective dose.
					</span>
					<div
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							paddingBottom: "18vh",
							borderBottom: "1px solid black",
						}}>
						<img style={{ width: "60%" }} src="/SciencePage\Science-10-AdverseEvents.png" />
					</div>
					<div  id="APPLICATION"></div>
					<span className="title" style={{ marginTop: "8vh" }}>
						APPLICATION
					</span>
					<span className="science-text-header">Go Discover Your Color.</span>
					<span className="science-text">
						<strong>
							DYC classifications validate Cannabis trade and provide quality assurance for a better consumer experience.
						</strong>
					</span>
					<span className="science-text">
						A consortium of Cannabis scientists have contributed to the DYC Cannabis flower classification system. CESC
						founders, Jean Talleyrand M.D. and John Abrams, Ph.D., created a forum for real world Cannabis research. Dr.
						Abrams, a molecular biologist, provided an extensive background in biochemistry. His work on terpenes has
						pioneered advancements in Cannabis nomenclature. Dr. Talleyrand, a Cannabis specialist with over 25 years clinical
						experience, is the principal investigator of CESC's flagship initiative, the Dosing Project. Focusing on multiple
						chemical classes associated with multiple consumer effects, Doctors Abrams and Talleyrand evaluate relationships
						in biological systems.
					</span>
					<span className="science-text">
						DYC provides symbols and colors for both operators and consumers to communicate Cannabis trade and value. The
						algorithm incorporates cannabinoids and terpenoids and is accessible to anyone with a Cannabis certificate of
						analysis (CoA). Users sign into the DYC platform, upload the CoA, and receive a symbol and color indicating on the
						plant's chemical constituents. In its 9th year of operation, the Dosing Project solicits consumer responses and
						validates DYC product classifications. The initiative engages in a partnership with DYC that raises the tide for
						all operators and consumers to benefit from Cannabis quality assurance.
					</span>
					<div className="colordots-and-text">
						<span className="science-text science-text-width">
							<strong>DYC puts a “stake in the ground” with an algorithm that communicates in color and symbols.</strong>
						</span>
						<img className="colordotsimage" src="/SciencePage/Science-11-ColorDots.jpg" />
					</div>
					<span
						className="title"
						style={{ marginTop: "8vh", paddingTop: "8vh", borderTop: "1px solid black", fontSize: "24px" }}>
						ENDNOTES
					</span>
					<div className="endnotes-container">
						<div>
							<span style={{ marginRight: "1vw" }}>1</span>
							<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6334252/">
								https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6334252/
							</a>
						</div>
						<div>
							<span style={{ marginRight: "1vw" }}>2</span>
							<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5576603">
								https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5576603
							</a>
						</div>
						<div>
							<span style={{ marginRight: "1vw" }}>3</span>
							<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5576603/">
								https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5576603/
							</a>
						</div>
						<div>
							<span style={{ marginRight: "1vw" }}>4</span>
							<a href="https://www.mdpi.com/2813-1851/1/2/8">https://www.mdpi.com/2813-1851/1/2/8</a>
						</div>
						<div>
							<span style={{ marginRight: "1vw" }}>5</span>
							<a href="https://pubmed.ncbi.nlm.nih.gov/21653452/">https://pubmed.ncbi.nlm.nih.gov/21653452/</a>
						</div>
						<div>
							<span style={{ marginRight: "1vw" }}>6</span>
							<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8283674/">
								https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8283674/
							</a>
						</div>
						<div>
							<span style={{ marginRight: "1vw" }}>7</span>
							<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8221366/">
								https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8221366/
							</a>
						</div>
						<div>
							<span style={{ marginRight: "1vw" }}>8</span>
							<a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0282396#:~:text=Average%20observed%20THC%20potency%20was,the%20highest%20label%20reported%20values">
								https://journals.plos.org/plosone/article?id=10.1371/
							</a>
						</div>
						<div>
							<span style={{ marginRight: "1vw" }}>9</span>
							<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9608144/">
								https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9608144/
							</a>
						</div>
						<div>
							<span style={{ marginRight: "1vw" }}>10</span>
							<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7084246/">
								https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7084246/
							</a>
						</div>
						<div>
							<span style={{ marginRight: "1vw" }}>11</span>
							<a href="https://www.taylorfrancis.com/chapters/edit/10.1201/9780429274893-2/aroma-cannabis-john-abrams-william-ellyson-victor-gomez-jean-talleyrand">
								https://www.taylorfrancis.com/chapters/edit/10.1201/9780429274893-2/aroma-cannabis-john-abrams-william-ellyson-victor-gomez-jean-talleyrand
							</a>
						</div>
						<div>
							<span style={{ marginRight: "1vw" }}>12</span>
							<a href="https://www.nature.com/articles/s41477-021-01003-y">
								https://www.nature.com/articles/s41477-021-01003-y
							</a>
						</div>
						<div>
							<span style={{ marginRight: "1vw" }}>13</span>
							<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7763918/">
								https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7763918/
							</a>
						</div>
						<div>
							<span style={{ marginRight: "1vw" }}>14</span>
							<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7763918/">
								https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7763918/
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Science;
