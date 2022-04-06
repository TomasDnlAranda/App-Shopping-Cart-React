import React from 'react';
import '../css/cardProduct.css';
import { BsHeartFill as IconHeart } from 'react-icons/bs';

const CardProduct = ({ item, addProductToCart, addProductToFavorite }) => {
	const { artist, disk, img, id, price, favorite } = item;

	return (
		<>
			<div className="card__container">
				<div className="card__container-img">
					<img src={img} />
				</div>
				<h3>{artist}</h3>
				<h4>{disk}</h4>
				<p>
					$<span>{price}</span> USD
				</p>
				<div className="container-button">
					<button data-id={id} onClick={() => addProductToCart(item)}>
						Agregar al carrito
					</button>
					<IconHeart
						className={favorite === true ? 'add-favorite' : 'remove-favorite'}
						onClick={() => addProductToFavorite(item, id, favorite)}
					/>
				</div>
			</div>
		</>
	);
};

export default CardProduct;
