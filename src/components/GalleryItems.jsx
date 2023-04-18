import { useRef } from "react";
import {
	useGalleryCategoryAnimate,
	useGalleryImageAnimate,
	useGalleryTitleAnimate,
} from "../hooks/gsap";

const GalleryItems = ({ image }) => {
	// gallery ref added
	const galleryTitleRef = useRef(null);
	const galleryImageRef = useRef(null);
	const galleryCategoryRef = useRef(null);

	// gallery animate hook call

	useGalleryCategoryAnimate(galleryCategoryRef, galleryImageRef);
	useGalleryImageAnimate(galleryImageRef);
	useGalleryTitleAnimate(galleryTitleRef, galleryImageRef);

	return (
		<div className="gallery-item">
			<h1 className="gallery-item-title" ref={galleryTitleRef}>
				{image.title}
			</h1>
			<p ref={galleryCategoryRef} className="gallery-item-category">
				{image.category}
			</p>
			<div
				ref={galleryImageRef}
				className="gallery-item-img"
				style={{ backgroundImage: `url(${image.src})` }}></div>
		</div>
	);
};

export default GalleryItems;
