import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Song from '../components/Song';
import Audio from '../components/Audio';
import '../css/descriptionDisk.css';
import { MdExplicit } from 'react-icons/md';
import { FaRandom } from 'react-icons/fa';

import TAME_IMPALA from '../image/artista-tame-impala.png';
import DUA_LIPA from '../image/artista-dua-lipa.jpg';
import THE_WEEKEND from '../image/artista-the-weekend.jpg';
import DOJA_CAT from '../image/artista-doja-cat.jpg';
import POST_MALONE from '../image/artista-post-malone.jpg';
import ED_SHEERAN from '../image/artista-ed-sheeran.jpg';
import SHAWN_MENDES from '../image/artista-shawn-mendes.jpg';
import LIL_NAS_X from '../image/artista-lil-nas-x.jpg';
import MAROON_FIVE from '../image/artista-maroon-5.jpg';
import OLIVIA_RODRIGO from '../image/artista-olivia-rodrigo.jpg';
import XXXTENTACION from '../image/artista-xxxtentacion.jpg';
import TOP from '../image/artista-top.jpg';
import THE_NEIGHBOURHOOD from '../image/artist-the-neighbourhood.jpg';
import NIRVANA from '../image/artista-nirvana.jpg';
import AVICII from '../image/artista-avicii.jpg';

import DUA_LIPA_1 from '../audio/dua-lipa/1.ogg';
import DUA_LIPA_2 from '../audio/dua-lipa/2.ogg';
import DUA_LIPA_3 from '../audio/dua-lipa/3.ogg';
import DUA_LIPA_4 from '../audio/dua-lipa/4.ogg';
import DUA_LIPA_5 from '../audio/dua-lipa/5.ogg';
import DUA_LIPA_6 from '../audio/dua-lipa/6.ogg';
import DUA_LIPA_7 from '../audio/dua-lipa/7.ogg';
import DUA_LIPA_8 from '../audio/dua-lipa/8.ogg';
import DUA_LIPA_9 from '../audio/dua-lipa/9.ogg';
import DUA_LIPA_10 from '../audio/dua-lipa/10.ogg';
import DUA_LIPA_11 from '../audio/dua-lipa/11.ogg';
import DUA_LIPA_12 from '../audio/dua-lipa/12.ogg';
import DUA_LIPA_13 from '../audio/dua-lipa/13.ogg';

import THE_WEEKEND_1 from '../audio/the-weekend/1.ogg';
import THE_WEEKEND_2 from '../audio/the-weekend/2.ogg';
import THE_WEEKEND_3 from '../audio/the-weekend/3.ogg';
import THE_WEEKEND_4 from '../audio/the-weekend/4.ogg';
import THE_WEEKEND_5 from '../audio/the-weekend/5.ogg';
import THE_WEEKEND_6 from '../audio/the-weekend/6.ogg';
import THE_WEEKEND_7 from '../audio/the-weekend/7.ogg';
import THE_WEEKEND_8 from '../audio/the-weekend/8.ogg';
import THE_WEEKEND_9 from '../audio/the-weekend/9.ogg';
import THE_WEEKEND_10 from '../audio/the-weekend/10.ogg';
import THE_WEEKEND_11 from '../audio/the-weekend/11.ogg';
import THE_WEEKEND_12 from '../audio/the-weekend/12.ogg';
import THE_WEEKEND_13 from '../audio/the-weekend/13.ogg';
import THE_WEEKEND_14 from '../audio/the-weekend/14.ogg';

import TOP_1 from '../audio/top/1.ogg';
import TOP_2 from '../audio/top/2.ogg';
import TOP_3 from '../audio/top/3.ogg';
import TOP_4 from '../audio/top/4.ogg';
import TOP_5 from '../audio/top/5.ogg';
import TOP_6 from '../audio/top/6.ogg';
import TOP_7 from '../audio/top/7.ogg';
import TOP_8 from '../audio/top/8.ogg';
import TOP_9 from '../audio/top/9.ogg';
import TOP_10 from '../audio/top/10.ogg';
import TOP_11 from '../audio/top/11.ogg';
import TOP_12 from '../audio/top/12.ogg';
import TOP_13 from '../audio/top/13.ogg';
import TOP_14 from '../audio/top/14.ogg';

import NIRVANA_1 from '../audio/nirvana/1.ogg';
import NIRVANA_2 from '../audio/nirvana/2.ogg';
import NIRVANA_3 from '../audio/nirvana/3.ogg';
import NIRVANA_4 from '../audio/nirvana/4.ogg';
import NIRVANA_5 from '../audio/nirvana/5.ogg';
import NIRVANA_6 from '../audio/nirvana/6.ogg';
import NIRVANA_7 from '../audio/nirvana/7.ogg';
import NIRVANA_8 from '../audio/nirvana/8.ogg';
import NIRVANA_9 from '../audio/nirvana/9.ogg';
import NIRVANA_10 from '../audio/nirvana/10.ogg';
import NIRVANA_11 from '../audio/nirvana/11.ogg';
import NIRVANA_12 from '../audio/nirvana/12.ogg';
import NIRVANA_13 from '../audio/nirvana/13.ogg';

import OLIVIA_RODRIGO_1 from '../audio/olivia-rodrigo/1.ogg';
import OLIVIA_RODRIGO_2 from '../audio/olivia-rodrigo/2.ogg';
import OLIVIA_RODRIGO_3 from '../audio/olivia-rodrigo/3.ogg';
import OLIVIA_RODRIGO_4 from '../audio/olivia-rodrigo/4.ogg';
import OLIVIA_RODRIGO_5 from '../audio/olivia-rodrigo/5.ogg';
import OLIVIA_RODRIGO_6 from '../audio/olivia-rodrigo/6.ogg';
import OLIVIA_RODRIGO_7 from '../audio/olivia-rodrigo/7.ogg';
import OLIVIA_RODRIGO_8 from '../audio/olivia-rodrigo/8.ogg';
import OLIVIA_RODRIGO_9 from '../audio/olivia-rodrigo/9.ogg';
import OLIVIA_RODRIGO_10 from '../audio/olivia-rodrigo/10.ogg';
import OLIVIA_RODRIGO_11 from '../audio/olivia-rodrigo/11.ogg';

import ED_SHEERAN_1 from '../audio/ed-sheeran/1.ogg';
import ED_SHEERAN_2 from '../audio/ed-sheeran/2.ogg';
import ED_SHEERAN_3 from '../audio/ed-sheeran/3.ogg';
import ED_SHEERAN_4 from '../audio/ed-sheeran/4.ogg';
import ED_SHEERAN_5 from '../audio/ed-sheeran/5.ogg';
import ED_SHEERAN_6 from '../audio/ed-sheeran/6.ogg';
import ED_SHEERAN_7 from '../audio/ed-sheeran/7.ogg';
import ED_SHEERAN_8 from '../audio/ed-sheeran/8.ogg';
import ED_SHEERAN_9 from '../audio/ed-sheeran/9.ogg';
import ED_SHEERAN_10 from '../audio/ed-sheeran/10.ogg';
import ED_SHEERAN_11 from '../audio/ed-sheeran/11.ogg';
import ED_SHEERAN_12 from '../audio/ed-sheeran/12.ogg';
import ED_SHEERAN_13 from '../audio/ed-sheeran/13.ogg';
import ED_SHEERAN_14 from '../audio/ed-sheeran/14.ogg';

import THE_NEIGHBOURHOOD_1 from '../audio/the-neighbourhood/1.ogg';
import THE_NEIGHBOURHOOD_2 from '../audio/the-neighbourhood/2.ogg';
import THE_NEIGHBOURHOOD_3 from '../audio/the-neighbourhood/3.ogg';
import THE_NEIGHBOURHOOD_4 from '../audio/the-neighbourhood/4.ogg';
import THE_NEIGHBOURHOOD_5 from '../audio/the-neighbourhood/5.ogg';

import DOJA_CAT_1 from '../audio/doja-cat/1.ogg';
import DOJA_CAT_2 from '../audio/doja-cat/2.ogg';
import DOJA_CAT_3 from '../audio/doja-cat/3.ogg';
import DOJA_CAT_4 from '../audio/doja-cat/4.ogg';
import DOJA_CAT_5 from '../audio/doja-cat/5.ogg';
import DOJA_CAT_6 from '../audio/doja-cat/6.ogg';
import DOJA_CAT_7 from '../audio/doja-cat/7.ogg';
import DOJA_CAT_8 from '../audio/doja-cat/8.ogg';
import DOJA_CAT_9 from '../audio/doja-cat/9.ogg';
import DOJA_CAT_10 from '../audio/doja-cat/10.ogg';
import DOJA_CAT_11 from '../audio/doja-cat/11.ogg';
import DOJA_CAT_12 from '../audio/doja-cat/12.ogg';

import POST_MALONE_1 from '../audio/post-malone/1.ogg';
import POST_MALONE_2 from '../audio/post-malone/2.ogg';
import POST_MALONE_3 from '../audio/post-malone/3.ogg';
import POST_MALONE_4 from '../audio/post-malone/4.ogg';
import POST_MALONE_5 from '../audio/post-malone/5.ogg';
import POST_MALONE_6 from '../audio/post-malone/6.ogg';
import POST_MALONE_7 from '../audio/post-malone/7.ogg';
import POST_MALONE_8 from '../audio/post-malone/8.ogg';
import POST_MALONE_9 from '../audio/post-malone/9.ogg';
import POST_MALONE_10 from '../audio/post-malone/10.ogg';
import POST_MALONE_11 from '../audio/post-malone/11.ogg';
import POST_MALONE_12 from '../audio/post-malone/12.ogg';
import POST_MALONE_13 from '../audio/post-malone/13.ogg';
import POST_MALONE_14 from '../audio/post-malone/14.ogg';
import POST_MALONE_15 from '../audio/post-malone/15.ogg';
import POST_MALONE_16 from '../audio/post-malone/16.ogg';
import POST_MALONE_17 from '../audio/post-malone/17.ogg';

import SHAWN_MENDES_1 from '../audio/shawn-mendes/1.ogg';
import SHAWN_MENDES_2 from '../audio/shawn-mendes/2.ogg';
import SHAWN_MENDES_3 from '../audio/shawn-mendes/3.ogg';
import SHAWN_MENDES_4 from '../audio/shawn-mendes/4.ogg';
import SHAWN_MENDES_5 from '../audio/shawn-mendes/5.ogg';
import SHAWN_MENDES_6 from '../audio/shawn-mendes/6.ogg';
import SHAWN_MENDES_7 from '../audio/shawn-mendes/7.ogg';
import SHAWN_MENDES_8 from '../audio/shawn-mendes/8.ogg';
import SHAWN_MENDES_9 from '../audio/shawn-mendes/9.ogg';
import SHAWN_MENDES_10 from '../audio/shawn-mendes/10.ogg';
import SHAWN_MENDES_11 from '../audio/shawn-mendes/11.ogg';
import SHAWN_MENDES_12 from '../audio/shawn-mendes/12.ogg';
import SHAWN_MENDES_13 from '../audio/shawn-mendes/13.ogg';
import SHAWN_MENDES_14 from '../audio/shawn-mendes/14.ogg';
import SHAWN_MENDES_15 from '../audio/shawn-mendes/15.ogg';
import SHAWN_MENDES_16 from '../audio/shawn-mendes/16.ogg';

