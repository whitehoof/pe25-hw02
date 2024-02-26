// eslint-disable-next-line react/prop-types
export default function ModalClose( { onClick } ) {
	
	return (
		<div
			className="modal-close"
			onClick={ onClick }
		>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M15 1L1 15M15 15L1 1.00001"
					strokeLinecap="round"
				/>
			</svg>
		</div>
	)
}