import React from 'react';
import '../css/cardProduct.css';
import { BsHeartFill as IconHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CardProduct = ({ item, addProductToCart, addProductToFavorite, changeValidation }) => {
	const { artist, disk, img, id, price, favorite } = item;

	return (
		<>
			<div className="card-product">
				<div className="card-product__container-img">
					<Link to={`/${id}`} onClick={() => changeValidation()}>
						<img src={img} className="card-product__img" />
					</Link>
				</div>
				<h3>{artist}</h3>
				<h4>{disk}</h4>
				<p>
					$<span>{price}</span> USD
				</p>
				<div className="card-product__container-button">
					<button data-id={id} onClick={() => addProductToCart(item)}>
						Agregar al carrito
					</button>
					<IconHeart
						className={
							favorite === true ? 'card-product__add-favorite' : 'card-product__remove-favorite'
						}
						onClick={() => addProductToFavorite(item, id, favorite)}
					/>
				</div>
			</div>
		</>
	);
};

export default CardProduct;
