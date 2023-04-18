import React, { useRef } from "react";
import { useFeatureLeftShutter, useFeatureRightShutter } from "../hooks/gsap";

const Feature = () => {
	// feature ref added
	const featureRef = useRef(null);
	const featureLeftShutterRef = useRef(null);
	const featureRightShutterRef = useRef(null);

	// hook call feature
	useFeatureLeftShutter(featureLeftShutterRef, featureRef);
	useFeatureRightShutter(featureRightShutterRef, featureRef);

	return (
		<section className="featured wrapper" ref={featureRef}>
			<h2 className="section-title">Featured</h2>
			<div className="features">
				<div className="feature-l">
					<span className="feature-text">The coder girl</span>
					<img
						src="https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="Robot"
					/>
					<span
						ref={featureLeftShutterRef}
						className="feature-shutter-l"></span>
				</div>
				<div className="feature-r">
					<span className="feature-text">pro coders</span>
					<img
						src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="pro computer setup"
					/>
					<span
						ref={featureRightShutterRef}
						className="feature-shutter-r"></span>
				</div>
			</div>
		</section>
	);
};

export default Feature;
