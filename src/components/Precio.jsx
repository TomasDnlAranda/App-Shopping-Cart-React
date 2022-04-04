import React from 'react';
import { RiDeleteBack2Fill as IconDelete } from 'react-icons/ri';
import '../css/precio.css';

const Precio = ({ item, handleClick, filtrar }) => {
	const { artista, disco, price, cantidad, id } = item;

	return (
		<div className="container-price">
			<p className="cantidad">{cantidad === 0 ? filtrar(id) : cantidad}x</p>
			<p className="disco">
				{artista} - {disco}
			</p>
			<p className="price">${price * cantidad} USD</p>
			<div className="container-icon">
				<IconDelete className="icon-delete" onClick={() => handleClick(id)} data-id={id} />
			</div>
		</div>
	);
};

export default Precio;
