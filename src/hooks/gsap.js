import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

// hero section Gsap Shutter unveil scroll hook

export const useGsapShutterUnveil = (item, delay = 0, trigger) => {
	useEffect(() => {
		const el = item.current;
		gsap.fromTo(
			el,
			{
				height: "100%",
			},
			{
				height: "0",
				duration: 2,
				ease: Expo.easeInOut,
				delay: delay,
				scrollTrigger: {
					trigger: trigger.current,
					toggleActions: "play reverse play reverse",
				},
			},
		);
	}, []);
};

// gsap navbar section hook
export const useGsapDownStagger = (arr, delay) => {
	useEffect(() => {
		const el = arr.map((item) => item.current);

		gsap.fromTo(
			el,
			{
				y: "-100%",
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.1,
				ease: Expo.easeInOut,
				delay: delay,
			},
		);
	}, []);
};
