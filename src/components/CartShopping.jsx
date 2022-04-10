import React, { useEffect, useState } from 'react';
import CardPriceProduct from './CardPriceProduct';
import '../css/cartShopping.css';

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
			<div className="cart-shopping">
				<h3 className="cart-shopping__title">Precio Total</h3>
				{cartProducts.map((item) => (
					<CardPriceProduct
						item={item}
						key={item.id}
						removeProductFromCart={removeProductFromCart}
						filterAmount={filterAmount}
					/>
				))}
				<p className="cart-shopping__total">Total de la orden: ${total} USD</p>
				<button className="cart-shopping__button">Pagar</button>
			</div>
		</>
	);
};

export default CartShopping;
