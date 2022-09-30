const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src="./icons/logo.svg" alt="" />
			</div>
			<div className="nav">
				<div className="link">
					<a href="#">Home</a>
				</div>
				<div className="link">
					<a href="#contact">Contact</a>
				</div>
				<div className="link">
					<a href="#about">About</a>
				</div>
				<div className="link">
					<a href="#portfolio">Portfolio</a>
				</div>
				<div className="link">
					<a href="#testimonials">Testimonials</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar
