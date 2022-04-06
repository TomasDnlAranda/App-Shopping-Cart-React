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

const Product = ({ addProductToCart, addDiscsToFavorites }) => {
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
			artist: 'Doja Cat',
			disk: 'Hot Pink',
			price: 65,
			id: 3,
			img: DOJA_CAT,
			amount: 1,
			favorite: false,
		},
		{
			artist: 'Post Malone',
			disk: 'Hollywood’s Bleeding',
			price: 57.5,
			id: 4,
			img: POST_MALONE,
			amount: 1,
			favorite: false,
		},
		{
			artist: 'Ed Sheeran',
			disk: 'Equals',
			price: 95.5,
			id: 5,
			img: ED_SHEERAN,
			amount: 1,
			favorite: false,
		},
		{
			artist: 'Halsey',
			disk: 'Manic',
			price: 65,
			id: 6,
			img: HALSEY,
			amount: 1,
			favorite: false,
		},
		{
			artist: 'Maroon 5',
			disk: 'Jordi',
			price: 85.2,
			id: 7,
			img: MAROON_5,
			amount: 1,
			favorite: false,
		},
		{
			artist: 'Lil Nas X',
			disk: 'MONTERO',
			price: 102.9,
			id: 8,
			img: LIL_NAS_X,
			amount: 1,
			favorite: false,
		},
		{
			artist: 'Green	Day',
			disk: '21st Century Breakdown',
			price: 25,
			id: 9,
			img: GREEN_DAY,
			amount: 1,
			favorite: false,
		},
		{
			artist: 'Olivia Rodrigo',
			disk: 'SOUR',
			price: 120.5,
			id: 10,
			img: OLIVIA_RODRIGO,
			amount: 1,
			favorite: false,
		},
		{
			artist: 'BTS',
			disk: 'Butter',
			price: 88.2,
			id: 11,
			img: BTS,
			amount: 1,
			favorite: false,
		},
		{
			artist: 'Tame Impala',
			disk: 'Currents',
			price: 56.5,
			id: 12,
			img: TAME_IMPALA,
			amount: 1,
			favorite: false,
		},
	]);

	const addProductToFavorite = (item, id) => {
		const changeStateHeartCard = data.map((item) =>
			item.id === id ? { ...item, favorite: !item.favorite } : item
		);
		setData(changeStateHeartCard);
		addDiscsToFavorites(item, id);
	};

	return (
		<>
			<div className="container-product">
				{data.map((item) => (
					<CardProduct
						key={item.id}
						item={item}
						addProductToCart={addProductToCart}
						addProductToFavorite={addProductToFavorite}
					/>
				))}
			</div>
		</>
	);
};

export default Product;
