import ToFaves from "./ToFaves.jsx";
import Modal from "./Modal/Modal.jsx";

import {useState, useEffect } from "react";





export default function Product({ productId, isFaved, isCarted, title, color, thumbnail, updateFavs }) {
	
	
	
	// MODAL FOR ADDING TO CART
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] = useState('deleteProduct');
	
	const closeModal = () => setIsModalOpen(false);
	const openModal  = ( _modalType ) => {
		setModalType(_modalType);
		setIsModalOpen(true);
	};
	
	
	
	
	
	return (
		<>
		<div className="product">
			<ToFaves isFaved={ isFaved } onClick={ updateFavs }/>
			{/* ToCart */}
			
			<h4 className="product-title">
				{ productId } { title }
				<em> { isFaved().toString() } </em>
			</h4>
				<div className={`product-color prod-color${color}`}></div>
		</div>
		{isModalOpen && <Modal modalType={modalType} onClose={closeModal}/>}
		</>
	)
}