import Cart from '../assets/cart.svg?react';

// ЛІЧИЛЬНИК КОШИКА У ШАПЦІ
export default function CartCounter({ countCarted }) {
	
	return (
		<div className="carted" >
			<Cart />
			<span>{ countCarted }</span>
		</div>
	)
}