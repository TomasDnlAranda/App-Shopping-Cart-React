import React from 'react';
import { RiDeleteBack2Fill as IconDelete } from 'react-icons/ri';
import '../css/cardPrice.css';

const CardPriceProduct = ({ item, removeProductFromCart, filterAmount }) => {
	const { artist, disk, price, amount, id } = item;

	return (
		<div className="card-price-product">
			<p className="card-price-product__amount">{amount === 0 ? filterAmount(id) : amount}x</p>
			<p className="card-price-product__disk">
				{artist} - {disk}
			</p>
			<p className="card-price-product__price">${price * amount} USD</p>
			<div className="card-price-product__container-icon">
				<IconDelete
					className="card-price-product__icon-delete"
					onClick={() => removeProductFromCart(id)}
					data-id={id}
				/>
			</div>
		</div>
	);
};

export default CardPriceProduct;
