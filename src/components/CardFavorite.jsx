import React from 'react';
import '../css/cardFavorite.css';
import { RiDeleteBack2Fill as IconDelete } from 'react-icons/ri';

const CardFavorite = ({ item }) => {
	const { disk, img, artist } = item;

	return (
		<div className="container-favorite">
			<div className="container-img-favorite">
				<img src={img} />
			</div>
			<p className="disk-fav">{disk}</p>
			<p className="artist-fav">{artist}</p>
		</div>
	);
};

export default CardFavorite;
