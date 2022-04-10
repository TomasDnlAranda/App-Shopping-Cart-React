import React from 'react';
import '../css/song.css';
import { AiTwotoneLike, AiTwotoneDislike, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

const Song = ({ item, playSongDemo }) => {
	const { song, time, like, dislike, url, img } = item;

	return (
		<div className="song" data-song={song} onClick={() => playSongDemo(song, url)}>
			<img src={img} className="song__img" />
			<span className="song__name">{song}</span>
			<div className="song__container-like">
				{like ? <AiTwotoneLike className="song__like" /> : <AiOutlineLike className="song__like" />}
				{dislike ? (
					<AiTwotoneDislike className="song__like" />
				) : (
					<AiOutlineDislike className="song__dislike" />
				)}
			</div>
			<span>{time}</span>
		</div>
	);
};

export default Song;
