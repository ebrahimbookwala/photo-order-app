import React, { useContext } from "react";
import { PhotoContext } from "../context/PhotoContextProvider";
import useHover from "../hooks/useHover";

const CartItem = ({ item }) => {
	const { removeFromCart } = useContext(PhotoContext);

	const [isHovered, hoverItem] = useHover();

	return (
		<div className="cart-item">
			<i
				className={isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
				onClick={() => removeFromCart(item)}
				ref={hoverItem}
			></i>
			<img src={item.url} width="130px" alt="pictures" />
			<p>$5.99</p>
		</div>
	);
};

export default CartItem;
