import React, { useState } from 'react';
import { BsHeartFill as IconHeart } from 'react-icons/bs';
import '../css/favorite.css';

const Favorite = () => {
	const [favorite, setFavorite] = useState(0);
	return <IconHeart className="icon-heart" />;
};

export default Favorite;
