import React, { useState, useEffect } from "react";

const PhotoContext = React.createContext();

const PhotoContextProvider = (props) => {
	const [photos, setPhotos] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
		)
			.then((res) => res.json())
			.then((res) => setPhotos(res));
	}, []);

	const toggleFavorite = (id) => {
		const updatedArr = photos.map((photo) => {
			if (photo.id === id) {
				console.log(!photo.isFavorite);
				return {
					...photo,
					isFavorite: !photo.isFavorite,
				};
			}
			return photo;
		});

		setPhotos(updatedArr);
	};

	const addToCart = (img) => {
		setCartItems((items) => [...items, img]);
	};

	const removeFromCart = (img) => {
		setCartItems((items) => items.filter((item) => item.id !== img.id));
	};

	const refreshCart = () => {
		setCartItems([]);
	};

	return (
		<PhotoContext.Provider
			value={{
				photos,
				toggleFavorite,
				cartItems,
				addToCart,
				removeFromCart,
				refreshCart,
			}}
		>
			{props.children}
		</PhotoContext.Provider>
	);
};

export { PhotoContextProvider, PhotoContext };
