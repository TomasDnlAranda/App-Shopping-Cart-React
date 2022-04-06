import Navbar from './components/Navbar';
import Product from './components/Product';
import CartShopping from './components/CartShopping';
import { useState } from 'react';
import './css/app.css';

function App() {
	const [cartProducts, setCartProducts] = useState([]);
	const [favoriteDiscs, setfavoriteDiscs] = useState([]);

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

	return (
		<>
			<Navbar favoriteDiscs={favoriteDiscs} />
			<div className="container">
				<div className="container-left">
					<Product addProductToCart={addProductToCart} addDiscsToFavorites={addDiscsToFavorites} />
				</div>
				<div className="container-right">
					<CartShopping
						cartProducts={cartProducts}
						removeProductFromCart={removeProductFromCart}
						filterAmount={filterAmount}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
