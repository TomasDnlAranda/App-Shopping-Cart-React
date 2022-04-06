import React from 'react';
import '../css/cardFavorite.css';
import { RiDeleteBack2Fill as IconDelete } from 'react-icons/ri';

const CardFavorite = ({ item }) => {
	const { disk, img } = item;

	return (
		<div className="container-favorite">
			<div className="container-img-favorite">
				<img src={img} />
			</div>
			<p className="disco-fav">{disk}</p>
			<div className="container-icon-fav">
				<IconDelete className="icon-delete-fav" />
			</div>
		</div>
	);
};

export default CardFavorite;
