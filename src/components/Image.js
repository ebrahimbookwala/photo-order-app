import React, { useContext } from "react";
import { PhotoContext } from "../context/PhotoContextProvider";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({ img, id, className }) {
	const [isHovered, hoverItem] = useHover();

	const { toggleFavorite, addToCart, cartItems, removeFromCart } =
		useContext(PhotoContext);

	const handleFavChange = (id) => {
		toggleFavorite(id);
	};

	// const heartIcon = isHovered ?
	// 	<i
	// 		className="ri-heart-line favorite"
	// 		onClick={() => handleFavChange(id)}
	// 	></i> : img.isFavorite ?
	// ;

	let heartIcon;

	if (img.isFavorite) {
		heartIcon = (
			<i
				className="ri-heart-fill favorite"
				onClick={() => handleFavChange(id)}
			></i>
		);
	} else if (isHovered) {
		heartIcon = (
			<i
				className="ri-heart-line favorite"
				onClick={() => handleFavChange(id)}
			></i>
		);
	}

	// const cartIcon = isHovered && (
	// 	<i
	// 		className="ri-add-circle-line cart"
	// 		onClick={() => {
	// 			addToCart(img);
	// 		}}
	// 	></i>
	// );

	function cartIcon() {
		if (cartItems.some((item) => item.id === id)) {
			return (
				<i
					className="ri-shopping-cart-fill cart"
					onClick={() => removeFromCart(img)}
				></i>
			);
		}

		if (isHovered) {
			return (
				<i
					className="ri-add-circle-line cart"
					onClick={() => {
						addToCart(img);
					}}
				></i>
			);
		}

		return null;
	}

	return (
		<div className={`${className} image-container`} ref={hoverItem}>
			{heartIcon}
			{cartIcon()}
			<img src={img.url} className="image-grid" alt=""></img>
		</div>
	);
}

Image.propTypes = {
	img: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool.isRequired,
	}),
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default Image;
