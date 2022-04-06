import React from 'react';
import { RiDeleteBack2Fill as IconDelete } from 'react-icons/ri';
import '../css/precio.css';

const CardPriceProduct = ({ item, removeProductFromCart, filterAmount }) => {
	const { artist, disk, price, amount, id } = item;

	return (
		<div className="container-price">
			<p className="cantidad">{amount === 0 ? filterAmount(id) : amount}x</p>
			<p className="disco">
				{artist} - {disk}
			</p>
			<p className="price">${price * amount} USD</p>
			<div className="container-icon">
				<IconDelete
					className="icon-delete"
					onClick={() => removeProductFromCart(id)}
					data-id={id}
				/>
			</div>
		</div>
	);
};

export default CardPriceProduct;
