import Header from "./components/Header.jsx";
import ProductsList from "./components/ProductsList.jsx";
import productsLOCAL from './public/products.json';

import {useEffect, useState} from 'react'

import './App.scss'

function App() {
	
	// const JSON_SRC = 'https://dummyjson.com/users';
	const JSON_SRC = 'products.json';
	
	const [products, setProducts] = useState(null);
	
	useEffect(() => {
		setProducts( productsLOCAL )
		// async function fetchData() {
		// 	const data = await fetch(JSON_SRC)
		// 		.then( res => res.json() );
		// 	setProducts( data );
		// 	console.log(data)
		// }
		// fetchData();
	}, []);
	
	
	
	
	
	return (
		<>
			<Header/>
			<ProductsList products={ products } />
		</>
	)
}

export default App