import MAROON_FIVE_1 from '../audio/maroon-five/1.ogg';
import MAROON_FIVE_2 from '../audio/maroon-five/2.ogg';
import MAROON_FIVE_3 from '../audio/maroon-five/3.ogg';
import MAROON_FIVE_4 from '../audio/maroon-five/4.ogg';
import MAROON_FIVE_5 from '../audio/maroon-five/5.ogg';
import MAROON_FIVE_6 from '../audio/maroon-five/6.ogg';
import MAROON_FIVE_7 from '../audio/maroon-five/7.ogg';
import MAROON_FIVE_8 from '../audio/maroon-five/8.ogg';
import MAROON_FIVE_9 from '../audio/maroon-five/9.ogg';
import MAROON_FIVE_10 from '../audio/maroon-five/10.ogg';
import MAROON_FIVE_11 from '../audio/maroon-five/11.ogg';
import MAROON_FIVE_12 from '../audio/maroon-five/12.ogg';
import MAROON_FIVE_13 from '../audio/maroon-five/13.ogg';
import MAROON_FIVE_14 from '../audio/maroon-five/14.ogg';

import LIL_NAS_1 from '../audio/lil-nas-x/1.ogg';
import LIL_NAS_2 from '../audio/lil-nas-x/2.ogg';
import LIL_NAS_3 from '../audio/lil-nas-x/3.ogg';
import LIL_NAS_4 from '../audio/lil-nas-x/4.ogg';
import LIL_NAS_5 from '../audio/lil-nas-x/5.ogg';
import LIL_NAS_6 from '../audio/lil-nas-x/6.ogg';
import LIL_NAS_7 from '../audio/lil-nas-x/7.ogg';
import LIL_NAS_8 from '../audio/lil-nas-x/8.ogg';
import LIL_NAS_9 from '../audio/lil-nas-x/9.ogg';
import LIL_NAS_10 from '../audio/lil-nas-x/10.ogg';
import LIL_NAS_11 from '../audio/lil-nas-x/11.ogg';
import LIL_NAS_12 from '../audio/lil-nas-x/12.ogg';
import LIL_NAS_13 from '../audio/lil-nas-x/13.ogg';
import LIL_NAS_14 from '../audio/lil-nas-x/14.ogg';
import LIL_NAS_15 from '../audio/lil-nas-x/15.ogg';

import XXXTENTACION_1 from '../audio/xxxtentacion/1.ogg';
import XXXTENTACION_2 from '../audio/xxxtentacion/2.ogg';
import XXXTENTACION_3 from '../audio/xxxtentacion/3.ogg';
import XXXTENTACION_4 from '../audio/xxxtentacion/4.ogg';
import XXXTENTACION_5 from '../audio/xxxtentacion/5.ogg';
import XXXTENTACION_6 from '../audio/xxxtentacion/6.ogg';
import XXXTENTACION_7 from '../audio/xxxtentacion/7.ogg';
import XXXTENTACION_8 from '../audio/xxxtentacion/8.ogg';
import XXXTENTACION_9 from '../audio/xxxtentacion/9.ogg';
import XXXTENTACION_10 from '../audio/xxxtentacion/10.ogg';
import XXXTENTACION_11 from '../audio/xxxtentacion/11.ogg';
import XXXTENTACION_12 from '../audio/xxxtentacion/12.ogg';
import XXXTENTACION_13 from '../audio/xxxtentacion/13.ogg';
import XXXTENTACION_14 from '../audio/xxxtentacion/14.ogg';
import XXXTENTACION_15 from '../audio/xxxtentacion/15.ogg';
import XXXTENTACION_16 from '../audio/xxxtentacion/16.ogg';
import XXXTENTACION_17 from '../audio/xxxtentacion/17.ogg';
import XXXTENTACION_18 from '../audio/xxxtentacion/18.ogg';

import AVICII_1 from '../audio/avicii/1.ogg';
import AVICII_2 from '../audio/avicii/2.ogg';
import AVICII_3 from '../audio/avicii/3.ogg';
import AVICII_4 from '../audio/avicii/4.ogg';
import AVICII_5 from '../audio/avicii/5.ogg';
import AVICII_6 from '../audio/avicii/6.ogg';
import AVICII_7 from '../audio/avicii/7.ogg';
import AVICII_8 from '../audio/avicii/8.ogg';
import AVICII_9 from '../audio/avicii/9.ogg';
import AVICII_10 from '../audio/avicii/10.ogg';

import TAME_IMPALA_1 from '../audio/tame-impala/1.ogg';
import TAME_IMPALA_2 from '../audio/tame-impala/2.ogg';
import TAME_IMPALA_3 from '../audio/tame-impala/3.ogg';
import TAME_IMPALA_4 from '../audio/tame-impala/4.ogg';
import TAME_IMPALA_5 from '../audio/tame-impala/5.ogg';
import TAME_IMPALA_6 from '../audio/tame-impala/6.ogg';
import TAME_IMPALA_7 from '../audio/tame-impala/7.ogg';
import TAME_IMPALA_8 from '../audio/tame-impala/8.ogg';
import TAME_IMPALA_9 from '../audio/tame-impala/9.ogg';
import TAME_IMPALA_10 from '../audio/tame-impala/10.ogg';
import TAME_IMPALA_11 from '../audio/tame-impala/11.ogg';
import TAME_IMPALA_12 from '../audio/tame-impala/12.ogg';
import TAME_IMPALA_13 from '../audio/tame-impala/13.ogg';

