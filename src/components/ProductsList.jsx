import { useEffect, useState } from "react";
import Product from "./Product.jsx";



export default function ProductsList( { products }) {
	
	
	const getItemsLS = (key, initialValue='[]') => {
		if (!key) {
			throw new Error("getItemsLS() function demands a key name as its first argument. Oblige!")
		}
		try {
			const data = localStorage.getItem(key);
			if ( data === null) {
				// if LS key is absent, create it, set its initial value:
				localStorage.setItem(key, initialValue);
				// do anything else?
			} else {
				const parsedLSData = JSON.parse(data);
				// if LS key value is parseable to an array, use it. Otherwise, set LS key's initial value:
				if (Array.isArray(parsedLSData)) {
					return parsedLSData;
				} else {
					localStorage.setItem(key, initialValue);
					// do anything else?
				}
			}
		}
		
		catch (error) {
			console.warn("getItemsLS error:\n", error);
			localStorage.setItem(key, initialValue)
		}
	}
	
	
	
	
	// javascript's copy of LS faves
	const [favedList, setFavedList] = useState(null);
	
	
	
	
	useEffect(() => {
		setFavedList( new Set([...getItemsLS('faves') ]));
	},[]);
	
	
	
	const readFav = (pid) => {
		let tempSet = new Set([...JSON.parse(localStorage.getItem('faves'))]);
		console.log(`tempSet = ${[...tempSet]}`)
		console.log(`favedList.has(${pid})`, favedList.has(pid))
		return favedList.has(pid);
	};
	
	
	
	
	
	
	const updateFavourites = (pid) => {
		
		const LS = JSON.parse(localStorage.getItem('faves'));
		
		if (LS === null) {
			localStorage.setItem('faves', "[]");
		}
		
		setFavedList(new Set( LS ) );
		
		
		if ( readFav(pid) ) {
			// delete from faves and save to LS
			setFavedList(prev => new Set([...prev].filter(x => x !== pid)));
			localStorage.setItem('faves', JSON.stringify([...favedList]));
			
		} else {
			// add to faves and save to LS
			setFavedList(prev => new Set([...prev, pid]));
			localStorage.setItem('faves', JSON.stringify([...favedList]));
		}
		
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
							
							isFaved={ () => favedList.has(product.id) }
							updateFavs={ () => updateFavourites(product.id) }
							
						/> )
					)
					:
					( <p>Products are loading...</p> )
				}
			</div>
			
		</>
	)
}