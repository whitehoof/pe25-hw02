import Button from "../Button.jsx";
// eslint-disable-next-line react/prop-types
export default function ModalFooter( { firstText, firstClick, secondaryText, secondaryClick }) {
	
	return (
		<div className="modal-footer">
			{
				firstText && firstClick ? (
					<Button classNames="button-primary" onClick={ firstClick }>
						{ firstText }
					</Button>
				) : null
			}
			{
				secondaryText && secondaryClick ? (
					<Button classNames="button-secondary" onClick={ secondaryClick }>
						{ secondaryText }
					</Button>
				) : null
			}
		</div>
	)
}