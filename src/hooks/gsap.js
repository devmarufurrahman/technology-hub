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
				ease: Expo.easeIn,
				delay: delay,
			},
		);
	}, []);
};

// gsap photo droping hook
export const useGsapPhotoDroping = (arrphoto) => {
	useEffect(() => {
		const el = arrphoto.map((photo) => photo.current);

		gsap.fromTo(
			el,
			{
				y: "-100vh",
				scale: 0,
			},
			{
				y: 0,
				scale: 1,
				duration: 2.3,
				stagger: 0.3,
				delay: 0.6,
				ease: Expo.easeInOut,
			},
		);
	}, []);
};

// dropping photo up down animation
export const useGsapPhotoAnime = (arr, trigger) => {
	useEffect(() => {
		const el = arr.map((photo) => photo.current);

		gsap.fromTo(
			el,
			{
				y: 0,
			},
			{
				y: "-35%",
				ease: Expo.easeInOut,
				scrollTrigger: {
					trigger: trigger.current,
					scrub: 1,
					toggleActions: "play reverse play reverse",
				},
			},
		);
	}, []);
};

// feature left side shutter hook
export const useFeatureLeftShutter = (item, trig) => {
	useEffect(() => {
		const el = item.current;
		gsap.fromTo(
			el,
			{
				height: "100%",
			},
			{
				height: 0,
				duration: 1.4,
				ease: Expo.easeInOut,
				delay: 0.1,
				scrollTrigger: {
					trigger: trig.current,
					start: "top center",
					end: "bottom center",
					toggleActions: "play reverse play reverse",
				},
			},
		);
	}, []);
};

// feature right side shutter hook
export const useFeatureRightShutter = (item, trig) => {
	useEffect(() => {
		const el = item.current;
		gsap.fromTo(
			el,
			{
				width: "100%",
			},
			{
				width: 0,
				duration: 1.4,
				ease: Expo.easeInOut,
				scrollTrigger: {
					trigger: trig.current,
					start: "top center",
					end: "bottom center",
					toggleActions: "play reverse play reverse",
				},
			},
		);
	}, []);
};
