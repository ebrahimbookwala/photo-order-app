import React, { useContext } from "react";
import Image from "../components/Image";
import { PhotoContext } from "../context/PhotoContextProvider";
import { getClass } from "../utils";

function Photos() {
	const allImages = useContext(PhotoContext);

	console.log(allImages.cartItems);
	return (
		<main className="photos">
			{allImages.photos.length ? (
				allImages.photos.map((image) => (
					<Image
						key={image.id}
						img={image}
						id={image.id}
						className={getClass(image.id)}
					/>
				))
			) : (
				<p>No Photos Found</p>
			)}
		</main>
	);
}

export default Photos;
