import { useState } from 'react';
import { BsHeartFill as IconHeart } from 'react-icons/bs';
import '../css/modalFavoriteSection.css';
import CardFavorite from './CardFavorite';

const ModalFavoriteSection = ({ favoriteDiscs }) => {
	const [stateModalFavoriteDisc, setStateModalFavoriteDisc] = useState(false);

	const modalFavoriteDiscs = () => {
		setStateModalFavoriteDisc(!stateModalFavoriteDisc);
	};
	return (
		<>
			<IconHeart className="icon-heart" onClick={() => modalFavoriteDiscs()}></IconHeart>
			<div className={stateModalFavoriteDisc === true ? 'esconder-modal' : 'appear-modal'}>
				<div className="container-text">
					<h1>Tus Favoritos</h1>
					{favoriteDiscs.map((item) => (
						<CardFavorite item={item} key={item.id} />
					))}
				</div>
			</div>
		</>
	);
};

export default ModalFavoriteSection;
