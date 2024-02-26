import { useEffect, useState } from "react";
import Product from "./Product.jsx";

export default function ProductsList( { products }) {
	
	
	
	return (
		<div className="products">
			
			
			{products ?
				(
					products.map( (product, index) => <Product key={index} title={product.title} color={product.color} thumbnail={product.thumbnail} productId={product.id}/> )
				)
				:
				( <p>Products are loading...</p> )
				
			}
		</div>
	)
}