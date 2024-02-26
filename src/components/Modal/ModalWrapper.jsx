// eslint-disable-next-line react/prop-types
export default function ModalWrapper({ children, onClick }) {
	const stopClickPropagation = (event) => event.stopPropagation();
	
	return (
		<div className="modal-wrapper" onClick={ onClick }>
			<div className="modal-window" onClick={ stopClickPropagation }>
				{ children }
			</div>
		</div>
	)
}