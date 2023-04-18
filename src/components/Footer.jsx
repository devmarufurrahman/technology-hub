import { useRef } from "react";
import { useFooterAnimate } from "../hooks/gsap";

const Footer = () => {
	// footer ref added
	const footerRef = useRef(null);
	const footerHeadRef = useRef(null);

	// footer hook call animate
	useFooterAnimate(footerHeadRef, footerRef);

	return (
		<footer ref={footerRef} className="footer wrapper">
			<h1 ref={footerHeadRef}>Bonjour</h1>
			<p>© {new Date().getFullYear()} Immemorial. Crafted by yours truly</p>
		</footer>
	);
};

export default Footer;
