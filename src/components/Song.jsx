import React from 'react';
import '../css/song.css';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { MdExplicit } from 'react-icons/md';

const Song = ({ item, playSongDemo, changeStateLike, changeStateDislike }) => {
	const { song, time, url, img, explicit } = item;

	return (
		<div className="song">
			<div className="song__play" onClick={(e) => playSongDemo(song, url)}>
				<img src={img} className="song__img" />
				<span className="song__name">{song}</span>
			</div>
			{explicit ? <MdExplicit className="song__explicit" /> : null}
			<div className="song__container-like">
				{
					<>
						<AiOutlineLike
							className="song__like"
							data-song={song}
							onClick={(e) => changeStateLike(e, song)}
						/>
						<AiOutlineDislike
							className="song__like"
							data-song={song}
							onClick={(e) => changeStateDislike(e, song)}
						/>
					</>
				}
			</div>
			<span className="song__time">{time}</span>
		</div>
	);
};

export default Song;
