import { useRef } from "react";
import {
	useGsapPhotoAnime,
	useGsapPhotoDroping,
	useGsapShutterUnveil,
} from "../hooks/gsap";

const Hero = () => {
	// reference added
	const heroRef = useRef(null);

	const shutter1 = useRef(null);
	const shutter2 = useRef(null);

	// photo reference added
	const Photo1Ref = useRef(null);
	const Photo2Ref = useRef(null);
	const Photo3Ref = useRef(null);
	const Photo4Ref = useRef(null);
	const Photo5Ref = useRef(null);

	// photo ref array create
	const photoArr = [Photo1Ref, Photo2Ref, Photo3Ref, Photo4Ref, Photo5Ref];

	// photo hook call
	useGsapPhotoDroping(photoArr);
	// photo anime hook
	useGsapPhotoAnime(photoArr, heroRef);

	// hero section hook call

	useGsapShutterUnveil(shutter1, 0, heroRef);
	useGsapShutterUnveil(shutter2, 0.25, heroRef);

	return (
		<section className="hero wrapper " ref={heroRef}>
			<h1 className="ethereal">
				Ethereal <span ref={shutter1}></span>
			</h1>
			<h1 className="canvas">
				Canvas <span ref={shutter2}></span>
			</h1>

			{/* photos section here  */}
			<div className="photos">
				<div
					ref={Photo1Ref}
					className="photo one "
					style={{
						backgroundImage:
							"url('https://images.pexels.com/photos/10046283/pexels-photo-10046283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
					}}></div>
				<div
					ref={Photo2Ref}
					className="photo two"
					style={{
						backgroundImage:
							"url('https://images.pexels.com/photos/6577903/pexels-photo-6577903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
					}}></div>
				<div
					ref={Photo3Ref}
					className="photo three"
					style={{
						backgroundImage:
							"url('https://images.pexels.com/photos/4019766/pexels-photo-4019766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
					}}></div>
				<div
					ref={Photo4Ref}
					className="photo four"
					style={{
						backgroundImage:
							"url('https://images.pexels.com/photos/7584538/pexels-photo-7584538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
					}}></div>
				<div
					ref={Photo5Ref}
					className="photo five"
					style={{
						backgroundImage:
							"url('https://images.pexels.com/photos/4836368/pexels-photo-4836368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
					}}></div>
			</div>
		</section>
	);
};

export default Hero;
