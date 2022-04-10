import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import '../css/audio.css';

const Audio = ({ songsDemo }) => {
	const { song, url } = songsDemo;
	return (
		<div className="audio" data-song={song}>
			<h2>{song}</h2>
			<ReactAudioPlayer src={url} autoPlay controls />
		</div>
	);
};

export default Audio;
