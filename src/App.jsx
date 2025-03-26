import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Science from "./pages/Science/science";
import AboutUs from "./pages/about/about";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Router>
			<div className="App">
				<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
				<Routes>
					<Route path="/" element={<Home isOpen={isOpen} />} />
					<Route path="/science" element={<Science />} />
					<Route path="/about" element={<AboutUs />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
