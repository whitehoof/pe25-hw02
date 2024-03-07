import ToFave from '../assets/fave.svg?react';


// КНОПКА ЛАЙК (ADD TO FAVOURITES)
export default function ToFaves( { onClick, isFaved }) {
	return (
		<div className={`button-small button-tofave ${ isFaved() ? 'isfaved': '' }`} onClick={ onClick }>
			<ToFave />
		</div>
	)
}