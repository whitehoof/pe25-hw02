import { useEffect, useState } from "react";
import Product from "./Product.jsx";



export default function ProductsList( { products }) {
	
	// javascript's copy of LS faves
	const [favedList, setFavedList] = useState(new Set([...JSON.parse(  localStorage.getItem('faves') )]) );
	
	
	// 1
	useEffect(() => {
		const data = localStorage.getItem('faves');
		if ( data !== null) {
			setFavedList(new Set([...JSON.parse(data)] ));
		} else {
			localStorage.setItem('faves', "[]");
			setFavedList(new Set([...JSON.parse(data)] ));
		}
	}, []);
	
	// 2
	useEffect(() => {
		localStorage.setItem('faves', JSON.stringify([...favedList]));
	});
	
	
	
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