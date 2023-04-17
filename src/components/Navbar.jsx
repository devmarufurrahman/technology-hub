import { Link } from "react-router-dom";
import { useRef } from "react";
import { useGsapDownStagger } from "../hooks/gsap";

const Navbar = () => {
	// reference added here
	const li1 = useRef(null);
	const li2 = useRef(null);
	const li3 = useRef(null);
	const favRef = useRef(null);
	const logoRef = useRef(null);

	const liArr = [li1, li2, li3];
	const favArr = [favRef];
	const logoArr = [logoRef];

	// custom hook call
	useGsapDownStagger(liArr, 0);
	useGsapDownStagger(favArr, 1.1);
	useGsapDownStagger(logoArr, 0.8);

	return (
		<nav className="navbar wrapper">
			<ul className="links">
				<li ref={li1}>
					<Link to="/feature">Feature</Link>
				</li>
				<li ref={li2}>
					<Link to="/about">About</Link>
				</li>
				<li ref={li3}>
					<Link to="/gallery">Gallery</Link>
				</li>
			</ul>
			<div className="logo" ref={logoRef}>
				<Link to="/">
					<h2>Immemorial</h2>
				</Link>{" "}
			</div>
			<div className="favourite-link" ref={favRef}>
				<Link to="/favourite">Favourite</Link>
			</div>
		</nav>
	);
};

export default Navbar;
