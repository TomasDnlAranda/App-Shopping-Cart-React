import Navbar from './components/Navbar';
import Product from './components/Product';
import CartShopping from './components/CartShopping';
import { useEffect, useState } from 'react';
import './css/app.css';
import { Outlet } from 'react-router-dom';

function App() {
	const [cartProducts, setCartProducts] = useState([]);

	const [favoriteDiscs, setfavoriteDiscs] = useState([]);

	let [validation, setValidation] = useState(false);

	const addProductToCart = (product) => {
		const index = cartProducts.findIndex((item) => item.id === product.id);
		if (index === -1) {
			setCartProducts((old) => [...old, product]);
		} else {
			const increaseQuantity = cartProducts.map((item) =>
				item.id === product.id ? { ...item, amount: item.amount + 1 } : item
			);
			setCartProducts(increaseQuantity);
		}
	};

	const removeProductFromCart = (id) => {
		const remove = cartProducts.map((item) =>
			item.id === id ? { ...item, amount: item.amount - 1 } : item
		);
		setCartProducts(remove);
	};

	const filterAmount = (id) => {
		const filterProduct = cartProducts.filter((product) => product.amount !== 0);
		setCartProducts(filterProduct);
	};

	const addDiscsToFavorites = (item, id) => {
		const index = favoriteDiscs.findIndex((item) => item.id === id);
		if (index === -1) {
			setfavoriteDiscs((old) => [...old, item]);
		}
	};

	const removeDiscsToFavorite = (item, id) => {
		const removeDisc = favoriteDiscs.filter((item) => item.id !== id);
		setfavoriteDiscs(removeDisc);
	};

	const changeValidation = () => {
		setValidation(!validation);
	};

	useEffect(() => {
		if (localStorage.getItem('addCart')) {
			setCartProducts(JSON.parse(localStorage.getItem('addCart')));
		}
	}, []);

	useEffect(() => {
		if (localStorage.getItem('addF')) {
			setfavoriteDiscs(JSON.parse(localStorage.getItem('addF')));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('addCart', JSON.stringify(cartProducts));
	}, [cartProducts]);

	useEffect(() => {
		localStorage.setItem('addF', JSON.stringify(favoriteDiscs));
	}, [favoriteDiscs]);

	return (
		<>
			<Navbar favoriteDiscs={favoriteDiscs} />
			{validation ? (
				<Outlet />
			) : (
				<div className="app">
					<div className="app__section-left">
						<Product
							addProductToCart={addProductToCart}
							addDiscsToFavorites={addDiscsToFavorites}
							removeDiscsToFavorite={removeDiscsToFavorite}
							changeValidation={changeValidation}
						/>
					</div>
					<div className="app__section-rigth">
						<CartShopping
							cartProducts={cartProducts}
							removeProductFromCart={removeProductFromCart}
							filterAmount={filterAmount}
						/>
					</div>
				</div>
			)}
		</>
	);
}

export default App;
