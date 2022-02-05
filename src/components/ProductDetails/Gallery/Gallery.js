import "./Gallery.css";
import product from "../mock";
import { useState } from "react";

const Gallery = () => {
	const [pictures, setPictures] = useState(() => {
		return product.pictures.map(picture => {
			return {
				id: picture.id,
				url: picture.secure_url,
				selected: false
			};
		});
	});
	
	const [selectedPicture, setSelectedPicture] = useState(() => {
		const firstPicture = pictures[0];
		firstPicture.selected = true;
		return firstPicture;
	});

	const handleSelectThumbnail = thumbnailId => {
		setPictures(prevPictures => (
			prevPictures.map(picture => {
				if (picture.id === thumbnailId) {
					setSelectedPicture(picture);
					return {...picture, selected: true };
				} else {
					return {...picture, selected: false };
				}
			})
		));
	}

	const thumbnailElements = pictures.map(picture => (
		<img
			src={ picture.url }
			alt="Imagen miniatura del producto"
			key={ picture.id }
			className={ picture.selected ? "selected-thumbnail" : undefined }
			onClick={() => handleSelectThumbnail(picture.id) }
		/>
	));

	return (
		<section>
			<div className="gallery-container">
				<div className="thumbnail-container">
					{ thumbnailElements }
				</div>
				
				<div className="main-img">
					<img src={ selectedPicture.url } alt="Imagen del producto" />
				</div>
			</div>
		</section>
	);
}

export default Gallery;
