// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./index.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Testimonials from "./pages/Testimonials"
import Footer from "./pages/Footer"

const App = () => {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Portfolio />
			<Contact />
			<Testimonials />
			<Footer />
		</>
	)
}

export default App
