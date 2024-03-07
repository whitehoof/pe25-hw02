import ToFave from '../assets/cart.svg?react';


// КНОПКА В_КОШИК (ADD TO CART)
export default function ToCart( { onClick, isCarted }) {
	return (
		<div className={`button-small button-tocart ${ isCarted() ? 'iscarted': '' }`} onClick={ onClick }>
			<ToFave />
		</div>
	)
}