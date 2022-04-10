import React, { useState } from 'react';
import '../css/product.css';
import CardProduct from './CardProduct';
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

const Product = ({
	addProductToCart,
	addDiscsToFavorites,
	removeDiscsToFavorite,
	changeValidation,
}) => {
	const [data, setData] = useState([
		{
			artist: 'Dua Lipa',
			disk: 'Future Nostalgia',
			description:
				'Future Nostalgia es el segundo álbum de estudio de la cantante británica Dua Lipa. Fue lanzado el 27 de marzo de 2020 por el sello discográfico Warner Records. Comenzó el trabajo en el álbum a principios de 2018, reclutando a escritores y productores como Jeff Bhasker, Ian Kirkpatrick, Stuart Price, The Monsters and the Strangerz. Para el álbum encontró inspiración en la música de artistas que escuchó durante su adolescencia, como Gwen Stefani, Moloko, Daft Punk y Outkast. El álbum fue promocionado con seis sencillos y un sencillo promocional, Don t Start Now, se lanzó el 1 de noviembre de 2019 como el sencillo principal del álbum. Se convirtió en su séptima entrada entre los 10 primeros en la lista de sencillos del Reino Unido y su primera entrada entre los tres primeros en el Billboard Hot 100 de Estados Unidos. El tema principal del álbum Future Nostalgia se lanzó como sencillo promocional el 13 de diciembre de 2019. Su segundo sencillo Physical se estrenó el 31 de enero de 2020 y alcanzó el número siete en la lista de sencillos del Reino Unido, mientras que Break My Heart se publicó como el tercer sencillo del álbum el 25 de marzo de 2020. Para promocionar el álbum, Lipa comenzará la gira Future Nostalgia Tour en octubre de 2021. El álbum alcanzó el primer lugar en la lista del Reino Unido, convirtiéndose en su primer material en llegar a dicha posición mientras que en Billboard 200 de Estados Unidos se ubicó en la tercera ubicación. Se posicionó en la primera posición en nueve países diferentes incluyendo Escocia, Reino Unido, Estonia, Eslovaquia, República Checa, Finlandia, Lituania, Irlanda y Nueva Zelanda. En Spotify rompió tres récords en la plataforma, convirtiéndose en el álbum más transmitido en un día por una artista femenina británica a nivel mundial y el más transmitido en un día por una artista femenina británica en el Reino Unido y en los Estados Unidos. Tras 67 semanas, en la semana del 20 de julio de 2021, Future Nostalgia continúa en el top 10 de Billboard 200, en el sexto puesto. ',
			price: 75,
			id: 1,
			img: DUA_LIPA,
			amount: 1,
			favorite: false,
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
		},
		{
			artist: 'Olivia Rodrigo',
			disk: 'SOUR',
			description:
				'Future Nostalgia es el segundo álbum de estudio de la cantante británica Dua Lipa. Fue lanzado el 27 de marzo de 2020 por el sello discográfico Warner Records. Comenzó el trabajo en el álbum a principios de 2018, reclutando a escritores y productores como Jeff Bhasker, Ian Kirkpatrick, Stuart Price, The Monsters and the Strangerz. Para el álbum encontró inspiración en la música de artistas que escuchó durante su adolescencia, como Gwen Stefani, Moloko, Daft Punk y Outkast. El álbum fue promocionado con seis sencillos y un sencillo promocional, Don t Start Now, se lanzó el 1 de noviembre de 2019 como el sencillo principal del álbum. Se convirtió en su séptima entrada entre los 10 primeros en la lista de sencillos del Reino Unido y su primera entrada entre los tres primeros en el Billboard Hot 100 de Estados Unidos. El tema principal del álbum Future Nostalgia se lanzó como sencillo promocional el 13 de diciembre de 2019. Su segundo sencillo Physical se estrenó el 31 de enero de 2020 y alcanzó el número siete en la lista de sencillos del Reino Unido, mientras que Break My Heart se publicó como el tercer sencillo del álbum el 25 de marzo de 2020. Para promocionar el álbum, Lipa comenzará la gira Future Nostalgia Tour en octubre de 2021. El álbum alcanzó el primer lugar en la lista del Reino Unido, convirtiéndose en su primer material en llegar a dicha posición mientras que en Billboard 200 de Estados Unidos se ubicó en la tercera ubicación. Se posicionó en la primera posición en nueve países diferentes incluyendo Escocia, Reino Unido, Estonia, Eslovaquia, República Checa, Finlandia, Lituania, Irlanda y Nueva Zelanda. En Spotify rompió tres récords en la plataforma, convirtiéndose en el álbum más transmitido en un día por una artista femenina británica a nivel mundial y el más transmitido en un día por una artista femenina británica en el Reino Unido y en los Estados Unidos. Tras 67 semanas, en la semana del 20 de julio de 2021, Future Nostalgia continúa en el top 10 de Billboard 200, en el sexto puesto. ',
			price: 120.5,
			id: 10,
			img: OLIVIA_RODRIGO,
			amount: 1,
			favorite: false,
		},
		{
			artist: 'Ed Sheeran',
			disk: 'Equals',
			description:
				'Future Nostalgia es el segundo álbum de estudio de la cantante británica Dua Lipa. Fue lanzado el 27 de marzo de 2020 por el sello discográfico Warner Records. Comenzó el trabajo en el álbum a principios de 2018, reclutando a escritores y productores como Jeff Bhasker, Ian Kirkpatrick, Stuart Price, The Monsters and the Strangerz. Para el álbum encontró inspiración en la música de artistas que escuchó durante su adolescencia, como Gwen Stefani, Moloko, Daft Punk y Outkast. El álbum fue promocionado con seis sencillos y un sencillo promocional, Don t Start Now, se lanzó el 1 de noviembre de 2019 como el sencillo principal del álbum. Se convirtió en su séptima entrada entre los 10 primeros en la lista de sencillos del Reino Unido y su primera entrada entre los tres primeros en el Billboard Hot 100 de Estados Unidos. El tema principal del álbum Future Nostalgia se lanzó como sencillo promocional el 13 de diciembre de 2019. Su segundo sencillo Physical se estrenó el 31 de enero de 2020 y alcanzó el número siete en la lista de sencillos del Reino Unido, mientras que Break My Heart se publicó como el tercer sencillo del álbum el 25 de marzo de 2020. Para promocionar el álbum, Lipa comenzará la gira Future Nostalgia Tour en octubre de 2021. El álbum alcanzó el primer lugar en la lista del Reino Unido, convirtiéndose en su primer material en llegar a dicha posición mientras que en Billboard 200 de Estados Unidos se ubicó en la tercera ubicación. Se posicionó en la primera posición en nueve países diferentes incluyendo Escocia, Reino Unido, Estonia, Eslovaquia, República Checa, Finlandia, Lituania, Irlanda y Nueva Zelanda. En Spotify rompió tres récords en la plataforma, convirtiéndose en el álbum más transmitido en un día por una artista femenina británica a nivel mundial y el más transmitido en un día por una artista femenina británica en el Reino Unido y en los Estados Unidos. Tras 67 semanas, en la semana del 20 de julio de 2021, Future Nostalgia continúa en el top 10 de Billboard 200, en el sexto puesto. ',
			price: 95.5,
			id: 5,
			img: ED_SHEERAN,
			amount: 1,
			favorite: false,
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
			age: 2017,
			song: 7,
			minutes: 23,
			explicit: true,
		},
		{
			artist: 'Doja Cat',
			disk: 'Hot Pink',
			description:
				'Future Nostalgia es el segundo álbum de estudio de la cantante británica Dua Lipa. Fue lanzado el 27 de marzo de 2020 por el sello discográfico Warner Records. Comenzó el trabajo en el álbum a principios de 2018, reclutando a escritores y productores como Jeff Bhasker, Ian Kirkpatrick, Stuart Price, The Monsters and the Strangerz. Para el álbum encontró inspiración en la música de artistas que escuchó durante su adolescencia, como Gwen Stefani, Moloko, Daft Punk y Outkast. El álbum fue promocionado con seis sencillos y un sencillo promocional, Don t Start Now, se lanzó el 1 de noviembre de 2019 como el sencillo principal del álbum. Se convirtió en su séptima entrada entre los 10 primeros en la lista de sencillos del Reino Unido y su primera entrada entre los tres primeros en el Billboard Hot 100 de Estados Unidos. El tema principal del álbum Future Nostalgia se lanzó como sencillo promocional el 13 de diciembre de 2019. Su segundo sencillo Physical se estrenó el 31 de enero de 2020 y alcanzó el número siete en la lista de sencillos del Reino Unido, mientras que Break My Heart se publicó como el tercer sencillo del álbum el 25 de marzo de 2020. Para promocionar el álbum, Lipa comenzará la gira Future Nostalgia Tour en octubre de 2021. El álbum alcanzó el primer lugar en la lista del Reino Unido, convirtiéndose en su primer material en llegar a dicha posición mientras que en Billboard 200 de Estados Unidos se ubicó en la tercera ubicación. Se posicionó en la primera posición en nueve países diferentes incluyendo Escocia, Reino Unido, Estonia, Eslovaquia, República Checa, Finlandia, Lituania, Irlanda y Nueva Zelanda. En Spotify rompió tres récords en la plataforma, convirtiéndose en el álbum más transmitido en un día por una artista femenina británica a nivel mundial y el más transmitido en un día por una artista femenina británica en el Reino Unido y en los Estados Unidos. Tras 67 semanas, en la semana del 20 de julio de 2021, Future Nostalgia continúa en el top 10 de Billboard 200, en el sexto puesto. ',
			price: 65,
			id: 3,
			img: DOJA_CAT,
			amount: 1,
			favorite: false,
		},
		{
			artist: 'Post Malone',
			disk: 'Hollywood’s Bleeding',
			description:
				'Future Nostalgia es el segundo álbum de estudio de la cantante británica Dua Lipa. Fue lanzado el 27 de marzo de 2020 por el sello discográfico Warner Records. Comenzó el trabajo en el álbum a principios de 2018, reclutando a escritores y productores como Jeff Bhasker, Ian Kirkpatrick, Stuart Price, The Monsters and the Strangerz. Para el álbum encontró inspiración en la música de artistas que escuchó durante su adolescencia, como Gwen Stefani, Moloko, Daft Punk y Outkast. El álbum fue promocionado con seis sencillos y un sencillo promocional, Don t Start Now, se lanzó el 1 de noviembre de 2019 como el sencillo principal del álbum. Se convirtió en su séptima entrada entre los 10 primeros en la lista de sencillos del Reino Unido y su primera entrada entre los tres primeros en el Billboard Hot 100 de Estados Unidos. El tema principal del álbum Future Nostalgia se lanzó como sencillo promocional el 13 de diciembre de 2019. Su segundo sencillo Physical se estrenó el 31 de enero de 2020 y alcanzó el número siete en la lista de sencillos del Reino Unido, mientras que Break My Heart se publicó como el tercer sencillo del álbum el 25 de marzo de 2020. Para promocionar el álbum, Lipa comenzará la gira Future Nostalgia Tour en octubre de 2021. El álbum alcanzó el primer lugar en la lista del Reino Unido, convirtiéndose en su primer material en llegar a dicha posición mientras que en Billboard 200 de Estados Unidos se ubicó en la tercera ubicación. Se posicionó en la primera posición en nueve países diferentes incluyendo Escocia, Reino Unido, Estonia, Eslovaquia, República Checa, Finlandia, Lituania, Irlanda y Nueva Zelanda. En Spotify rompió tres récords en la plataforma, convirtiéndose en el álbum más transmitido en un día por una artista femenina británica a nivel mundial y el más transmitido en un día por una artista femenina británica en el Reino Unido y en los Estados Unidos. Tras 67 semanas, en la semana del 20 de julio de 2021, Future Nostalgia continúa en el top 10 de Billboard 200, en el sexto puesto. ',
			price: 57.5,
			id: 4,
			img: POST_MALONE,
			amount: 1,
			favorite: false,
		},
		{
			artist: 'Halsey',
			disk: 'Manic',
			price: 65,
			description:
				'Future Nostalgia es el segundo álbum de estudio de la cantante británica Dua Lipa. Fue lanzado el 27 de marzo de 2020 por el sello discográfico Warner Records. Comenzó el trabajo en el álbum a principios de 2018, reclutando a escritores y productores como Jeff Bhasker, Ian Kirkpatrick, Stuart Price, The Monsters and the Strangerz. Para el álbum encontró inspiración en la música de artistas que escuchó durante su adolescencia, como Gwen Stefani, Moloko, Daft Punk y Outkast. El álbum fue promocionado con seis sencillos y un sencillo promocional, Don t Start Now, se lanzó el 1 de noviembre de 2019 como el sencillo principal del álbum. Se convirtió en su séptima entrada entre los 10 primeros en la lista de sencillos del Reino Unido y su primera entrada entre los tres primeros en el Billboard Hot 100 de Estados Unidos. El tema principal del álbum Future Nostalgia se lanzó como sencillo promocional el 13 de diciembre de 2019. Su segundo sencillo Physical se estrenó el 31 de enero de 2020 y alcanzó el número siete en la lista de sencillos del Reino Unido, mientras que Break My Heart se publicó como el tercer sencillo del álbum el 25 de marzo de 2020. Para promocionar el álbum, Lipa comenzará la gira Future Nostalgia Tour en octubre de 2021. El álbum alcanzó el primer lugar en la lista del Reino Unido, convirtiéndose en su primer material en llegar a dicha posición mientras que en Billboard 200 de Estados Unidos se ubicó en la tercera ubicación. Se posicionó en la primera posición en nueve países diferentes incluyendo Escocia, Reino Unido, Estonia, Eslovaquia, República Checa, Finlandia, Lituania, Irlanda y Nueva Zelanda. En Spotify rompió tres récords en la plataforma, convirtiéndose en el álbum más transmitido en un día por una artista femenina británica a nivel mundial y el más transmitido en un día por una artista femenina británica en el Reino Unido y en los Estados Unidos. Tras 67 semanas, en la semana del 20 de julio de 2021, Future Nostalgia continúa en el top 10 de Billboard 200, en el sexto puesto. ',
			id: 6,
			img: HALSEY,
			amount: 1,
			favorite: false,
		},
		{
			artist: 'Maroon 5',
			disk: 'Jordi',
			price: 85.2,
			description:
				'Future Nostalgia es el segundo álbum de estudio de la cantante británica Dua Lipa. Fue lanzado el 27 de marzo de 2020 por el sello discográfico Warner Records. Comenzó el trabajo en el álbum a principios de 2018, reclutando a escritores y productores como Jeff Bhasker, Ian Kirkpatrick, Stuart Price, The Monsters and the Strangerz. Para el álbum encontró inspiración en la música de artistas que escuchó durante su adolescencia, como Gwen Stefani, Moloko, Daft Punk y Outkast. El álbum fue promocionado con seis sencillos y un sencillo promocional, Don t Start Now, se lanzó el 1 de noviembre de 2019 como el sencillo principal del álbum. Se convirtió en su séptima entrada entre los 10 primeros en la lista de sencillos del Reino Unido y su primera entrada entre los tres primeros en el Billboard Hot 100 de Estados Unidos. El tema principal del álbum Future Nostalgia se lanzó como sencillo promocional el 13 de diciembre de 2019. Su segundo sencillo Physical se estrenó el 31 de enero de 2020 y alcanzó el número siete en la lista de sencillos del Reino Unido, mientras que Break My Heart se publicó como el tercer sencillo del álbum el 25 de marzo de 2020. Para promocionar el álbum, Lipa comenzará la gira Future Nostalgia Tour en octubre de 2021. El álbum alcanzó el primer lugar en la lista del Reino Unido, convirtiéndose en su primer material en llegar a dicha posición mientras que en Billboard 200 de Estados Unidos se ubicó en la tercera ubicación. Se posicionó en la primera posición en nueve países diferentes incluyendo Escocia, Reino Unido, Estonia, Eslovaquia, República Checa, Finlandia, Lituania, Irlanda y Nueva Zelanda. En Spotify rompió tres récords en la plataforma, convirtiéndose en el álbum más transmitido en un día por una artista femenina británica a nivel mundial y el más transmitido en un día por una artista femenina británica en el Reino Unido y en los Estados Unidos. Tras 67 semanas, en la semana del 20 de julio de 2021, Future Nostalgia continúa en el top 10 de Billboard 200, en el sexto puesto. ',
			id: 7,
			img: MAROON_5,
			amount: 1,
			favorite: false,
		},
		{
			artist: 'Lil Nas X',
			disk: 'MONTERO',
			description:
				'Future Nostalgia es el segundo álbum de estudio de la cantante británica Dua Lipa. Fue lanzado el 27 de marzo de 2020 por el sello discográfico Warner Records. Comenzó el trabajo en el álbum a principios de 2018, reclutando a escritores y productores como Jeff Bhasker, Ian Kirkpatrick, Stuart Price, The Monsters and the Strangerz. Para el álbum encontró inspiración en la música de artistas que escuchó durante su adolescencia, como Gwen Stefani, Moloko, Daft Punk y Outkast. El álbum fue promocionado con seis sencillos y un sencillo promocional, Don t Start Now, se lanzó el 1 de noviembre de 2019 como el sencillo principal del álbum. Se convirtió en su séptima entrada entre los 10 primeros en la lista de sencillos del Reino Unido y su primera entrada entre los tres primeros en el Billboard Hot 100 de Estados Unidos. El tema principal del álbum Future Nostalgia se lanzó como sencillo promocional el 13 de diciembre de 2019. Su segundo sencillo Physical se estrenó el 31 de enero de 2020 y alcanzó el número siete en la lista de sencillos del Reino Unido, mientras que Break My Heart se publicó como el tercer sencillo del álbum el 25 de marzo de 2020. Para promocionar el álbum, Lipa comenzará la gira Future Nostalgia Tour en octubre de 2021. El álbum alcanzó el primer lugar en la lista del Reino Unido, convirtiéndose en su primer material en llegar a dicha posición mientras que en Billboard 200 de Estados Unidos se ubicó en la tercera ubicación. Se posicionó en la primera posición en nueve países diferentes incluyendo Escocia, Reino Unido, Estonia, Eslovaquia, República Checa, Finlandia, Lituania, Irlanda y Nueva Zelanda. En Spotify rompió tres récords en la plataforma, convirtiéndose en el álbum más transmitido en un día por una artista femenina británica a nivel mundial y el más transmitido en un día por una artista femenina británica en el Reino Unido y en los Estados Unidos. Tras 67 semanas, en la semana del 20 de julio de 2021, Future Nostalgia continúa en el top 10 de Billboard 200, en el sexto puesto. ',
			price: 102.9,
			id: 8,
			img: LIL_NAS_X,
			amount: 1,
			favorite: false,
		},
		{
			artist: 'Green	Day',
			disk: '21st Century Breakdown',
			description:
				'Future Nostalgia es el segundo álbum de estudio de la cantante británica Dua Lipa. Fue lanzado el 27 de marzo de 2020 por el sello discográfico Warner Records. Comenzó el trabajo en el álbum a principios de 2018, reclutando a escritores y productores como Jeff Bhasker, Ian Kirkpatrick, Stuart Price, The Monsters and the Strangerz. Para el álbum encontró inspiración en la música de artistas que escuchó durante su adolescencia, como Gwen Stefani, Moloko, Daft Punk y Outkast. El álbum fue promocionado con seis sencillos y un sencillo promocional, Don t Start Now, se lanzó el 1 de noviembre de 2019 como el sencillo principal del álbum. Se convirtió en su séptima entrada entre los 10 primeros en la lista de sencillos del Reino Unido y su primera entrada entre los tres primeros en el Billboard Hot 100 de Estados Unidos. El tema principal del álbum Future Nostalgia se lanzó como sencillo promocional el 13 de diciembre de 2019. Su segundo sencillo Physical se estrenó el 31 de enero de 2020 y alcanzó el número siete en la lista de sencillos del Reino Unido, mientras que Break My Heart se publicó como el tercer sencillo del álbum el 25 de marzo de 2020. Para promocionar el álbum, Lipa comenzará la gira Future Nostalgia Tour en octubre de 2021. El álbum alcanzó el primer lugar en la lista del Reino Unido, convirtiéndose en su primer material en llegar a dicha posición mientras que en Billboard 200 de Estados Unidos se ubicó en la tercera ubicación. Se posicionó en la primera posición en nueve países diferentes incluyendo Escocia, Reino Unido, Estonia, Eslovaquia, República Checa, Finlandia, Lituania, Irlanda y Nueva Zelanda. En Spotify rompió tres récords en la plataforma, convirtiéndose en el álbum más transmitido en un día por una artista femenina británica a nivel mundial y el más transmitido en un día por una artista femenina británica en el Reino Unido y en los Estados Unidos. Tras 67 semanas, en la semana del 20 de julio de 2021, Future Nostalgia continúa en el top 10 de Billboard 200, en el sexto puesto. ',
			price: 25,
			id: 9,
			img: GREEN_DAY,
			amount: 1,
			favorite: false,
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
		},
	]);

	const addProductToFavorite = (item, id, favorite) => {
		const changeStateHeartCard = data.map((item) =>
			item.id === id ? { ...item, favorite: !item.favorite } : item
		);
		setData(changeStateHeartCard);

		favorite ? removeDiscsToFavorite(item, id) : addDiscsToFavorites(item, id);
	};

	return (
		<>
			<div className="product">
				{data.map((item) => (
					<CardProduct
						key={item.id}
						item={item}
						addProductToCart={addProductToCart}
						addProductToFavorite={addProductToFavorite}
						changeValidation={changeValidation}
					/>
				))}
			</div>
		</>
	);
};

export default Product;
