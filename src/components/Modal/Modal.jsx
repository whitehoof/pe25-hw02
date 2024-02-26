import ModalWrapper	from "./ModalWrapper.jsx";
import ModalClose	from "./ModalClose.jsx";
import ModalHeader	from "./ModalHeader.jsx";
import ModalBody	from "./ModalBody.jsx";
import ModalFooter	from "./ModalFooter.jsx";

import {useState} from "react";

export default function Modal({ onClose, modalType }) {
	
	const [isModalOpen, setIsModalOpen] = useState(true);
	
	const addToCart = () => onClose(); // replace onClose() with a function that really deletes a product
	const faveProduct = () => onClose(); // replace onClose() with a function that really faves a product
	
	return (
		isModalOpen ? (
			<ModalWrapper onClick={ onClose }>
				<ModalClose onClick={ onClose } />
				<ModalHeader modalType={ modalType } />
				<ModalBody modalType={ modalType }/>
				
				{ modalType === 'addToCart' &&
					<ModalFooter
						firstText="no, cancel"
						firstClick={ onClose }
						secondaryText="yes, add to cart"
						secondaryClick={ addToCart }
					/>
				}
			
				{ modalType === 'addToFavorites' &&
					<ModalFooter
						firstText="add to favorites"
						firstClick={ faveProduct }
					/>
				}
				
			</ModalWrapper>
			) : null
	)
}