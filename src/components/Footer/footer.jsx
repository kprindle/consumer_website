import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./footer.css";

const Footer = () => {
	const navigate = useNavigate();
	return (
		<div className="footer-container">
			<div className="top-disclaimmer">
				This product has not been evaluated by the Food and Drug Administration. This product is not intended to diagnose,
				treat, cure, or prevent any disease. Always check with your physician before trying cannabis.
			</div>
			<div className="footer">
				<div className="bottom-left-info-and-logo">
					<img className="DYCLogo" src="/DYC-Logo-white.svg" alt="Discover Your Color" />
					<span className="bottom-left-info">© 2025 MyTEPI, Inc. Wilmington, North Carolina.</span>
				</div>
				<div className="bottom-right-links">
					<div className="website-links-left">
						<span
							onClick={() => {
								navigate("/");
							}}
							className="footer-page-navs">
							Home
						</span>
						<span
							onClick={() => {
								navigate("/about");
							}}
							className="footer-page-navs">
							About
						</span>
						<span
							onClick={() => {
								navigate("/science");
							}}
							className="footer-page-navs">
							Science
						</span>
						<span
							onClick={() => {
								navigate("/advocacy");
							}}
							className="footer-page-navs">
							Advocacy
						</span>
						<span
							onClick={() => {
								navigate("/media");
							}}
							className="footer-page-navs">
							Media
						</span>
					</div>
					<div className="website-lins-right">
						<button className="for-brands-and-dispo-footer-button">For Brands & Dispensaries</button>
						<div className="socials-container">
							<a>
								<img src="/Social-Li.svg" className="social-icon" />
							</a>
							<a>
								<img src="/Social-In.svg" className="social-icon" />
							</a>
							<a href="https://x.com/MyTEPI?s=20" target="_blank">
								<img src="/Social-X.svg" className="social-icon" />
							</a>
						</div>
						<span className="footer-email">info@mytepi.com</span>
						<span className="footer-tag">Setting the Industry Standard</span>
						<div className="footer-document-links">
							<a className="document" style={{ marginRight: "10px" }}>
								Terms of Service
							</a>
							<a className="document">Privacy Policy</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
