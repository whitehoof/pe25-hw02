import Cart from '../assets/cart.svg?react';

// ЛІЧИЛЬНИК КОШИКА У ШАПЦІ
export default function CartCounter({ countCart }) {
	
	return (
		<div className="faves" >
			<Cart />
			<span>{ countCart }</span>
		</div>
	)
}