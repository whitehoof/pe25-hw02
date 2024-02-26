export default function ModalBody({ modalType }) {
	
	return (
		<p>
			{ modalType === 'deleteProduct' && 'By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted.'}
			{ modalType === 'addToFavorites' && 'Description for you product'}
		</p>
	)
}