const DescriptionDisc = () => {
	let { id } = useParams();

	const [songsDemo, setSongsDemo] = useState({});

	const [readMore, setReadMore] = useState(false);

	const [data] = useState([
		{
			artist: 'Dua Lipa',
			disk: 'Future Nostalgia',
			description:
				'Future Nostalgia es el segundo álbum de estudio de la cantante británica Dua Lipa.​​ Fue lanzado el 27 de marzo de 2020 por el sello discográfico Warner Records.​ Comenzó el trabajo en el álbum a principios de 2018, reclutando a escritores y productores como Jeff Bhasker, Ian Kirkpatrick, Stuart Price, The Monsters and the Strangerz. Para el álbum encontró inspiración en la música de artistas que escuchó durante su adolescencia, como Gwen Stefani, Moloko, Daft Punk y Outkast. El álbum fue promocionado con seis sencillos y un sencillo promocional, «Don t Start Now», se lanzó el 1 de noviembre de 2019 como el sencillo principal del álbum.​​ Se convirtió en su séptima entrada entre los 10 primeros en la lista de sencillos del Reino Unido y su primera entrada entre los tres primeros en el Billboard Hot 100 de Estados Unidos. El tema principal del álbum «Future Nostalgia» se lanzó como sencillo promocional el 13 de diciembre de 2019. Su segundo sencillo «Physical» se estrenó el 31 de enero de 2020 y alcanzó el número siete en la lista de sencillos del Reino Unido, mientras que «Break My Heart» se publicó como el tercer sencillo del álbum el 25 de marzo de 2020.',
			price: 75,
			id: 1,
			img: DUA_LIPA,
			amount: 1,
			favorite: false,
			age: 2020,
			song: 13,
			minutes: 43,
			explicit: true,
			songs: [
				{
					song: 'Future Nostalgia',
					id: 1,
					url: DUA_LIPA_1,
					img: DUA_LIPA,
					time: '3:05',
					like: false,
					dislike: false,
					explicit: false,
					totalSong: 13,
				},
				{
					song: "Don't Start Now",
					id: 2,
					url: DUA_LIPA_2,
					img: DUA_LIPA,
					time: '3:01',
					like: false,
					dislike: false,
					explicit: false,
					totalSong: 13,
				},
				{
					song: 'Cool',
					id: 3,
					url: DUA_LIPA_3,
					img: DUA_LIPA,
					time: '3:29',
					like: false,
					dislike: false,
					explicit: false,
					totalSong: 13,
				},
				{
					song: 'Physical',
					id: 4,
					url: DUA_LIPA_4,
					img: DUA_LIPA,
					time: '3:14',
					like: false,
					dislike: false,
					explicit: false,
					totalSong: 13,
				},
				{
					song: 'Levitating',
					id: 5,
					url: DUA_LIPA_5,
					img: DUA_LIPA,
					time: '3:24',
					like: false,
					dislike: false,
					explicit: false,
					totalSong: 13,
				},
				{
					song: 'Pretty Please',
					id: 6,
					url: DUA_LIPA_6,
					img: DUA_LIPA,
					time: '3:14',
					like: false,
					dislike: false,
					explicit: false,
					totalSong: 13,
				},
				{
					song: 'Hallucinate',
					id: 7,
					url: DUA_LIPA_7,
					img: DUA_LIPA,
					time: '3:27',
					like: false,
					dislike: false,
					explicit: false,
					totalSong: 13,
				},
				{
					song: 'Love Again',
					id: 8,
					url: DUA_LIPA_8,
					img: DUA_LIPA,
					time: '4:18',
					like: false,
					dislike: false,
					explicit: false,
					totalSong: 13,
				},
				{
					song: 'Break My Hart',
					id: 9,
					url: DUA_LIPA_9,
					img: DUA_LIPA,
					time: '3:42',
					like: false,
					dislike: false,
					explicit: false,
					totalSong: 13,
				},
				{
					song: 'Good in Bed',
					id: 10,
					url: DUA_LIPA_10,
					img: DUA_LIPA,
					time: '3:39',
					like: false,
					dislike: false,
					explicit: true,
					totalSong: 13,
				},
				{
					song: 'Boys Will Be Boys',
					id: 11,
					url: DUA_LIPA_11,
					img: DUA_LIPA,
					time: '2:48',
					like: false,
					dislike: false,
					explicit: false,
					totalSong: 13,
				},
				{
					song: 'Levitating (con DaBaby)',
					id: 12,
					url: DUA_LIPA_12,
					img: DUA_LIPA,
					time: '3:50',
					like: false,
					dislike: false,
					explicit: false,
					totalSong: 13,
				},
				{
					song: 'Fever',
					id: 13,
					url: DUA_LIPA_13,
					img: DUA_LIPA,
					time: '2:39',
					like: false,
					dislike: false,
					explicit: false,
					totalSong: 13,
				},
			],
		},
		{
			artist: 'The Weekend',
			disk: 'After Hours',
			description:
				"After Hours —en español, A deshoras— es el quinto álbum de estudio del cantante canadiense The Weeknd. Fue lanzado el 20 de marzo de 2020 por XO y Republic Records. Fue producido principalmente por The Weeknd, junto con una variedad de productores como DaHeala, Illangelo, Max Martin, Metro Boomin y OPN, la mayoría de los cuales The Weeknd había trabajado anteriormente. La edición estándar del álbum no tiene colaboraciones con otros artistas, pero la edición de remixes contiene apariciones especiales de Chromatics y Lil Uzi Vert. Temáticamente, After Hours explora la promiscuidad, el exceso de indulgencia y el autodesprecio. El álbum tiene una fuerte influencia de los sonidos de los 80's. Antes del lanzamiento del álbum, Weeknd confirmó que After Hours enfrentaría diferencias estilísticas con su predecesor, Starboy. Los periodistas musicales han señalado el álbum como una reinvención artística para The Weeknd, con la introducción de influencias del new wave y dream pop. El arte y la estética del material promocional del álbum han sido descritos como psicodélicos y están inspirados en varias películas, como: Casino, Fear and Loathing in Las Vegas, Joker y Uncut Gems.",
			price: 90,
			id: 2,
			img: THE_WEEKEND,
			amount: 1,
			favorite: false,
			age: 2020,
			song: 14,
			minutes: 56,
			explicit: true,
			songs: [
				{
					song: 'Alone Again',
					time: '4:11',
					img: THE_WEEKEND,
					url: THE_WEEKEND_1,
					like: false,
					dislike: false,
					explicit: true,
				},
				{
					song: 'Too Late',
					time: '4:00',
					img: THE_WEEKEND,
					url: THE_WEEKEND_2,
					like: false,
					dislike: false,
					explicit: true,
					id: 1,
					totalSong: 14,
				},
				{
					song: 'Hardest To Love',
					time: '3:32',
					img: THE_WEEKEND,
					url: THE_WEEKEND_3,
					like: false,
					dislike: false,
					explicit: true,
					id: 2,
					totalSong: 14,
				},
				{
					song: 'Scared To Live',
					time: '3:12',
					img: THE_WEEKEND,
					url: THE_WEEKEND_4,
					like: false,
					dislike: false,
					explicit: true,
					id: 3,
					totalSong: 14,
				},
				{
					song: 'Snowchild',
					time: '4:08',
					img: THE_WEEKEND,
					url: THE_WEEKEND_5,
					like: false,
					dislike: false,
					explicit: true,
					id: 4,
					totalSong: 14,
				},
				{
					song: 'Escape From LA',
					time: '5:56',
					img: THE_WEEKEND,
					url: THE_WEEKEND_6,
					like: false,
					dislike: false,
					explicit: true,
					id: 5,
					totalSong: 14,
				},
				{
					song: 'Heartless',
					time: '3:19',
					img: THE_WEEKEND,
					url: THE_WEEKEND_7,
					like: false,
					dislike: false,
					explicit: true,
					id: 6,
					totalSong: 14,
				},
				{
					song: 'Faith',
					time: '4:44',
					img: THE_WEEKEND,
					url: THE_WEEKEND_8,
					like: false,
					dislike: false,
					explicit: true,
					id: 7,
					totalSong: 14,
				},
				{
					song: 'Blinding Lights',
					time: '3:21',
					img: THE_WEEKEND,
					url: THE_WEEKEND_9,
					like: false,
					dislike: false,
					explicit: false,
					id: 8,
					totalSong: 14,
				},
				{
					song: 'In Your Eyes',
					time: '3:58',
					img: THE_WEEKEND,
					url: THE_WEEKEND_10,
					like: false,
					dislike: false,
					explicit: false,
					id: 9,
					totalSong: 14,
				},
				{
					song: 'Save Your Tears',
					time: '3:36',
					img: THE_WEEKEND,
					url: THE_WEEKEND_11,
					like: false,
					dislike: false,
					explicit: false,
					id: 10,
					totalSong: 14,
				},
				{
					song: 'Repeat After Me (interlude)',
					time: '3:16',
					img: THE_WEEKEND,
					url: THE_WEEKEND_12,
					like: false,
					dislike: false,
					explicit: true,
					id: 11,
					totalSong: 14,
				},
				{
					song: 'After Hours',
					time: '6:02',
					img: THE_WEEKEND,
					url: THE_WEEKEND_13,
					like: false,
					dislike: false,
					explicit: false,
					id: 12,
					totalSong: 14,
				},
				{
					song: 'Untill I Bleed Out',
					time: '3:11',
					img: THE_WEEKEND,
					url: THE_WEEKEND_14,
					like: false,
					dislike: false,
					explicit: true,
					id: 13,
					totalSong: 14,
				},
			],
		},
		{
			artist: 'Nirvana',
			disk: 'Nevermind',
			description:
				'Nevermind —en español: «No importa»— es el segundo álbum de estudio de la banda estadounidense de grunge Nirvana, publicado en septiembre de 1991. Producido por Butch Vig, Nevermind fue el primer lanzamiento de la banda con DGC Records. El líder de la agrupación, Kurt Cobain, trató de hacer música fuera de los límites restrictivos de la escena grunge de Seattle, aprovechando la influencia de grupos como los Pixies y su uso de la dinámica de canciones ruidosas y calmadas, con grandes composiciones y sonidos. Gracias a este álbum el género grunge se hizo conocido a nivel mundial, recibiendo una gran aceptación y aclamación por críticos especializados de música, quienes también consideran el álbum como uno de los mejores de la historia.Pese a las escasas esperanzas comerciales por parte de la banda y del sello discográfico, Nevermind se convirtió en un sorprendente éxito a finales de 1991, en gran parte debido a su primer sencillo, «Smells Like Teen Spirit». En enero de 1992 había desbancado al álbum de Michael Jackson Dangerous del número uno del Billboard. La RIAA certificó el álbum con disco de diamante.',
			price: 140.15,
			id: 15,
			img: NIRVANA,
			amount: 1,
			favorite: false,
			age: 1991,
			song: 13,
			minutes: 49,
			explicit: false,
			songs: [
				{
					song: 'Smells Like Teen Spirit',
					time: '5:01',
					img: NIRVANA,
					url: NIRVANA_1,
					like: false,
					dislike: false,
					explicit: false,
					id: 1,
					totalSong: 13,
				},
				{
					song: 'In Bloom',
					time: '4:15',
					img: NIRVANA,
					url: NIRVANA_2,
					like: false,
					dislike: false,
					explicit: false,
					id: 2,
					totalSong: 13,
				},
				{
					song: 'Come As You Are',
					time: '3:38',
					img: NIRVANA,
					url: NIRVANA_3,
					like: false,
					dislike: false,
					explicit: false,
					id: 3,
					totalSong: 13,
				},
				{
					song: 'Breed',
					time: '3:04',
					img: NIRVANA,
					url: NIRVANA_4,
					like: false,
					dislike: false,
					explicit: false,
					id: 4,
					totalSong: 13,
				},
				{
					song: 'Lithium',
					time: '4:17',
					img: NIRVANA,
					url: NIRVANA_5,
					like: false,
					dislike: false,
					explicit: false,
					id: 5,
					totalSong: 13,
				},
				{
					song: 'Polly',
					time: '2:53',
					img: NIRVANA,
					url: NIRVANA_6,
					like: false,
					dislike: false,
					explicit: false,
					id: 6,
					totalSong: 13,
				},
				{
					song: 'Territorial Pissings',
					time: '2:22',
					img: NIRVANA,
					url: NIRVANA_7,
					like: false,
					dislike: false,
					explicit: false,
					id: 7,
					totalSong: 13,
				},
				{
					song: 'Drain You',
					time: '3:43',
					img: NIRVANA,
					url: NIRVANA_8,
					like: false,
					dislike: false,
					explicit: false,
					id: 8,
					totalSong: 13,
				},
				{
					song: 'Lounge Act',
					time: '2:36',
					img: NIRVANA,
					url: NIRVANA_9,
					like: false,
					dislike: false,
					explicit: false,
					id: 9,
					totalSong: 13,
				},
				{
					song: 'Stay Away',
					time: '3:31',
					img: NIRVANA,
					url: NIRVANA_10,
					like: false,
					dislike: false,
					explicit: false,
					id: 10,
					totalSong: 13,
				},
				{
					song: 'On A Plain',
					time: '3:14',
					img: NIRVANA,
					url: NIRVANA_11,
					like: false,
					dislike: false,
					explicit: false,
					id: 11,
					totalSong: 13,
				},
				{
					song: 'Something in The Way',
					time: '3:52',
					img: NIRVANA,
					url: NIRVANA_12,
					like: false,
					dislike: false,
					explicit: false,
					id: 12,
					totalSong: 13,
				},
				{
					song: 'Endless, Nameless',
					time: '6:43',
					img: NIRVANA,
					url: NIRVANA_13,
					like: false,
					dislike: false,
					explicit: false,
					id: 13,
					totalSong: 13,
				},
			],
		},
		{
			artist: 'The Neighbourhood',
			disk: "I'm Sorry...",
			description:
				'The Neighbourhood (simbolizado como THE NBHD) es un grupo de musica alternativa rock estadounidense creado en agosto de 2011. El grupo está conformado por el vocalista Jesse Rutherford, los guitarristas Jeremy Freedman y Zach Abels, el baterista Brandon Fried y el bajista Mikey Margott. Posteriormente The Neighbourhood reveló su primer álbum de larga duración, el 23 de abril de 2013, por medio de Columbia Records. El 16 de enero de 2014, la banda confesó a través de medios de comunicación social que el baterista Bryan Sammis abandona la agrupación para continuar una carrera en solitario dentro de la música. En noviembre de 2014, lanzaron nuevos álbumes con los nombres Thank you, I Love You, The Love Collection, Wiped Out! y Hard EP, los cuales se destacan por el color gris y negro entre todas sus canciones. En 2018, lanzaron su primer álbum en color, el cual cuenta con un sonido mucho más electrónico que sus predecesores, con las que obtuvieron más reconocimiento y destacaron mucho más. Su álbum más reciente es Chip Chrome & The Mono-Tones.',
			price: 35.45,
			id: 14,
			img: THE_NEIGHBOURHOOD,
			amount: 1,
			favorite: false,
			age: 2012,
			song: 5,
			minutes: 17,
			explicit: false,
			songs: [
				{
					song: 'Female Robbery',
					time: '3:27',
					img: THE_NEIGHBOURHOOD,
					url: THE_NEIGHBOURHOOD_1,
					like: false,
					dislike: false,
					explicit: false,
					id: 1,
					totalSong: 5,
				},
				{
					song: 'Leaving Tonight',
					time: '3:24',
					img: THE_NEIGHBOURHOOD,
					url: THE_NEIGHBOURHOOD_2,
					like: false,
					dislike: false,
					explicit: false,
					id: 2,
					totalSong: 5,
				},
				{
					song: 'Baby Came Home',
					time: '3:47',
					img: THE_NEIGHBOURHOOD,
					url: THE_NEIGHBOURHOOD_3,
					like: false,
					dislike: false,
					explicit: false,
					id: 3,
					totalSong: 5,
				},
				{
					song: 'Sweater Weather',
					time: '4:01',
					img: THE_NEIGHBOURHOOD,
					url: THE_NEIGHBOURHOOD_4,
					like: false,
					dislike: false,
					explicit: false,
					id: 4,
					totalSong: 5,
				},
				{
					song: 'Wires',
					time: '3:13',
					img: THE_NEIGHBOURHOOD,
					url: THE_NEIGHBOURHOOD_5,
					like: false,
					dislike: false,
					explicit: false,
					id: 5,
					totalSong: 5,
				},
			],
		},
		{
			artist: 'Twenty One Pilots',
			disk: 'Blurryface',
			description:
				"Blurryface, es el cuarto álbum de larga duración y segundo álbum de estudio del dúo musical estadounidense Twenty One Pilots, lanzado el 17 de mayo de 2015, a través de Fueled by Ramen. Al igual que su álbum anterior Vessel, el álbum toma influencia de varios géneros, incluidos hip hop, rock, pop, reggae y indie. Líricamente, el álbum incorpora temas de salud mental, duda y religión. Contiene los sencillos exitosos 'Stressed Out' y 'Ride', que alcanzaron el top 5 en Billboard Hot 100. Blurryface fue bien recibido por los críticos, quienes felicitaron sus temas y diversidad musical. Se considera que es el álbum revolucionario de la banda, convirtiéndose en el primero en alcanzar el número uno en Billboard 200. El álbum ha vendido más de 1.5 millones de copias en los Estados Unidos hasta abril de 2017.​ En 2018, Blurryface se convirtió en el primer álbum en la era digital en tener cada pista recibió al menos una certificación de oro de la Asociación de Industria Discográfica de Estados Unidos.​​ El 15 de mayo de 2019, alcanzó el hit de estar en la lista Billboard Top 200 Album durante cuatro años, sin abandonar nunca la lista.​",
			price: 72.25,
			id: 13,
			img: TOP,
			amount: 1,
			favorite: false,
			age: 2015,
			song: 14,
			minutes: 52,
			explicit: false,
			songs: [
				{
					song: 'Heavydirtysoul',
					time: '3:55',
					img: TOP,
					url: TOP_1,
					like: false,
					dislike: false,
					explicit: false,
					id: 1,
					totalSong: 14,
				},
				{
					song: 'Stressed Out',
					time: '3:23',
					img: TOP,
					url: TOP_2,
					like: false,
					dislike: false,
					explicit: false,
					id: 2,
					totalSong: 14,
				},
				{
					song: 'Ride',
					time: '3:35',
					img: TOP,
					url: TOP_3,
					like: false,
					dislike: false,
					explicit: false,
					id: 3,
					totalSong: 14,
				},
				{
					song: 'Fairly Local',
					time: '3:28',
					img: TOP,
					url: TOP_4,
					like: false,
					dislike: false,
					explicit: false,
					id: 4,
					totalSong: 14,
				},
				{
					song: 'Tear in My Heart',
					time: '3:09',
					img: TOP,
					url: TOP_5,
					like: false,
					dislike: false,
					explicit: false,
					id: 5,
					totalSong: 14,
				},
				{
					song: 'Lane Boy',
					time: '4:14',
					img: TOP,
					url: TOP_6,
					like: false,
					dislike: false,
					explicit: false,
					id: 6,
					totalSong: 14,
				},
				{
					song: 'The Judge',
					time: '4:58',
					img: TOP,
					url: TOP_7,
					like: false,
					dislike: false,
					explicit: false,
					id: 7,
					totalSong: 14,
				},
				{
					song: 'Doubt',
					time: '3:12',
					img: TOP,
					url: TOP_8,
					like: false,
					dislike: false,
					explicit: false,
					id: 8,
					totalSong: 14,
				},
				{
					song: 'Polarize',
					time: '3:47',
					img: TOP,
					url: TOP_9,
					like: false,
					dislike: false,
					explicit: false,
					id: 9,
					totalSong: 14,
				},
				{
					song: "We Dont' Believe What's on TV",
					time: '2:58',
					img: TOP,
					url: TOP_10,
					like: false,
					dislike: false,
					explicit: false,
					id: 10,
					totalSong: 14,
				},
				{
					song: 'Message Man',
					time: '4:01',
					img: TOP,
					url: TOP_11,
					like: false,
					dislike: false,
					explicit: false,
					id: 11,
					totalSong: 14,
				},
				{
					song: 'Hometown',
					time: '3:55',
					img: TOP,
					url: TOP_12,
					like: false,
					dislike: false,
					explicit: false,
					id: 12,
					totalSong: 14,
				},
				{
					song: 'Not Today',
					time: '3:59',
					img: TOP,
					url: TOP_13,
					like: false,
					dislike: false,
					explicit: false,
					id: 13,
					totalSong: 14,
				},
				{
					song: 'Goner',
					time: '3:57',
					img: TOP,
					url: TOP_14,
					like: false,
					dislike: false,
					explicit: false,
					id: 14,
					totalSong: 14,
				},
			],
		},
		{
			artist: 'Doja Cat',
			disk: 'Hot Pink',
			description:
				'Hot Pink es el segundo álbum de estudio de la rapera y cantante estadounidense Doja Cat, lanzado el 7 de noviembre de 2019 a través de Kemosabe Records y RCA Records.6 El álbum cuenta con los sencillos Juicy, Bottom Bitch, Rules, Cyber Sex, Say So, Like That y Streets, y cuenta con la aparición de artistas como Smino, Tyga y Gucci Mane. De acuerdo con la lista de álbumes Rolling Stone Top 200, Hot Pink ha vendido 20,600 unidades equivalentes a álbumes en Estados Unidos durante su permanencia en la lista, de las cuales 5,867 son ventas puras. El sencillo principal del álbum Juicy (Remix) con Tyga fue lanzado el 15 de agosto de 2019 junto con un video musical. El segundo sencillo del álbum titulado Bottom Bitch fue lanzado el 3 de octubre de 2019 junto con un video musical. El tercer sencillo del álbum titulado Rules fue lanzado el 24 de octubre de 2019, también junto a un video musical. El cuarto sencillo del álbum titulado Cyber Sex fue lanzado el 7 de noviembre de 2019. El 10 de noviembre de 2019, Doja anunció que lanzaría un video musical para la canción Say So, el cual se lanzó el 28 de enero de 2020. La canción se convirtió en una de las canciones de Doja Cat con mejor recepción comercial mundialmente. El 11 de febrero se lanzó un sexto sencillo, Like That en colaboración con el rapero estadounidense Gucci Mane. Cómo último y final sencillo se lanzó Streets. ',
			price: 65,
			id: 3,
			img: DOJA_CAT,
			amount: 1,
			favorite: false,
			age: 2019,
			song: 12,
			minutes: 39,
			explicit: true,
			songs: [
				{
					song: 'Cyber Sex',
					url: DOJA_CAT_1,
					img: DOJA_CAT,
					time: '2:46',
					like: false,
					dislike: false,
					explicit: true,
					id: 1,
					totalSong: 12,
				},
				{
					song: "Won't Bite (con Smino)",
					url: DOJA_CAT_2,
					img: DOJA_CAT,
					time: '3:16',
					like: false,
					dislike: false,
					explicit: true,
					id: 2,
					totalSong: 12,
				},
				{
					song: 'Rules',
					url: DOJA_CAT_3,
					img: DOJA_CAT,
					time: '3:08',
					like: false,
					dislike: false,
					explicit: true,
					id: 3,
					totalSong: 12,
				},
				{
					song: 'Bottom Bitch',
					url: DOJA_CAT_4,
					img: DOJA_CAT,
					time: '3:18',
					like: false,
					dislike: false,
					explicit: true,
					id: 4,
					totalSong: 12,
				},
				{
					song: 'Say So',
					url: DOJA_CAT_5,
					img: DOJA_CAT,
					time: '3:58',
					like: false,
					dislike: false,
					explicit: true,
					id: 5,
					totalSong: 12,
				},
				{
					song: 'Like That (con Gucci Mane)',
					url: DOJA_CAT_6,
					img: DOJA_CAT,
					time: '2:44',
					like: false,
					dislike: false,
					explicit: true,
					id: 6,
					totalSong: 12,
				},
				{
					song: 'Talk Dirty',
					url: DOJA_CAT_7,
					img: DOJA_CAT,
					time: '4:02',
					like: false,
					dislike: false,
					explicit: true,
					id: 7,
					totalSong: 12,
				},
				{
					song: 'Addiction',
					url: DOJA_CAT_8,
					img: DOJA_CAT,
					time: '3:29',
					like: false,
					dislike: false,
					explicit: true,
					id: 8,
					totalSong: 12,
				},
				{
					song: 'Streets',
					url: DOJA_CAT_9,
					img: DOJA_CAT,
					time: '3:47',
					like: false,
					dislike: false,
					explicit: true,
					id: 9,
					totalSong: 12,
				},
				{
					song: 'Shine',
					url: DOJA_CAT_10,
					img: DOJA_CAT,
					time: '2:41',
					like: false,
					dislike: false,
					explicit: true,
					id: 10,
					totalSong: 12,
				},
				{
					song: 'Better Than Me',
					url: DOJA_CAT_11,
					img: DOJA_CAT,
					time: '3:23',
					like: false,
					dislike: false,
					explicit: true,
					id: 11,
					totalSong: 12,
				},
				{
					song: 'Juicy',
					url: DOJA_CAT_12,
					img: DOJA_CAT,
					time: '3:24',
					like: false,
					dislike: false,
					explicit: true,
					id: 12,
					totalSong: 12,
				},
			],
		},
		{
			artist: 'Post Malone',
			disk: 'Hollywood’s Bleeding',
			description:
				'Hollywood’s Bleeding en español Hollywood está sangrando es el tercer álbum de estudio del cantante estadounidense Post Malone publicado el 6 de septiembre de 2019 a través de la discográfica Republic Records. El primer sencillo del álbum fue lanzado el 24 de diciembre de 2018, en plena Navidad. La canción fue escrita por Austin Post, Louis Bell, Adam Feeney y Billy Walsh. La canción abarca el género hip hop. La canción debutó en el número 47 del Billboard Hot 100 en la semana del 5 de enero de 2019, siendo de los primeros debuts del año. En su segunda semana, con la salida de las canciones navideñas en listas la canción salto del 47 al 13 gracias al award de Biggest Streaming Gain, en la cuarta semana en lista, esta subió al número 11 con el mismo award, mientras que «Sunflower» canción del mismo artista encabezaba la lista. En su quinta semana la canción entró en el top 10 saltando del 11 al 9, para su catorceava semana la canción alcanzó el número 2 de la lista como mejor posición. Estando solo por delante 7 Rings de Ariana Grande. La canción estuvo finalmente 44 semanas en la lista. En streaming la canción obtuvo más de 800.000.000 reproducciones gracias al lanzamiento tan triunfante del álbum, que hizo que la canción reentrase entre las 50 más escuchadas. ',
			price: 57.5,
			id: 4,
			img: POST_MALONE,
			amount: 1,
			favorite: false,
			age: 2019,
			song: 17,
			minutes: 51,
			explicit: true,
			songs: [
				{
					song: 'Hollywood’s Bleeding',
					url: POST_MALONE_1,
					img: POST_MALONE,
					time: '2:37',
					like: false,
					dislike: false,
					explicit: false,
					id: 1,
					totalSong: 17,
				},
				{
					song: 'Saint-Tropez',
					url: POST_MALONE_2,
					img: POST_MALONE,
					time: '2:31',
					like: false,
					dislike: false,
					explicit: true,
					id: 2,
					totalSong: 17,
				},
				{
					song: 'Enemies (con DaBaby)',
					url: POST_MALONE_3,
					img: POST_MALONE,
					time: '3:17',
					like: false,
					dislike: false,
					explicit: true,
					id: 3,
					totalSong: 17,
				},
				{
					song: 'Allergic',
					url: POST_MALONE_4,
					img: POST_MALONE,
					time: '2:37',
					like: false,
					dislike: false,
					explicit: true,
					id: 4,
					totalSong: 17,
				},
				{
					song: 'A Thousand Bad Times',
					url: POST_MALONE_5,
					img: POST_MALONE,
					time: '3:42',
					like: false,
					dislike: false,
					explicit: true,
					id: 5,
					totalSong: 17,
				},
				{
					song: 'Circles',
					url: POST_MALONE_6,
					img: POST_MALONE,
					time: '3:36',
					like: false,
					dislike: false,
					explicit: false,
					id: 6,
					totalSong: 17,
				},
				{
					song: 'Die for Me (con Future y Halsey)',
					url: POST_MALONE_7,
					img: POST_MALONE,
					time: '4:06',
					like: false,
					dislike: false,
					explicit: true,
					id: 7,
					totalSong: 17,
				},
				{
					song: 'On the Road (con Meek Mill y Lil Baby)',
					url: POST_MALONE_8,
					img: POST_MALONE,
					time: '3:39',
					like: false,
					dislike: false,
					explicit: true,
					id: 8,
					totalSong: 17,
				},
				{
					song: 'Take What You Want (con Ozzy Osbourne y Travis Scott)',
					url: POST_MALONE_9,
					img: POST_MALONE,
					time: '3:50',
					like: false,
					dislike: false,
					explicit: false,
					id: 9,
					totalSong: 17,
				},
				{
					song: "I'm Gonne Be",
					url: POST_MALONE_10,
					img: POST_MALONE,
					time: '3:21',
					like: false,
					dislike: false,
					explicit: true,
					id: 10,
					totalSong: 17,
				},
				{
					song: 'Staring at the Sun (con SZA)',
					url: POST_MALONE_11,
					img: POST_MALONE,
					time: '2:49',
					like: false,
					dislike: false,
					explicit: true,
					id: 11,
					totalSong: 17,
				},
				{
					song: 'Sunflower (from "Spider-Man: Into the Spider-Verse")',
					url: POST_MALONE_12,
					img: POST_MALONE,
					time: '2:38',
					like: false,
					dislike: false,
					explicit: false,
					id: 12,
					totalSong: 17,
				},
				{
					song: 'Internet',
					url: POST_MALONE_13,
					img: POST_MALONE,
					time: '2:04',
					like: false,
					dislike: false,
					explicit: true,
					id: 13,
					totalSong: 17,
				},
				{
					song: 'Goodbyes (con Young Thug)',
					url: POST_MALONE_14,
					img: POST_MALONE,
					time: '2:55',
					like: false,
					dislike: false,
					explicit: true,
					id: 14,
					totalSong: 17,
				},
				{
					song: 'Myself',
					url: POST_MALONE_15,
					img: POST_MALONE,
					time: '2:39',
					like: false,
					dislike: false,
					explicit: true,
					id: 15,
					totalSong: 17,
				},
				{
					song: 'I Know',
					url: POST_MALONE_16,
					img: POST_MALONE,
					time: '2:22',
					like: false,
					dislike: false,
					explicit: true,
					id: 16,
					totalSong: 17,
				},
				{
					song: 'Wow.',
					url: POST_MALONE_17,
					img: POST_MALONE,
					time: '2:30',
					like: false,
					dislike: false,
					explicit: true,
					id: 17,
					totalSong: 17,
				},
			],
		},
		{
			artist: 'Ed Sheeran',
			disk: 'Equals',
			description:
				'= es el cuarto álbum de estudio​​ del músico y cantautor británico Ed Sheeran, lanzado el 29 de octubre de 2021 por Asylum y Atlantic Records.​ El álbum fue apoyado por los sencillos «Bad Habits», «Shivers» y «Overpass Graffiti», además de «Visiting Hours», lanzado como el único sencillo promocional. Recibió críticas mixtas de críticos musicales. El álbum alcanzó el número uno en Australia, Bélgica, Canadá, Dinamarca, Francia, Alemania, Irlanda, Italia, Lituania, Holanda, Nueva Zelanda, Escocia, Suecia, Reino Unido y Estados Unidos.',
			price: 95.5,
			id: 5,
			img: ED_SHEERAN,
			amount: 1,
			favorite: false,
			age: 2021,
			song: 14,
			minutes: 48,
			explicit: false,
			songs: [
				{
					song: 'Tides',
					url: ED_SHEERAN_1,
					img: ED_SHEERAN,
					time: '3:16',
					like: false,
					dislike: false,
					explicit: false,
					id: 1,
					totalSong: 14,
				},
				{
					song: 'Shivers',
					url: ED_SHEERAN_2,
					img: ED_SHEERAN,
					time: '3:28',
					like: false,
					dislike: false,
					explicit: false,
					id: 2,
					totalSong: 14,
				},
				{
					song: 'First Times',
					url: ED_SHEERAN_3,
					img: ED_SHEERAN,
					time: '3:06',
					like: false,
					dislike: false,
					explicit: false,
					id: 3,
					totalSong: 14,
				},
				{
					song: 'Bad Habits',
					url: ED_SHEERAN_4,
					img: ED_SHEERAN,
					time: '3:51',
					like: false,
					dislike: false,
					explicit: false,
					id: 4,
					totalSong: 14,
				},
				{
					song: 'Overpass Graffiti',
					url: ED_SHEERAN_5,
					img: ED_SHEERAN,
					time: '3:57',
					like: false,
					dislike: false,
					explicit: false,
					id: 5,
					totalSong: 14,
				},
				{
					song: 'The Joker And The Queen',
					url: ED_SHEERAN_6,
					img: ED_SHEERAN,
					time: '3:06',
					like: false,
					dislike: false,
					explicit: false,
					id: 6,
					totalSong: 14,
				},
				{
					song: 'Leave Your Life',
					url: ED_SHEERAN_7,
					img: ED_SHEERAN,
					time: '3:44',
					like: false,
					dislike: false,
					explicit: false,
					id: 7,
					totalSong: 14,
				},
				{
					song: 'Collide',
					url: ED_SHEERAN_8,
					img: ED_SHEERAN,
					time: '3:31',
					like: false,
					dislike: false,
					explicit: false,
					id: 8,
					totalSong: 14,
				},
				{
					song: '2step',
					url: ED_SHEERAN_9,
					img: ED_SHEERAN,
					time: '2:34',
					like: false,
					dislike: false,
					explicit: false,
					id: 9,
					totalSong: 14,
				},
				{
					song: 'Stop The Rain',
					url: ED_SHEERAN_10,
					img: ED_SHEERAN,
					time: '3:24',
					like: false,
					dislike: false,
					explicit: false,
					id: 10,
					totalSong: 14,
				},
				{
					song: 'Love In Slow Motion',
					url: ED_SHEERAN_11,
					img: ED_SHEERAN,
					time: '3:11',
					like: false,
					dislike: false,
					explicit: false,
					id: 11,
					totalSong: 14,
				},
				{
					song: 'Visiting Hours',
					url: ED_SHEERAN_12,
					img: ED_SHEERAN,
					time: '3:36',
					like: false,
					dislike: false,
					explicit: false,
					id: 12,
					totalSong: 14,
				},
				{
					song: 'Sandman',
					url: ED_SHEERAN_13,
					img: ED_SHEERAN,
					time: '4:20',
					like: false,
					dislike: false,
					explicit: false,
					id: 13,
					totalSong: 14,
				},
				{
					song: 'Be Right Now',
					url: ED_SHEERAN_14,
					img: ED_SHEERAN,
					time: '3:32',
					like: false,
					dislike: false,
					explicit: false,
					id: 14,
					totalSong: 14,
				},
			],
		},
		{
			artist: 'Shawn Mendes',
			disk: 'Illuminate (Deluxe)',
			price: 102.7,
			description:
				'Illuminate es el segundo álbum de estudio del cantante y compositor canadiense Shawn Mendes. Uno de los más vendidos del 2016. Fue lanzado el 23 de septiembre de 2016, bajo Island Records y Universal Music. Hasta agosto del 2017 el álbum ha vendido más de 2.2 millones de copias alrededor del mundo.​',
			id: 6,
			img: SHAWN_MENDES,
			amount: 1,
			favorite: false,
			age: 2016,
			song: 16,
			minutes: 55,
			explicit: false,
			songs: [
				{
					song: "There's Nothing Holdin' Me Back",
					url: SHAWN_MENDES_1,
					img: SHAWN_MENDES,
					time: '3:19',
					like: false,
					dislike: false,
					explicit: false,
					id: 1,
					totalSong: 16,
				},
				{
					song: 'Ruin',
					url: SHAWN_MENDES_2,
					img: SHAWN_MENDES,
					time: '4:01',
					like: false,
					dislike: false,
					explicit: false,
					id: 2,
					totalSong: 16,
				},
				{
					song: 'Mercy',
					url: SHAWN_MENDES_3,
					img: SHAWN_MENDES,
					time: '3:28',
					like: false,
					dislike: false,
					explicit: false,
					id: 3,
					totalSong: 16,
				},
				{
					song: 'Treat You Better',
					url: SHAWN_MENDES_4,
					img: SHAWN_MENDES,
					time: '3:07',
					like: false,
					dislike: false,
					explicit: false,
					id: 4,
					totalSong: 16,
				},
				{
					song: 'Three Empty Words',
					url: SHAWN_MENDES_5,
					img: SHAWN_MENDES,
					time: '3:19',
					like: false,
					dislike: false,
					explicit: false,
					id: 5,
					totalSong: 16,
				},
				{
					song: "Dont't Be A Fool",
					url: SHAWN_MENDES_6,
					img: SHAWN_MENDES,
					time: '3:35',
					like: false,
					dislike: false,
					explicit: false,
					id: 6,
					totalSong: 16,
				},
				{
					song: 'Like This',
					url: SHAWN_MENDES_7,
					img: SHAWN_MENDES,
					time: '3:06',
					like: false,
					dislike: false,
					explicit: false,
					id: 7,
					totalSong: 16,
				},
				{
					song: 'No Promises',
					url: SHAWN_MENDES_8,
					img: SHAWN_MENDES,
					time: '2:46',
					like: false,
					dislike: false,
					explicit: false,
					id: 8,
					totalSong: 16,
				},
				{
					song: 'Lights On',
					url: SHAWN_MENDES_9,
					img: SHAWN_MENDES,
					time: '3:21',
					like: false,
					dislike: false,
					explicit: false,
					id: 9,
					totalSong: 16,
				},
				{
					song: 'Honest',
					url: SHAWN_MENDES_10,
					img: SHAWN_MENDES,
					time: '3:19',
					like: false,
					dislike: false,
					explicit: false,
					id: 10,
					totalSong: 16,
				},
				{
					song: 'Patience',
					url: SHAWN_MENDES_11,
					img: SHAWN_MENDES,
					time: '2:55',
					like: false,
					dislike: false,
					explicit: false,
					id: 11,
					totalSong: 16,
				},
				{
					song: 'Bad Reputation',
					url: SHAWN_MENDES_12,
					img: SHAWN_MENDES,
					time: '3:18',
					like: false,
					dislike: false,
					explicit: false,
					id: 12,
					totalSong: 16,
				},
				{
					song: 'Understand',
					url: SHAWN_MENDES_13,
					img: SHAWN_MENDES,
					time: '5:00',
					like: false,
					dislike: false,
					explicit: false,
					id: 13,
					totalSong: 16,
				},
				{
					song: 'Hold On',
					url: SHAWN_MENDES_14,
					img: SHAWN_MENDES,
					time: '3:19',
					like: false,
					dislike: false,
					explicit: false,
					id: 14,
					totalSong: 16,
				},
				{
					song: 'Roses',
					url: SHAWN_MENDES_15,
					img: SHAWN_MENDES,
					time: '3:52',
					like: false,
					dislike: false,
					explicit: false,
					id: 15,
					totalSong: 16,
				},
				{
					song: 'Mercy (Acoustic)',
					url: SHAWN_MENDES_16,
					img: SHAWN_MENDES,
					time: '3:39',
					like: false,
					dislike: false,
					explicit: false,
					id: 16,
					totalSong: 16,
				},
			],
		},
		{
			artist: 'Maroon 5',
			disk: 'JORDI (Deluxe)',
			price: 85.2,
			description:
				'Jordi es el séptimo álbum de estudio de la banda estadounidense Maroon 5. Se lanzó el 11 de junio de 2021, a través de 222, Interscope y Polydor Records. El álbum lleva el título del difunto manager de la banda, Jordan Feldstein, a quien el líder de la banda, Adam Levine, se refirió como "Jordi". El álbum es el primero que no presenta al bajista Mickey Madden, luego de su salida de la banda en 2020. El álbum ha producido dos sencillos anticipadamente. El primer sencillo principal, "Nobodys Love", fue lanzado el 24 de julio de 2020. La canción se inspiró en la pandemia de COVID-19 y las protestas de George Floyd. La canción alcanzó el puesto 41 y 119 en el Billboard Hot 100 y el Billboard Global 200 en Estados Unidos, respectivamente. El segundo sencillo, "Beautiful Mistakes" con la colaboración de la rapera estadounidense Megan Thee Stallion, fue lanzado el 3 de marzo de 2021, con un video con letra lanzado el mismo día. El video musical oficial fue lanzado el 12 de marzo de 2021 y fue dirigido por Sophie Muller. La canción alcanzó el puesto 18 y 26 en el Billboard Hot 100 y Global 200, respectivamente. ',
			id: 7,
			img: MAROON_FIVE,
			amount: 1,
			favorite: false,
			age: 2021,
			song: 14,
			minutes: 43,
			explicit: true,
			songs: [
				{
					song: 'Beautiful Mistakes',
					img: MAROON_FIVE,
					url: MAROON_FIVE_1,
					time: '3:48',
					like: false,
					dislike: false,
					explicit: false,
					id: 1,
					totalSong: 14,
				},
				{
					song: 'Lost',
					img: MAROON_FIVE,
					url: MAROON_FIVE_2,
					time: '2:53',
					like: false,
					dislike: false,
					explicit: false,
					id: 2,
					totalSong: 14,
				},
				{
					song: 'Echo (con blackbear)',
					img: MAROON_FIVE,
					url: MAROON_FIVE_3,
					time: '2:59',
					like: false,
					dislike: false,
					explicit: false,
					id: 3,
					totalSong: 14,
				},
				{
					song: 'Lovesick',
					img: MAROON_FIVE,
					url: MAROON_FIVE_4,
					time: '3:06',
					like: false,
					dislike: false,
					explicit: false,
					id: 4,
					totalSong: 14,
				},
				{
					song: 'Remedy (con Stavie Nicks)',
					img: MAROON_FIVE,
					url: MAROON_FIVE_5,
					time: '2:30',
					like: false,
					dislike: false,
					explicit: true,
					id: 5,
					totalSong: 14,
				},
				{
					song: 'Seasons',
					img: MAROON_FIVE,
					url: MAROON_FIVE_6,
					time: '2:49',
					like: false,
					dislike: false,
					explicit: false,
					id: 6,
					totalSong: 14,
				},
				{
					song: 'One Light (con Bantu)',
					img: MAROON_FIVE,
					url: MAROON_FIVE_7,
					time: '3:35',
					like: false,
					explicit: false,
					dislike: false,
					id: 7,
					totalSong: 14,
				},
				{
					song: 'Convince Me Otherwise',
					img: MAROON_FIVE,
					url: MAROON_FIVE_8,
					time: '3:08',
					like: false,
					explicit: false,
					dislike: false,
					id: 8,
					totalSong: 14,
				},
				{
					song: "Nobody's Love",
					img: MAROON_FIVE,
					url: MAROON_FIVE_9,
					time: '3:32',
					like: false,
					explicit: false,
					dislike: false,
					id: 9,
					totalSong: 14,
				},
				{
					song: "Can't Leave You Alone (con Juice WRLD)",
					img: MAROON_FIVE,
					url: MAROON_FIVE_10,
					time: '3:17',
					like: false,
					explicit: false,
					dislike: false,
					id: 10,
					totalSong: 14,
				},
				{
					song: 'Memories',
					img: MAROON_FIVE,
					url: MAROON_FIVE_11,
					time: '3:10',
					like: false,
					dislike: false,
					explicit: false,
					id: 11,
					totalSong: 14,
				},
				{
					song: 'Memories Remix (con Nipsey Hussle y YG)',
					img: MAROON_FIVE,
					url: MAROON_FIVE_12,
					time: '3:10',
					like: false,
					dislike: false,
					explicit: true,
					id: 12,
					totalSong: 14,
				},
				{
					song: 'Button (con Anuel AA y Tainy)',
					img: MAROON_FIVE,
					url: MAROON_FIVE_13,
					time: '2:45',
					like: false,
					dislike: false,
					explicit: false,
					id: 13,
					totalSong: 14,
				},
				{
					song: 'Lifestyle (con Adam Levine)',
					img: MAROON_FIVE,
					url: MAROON_FIVE_14,
					time: '2:34',
					like: false,
					dislike: false,
					explicit: true,
					id: 14,
					totalSong: 14,
				},
			],
		},
		{
			artist: 'Lil Nas X',
			disk: 'MONTERO',
			description:
				'Montero es el álbum debut de estudio del rapero y cantante estadounidense Lil Nas X, lanzado el 17 de septiembre de 2021 por Columbia Records. El álbum, titulado con su nombre de pila, se anunció por primera vez en 2019. Su título, portada y lista de canciones se dieron a conocer en 2021. Cuatro sencillos acompañaron a Montero, "Montero", " Sun Goes Down”, “Industry Baby”, y “Thats What I Want”. "Montero" e "Industry Baby" encabezaron cada uno el Billboard Hot 100 de EE.UU., mientras que "Thats What I Want" entró al Top 10. El álbum presenta apariciones especiales de Jack Harlow, Doja Cat, Elton John, Megan Thee Stallion y Miley Cyrus. Musicalmente, Montero es un disco de pop rap con influencias de varios otros géneros. Recibió elogios de los críticos musicales, quienes elogiaron su producción ecléctica y su composición pegadiza. En la 64ª Entrega Anual de los Premios Grammy, recibió una nominación a Álbum del Año logrando su segunda nominación consecutiva en la categoría, mientras que “Montero ” está nominado a Grabación del Año, Canción del año y Mejor video musical e "Industry Baby" está nominado a Mejor interpretación de rap, respectivamente.',
			price: 102.9,
			id: 8,
			img: LIL_NAS_X,
			amount: 1,
			favorite: false,
			age: 2021,
			song: 15,
			minutes: 41,
			explicit: true,
			songs: [
				{
					song: 'MONTERO (Call Me By Your Name)',
					time: '2:18',
					img: LIL_NAS_X,
					url: LIL_NAS_1,
					like: false,
					dislike: false,
					explicit: true,
					id: 1,
					totalSong: 15,
				},
				{
					song: 'DEAD RIGHT NOW',
					time: '3:42',
					img: LIL_NAS_X,
					url: LIL_NAS_2,
					like: false,
					dislike: false,
					explicit: true,
					id: 2,
					totalSong: 15,
				},
				{
					song: 'INDUSTRY BABY',
					time: '3:33',
					img: LIL_NAS_X,
					url: LIL_NAS_3,
					like: false,
					dislike: false,
					explicit: true,
					id: 3,
					totalSong: 15,
				},
				{
					song: 'THATS WHAT I WANT',
					time: '2:24',
					img: LIL_NAS_X,
					url: LIL_NAS_4,
					like: false,
					dislike: false,
					explicit: true,
					id: 4,
					totalSong: 15,
				},
				{
					song: 'THE ART OF REALIZATION',
					time: '0:25',
					img: LIL_NAS_X,
					url: LIL_NAS_5,
					like: false,
					dislike: false,
					explicit: false,
					id: 5,
					totalSong: 15,
				},
				{
					song: 'SCOOP (con Doja Cat)',
					time: '2:55',
					img: LIL_NAS_X,
					url: LIL_NAS_6,
					like: false,
					dislike: false,
					explicit: true,
					id: 6,
					totalSong: 15,
				},
				{
					song: 'ONE OF ME (con Elton John)',
					time: '2:42',
					img: LIL_NAS_X,
					url: LIL_NAS_7,
					like: false,
					dislike: false,
					explicit: true,
					id: 7,
					totalSong: 15,
				},
				{
					song: 'LOST IN THE CITADEL',
					time: '2:51',
					img: LIL_NAS_X,
					url: LIL_NAS_8,
					like: false,
					dislike: false,
					explicit: false,
					id: 8,
					totalSong: 15,
				},
				{
					song: 'DOLLA SIGN SLIME (con Megan Thee Stallion)',
					time: '2:26',
					img: LIL_NAS_X,
					url: LIL_NAS_9,
					like: false,
					dislike: false,
					explicit: true,
					id: 9,
					totalSong: 15,
				},
				{
					song: 'TALES OF DOMINICA',
					time: '2:27',
					img: LIL_NAS_X,
					url: LIL_NAS_10,
					like: false,
					dislike: false,
					explicit: false,
					id: 10,
					totalSong: 15,
				},
				{
					song: 'SUN GOES DOWN',
					time: '2:49',
					img: LIL_NAS_X,
					url: LIL_NAS_11,
					like: false,
					dislike: false,
					explicit: false,
					id: 11,
					totalSong: 15,
				},
				{
					song: 'VOID',
					time: '4:09',
					img: LIL_NAS_X,
					url: LIL_NAS_12,
					like: false,
					dislike: false,
					explicit: false,
					id: 12,
					totalSong: 15,
				},
				{
					song: 'DONT WANT IT',
					time: '2:11',
					img: LIL_NAS_X,
					url: LIL_NAS_13,
					like: false,
					dislike: false,
					explicit: true,
					id: 13,
					totalSong: 15,
				},
				{
					song: 'LIFE AFTER SALEM',
					time: '3:31',
					img: LIL_NAS_X,
					url: LIL_NAS_14,
					like: false,
					dislike: false,
					explicit: false,
					id: 14,
					totalSong: 15,
				},
				{
					song: 'AM I DREAMING (con Miley Cyrus)',
					time: '3:04',
					img: LIL_NAS_X,
					url: LIL_NAS_15,
					like: false,
					dislike: false,
					explicit: false,
					id: 15,
					totalSong: 15,
				},
			],
		},
		{
			artist: 'XXXTENTACION',
			disk: '?',
			description:
				'? es el segundo álbum de estudio del rapero estadounidense XXXTentacion y el último álbum de estudio que se lanzó antes de su muerte. Fue lanzado el 16 de marzo de 2018 por Bad Vibes Forever, Caroline Distribution y Capitol Music Group. Sucede el lanzamiento de su álbum debut 17 y la obra extendida A Ghetto Christmas Carol. El álbum fue producido principalmente por el colaborador frecuente John Cunningham e incluye apariciones especiales de PnB Rock, Travis Barker, Joey Badass y Matt Ox. Con más instrumentación en vivo que 17, ? presenta una variedad de géneros, que incluyen acústica, emo, rock alternativo, trap y cloud rap. Las voces de XXXTentacion en partes del álbum son menos moderadas y bajas en comparación con las 17, con su voz en canciones introspectivas sobre piano y acordes de guitarra acústica que se proyectan más. En otras partes del álbum, el estilo de XXXTentacion se asemeja a su sonido underground, con él gritando. El álbum también presenta sonidos similares a la escena de rap Soundcloud. ?',
			price: 84.2,
			id: 9,
			img: XXXTENTACION,
			amount: 1,
			favorite: false,
			age: 2018,
			song: 18,
			minutes: 37,
			explicit: true,
			songs: [
				{
					song: 'Introduction (intructions)',
					time: '1:58',
					img: XXXTENTACION,
					url: XXXTENTACION_1,
					like: false,
					dislike: false,
					explicit: false,
					id: 1,
					totalSong: 18,
				},
				{
					song: 'ALONE, PART 3',
					time: '1:50',
					img: XXXTENTACION,
					url: XXXTENTACION_2,
					like: false,
					dislike: false,
					explicit: false,
					id: 2,
					totalSong: 18,
				},
				{
					song: 'Moonlight',
					time: '2:16',
					img: XXXTENTACION,
					url: XXXTENTACION_3,
					like: false,
					dislike: false,
					explicit: true,
					id: 3,
					totalSong: 18,
				},
				{
					song: 'SAD!',
					time: '2:47',
					img: XXXTENTACION,
					url: XXXTENTACION_4,
					like: false,
					dislike: false,
					explicit: true,
					id: 4,
					totalSong: 18,
				},
				{
					song: 'the remedy for a broken heart (why am I son in love)',
					time: '2:41',
					img: XXXTENTACION,
					url: XXXTENTACION_5,
					like: false,
					dislike: false,
					explicit: true,
					id: 5,
					totalSong: 18,
				},
				{
					song: 'Floor 555',
					time: '1:34',
					img: XXXTENTACION,
					url: XXXTENTACION_6,
					like: false,
					dislike: false,
					explicit: true,
					id: 6,
					totalSong: 18,
				},
				{
					song: 'NUMB',
					time: '3:07',
					img: XXXTENTACION,
					url: XXXTENTACION_7,
					like: false,
					dislike: false,
					explicit: false,
					id: 7,
					totalSong: 18,
				},
				{
					song: 'infinity (888) (con Joey Bada$$)',
					time: '2:57',
					img: XXXTENTACION,
					url: XXXTENTACION_8,
					like: false,
					dislike: false,
					explicit: true,
					id: 8,
					totalSong: 18,
				},
				{
					song: 'going down!',
					time: '1:56',
					img: XXXTENTACION,
					url: XXXTENTACION_9,
					like: false,
					dislike: false,
					explicit: true,
					id: 9,
					totalSong: 18,
				},
				{
					song: 'Pain = BESTFRIEND (con Travis Barker)',
					time: '1:42',
					img: XXXTENTACION,
					url: XXXTENTACION_10,
					like: false,
					dislike: false,
					explicit: false,
					id: 10,
					totalSong: 18,
				},
				{
					song: '$$$',
					time: '2:11',
					img: XXXTENTACION,
					url: XXXTENTACION_11,
					like: false,
					dislike: false,
					explicit: true,
					id: 11,
					totalSong: 18,
				},
				{
					song: 'love yourself (interlude)',
					time: '0:49',
					img: XXXTENTACION,
					url: XXXTENTACION_12,
					like: false,
					dislike: false,
					explicit: true,
					id: 12,
					totalSong: 18,
				},
				{
					song: 'SMASH! (con PnB Rock)',
					time: '1:50',
					img: XXXTENTACION,
					url: XXXTENTACION_13,
					like: false,
					dislike: false,
					explicit: true,
					id: 13,
					totalSong: 18,
				},
				{
					song: "i don't even speak spanish lol (con Rio Santana, Judah y Andrez Babii",
					time: '3:13',
					img: XXXTENTACION,
					url: XXXTENTACION_14,
					like: false,
					dislike: false,
					explicit: false,
					id: 14,
					totalSong: 18,
				},
				{
					song: 'changes',
					time: '2:02',
					img: XXXTENTACION,
					url: XXXTENTACION_15,
					like: false,
					dislike: false,
					explicit: false,
					id: 15,
					totalSong: 18,
				},
				{
					song: 'Hope',
					time: '1:51',
					img: XXXTENTACION,
					url: XXXTENTACION_16,
					like: false,
					dislike: false,
					explicit: true,
					id: 16,
					totalSong: 18,
				},
				{
					song: 'schizophrenia',
					time: '1:21',
					img: XXXTENTACION,
					url: XXXTENTACION_17,
					like: false,
					dislike: false,
					explicit: false,
					id: 17,
					totalSong: 18,
				},
				{
					song: 'before I close my eyes',
					time: '1:40',
					img: XXXTENTACION,
					url: XXXTENTACION_18,
					like: false,
					dislike: false,
					explicit: false,
					id: 18,
					totalSong: 18,
				},
			],
		},
		{
			artist: 'Olivia Rodrigo',
			disk: 'SOUR',
			description:
				'Sour es el primer álbum de estudio de la cantautora estadounidense Olivia Rodrigo, publicado el 21 de mayo de 2021 por la compañía discográfica Geffen Records. Rodrigo declaró que el álbum explora los peligros y descubrimientos como joven de diecisiete años y el título hace referencia a las incómodas emociones «agrias» que experimentan los jóvenes pero de las que a menudo se avergüenzan, como la ira, los celos y el corazón roto. El estilo musical de Sour se inspira en los géneros y cantautores favoritos de Rodrigo. Escrito y producido por Daniel Nigro, junto a otros pocos colaboradores, Sour es principalmente pop alternativo que yuxtapone canciones optimistas de rock alternativo y pop punk junto a baladas lo-fi, impulsadas por guitarras, pianos y sintetizadores. Su temática aborda temas centrados en la adolescencia, el romance fallido y el dolor del corazón contados desde las distintas perspectivas de Rodrigo. Sour recibió aclamación universal de los críticos musicales, que lo consideraron un sólido debut y alabaron la versatilidad musical de Rodrigo, su honesto lirismo y su atractivo para la generación Z.',
			price: 120.5,
			id: 10,
			img: OLIVIA_RODRIGO,
			amount: 1,
			favorite: false,
			age: 2021,
			song: 11,
			minutes: 34,
			explicit: true,
			songs: [
				{
					song: 'brutal',
					url: OLIVIA_RODRIGO_1,
					img: OLIVIA_RODRIGO,
					time: '2:24',
					like: false,
					dislike: false,
					explicit: true,
					id: 1,
					totalSong: 11,
				},
				{
					song: 'traitor',
					url: OLIVIA_RODRIGO_3,
					img: OLIVIA_RODRIGO,
					time: '3:50',
					like: false,
					dislike: false,
					explicit: false,
					id: 2,
					totalSong: 11,
				},
				{
					song: 'drivers license',
					url: OLIVIA_RODRIGO_2,
					img: OLIVIA_RODRIGO,
					time: '4:03',
					like: false,
					dislike: false,
					explicit: true,
					id: 3,
					totalSong: 11,
				},
				{
					song: '1 step forward, 3 steps back',
					url: OLIVIA_RODRIGO_4,
					img: OLIVIA_RODRIGO,
					time: '2:44',
					like: false,
					dislike: false,
					explicit: true,
					id: 4,
					totalSong: 11,
				},
				{
					song: 'deja vu',
					url: OLIVIA_RODRIGO_5,
					img: OLIVIA_RODRIGO,
					time: '3:36',
					like: false,
					dislike: false,
					explicit: true,
					id: 5,
					totalSong: 11,
				},
				{
					song: 'good 4 u',
					url: OLIVIA_RODRIGO_6,
					img: OLIVIA_RODRIGO,
					time: '2:59',
					like: false,
					dislike: false,
					explicit: true,
					id: 6,
					totalSong: 11,
				},
				{
					song: 'enough for you',
					url: OLIVIA_RODRIGO_7,
					img: OLIVIA_RODRIGO,
					time: '3:39',
					like: false,
					dislike: false,
					explicit: false,
					id: 7,
					totalSong: 11,
				},
				{
					song: 'happier',
					url: OLIVIA_RODRIGO_8,
					img: OLIVIA_RODRIGO,
					time: '2:56',
					like: false,
					dislike: false,
					explicit: true,
					id: 8,
					totalSong: 11,
				},
				{
					song: 'jealousy, jealousy',
					url: OLIVIA_RODRIGO_9,
					img: OLIVIA_RODRIGO,
					time: '2:54',
					like: false,
					dislike: false,
					explicit: false,
					id: 9,
					totalSong: 11,
				},
				{
					song: 'favorite crime',
					url: OLIVIA_RODRIGO_10,
					img: OLIVIA_RODRIGO,
					time: '2:33',
					like: false,
					dislike: false,
					explicit: false,
					id: 10,
					totalSong: 11,
				},
				{
					song: 'hope ur ok',
					url: OLIVIA_RODRIGO_11,
					img: OLIVIA_RODRIGO,
					time: '3:30',
					like: false,
					dislike: false,
					explicit: false,
					id: 11,
					totalSong: 11,
				},
			],
		},
		{
			artist: 'Avicii',
			disk: 'True',
			description:
				'True —en español: Verdadero— es el primer álbum del disc jockey y productor sueco Avicii, que fue publicado el 13 de septiembre de 2013, a través de PRMD Music y por sellos afiliadas a Universal Music. El álbum incluye la colaboración de artistas como Nile Rodgers, el músico de música country Mac Davis, Mike Einziger de la banda de rock Incubus, el cantante de soul Aloe Blacc, el cantante de bluegrass Dan Tyminski, Dan Reynolds de la banda estadounidense de rock Imagine Dragons y el cantante estadounidense Adam Lambert.​ En abril de 2013, Avicii publicó una mezcla promocional con 60 minutos de su nuevo material a través de SoundCloud. La mezcla contó con varias canciones inéditas del álbum como "Wake Me Up!" y otras con Dan Reynolds y Mac Davis, y fue reproducido más de dos millones de veces.​ El álbum ha alcanzado un gran éxito comercial, ingresando en el top ten de al menos diez países, entre ellos debutando en el puesto número 2 del Reino Unido, ​ y en la primera ubicación en su natal Suecia.​ El 24 de marzo de 2014, se lanzó una versión remezclada de todas las pistas del álbum, titulado True.​',
			price: 88.2,
			id: 11,
			img: AVICII,
			amount: 1,
			favorite: false,
			age: 2013,
			song: 10,
			minutes: 47,
			explicit: true,
			songs: [
				{
					song: 'Wake Me Up',
					url: AVICII_1,
					img: AVICII,
					time: '4:07',
					like: false,
					dislike: false,
					explicit: false,
					id: 1,
					totalSong: 10,
				},
				{
					song: 'You Make Me',
					url: AVICII_2,
					img: AVICII,
					time: '3:53',
					like: false,
					dislike: false,
					explicit: false,
					id: 2,
					totalSong: 10,
				},
				{
					song: 'Hey Brother',
					url: AVICII_3,
					img: AVICII,
					time: '4:15',
					like: false,
					dislike: false,
					explicit: false,
					id: 3,
					totalSong: 10,
				},
				{
					song: 'Addicted To You',
					url: AVICII_4,
					img: AVICII,
					time: '2:28',
					like: false,
					dislike: false,
					explicit: false,
					id: 4,
					totalSong: 10,
				},
				{
					song: 'Dear Boy',
					url: AVICII_5,
					img: AVICII,
					time: '7:59',
					like: false,
					dislike: false,
					explicit: false,
					id: 5,
					totalSong: 10,
				},
				{
					song: 'Liar Liar',
					url: AVICII_6,
					img: AVICII,
					time: '3:58',
					like: false,
					dislike: false,
					explicit: false,
					id: 6,
					totalSong: 10,
				},
				{
					song: 'Shame On Me',
					url: AVICII_7,
					img: AVICII,
					time: '4:13',
					like: false,
					dislike: false,
					explicit: true,
					id: 7,
					totalSong: 10,
				},
				{
					song: 'Lay Me Down',
					url: AVICII_8,
					img: AVICII,
					time: '5:00',
					like: false,
					dislike: false,
					explicit: false,
					id: 8,
					totalSong: 10,
				},
				{
					song: "Hope There's Someone",
					url: AVICII_9,
					img: AVICII,
					time: '6:21',
					like: false,
					dislike: false,
					explicit: false,
					id: 9,
					totalSong: 10,
				},
				{
					song: 'Heart Upon My Sleeve',
					url: AVICII_10,
					img: AVICII,
					time: '4:43',
					like: false,
					dislike: false,
					explicit: false,
					id: 10,
					totalSong: 10,
				},
			],
		},
		{
			artist: 'Tame Impala',
			disk: 'Currents',
			description:
				'Currents es el tercer álbum de estudio del proyecto musical australiano Tame Impala, lanzado el 17 de julio de 2015 por Modular Recordings y Universal Music Australia en Australia, Fiction Records en Europa e Interscope Records en los Estados Unidos. Al igual que los dos álbumes anteriores del grupo, Currents fue escrito, grabado, interpretado y producido por el miembro principal Kevin Parker. Cabe resaltar, que por primera vez, Kevin fue quien mezcló la música, también fue la primera vez que grabó todos los instrumentos por su cuenta; el álbum no presentó otros colaboradores. Después del lanzamiento del álbum anterior del grupo, Lonerism, Kevin comenzó a trabajar en Currents, en gran parte grabando en el estudio de su casa en Fremantle. Se absorbió a sí mismo con la escritura y la grabación, y de acuerdo con su reputación como un autor musical, trabajó en los detalles de cada canción, lo que finalmente provocó que la fecha de lanzamiento se retrasara por dos meses. En contraste con el sonido del rock psicodélico del trabajo anterior del proyecto, Currents marca un cambio hacia una música más orientada al dance, con más énfasis en los sintetizadores que en las guitarras.',
			price: 56.5,
			id: 12,
			img: TAME_IMPALA,
			amount: 1,
			favorite: false,
			age: 2015,
			song: 13,
			minutes: 51,
			explicit: true,
			songs: [
				{
					song: 'Let It Happen',
					url: TAME_IMPALA_1,
					img: TAME_IMPALA,
					time: '7:47',
					like: false,
					dislike: false,
					explicit: false,
					id: 1,
					totalSong: 13,
				},
				{
					song: 'Nangs',
					url: TAME_IMPALA_2,
					img: TAME_IMPALA,
					time: '1:47',
					like: false,
					dislike: false,
					explicit: false,
					id: 2,
					totalSong: 13,
				},
				{
					song: 'The Moment',
					url: TAME_IMPALA_3,
					img: TAME_IMPALA,
					time: '4:15',
					like: false,
					explicit: false,
					dislike: false,
					id: 3,
					totalSong: 13,
				},
				{
					song: "Yes I'm Changing",
					url: TAME_IMPALA_4,
					img: TAME_IMPALA,
					time: '4:30',
					like: false,
					explicit: false,
					dislike: true,
					id: 4,
					totalSong: 13,
				},
				{
					song: 'Eventually',
					url: TAME_IMPALA_5,
					img: TAME_IMPALA,
					time: '5:18',
					like: false,
					explicit: false,
					dislike: false,
					id: 5,
					totalSong: 13,
				},
				{
					song: 'Gossip',
					url: TAME_IMPALA_6,
					img: TAME_IMPALA,
					time: '0:55',
					like: false,
					explicit: false,
					dislike: false,
					id: 6,
					totalSong: 13,
				},
				{
					song: 'The Less I Know The Better',
					url: TAME_IMPALA_7,
					img: TAME_IMPALA,
					time: '3:36',
					like: false,
					explicit: false,
					dislike: true,
					id: 7,
					totalSong: 13,
				},
				{
					song: 'Past Life',
					url: TAME_IMPALA_8,
					img: TAME_IMPALA,
					time: '3:48',
					like: false,
					dislike: false,
					explicit: false,
					id: 8,
					totalSong: 13,
				},
				{
					song: 'Disciples',
					url: TAME_IMPALA_9,
					img: TAME_IMPALA,
					time: '1:48',
					like: false,
					dislike: false,
					explicit: false,
					id: 9,
					totalSong: 13,
				},
				{
					song: "'Cause I'm A Man",
					url: TAME_IMPALA_10,
					img: TAME_IMPALA,
					time: '4:01',
					like: false,
					dislike: false,
					explicit: true,
					id: 10,
					totalSong: 13,
				},
				{
					song: 'Reality In Motion',
					url: TAME_IMPALA_11,
					img: TAME_IMPALA,
					time: '4:12',
					like: false,
					dislike: false,
					explicit: false,
					id: 11,
					totalSong: 13,
				},
				{
					song: 'Love/Paranoia',
					url: TAME_IMPALA_12,
					img: TAME_IMPALA,
					time: '3:05',
					like: false,
					dislike: false,
					explicit: true,
					id: 12,
					totalSong: 13,
				},
				{
					song: 'New Person, Same Old Mistakes',
					url: TAME_IMPALA_13,
					img: TAME_IMPALA,
					time: '6:03',
					like: false,
					dislike: false,
					explicit: false,
					id: 13,
					totalSong: 13,
				},
			],
		},
	]);

	const playSongDemo = (song, url) => {
		setSongsDemo({ song, url });
		console.log(songsDemo);
	};

	const showAllDescription = () => {
		setReadMore(true);
	};

	const showShortDescription = () => {
		setReadMore(false);
	};

	const changeStateLike = (e, song) => {
		if (e.target.matches('.song__like')) {
			if (e.target.dataset.song === song) {
				e.target.classList.remove('song__like');
				e.target.classList.add('song__like-real');
			}
		} else if (e.target.matches('.song__like-real')) {
			if (e.target.dataset.song === song) {
				e.target.classList.remove('song__like-real');
				e.target.classList.add('song__like');
			}
		}
	};

	const changeStateDislike = (e, song) => {
		if (e.target.matches('.song__like')) {
			if (e.target.dataset.song === song) {
				e.target.classList.remove('song__like');
				e.target.classList.add('song__like-real');
			}
		} else if (e.target.matches('.song__like-real')) {
			if (e.target.dataset.song === song) {
				e.target.classList.remove('song__like-real');
				e.target.classList.add('song__like');
			}
		}
	};

	const playRandom = (artist) => {
		data.map((item) =>
			item.artist === artist
				? item.songs.filter((item) =>
						item.id === Math.floor(Math.random() * item.totalSong)
							? setSongsDemo({ song: item.song, url: item.url })
							: null
				  )
				: item
		);
	};

	return (
		<div className="description-disk">
			<div className="description-disk__container">
				{data.map((item) =>
					item.id === parseInt(id) ? (
						<>
							<img src={item.img} className="description-disk__img" />
							<div className="description-disk__containter-text">
								<h2 className="description-disk__artist">{item.artist}</h2>
								<div className="description-disk__container-data-disk">
									<div className="description-disk__row-first">
										{item.explicit === true ? <MdExplicit /> : null} Album •{' '}
										<span>{item.artist}</span> • <span>{item.age}</span>
									</div>
									<div className="description-disk__row-second">
										<span>{item.song} canciones</span> • <span>{item.minutes} minutos</span>
									</div>
								</div>
								<p className="description-disk__description-record" key={item.id}>
									{readMore ? item.description : item.description.slice(0, 350) + '... '}
									{readMore ? (
										<button
											className="description-disk__read-less"
											onClick={() => showShortDescription()}
										>
											Leer Menos
										</button>
									) : (
										<button
											className="description-disk__read-more"
											onClick={() => showAllDescription()}
										>
											Leer Mas
										</button>
									)}
								</p>
								<button
									className="descriptiom-disk__play-random"
									onClick={() => playRandom(item.artist)}
								>
									<FaRandom /> <span>ALEATORIO</span>
								</button>
							</div>
						</>
					) : null
				)}
			</div>
			{data.map((item) =>
				item.id === parseInt(id)
					? item.songs.map((item) => (
							<Song
								item={item}
								key={item.song}
								playSongDemo={playSongDemo}
								changeStateLike={changeStateLike}
								changeStateDislike={changeStateDislike}
							/>
					  ))
					: null
			)}
			<Audio songsDemo={songsDemo} />
			<Link to="/" className="description-disk__button">
				Volver al Inicio
			</Link>
		</div>
	);
};

export default DescriptionDisc;
