import Fave from '../assets/fave.svg?react';
// eslint-disable-next-line react/prop-types
export default function Faves( ) {
	
	function countFaves() {
		return 666;
	}
	
	return (
		<div className="faves" >
			<Fave />
			<span>{ countFaves() }</span>
		</div>
	)
}