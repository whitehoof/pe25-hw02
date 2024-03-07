import ToFaves from "./ToFaves.jsx";
import ToCart	from "./ToCart.jsx";
import Modal from "./Modal/Modal.jsx";

import {useState } from "react";


export default function Product({ productId, isFaved, isCarted, title, color, thumbnail, updateFavs, updateCart }) {
	
	
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
			<div className="product-header">
				<ToFaves isFaved={ isFaved } onClick={ updateFavs }/>
				<h4 className="product-title">{ productId } { title }</h4>
				<ToCart isCarted={ isCarted } onClick={ updateCart }/>
			</div>
			<em>image here</em>
			<div className={`product-color prod-color${color}`}></div>
		</div>
		{isModalOpen && <Modal modalType={modalType} onClose={closeModal}/>}
		</>
	)
}