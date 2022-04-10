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
			<IconHeart
				className="modal-favorite__icon-heart"
				onClick={() => modalFavoriteDiscs()}
			></IconHeart>
			<div
				className={
					stateModalFavoriteDisc === true
						? 'modal-favorite__esconder-modal'
						: 'modal-favorite__appear-modal'
				}
			>
				<div className="modal-favorite__container-text">
					<h1 className="modal-favorite__title">Tus Favoritos</h1>
					{favoriteDiscs.map((item) => (
						<CardFavorite item={item} key={item.id} />
					))}
				</div>
			</div>
		</>
	);
};

export default ModalFavoriteSection;
