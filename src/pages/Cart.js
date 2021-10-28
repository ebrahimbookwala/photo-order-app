import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import CartItem from "../components/CartItem";
import { PhotoContext } from "../context/PhotoContextProvider";

function Cart() {
	const { cartItems, refreshCart } = useContext(PhotoContext);

	const handleOrder = () => {
		setOrderStatus("Ordering...");

		setTimeout(() => {
			console.log("Order Placed");
			setOrderStatus("Place Order");
			refreshCart();
			<Redirect to="/" />;
		}, 3000);
	};

	const [orderStatus, setOrderStatus] = useState("Place Order");

	let total = cartItems.reduce((acc) => acc + 5.99, 0);

	total = total.toLocaleString("en-US", { style: "currency", currency: "USD" });

	return cartItems.length ? (
		<main className="cart-page">
			{cartItems.map((item) => (
				<CartItem key={item.id} item={item} />
			))}
			<p className="total-cost">Total: {total}</p>
			<div className="order-button">
				<button onClick={handleOrder}>{orderStatus}</button>
			</div>
		</main>
	) : (
		<h1>Nothing to show</h1>
	);
}

export default Cart;
