export default function ModalHeader({ modalType }) {
	
	return (
		<>
			{modalType === "deleteProduct" &&
				<img alt="Product to delete" src="./src/assets/product.jpg" width="276" />
			}
			<div className="modal-header">
				{ modalType === "deleteProduct" ? 'Product Delete!' : 'Add Product "NAME"' }
			</div>
		</>
	)
}