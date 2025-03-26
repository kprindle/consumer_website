import React from "react";
import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./navbar.css";

const Navbar = ({ isOpen, setIsOpen }) => {
	const navigation = useNavigate();
	const active = useLocation().pathname;
	// const [active, setActive] = useState("/");

	return (
		<nav className="navbar-container">
			<div className="navbar">
				<img
					className="DYCLogo"
					onClick={() => {
						navigation("/");
						setIsOpen(false);
					}}
					src="/DYC-Logo-AllBlue.svg"
					alt="Discover Your Color"
				/>
				{/* Desktop links */}
				<div className="desktop-links">
					<div className={active === "/about" ? "default-link active" : "default-link"} onClick={() => navigation("/about")}>
						About
					</div>
					<div
						className={active === "/science" ? "default-link active" : "default-link"}
						onClick={() => navigation("/science")}>
						Science
					</div>

					<div
						className={active === "/advocacy" ? "default-link active" : "default-link"}
						onClick={() => navigation("/advocacy")}>
						Advocacy
					</div>
					<div className={active === "/media" ? "default-link active" : "default-link"} onClick={() => navigation("/media")}>
						Media
					</div>
				</div>
				<div className="brands-and-dispo-link">For Brands & Dispensaries</div>
				{/* Hamburger icon for mobile */}
				<button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
			{/* Mobile menu overlay */}
			{isOpen && (
				<div className={`mobile-menu ${isOpen ? "open" : ""}`}>
					<div className="mobile-menu-links">
						<div
							className="mobile-menu-content"
							onClick={() => {
								navigation("/about");
								setIsOpen(false);
							}}>
							<span className="mobile-menu-text">About</span>
						</div>
						<div
							className="mobile-menu-content"
							onClick={() => {
								navigation("/science");
								setIsOpen(false);
							}}>
							<span className="mobile-menu-text">Science</span>
						</div>

						<div
							className="mobile-menu-content"
							onClick={() => {
								navigation("/advocacy");
								setIsOpen(false);
							}}>
							<span className="mobile-menu-text">Advocacy</span>
						</div>
						<div
							className="mobile-menu-content"
							onClick={() => {
								navigation("/media");
								setIsOpen(false);
							}}>
							<span className="mobile-menu-text">Media</span>
						</div>
						<div
							// style={{ borderBottom: "1px solid #455a68" }}
							className="mobile-menu-content"
							onClick={() => {
								setIsOpen(false);
							}}>
							<span className="mobile-menu-text">Brands and Dispensaries</span>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
