import ToFaves from "./ToFaves.jsx";
import Modal from "./Modal/Modal.jsx";

import {useState, useEffect } from "react";

export default function Product({ title, color, thumbnail, productId }) {
	
	// MODAL FOR ADDING TO CART
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] = useState('deleteProduct');
	
	const closeModal = () => setIsModalOpen(false);
	const openModal  = ( _modalType ) => {
		setModalType(_modalType);
		setIsModalOpen(true);
	};
	
	// FAVES
	const [favedList, setFavedList] = useState(new Set());
	const addFav = (pid) => setFavedList(prev => new Set([...prev, pid]));
	const removeFav = (pid) => setFavedList(prev => new Set([...prev].filter(x => x !== pid)));
	
	const [isFaved, setIsFaved] = useState(false);
	
	const updateFavs = () => {
		console.log('faves', localStorage.getItem('faves'))
		setFavedList(new Set([...JSON.parse(localStorage.getItem('faves'))]));
		
		// console.log(`product ${productId} clicked`);
		
		if ( favedList.has(productId) ) {
			// delete and save to LS
			removeFav(productId);
			localStorage.setItem('faves', JSON.stringify([...favedList]));
			setIsFaved(false);
		} else {
			// add and save to LS
			addFav(productId);
			localStorage.setItem('faves', JSON.stringify([...favedList]));
			setIsFaved(true);
		}
	}
	
	useEffect(() => {
		// шо тут в дідька писати, най би той реакт всрався, курва!
	}, []);
	
	
	
	return (
		<>
		<div className="product">
			<ToFaves isFaved={ isFaved } onClick={ updateFavs }/>
			{/* ToCart */}
			
			<h4 className="product-title">
				{ productId } { title }
			</h4>
				<div className={`product-color prod-color${color}`}></div>
		</div>
		{isModalOpen && <Modal modalType={modalType} onClose={closeModal}/>}
		</>
	)
}