import { useEffect, useState } from "react";
import Product from "./Product.jsx";
import { getItemsFromLS } from "../utils/functions.js";


export default function ProductsList( { products, setCountFaves, setCountCarted }) {
	
	const [favedList, setFavedList] = useState([]);
	const [cartedList, setCartedList] = useState([]);
	
	// FAVES:
	useEffect(() => {
		setFavedList(getItemsFromLS('faves'));
	},[JSON.stringify(favedList)]);
	
	// CART:
	useEffect(() => {
		setCartedList(getItemsFromLS('carted'));
	},[JSON.stringify(cartedList)]);
	
	
	
	
	const toggleFav = (pid) => {
		let _f = favedList;
		
		if ( _f.includes(pid) ) {
			_f.splice(_f.indexOf(pid), 1);
			localStorage.setItem('faves', JSON.stringify(_f));
			
		} else {
			// add to LS
			_f.push(pid);
			localStorage.setItem('faves', JSON.stringify(_f));
		}
		
		setCountFaves( favedList.length )
	}
	
	
	
	
	const toggleCarted = (pid) => {
		let _c = cartedList;
		
		if ( _c.includes(pid) ) {
			_c.splice(_c.indexOf(pid), 1);
			localStorage.setItem('carted', JSON.stringify(_c));
			
		} else {
			// add to LS
			_c.push(pid);
			localStorage.setItem('carted', JSON.stringify(_c));
		}
		
		setCountCarted( cartedList.length )
	}
	
	
	
	return (
		<>
			<div className="products">
				{ products ?
					(
						products.map( product => <Product
							key={ product.id }
							productId={ product.id }
							title={ product.title }
							color={ product.color }
							thumbnail={ product.thumbnail }
							
							isFaved={ () => favedList.includes(product.id) }
							updateFavs={ () => toggleFav(product.id) }
							
							isCarted={ () => cartedList.includes(product.id) }
							updateCart={ () => toggleCarted(product.id) }
						/> )
					)
					:
					( <p>Products are loading...</p> )
				}
			</div>
		</>
	)
}