import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PhotoContext } from "../context/PhotoContextProvider";

function Header() {
	const { cartItems } = useContext(PhotoContext);

	const mainCartIcon = () => {
		if (cartItems.length) {
			return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>;
		}
		return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>;
	};

	return (
		<header>
			<h2>
				<Link to="/">Pic Some</Link>
			</h2>
			<Link to="/cart">{mainCartIcon()}</Link>
		</header>
	);
}

export default Header;
