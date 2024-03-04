import ToFave from '../assets/fave.svg?react';
import Fave from "../assets/fave.svg";
// eslint-disable-next-line react/prop-types
export default function ToFaves( { onClick, isFaved }) {
	
	return (
		<div className={`button-small button-fave ${ isFaved() ? 'isfaved': '' }`} onClick={ onClick }>
			<ToFave />
		</div>
	)
}