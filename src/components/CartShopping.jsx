import React, { useEffect, useState } from 'react';
import CardPriceProduct from './CardPriceProduct';
import '../css/carrito.css';

const CartShopping = ({ cartProducts, removeProductFromCart, filterAmount }) => {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const priceTotal = cartProducts.reduce(
			(acc, current) => acc + current.amount * current.price,
			0
		);
		return setTotal(priceTotal);
	}, [cartProducts]);

	return (
		<>
			<div className="carrito__container">
				<h3>Precio Total</h3>
				{cartProducts.map((item) => (
					<CardPriceProduct
						item={item}
						key={item.id}
						removeProductFromCart={removeProductFromCart}
						filterAmount={filterAmount}
					/>
				))}
				<p className="total">Total de la orden: ${total} USD</p>
				<button>Pagar</button>
			</div>
		</>
	);
};

export default CartShopping;
