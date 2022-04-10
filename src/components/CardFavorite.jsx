import React from 'react';
import '../css/cardFavorite.css';

const CardFavorite = ({ item }) => {
	const { disk, img, artist } = item;

	return (
		<div className="card-favorite">
			<div className="card-favorite___container">
				<img className="card-favorite___img" src={img} />
			</div>
			<p className="card-favorite___disk">{disk}</p>
			<p className="card-favorite___artist">{artist}</p>
		</div>
	);
};

export default CardFavorite;
