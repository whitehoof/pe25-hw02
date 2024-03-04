import { useEffect, useState } from "react";
import ProductsList from "./ProductsList.jsx";


export default function Home() {
	
	const JSON_SRC = '/products.json';
	
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		// PRODUCTS
		async function fetchData() {
			const data = await fetch(JSON_SRC).then( res => res.json() );
			setProducts( data );
		}
		fetchData();
		
	}, []);
	
	
	return (
		<>
			<ProductsList products={ products }/>
		</>
	)
}