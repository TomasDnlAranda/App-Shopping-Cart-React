import React from 'react';
import '../css/card.css';
import { BsHeartFill as IconHeart } from 'react-icons/bs';

const Card = ({ item, handleClick }) => {
	const { artista, disco, img, id, price } = item;

	return (
		<>
			<div className="card__container">
				<div className="card__container-img">
					<img src={img} />
				</div>
				<h3>{artista}</h3>
				<h4>{disco}</h4>
				<p>
					$<span>{price}</span> USD
				</p>
				<div className="container-button">
					<button data-id={id} onClick={(e) => handleClick(item)}>
						Agregar al carrito
					</button>
					<IconHeart className="card-icon-heart" />;
				</div>
			</div>
		</>
	);
};

export default Card;
