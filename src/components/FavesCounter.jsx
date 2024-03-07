import Fave from '../assets/fave.svg?react';

// ЛІЧИЛЬНИК ЛАЙКІВ У ШАПЦІ
export default function FavesCounter({ countFaves }) {
	
	return (
		<div className="faves" >
			<Fave />
			<span>{ countFaves }</span>
		</div>
	)
}