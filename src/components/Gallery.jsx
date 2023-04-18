import GalleryItems from "./GalleryItems";

// image data here

const images = [
	{
		id: 1,
		src: "https://images.pexels.com/photos/4842487/pexels-photo-4842487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		title: "Arcade playtime for  kids",
		category: "Arcade Games",
	},
	{
		id: 2,
		src: "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=600",
		title: "Midnight workspace for a programmer",
		category: "Midnight Workspace",
	},
	{
		id: 3,
		src: "https://images.pexels.com/photos/3201478/pexels-photo-3201478.jpeg?auto=compress&cs=tinysrgb&w=600",
		title: "Retro Closures",
		category: "Boombox",
	},
	{
		id: 4,
		src: "https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=600",
		title: "Vinyl Loveless Happiness",
		category: "Vinyl Record",
	},
];

const Gallery = () => {
	return (
		<section className="gallery">
			<h2 className="section-title">Gallery</h2>
			<div className="gallery-wrapper">
				{images.map((image) => (
					<GalleryItems key={image.id} image={image} />
				))}
			</div>
		</section>
	);
};

export default Gallery;
