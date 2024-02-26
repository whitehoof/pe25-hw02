// eslint-disable-next-line react/prop-types
export default function Button({ type, classNames, onClick, children }) {
	
	return (
		<button className={classNames} onClick={ onClick }>{ children }</button>
	)
}