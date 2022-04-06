import React from 'react';
import '../css/navbar.css';
import ModalFavoriteSection from './ModalFavoriteSection';

const Navbar = ({ favoriteDiscs }) => {
	return (
		<>
			<nav>
				<ModalFavoriteSection favoriteDiscs={favoriteDiscs} />
			</nav>
		</>
	);
};

export default Navbar;
