import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Song from '../components/Song';
import Audio from '../components/Audio';
import '../css/descriptionDisk.css';
import { MdExplicit } from 'react-icons/md';

import TAME_IMPALA from '../image/artista-tame-impala.png';
import DUA_LIPA from '../image/artista-dua-lipa.jpg';
import THE_WEEKEND from '../image/artista-the-weekend.jpg';
import DOJA_CAT from '../image/artista-doja-cat.jpg';
import POST_MALONE from '../image/artista-post-malone.jpg';
import ED_SHEERAN from '../image/artista-ed-sheeran.jpg';
import HALSEY from '../image/artista-halsey.jpg';
import LIL_NAS_X from '../image/artista-lil-nas-x.jpg';
import MAROON_5 from '../image/artista-maroon-5.jpg';
import OLIVIA_RODRIGO from '../image/artista-olivia-rodrigo.jpg';
import GREEN_DAY from '../image/artista-green-day.jpg';
import BTS from '../image/artista-bts.jpg';
import TOP from '../image/artista-top.jpg';
import THE_NEIGHBOURHOOD from '../image/artist-the-neighbourhood.jpg';
import NIRVANA from '../image/artista-nirvana.jpg';

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

const DescriptionDisc = () => {
	let { id } = useParams();

	const [songsDemo, setSongsDemo] = useState({});

	const [data, setData] = useState([
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
					url: DUA_LIPA_1,
					img: DUA_LIPA,
					time: '3:05',
					like: false,
					dislike: false,
				},
				{
					song: "Don't Start Now",
					url: DUA_LIPA_2,
					img: DUA_LIPA,
					time: '3:01',
					like: false,
					dislike: false,
				},
				{
					song: 'Cool',
					url: DUA_LIPA_3,
					img: DUA_LIPA,
					time: '3:29',
					like: false,
					dislike: false,
				},
				{
					song: 'Physical',
					url: DUA_LIPA_4,
					img: DUA_LIPA,
					time: '3:14',
					like: false,
					dislike: false,
				},
				{
					song: 'Levitating',
					url: DUA_LIPA_5,
					img: DUA_LIPA,
					time: '3:24',
					like: false,
					dislike: false,
				},
				{
					song: 'Pretty Please',
					url: DUA_LIPA_6,
					img: DUA_LIPA,
					time: '3:14',
					like: false,
					dislike: false,
				},
				{
					song: 'Hallucinate',
					url: DUA_LIPA_7,
					img: DUA_LIPA,
					time: '3:27',
					like: false,
					dislike: false,
				},
				{
					song: 'Love Again',
					url: DUA_LIPA_8,
					img: DUA_LIPA,
					time: '4:18',
					like: false,
					dislike: false,
				},
				{
					song: 'Break My Hart',
					url: DUA_LIPA_9,
					img: DUA_LIPA,
					time: '3:42',
					like: false,
					dislike: false,
				},
				{
					song: 'Good in Bed',
					url: DUA_LIPA_10,
					img: DUA_LIPA,
					time: '3:39',
					like: false,
					dislike: false,
				},
				{
					song: 'Boys Will Be Boys',
					url: DUA_LIPA_11,
					img: DUA_LIPA,
					time: '2:48',
					like: false,
					dislike: false,
				},
				{
					song: 'Levitating (con DaBaby)',
					url: DUA_LIPA_12,
					img: DUA_LIPA,
					time: '3:50',
					like: false,
					dislike: false,
				},
				{
					song: 'Fever',
					url: DUA_LIPA_13,
					img: DUA_LIPA,
					time: '2:39',
					like: false,
					dislike: false,
				},
			],
		},
		{
			artist: 'The Weekend',
			disk: 'After Hours',
			description:
				"After Hours —en español, A deshoras— es el quinto álbum de estudio del cantante canadiense The Weeknd. Fue lanzado el 20 de marzo de 2020 por XO y Republic Records. Fue producido principalmente por The Weeknd, junto con una variedad de productores como DaHeala, Illangelo, Max Martin, Metro Boomin y OPN, la mayoría de los cuales The Weeknd había trabajado anteriormente. La edición estándar del álbum no tiene colaboraciones con otros artistas, pero la edición de remixes contiene apariciones especiales de Chromatics y Lil Uzi Vert. Temáticamente, After Hours explora la promiscuidad, el exceso de indulgencia y el autodesprecio. El álbum tiene una fuerte influencia de los sonidos de los 80's. Antes del lanzamiento del álbum, Weeknd confirmó que After Hours enfrentaría diferencias estilísticas con su predecesor, Starboy (2016). Los periodistas musicales han señalado el álbum como una reinvención artística para The Weeknd, con la introducción de influencias del new wave y dream pop. El arte y la estética del material promocional del álbum han sido descritos como psicodélicos y están inspirados en varias películas, como: Casino (1995), Fear and Loathing in Las Vegas (1998), Joker y Uncut Gems (ambas de 2019). After Hours contó con el apoyo de cuatro sencillos: Heartless, Blinding Lights, In Your Eyes y Save Your Tears, y los dos primeros encabezaron el Billboard Hot 100 de EE. UU. Y recibieron la certificación de platino. Su tema principal fue lanzado como sencillo promocional. En marzo de 2020, After Hours rompió el récord de pre-adiciones más globales en la historia de Apple Music, con más de 1.02 millones de usuarios. El álbum recibió críticas generalmente positivas de los críticos de música, y algunos lo nombraron el mejor trabajo de Weeknd. Debutó en la cima del Billboard 200, ganando 444.000 unidades equivalentes a álbumes, de las cuales 275.000 fueron ventas puras, marcando el cuarto álbum número uno de Weeknd en los Estados Unidos. Y se mantuvo en la cima de la lista durante cuatro semanas consecutivas. También alcanzó el primer puesto en otros 20 países, incluidos Canadá y el Reino Unido. After Hours se promoverá con el After Hours til Dawn Stadium Tour, que se extenderá por América del Norte y Europa. ",
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
				},
				{
					song: 'Too Late',
					time: '4:00',
					img: THE_WEEKEND,
					url: THE_WEEKEND_2,
					like: false,
					dislike: false,
				},
				{
					song: 'Hardest To Love',
					time: '3:32',
					img: THE_WEEKEND,
					url: THE_WEEKEND_3,
					like: false,
					dislike: false,
				},
				{
					song: 'Scared To Live',
					time: '3:12',
					img: THE_WEEKEND,
					url: THE_WEEKEND_4,
					like: false,
					dislike: false,
				},
				{
					song: 'Snowchild',
					time: '4:08',
					img: THE_WEEKEND,
					url: THE_WEEKEND_5,
					like: false,
					dislike: false,
				},
				{
					song: 'Escape From LA',
					time: '5:56',
					img: THE_WEEKEND,
					url: THE_WEEKEND_6,
					like: false,
					dislike: false,
				},
				{
					song: 'Heartless',
					time: '3:19',
					img: THE_WEEKEND,
					url: THE_WEEKEND_7,
					like: false,
					dislike: false,
				},
				{
					song: 'Faith',
					time: '4:44',
					img: THE_WEEKEND,
					url: THE_WEEKEND_8,
					like: false,
					dislike: false,
				},
				{
					song: 'Blinding Lights',
					time: '3:21',
					img: THE_WEEKEND,
					url: THE_WEEKEND_9,
					like: false,
					dislike: false,
				},
				{
					song: 'In Your Eyes',
					time: '3:58',
					img: THE_WEEKEND,
					url: THE_WEEKEND_10,
					like: false,
					dislike: false,
				},
				{
					song: 'Save Your Tears',
					time: '3:36',
					img: THE_WEEKEND,
					url: THE_WEEKEND_11,
					like: false,
					dislike: false,
				},
				{
					song: 'Repeat After Me (interlude)',
					time: '3:16',
					img: THE_WEEKEND,
					url: THE_WEEKEND_12,
					like: false,
					dislike: false,
				},
				{
					song: 'After Hours',
					time: '6:02',
					img: THE_WEEKEND,
					url: THE_WEEKEND_13,
					like: false,
					dislike: false,
				},
				{
					song: 'Untill I Bleed Out',
					time: '3:11',
					img: THE_WEEKEND,
					url: THE_WEEKEND_14,
					like: false,
					dislike: false,
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
				},
				{
					song: 'In Bloom',
					time: '4:15',
					img: NIRVANA,
					url: NIRVANA_2,
					like: false,
					dislike: false,
				},
				{
					song: 'Come As You Are',
					time: '3:38',
					img: NIRVANA,
					url: NIRVANA_3,
					like: false,
					dislike: false,
				},
				{
					song: 'Breed',
					time: '3:04',
					img: NIRVANA,
					url: NIRVANA_4,
					like: false,
					dislike: false,
				},
				{
					song: 'Lithium',
					time: '4:17',
					img: NIRVANA,
					url: NIRVANA_5,
					like: false,
					dislike: false,
				},
				{
					song: 'Polly',
					time: '2:53',
					img: NIRVANA,
					url: NIRVANA_6,
					like: false,
					dislike: false,
				},
				{
					song: 'Territorial Pissings',
					time: '2:22',
					img: NIRVANA,
					url: NIRVANA_7,
					like: false,
					dislike: false,
				},
				{
					song: 'Drain You',
					time: '3:43',
					img: NIRVANA,
					url: NIRVANA_8,
					like: false,
					dislike: false,
				},
				{
					song: 'Lounge Acy',
					time: '2:36',
					img: NIRVANA,
					url: NIRVANA_9,
					like: false,
					dislike: false,
				},
				{
					song: 'Stay Away',
					time: '3:31',
					img: NIRVANA,
					url: NIRVANA_10,
					like: false,
					dislike: false,
				},
				{
					song: 'On A Plain',
					time: '3:14',
					img: NIRVANA,
					url: NIRVANA_11,
					like: false,
					dislike: false,
				},
				{
					song: 'Something in The Way',
					time: '3:52',
					img: NIRVANA,
					url: NIRVANA_12,
					like: false,
					dislike: false,
				},
				{
					song: 'Endless, Nameless',
					time: '6:43',
					img: NIRVANA,
					url: NIRVANA_13,
					like: false,
					dislike: false,
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
				},
				{
					song: 'Leaving Tonight',
					time: '3:24',
					img: THE_NEIGHBOURHOOD,
					url: THE_NEIGHBOURHOOD_2,
					like: false,
					dislike: false,
				},
				{
					song: 'Baby Came Home',
					time: '3:47',
					img: THE_NEIGHBOURHOOD,
					url: THE_NEIGHBOURHOOD_3,
					like: false,
					dislike: false,
				},
				{
					song: 'Sweater Weather',
					time: '4:01',
					img: THE_NEIGHBOURHOOD,
					url: THE_NEIGHBOURHOOD_4,
					like: false,
					dislike: false,
				},
				{
					song: 'Wires',
					time: '3:13',
					img: THE_NEIGHBOURHOOD,
					url: THE_NEIGHBOURHOOD_5,
					like: false,
					dislike: false,
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
				},
				{
					song: 'Stressed Out',
					time: '3:23',
					img: TOP,
					url: TOP_2,
					like: false,
					dislike: false,
				},
				{
					song: 'Ride',
					time: '3:35',
					img: TOP,
					url: TOP_3,
					like: false,
					dislike: false,
				},
				{
					song: 'Fairly Local',
					time: '3:28',
					img: TOP,
					url: TOP_4,
					like: false,
					dislike: false,
				},
				{
					song: 'Tear in My Heart',
					time: '3:09',
					img: TOP,
					url: TOP_5,
					like: false,
					dislike: false,
				},
				{
					song: 'Lane Boy',
					time: '4:14',
					img: TOP,
					url: TOP_6,
					like: false,
					dislike: false,
				},
				{
					song: 'The Judge',
					time: '4:58',
					img: TOP,
					url: TOP_7,
					like: false,
					dislike: false,
				},
				{
					song: 'Doubt',
					time: '3:12',
					img: TOP,
					url: TOP_8,
					like: false,
					dislike: false,
				},
				{
					song: 'Polarize',
					time: '3:47',
					img: TOP,
					url: TOP_9,
					like: false,
					dislike: false,
				},
				{
					song: "We Dont' Believe What's on TV",
					time: '2:58',
					img: TOP,
					url: TOP_10,
					like: false,
					dislike: false,
				},
				{
					song: 'Message Man',
					time: '4:01',
					img: TOP,
					url: TOP_11,
					like: false,
					dislike: false,
				},
				{
					song: 'Hometown',
					time: '3:55',
					img: TOP,
					url: TOP_12,
					like: false,
					dislike: false,
				},
				{
					song: 'Not Today',
					time: '3:59',
					img: TOP,
					url: TOP_13,
					like: false,
					dislike: false,
				},
				{
					song: 'Goner',
					time: '3:57',
					img: TOP,
					url: TOP_14,
					like: false,
					dislike: false,
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
				},
				{
					song: "Won't Bite (con Smino)",
					url: DOJA_CAT_2,
					img: DOJA_CAT,
					time: '3:16',
					like: false,
					dislike: false,
				},
				{
					song: 'Rules',
					url: DOJA_CAT_3,
					img: DOJA_CAT,
					time: '3:08',
					like: false,
					dislike: false,
				},
				{
					song: 'Bottom Bitch',
					url: DOJA_CAT_4,
					img: DOJA_CAT,
					time: '3:18',
					like: false,
					dislike: false,
				},
				{
					song: 'Say So',
					url: DOJA_CAT_5,
					img: DOJA_CAT,
					time: '3:58',
					like: false,
					dislike: false,
				},
				{
					song: 'Like That (con Gucci Mane)',
					url: DOJA_CAT_6,
					img: DOJA_CAT,
					time: '2:44',
					like: false,
					dislike: false,
				},
				{
					song: 'Talk Dirty',
					url: DOJA_CAT_7,
					img: DOJA_CAT,
					time: '4:02',
					like: false,
					dislike: false,
				},
				{
					song: 'Addiction',
					url: DOJA_CAT_8,
					img: DOJA_CAT,
					time: '3:29',
					like: false,
					dislike: false,
				},
				{
					song: 'Streets',
					url: DOJA_CAT_9,
					img: DOJA_CAT,
					time: '3:47',
					like: false,
					dislike: false,
				},
				{
					song: 'Shine',
					url: DOJA_CAT_10,
					img: DOJA_CAT,
					time: '2:41',
					like: false,
					dislike: false,
				},
				{
					song: 'Better Than Me',
					url: DOJA_CAT_11,
					img: DOJA_CAT,
					time: '3:23',
					like: false,
					dislike: false,
				},
				{
					song: 'Juicy',
					url: DOJA_CAT_12,
					img: DOJA_CAT,
					time: '3:24',
					like: false,
					dislike: false,
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
				},
				{
					song: 'Saint-Tropez',
					url: POST_MALONE_2,
					img: POST_MALONE,
					time: '2:31',
					like: false,
					dislike: false,
				},
				{
					song: 'Enemies (con DaBaby)',
					url: POST_MALONE_3,
					img: POST_MALONE,
					time: '3:17',
					like: false,
					dislike: false,
				},
				{
					song: 'Allergic',
					url: POST_MALONE_4,
					img: POST_MALONE,
					time: '2:37',
					like: false,
					dislike: false,
				},
				{
					song: 'A Thousand Bad Times',
					url: POST_MALONE_5,
					img: POST_MALONE,
					time: '3:42',
					like: false,
					dislike: false,
				},
				{
					song: 'Circles',
					url: POST_MALONE_6,
					img: POST_MALONE,
					time: '3:36',
					like: false,
					dislike: false,
				},
				{
					song: 'Die for Me (con Future y Halsey)',
					url: POST_MALONE_7,
					img: POST_MALONE,
					time: '4:06',
					like: false,
					dislike: false,
				},
				{
					song: 'On the Road (con Meek Mill y Lil Baby)',
					url: POST_MALONE_8,
					img: POST_MALONE,
					time: '3:39',
					like: false,
					dislike: false,
				},
				{
					song: 'Take What You Want (con Ozzy Osbourne y Travis Scott)',
					url: POST_MALONE_9,
					img: POST_MALONE,
					time: '3:50',
					like: false,
					dislike: false,
				},
				{
					song: "I'm Gonne Be",
					url: POST_MALONE_10,
					img: POST_MALONE,
					time: '3:21',
					like: false,
					dislike: false,
				},
				{
					song: 'Staring at the Sun (con SZA)',
					url: POST_MALONE_11,
					img: POST_MALONE,
					time: '2:49',
					like: false,
					dislike: false,
				},
				{
					song: 'Sunflower (from "Spider-Man: Into the Spider-Verse")',
					url: POST_MALONE_12,
					img: POST_MALONE,
					time: '2:38',
					like: false,
					dislike: false,
				},
				{
					song: 'Internet',
					url: POST_MALONE_13,
					img: POST_MALONE,
					time: '2:04',
					like: false,
					dislike: false,
				},
				{
					song: 'Goodbyes (con Young Thug)',
					url: POST_MALONE_14,
					img: POST_MALONE,
					time: '2:55',
					like: false,
					dislike: false,
				},
				{
					song: 'Myself',
					url: POST_MALONE_15,
					img: POST_MALONE,
					time: '2:39',
					like: false,
					dislike: false,
				},
				{
					song: 'I Know',
					url: POST_MALONE_16,
					img: POST_MALONE,
					time: '2:22',
					like: false,
					dislike: false,
				},
				{
					song: 'Wow.',
					url: POST_MALONE_17,
					img: POST_MALONE,
					time: '2:30',
					like: false,
					dislike: false,
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
				},
				{
					song: 'Shivers',
					url: ED_SHEERAN_2,
					img: ED_SHEERAN,
					time: '3:28',
					like: false,
					dislike: false,
				},
				{
					song: 'First Times',
					url: ED_SHEERAN_3,
					img: ED_SHEERAN,
					time: '3:06',
					like: false,
					dislike: false,
				},
				{
					song: 'Bad Habits',
					url: ED_SHEERAN_4,
					img: ED_SHEERAN,
					time: '3:51',
					like: false,
					dislike: false,
				},
				{
					song: 'Overpass Graffiti',
					url: ED_SHEERAN_5,
					img: ED_SHEERAN,
					time: '3:57',
					like: false,
					dislike: false,
				},
				{
					song: 'The Joker And The Queen',
					url: ED_SHEERAN_6,
					img: ED_SHEERAN,
					time: '3:06',
					like: false,
					dislike: false,
				},
				{
					song: 'Leave Your Life',
					url: ED_SHEERAN_7,
					img: ED_SHEERAN,
					time: '3:44',
					like: false,
					dislike: false,
				},
				{
					song: 'Collide',
					url: ED_SHEERAN_8,
					img: ED_SHEERAN,
					time: '3:31',
					like: false,
					dislike: false,
				},
				{
					song: '2step',
					url: ED_SHEERAN_9,
					img: ED_SHEERAN,
					time: '2:34',
					like: false,
					dislike: false,
				},
				{
					song: 'Stop The Rain',
					url: ED_SHEERAN_10,
					img: ED_SHEERAN,
					time: '3:24',
					like: false,
					dislike: false,
				},
				{
					song: 'Love In Slow Motion',
					url: ED_SHEERAN_11,
					img: ED_SHEERAN,
					time: '3:11',
					like: false,
					dislike: false,
				},
				{
					song: 'Visiting Hours',
					url: ED_SHEERAN_12,
					img: ED_SHEERAN,
					time: '3:36',
					like: false,
					dislike: false,
				},
				{
					song: 'Sandman',
					url: ED_SHEERAN_13,
					img: ED_SHEERAN,
					time: '4:20',
					like: false,
					dislike: false,
				},
				{
					song: 'Be Right Now',
					url: ED_SHEERAN_14,
					img: ED_SHEERAN,
					time: '3:32',
					like: false,
					dislike: false,
				},
			],
		},
		{
			artist: 'Halsey',
			disk: 'Manic',
			price: 65,
			description:
				'Manic es el tercer álbum de estudio de la cantante estadounidense Halsey. Fue lanzado el 17 de enero de 2020, a través de Capitol Records. Presenta colaboraciones especiales de Dominic Fike, Alanis Morissette y Suga de BTS, además de la aparición Kate Winslet, John Mayer,  Amanda Seyfried y Megan Fox. Musicalmente, es un disco de electropop, hip hop y rock alternativo con influencias de varios otros géneros, como country, K-pop, pop, R&B, entre otros. La producción fue manejada por la propia Halsey, siendo su primer álbum en hacerlo, junto con sus frecuentes colaboradores, como Benny Blanco, Cashmere Cat, Lido y Greg Kurstin, así como nuevos productores como Jon Bellion, FINNEAS, Louis Bell y The Monsters and the Strangerz, entre otros. El álbum fue promocionado por el lanzamiento de tres sencillos: Without Me, Graveyard y You Should Be Sad y tres sencillos promocionales: Clementine, Finally // Beautiful Stranger y Sugas Interlude.',
			id: 6,
			img: HALSEY,
			amount: 1,
			favorite: false,
			age: 2020,
			song: 13,
			minutes: 43,
			songs: [
				{
					song: 'Future Nostalgia',
					time: '3:05',
					like: false,
					dislike: false,
				},
				{
					song: "Don't Start Now",
					time: '3:04',
					like: false,
					dislike: false,
				},
				{
					song: 'Cool',
					time: '3:30',
					like: false,
					dislike: false,
				},
				{
					song: 'Physical',
					time: '3:14',
					like: false,
					dislike: false,
				},
				{
					song: 'Levitating',
					time: '3:24',
					like: false,
					dislike: false,
				},
				{
					song: 'Pretty Please',
					time: '3:15',
					like: false,
					dislike: false,
				},
				{
					song: 'Hallucinate',
					time: '3:23',
					like: false,
					dislike: false,
				},
				{
					song: 'Love Again',
					time: '4:19',
					like: false,
					dislike: false,
				},
				{
					song: 'Break My Hart',
					time: '3:42',
					like: false,
					dislike: false,
				},
				{
					song: 'Good in Bed',
					time: '3:39',
					like: false,
					dislike: false,
				},
				{
					song: 'Boys Will Be Boys',
					time: '2:47',
					like: false,
					dislike: false,
				},
				{
					song: 'Levitating (con DaBaby)',
					time: '3:24',
					like: false,
					dislike: false,
				},
				{
					song: 'Fever',
					time: '2:37',
					like: false,
					dislike: false,
				},
			],
		},
		{
			artist: 'Maroon 5',
			disk: 'Jordi',
			price: 85.2,
			description:
				'Jordi es el séptimo álbum de estudio de la banda estadounidense Maroon 5. Se lanzó el 11 de junio de 2021, a través de 222, Interscope y Polydor Records. El álbum lleva el título del difunto manager de la banda, Jordan Feldstein, a quien el líder de la banda, Adam Levine, se refirió como "Jordi". El álbum es el primero que no presenta al bajista Mickey Madden, luego de su salida de la banda en 2020. El álbum ha producido dos sencillos anticipadamente. El primer sencillo principal, "Nobodys Love", fue lanzado el 24 de julio de 2020. La canción se inspiró en la pandemia de COVID-19 y las protestas de George Floyd. La canción alcanzó el puesto 41 y 119 en el Billboard Hot 100 y el Billboard Global 200 en Estados Unidos, respectivamente. El segundo sencillo, "Beautiful Mistakes" con la colaboración de la rapera estadounidense Megan Thee Stallion, fue lanzado el 3 de marzo de 2021, con un video con letra lanzado el mismo día. El video musical oficial fue lanzado el 12 de marzo de 2021 y fue dirigido por Sophie Muller. La canción alcanzó el puesto 18 y 26 en el Billboard Hot 100 y Global 200, respectivamente. ',
			id: 7,
			img: MAROON_5,
			amount: 1,
			favorite: false,
			age: 2020,
			song: 13,
			minutes: 43,
			songs: [
				{
					song: 'Future Nostalgia',
					time: '3:05',
					like: false,
					dislike: false,
				},
				{
					song: "Don't Start Now",
					time: '3:04',
					like: false,
					dislike: false,
				},
				{
					song: 'Cool',
					time: '3:30',
					like: false,
					dislike: false,
				},
				{
					song: 'Physical',
					time: '3:14',
					like: false,
					dislike: false,
				},
				{
					song: 'Levitating',
					time: '3:24',
					like: false,
					dislike: false,
				},
				{
					song: 'Pretty Please',
					time: '3:15',
					like: false,
					dislike: false,
				},
				{
					song: 'Hallucinate',
					time: '3:23',
					like: false,
					dislike: false,
				},
				{
					song: 'Love Again',
					time: '4:19',
					like: false,
					dislike: false,
				},
				{
					song: 'Break My Hart',
					time: '3:42',
					like: false,
					dislike: false,
				},
				{
					song: 'Good in Bed',
					time: '3:39',
					like: false,
					dislike: false,
				},
				{
					song: 'Boys Will Be Boys',
					time: '2:47',
					like: false,
					dislike: false,
				},
				{
					song: 'Levitating (con DaBaby)',
					time: '3:24',
					like: false,
					dislike: false,
				},
				{
					song: 'Fever',
					time: '2:37',
					like: false,
					dislike: false,
				},
			],
		},
		{
			artist: 'Lil Nas X',
			disk: 'MONTERO',
			description:
				'Montero (estilizado en mayúsculas) es el álbum debut de estudio del rapero y cantante estadounidense Lil Nas X, lanzado el 17 de septiembre de 2021 por Columbia Records. El álbum, titulado con su nombre de pila, se anunció por primera vez en 2019. Su título, portada y lista de canciones se dieron a conocer en 2021. Cuatro sencillos acompañaron a Montero, "Montero (Call Me by Your Name)", " Sun Goes Down”, “Industry Baby”, y “Thats What I Want”. "Montero (Call Me by Your Name)" e "Industry Baby" encabezaron cada uno el Billboard Hot 100 de EE.UU., mientras que "Thats What I Want" entró al Top 10.El álbum presenta apariciones especiales de Jack Harlow, Doja Cat, Elton John, Megan Thee Stallion y Miley Cyrus. Musicalmente, Montero es un disco de pop rap con influencias de varios otros géneros. Recibió elogios de los críticos musicales, quienes elogiaron su producción ecléctica y su composición pegadiza. En la 64 Entrega Anual de los Premios Grammy, recibió una nominación a Álbum del Año logrando su segunda nominación consecutiva en la categoría, mientras que “Montero (Call Me by Your Name)” está nominado a Grabación del Año, Canción del año y Mejor video musical e "Industry Baby" está nominado a Mejor interpretación de rap, respectivamente. Comercialmente, el álbum encabezó las listas en Australia, Dinamarca, Irlanda, Nueva Zelanda, Noruega y Suecia, y entró en el top 10 en otros territorios. ',
			price: 102.9,
			id: 8,
			img: LIL_NAS_X,
			amount: 1,
			favorite: false,
			age: 2020,
			song: 13,
			minutes: 43,
			songs: [
				{
					song: 'Future Nostalgia',
					time: '3:05',
					like: false,
					dislike: false,
				},
				{
					song: "Don't Start Now",
					time: '3:04',
					like: false,
					dislike: false,
				},
				{
					song: 'Cool',
					time: '3:30',
					like: false,
					dislike: false,
				},
				{
					song: 'Physical',
					time: '3:14',
					like: false,
					dislike: false,
				},
				{
					song: 'Levitating',
					time: '3:24',
					like: false,
					dislike: false,
				},
				{
					song: 'Pretty Please',
					time: '3:15',
					like: false,
					dislike: false,
				},
				{
					song: 'Hallucinate',
					time: '3:23',
					like: false,
					dislike: false,
				},
				{
					song: 'Love Again',
					time: '4:19',
					like: false,
					dislike: false,
				},
				{
					song: 'Break My Hart',
					time: '3:42',
					like: false,
					dislike: false,
				},
				{
					song: 'Good in Bed',
					time: '3:39',
					like: false,
					dislike: false,
				},
				{
					song: 'Boys Will Be Boys',
					time: '2:47',
					like: false,
					dislike: false,
				},
				{
					song: 'Levitating (con DaBaby)',
					time: '3:24',
					like: false,
					dislike: false,
				},
				{
					song: 'Fever',
					time: '2:37',
					like: false,
					dislike: false,
				},
			],
		},
		{
			artist: 'Green	Day',
			disk: '21st Century Breakdown',
			description: `21st Century Breakdown —en español: Crisis del siglo XXI— es el octavo álbum de estudio de la banda estadounidense de rock Green Day. Se trata de la segunda ópera rock del grupo, siendo el anterior American Idiot y es el primero producido por Butch Vig. Green Day comenzó a trabajar en él en enero de 2006. El cantante y guitarrista Billie Joe Armstrong había compuesto 45 canciones hacia octubre de 2007, pero no se comenzó a grabar con Vig hasta enero de 2008. El proceso de grabación y composición abarcó tres años y se llevó a cabo en cuatro estudios en California. Finalmente, se terminó en abril de 2009. 
			El álbum se lanzó el 15 de mayo de 2009 a través de Reprise Records. Armstrong lo describió como «una "fotografía instantánea" de la época en la que vivimos, cuestionando y tratando de buscarle sentido a la manipulación egoísta a nuestro alrededor, proveniente del gobierno, la religión, los medios o francamente cualquier forma de autoridad».1 Los sencillos «Know Your Enemy» y «21 Guns» son ejemplos de la temática de alienación e indignación ante los políticos presente en el disco.
			La respuesta crítica a 21st Century Breakdown fue en general positiva. Los críticos que alabaron el álbum consideraron las composiciones y las letras de Armstrong un éxito; los escépticos rechazaron el concepto del disco, describiéndolo como «vago» y «carente de dirección». El álbum alcanzó las primeras posiciones de las listas de venta de varios países en el mundo, incluyendo el Billboard 200, European Top 100 Albums y la UK Albums Chart. Recibió además el premio Grammy al mejor álbum de rock en la edición número 52 de estos galardones, celebrada el 31 de enero de 2010. Hacia diciembre de ese año, 21st Century Breakdown había vendido 10 140 000 copias en Estados Unidos y más de 3,5 millones a todo mundo.`,
			price: 25,
			id: 9,
			img: GREEN_DAY,
			amount: 1,
			favorite: false,
			age: 2020,
			song: 13,
			minutes: 43,
			songs: [
				{
					song: 'Future Nostalgia',
					time: '3:05',
					like: false,
					dislike: false,
				},
				{
					song: "Don't Start Now",
					time: '3:04',
					like: false,
					dislike: false,
				},
				{
					song: 'Cool',
					time: '3:30',
					like: false,
					dislike: false,
				},
				{
					song: 'Physical',
					time: '3:14',
					like: false,
					dislike: false,
				},
				{
					song: 'Levitating',
					time: '3:24',
					like: false,
					dislike: false,
				},
				{
					song: 'Pretty Please',
					time: '3:15',
					like: false,
					dislike: false,
				},
				{
					song: 'Hallucinate',
					time: '3:23',
					like: false,
					dislike: false,
				},
				{
					song: 'Love Again',
					time: '4:19',
					like: false,
					dislike: false,
				},
				{
					song: 'Break My Hart',
					time: '3:42',
					like: false,
					dislike: false,
				},
				{
					song: 'Good in Bed',
					time: '3:39',
					like: false,
					dislike: false,
				},
				{
					song: 'Boys Will Be Boys',
					time: '2:47',
					like: false,
					dislike: false,
				},
				{
					song: 'Levitating (con DaBaby)',
					time: '3:24',
					like: false,
					dislike: false,
				},
				{
					song: 'Fever',
					time: '2:37',
					like: false,
					dislike: false,
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
				},
				{
					song: 'traitor',
					url: OLIVIA_RODRIGO_3,
					img: OLIVIA_RODRIGO,
					time: '3:50',
					like: false,
					dislike: false,
				},
				{
					song: 'drivers license',
					url: OLIVIA_RODRIGO_2,
					img: OLIVIA_RODRIGO,
					time: '4:03',
					like: false,
					dislike: false,
				},
				{
					song: '1 step forward, 3 steps back',
					url: OLIVIA_RODRIGO_4,
					img: OLIVIA_RODRIGO,
					time: '2:44',
					like: false,
					dislike: false,
				},
				{
					song: 'deja vu',
					url: OLIVIA_RODRIGO_5,
					img: OLIVIA_RODRIGO,
					time: '3:36',
					like: false,
					dislike: false,
				},
				{
					song: 'good 4 u',
					url: OLIVIA_RODRIGO_6,
					img: OLIVIA_RODRIGO,
					time: '2:59',
					like: false,
					dislike: false,
				},
				{
					song: 'enough for you',
					url: OLIVIA_RODRIGO_7,
					img: OLIVIA_RODRIGO,
					time: '3:39',
					like: false,
					dislike: false,
				},
				{
					song: 'happier',
					url: OLIVIA_RODRIGO_8,
					img: OLIVIA_RODRIGO,
					time: '2:56',
					like: false,
					dislike: false,
				},
				{
					song: 'jealousy, jealousy',
					url: OLIVIA_RODRIGO_9,
					img: OLIVIA_RODRIGO,
					time: '2:54',
					like: false,
					dislike: false,
				},
				{
					song: 'favorite crime',
					url: OLIVIA_RODRIGO_10,
					img: OLIVIA_RODRIGO,
					time: '2:33',
					like: false,
					dislike: false,
				},
				{
					song: 'hope ur ok',
					url: OLIVIA_RODRIGO_11,
					img: OLIVIA_RODRIGO,
					time: '3:30',
					like: false,
					dislike: false,
				},
			],
		},
		{
			artist: 'BTS',
			disk: 'Butter',
			description:
				'Future Nostalgia es el segundo álbum de estudio de la cantante británica Dua Lipa. Fue lanzado el 27 de marzo de 2020 por el sello discográfico Warner Records. Comenzó el trabajo en el álbum a principios de 2018, reclutando a escritores y productores como Jeff Bhasker, Ian Kirkpatrick, Stuart Price, The Monsters and the Strangerz. Para el álbum encontró inspiración en la música de artistas que escuchó durante su adolescencia, como Gwen Stefani, Moloko, Daft Punk y Outkast. El álbum fue promocionado con seis sencillos y un sencillo promocional, Don t Start Now, se lanzó el 1 de noviembre de 2019 como el sencillo principal del álbum. Se convirtió en su séptima entrada entre los 10 primeros en la lista de sencillos del Reino Unido y su primera entrada entre los tres primeros en el Billboard Hot 100 de Estados Unidos. El tema principal del álbum Future Nostalgia se lanzó como sencillo promocional el 13 de diciembre de 2019. Su segundo sencillo Physical se estrenó el 31 de enero de 2020 y alcanzó el número siete en la lista de sencillos del Reino Unido, mientras que Break My Heart se publicó como el tercer sencillo del álbum el 25 de marzo de 2020. Para promocionar el álbum, Lipa comenzará la gira Future Nostalgia Tour en octubre de 2021. El álbum alcanzó el primer lugar en la lista del Reino Unido, convirtiéndose en su primer material en llegar a dicha posición mientras que en Billboard 200 de Estados Unidos se ubicó en la tercera ubicación. Se posicionó en la primera posición en nueve países diferentes incluyendo Escocia, Reino Unido, Estonia, Eslovaquia, República Checa, Finlandia, Lituania, Irlanda y Nueva Zelanda. En Spotify rompió tres récords en la plataforma, convirtiéndose en el álbum más transmitido en un día por una artista femenina británica a nivel mundial y el más transmitido en un día por una artista femenina británica en el Reino Unido y en los Estados Unidos. Tras 67 semanas, en la semana del 20 de julio de 2021, Future Nostalgia continúa en el top 10 de Billboard 200, en el sexto puesto. ',
			price: 88.2,
			id: 11,
			img: BTS,
			amount: 1,
			favorite: false,
			age: 2020,
			song: 13,
			minutes: 43,
			songs: [
				{
					song: 'Future Nostalgia',
					time: '3:05',
					like: false,
					dislike: false,
				},
				{
					song: "Don't Start Now",
					time: '3:04',
					like: false,
					dislike: false,
				},
				{
					song: 'Cool',
					time: '3:30',
					like: false,
					dislike: false,
				},
				{
					song: 'Physical',
					time: '3:14',
					like: false,
					dislike: false,
				},
				{
					song: 'Levitating',
					time: '3:24',
					like: false,
					dislike: false,
				},
				{
					song: 'Pretty Please',
					time: '3:15',
					like: false,
					dislike: false,
				},
				{
					song: 'Hallucinate',
					time: '3:23',
					like: false,
					dislike: false,
				},
				{
					song: 'Love Again',
					time: '4:19',
					like: false,
					dislike: false,
				},
				{
					song: 'Break My Hart',
					time: '3:42',
					like: false,
					dislike: false,
				},
				{
					song: 'Good in Bed',
					time: '3:39',
					like: false,
					dislike: false,
				},
				{
					song: 'Boys Will Be Boys',
					time: '2:47',
					like: false,
					dislike: false,
				},
				{
					song: 'Levitating (con DaBaby)',
					time: '3:24',
					like: false,
					dislike: false,
				},
				{
					song: 'Fever',
					time: '2:37',
					like: false,
					dislike: false,
				},
			],
		},
		{
			artist: 'Tame Impala',
			disk: 'Currents',
			description:
				'Future Nostalgia es el segundo álbum de estudio de la cantante británica Dua Lipa. Fue lanzado el 27 de marzo de 2020 por el sello discográfico Warner Records. Comenzó el trabajo en el álbum a principios de 2018, reclutando a escritores y productores como Jeff Bhasker, Ian Kirkpatrick, Stuart Price, The Monsters and the Strangerz. Para el álbum encontró inspiración en la música de artistas que escuchó durante su adolescencia, como Gwen Stefani, Moloko, Daft Punk y Outkast. El álbum fue promocionado con seis sencillos y un sencillo promocional, Don t Start Now, se lanzó el 1 de noviembre de 2019 como el sencillo principal del álbum. Se convirtió en su séptima entrada entre los 10 primeros en la lista de sencillos del Reino Unido y su primera entrada entre los tres primeros en el Billboard Hot 100 de Estados Unidos. El tema principal del álbum Future Nostalgia se lanzó como sencillo promocional el 13 de diciembre de 2019. Su segundo sencillo Physical se estrenó el 31 de enero de 2020 y alcanzó el número siete en la lista de sencillos del Reino Unido, mientras que Break My Heart se publicó como el tercer sencillo del álbum el 25 de marzo de 2020. Para promocionar el álbum, Lipa comenzará la gira Future Nostalgia Tour en octubre de 2021. El álbum alcanzó el primer lugar en la lista del Reino Unido, convirtiéndose en su primer material en llegar a dicha posición mientras que en Billboard 200 de Estados Unidos se ubicó en la tercera ubicación. Se posicionó en la primera posición en nueve países diferentes incluyendo Escocia, Reino Unido, Estonia, Eslovaquia, República Checa, Finlandia, Lituania, Irlanda y Nueva Zelanda. En Spotify rompió tres récords en la plataforma, convirtiéndose en el álbum más transmitido en un día por una artista femenina británica a nivel mundial y el más transmitido en un día por una artista femenina británica en el Reino Unido y en los Estados Unidos. Tras 67 semanas, en la semana del 20 de julio de 2021, Future Nostalgia continúa en el top 10 de Billboard 200, en el sexto puesto. ',
			price: 56.5,
			id: 12,
			img: TAME_IMPALA,
			amount: 1,
			favorite: false,
			age: 2020,
			song: 13,
			minutes: 43,
			songs: [
				{
					song: 'Future Nostalgia',
					time: '3:05',
					like: false,
					dislike: false,
				},
				{
					song: "Don't Start Now",
					time: '3:04',
					like: false,
					dislike: false,
				},
				{
					song: 'Cool',
					time: '3:30',
					like: false,
					dislike: false,
				},
				{
					song: 'Physical',
					time: '3:14',
					like: false,
					dislike: false,
				},
				{
					song: 'Levitating',
					time: '3:24',
					like: false,
					dislike: false,
				},
				{
					song: 'Pretty Please',
					time: '3:15',
					like: false,
					dislike: false,
				},
				{
					song: 'Hallucinate',
					time: '3:23',
					like: false,
					dislike: false,
				},
				{
					song: 'Love Again',
					time: '4:19',
					like: false,
					dislike: false,
				},
				{
					song: 'Break My Hart',
					time: '3:42',
					like: false,
					dislike: false,
				},
				{
					song: 'Good in Bed',
					time: '3:39',
					like: false,
					dislike: false,
				},
				{
					song: 'Boys Will Be Boys',
					time: '2:47',
					like: false,
					dislike: false,
				},
				{
					song: 'Levitating (con DaBaby)',
					time: '3:24',
					like: false,
					dislike: false,
				},
				{
					song: 'Fever',
					time: '2:37',
					like: false,
					dislike: false,
				},
			],
		},
	]);

	const playSongDemo = (song, url) => {
		setSongsDemo({ song, url });
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
									{item.description}
								</p>
							</div>
						</>
					) : null
				)}
			</div>
			{data.map((item) =>
				item.id === parseInt(id)
					? item.songs.map((item) => (
							<Song item={item} key={item.song} playSongDemo={playSongDemo} />
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
