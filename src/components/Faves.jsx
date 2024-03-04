import Fave from '../assets/fave.svg?react';
import {useEffect, useState} from "react";

export default function Faves( ) {
	
	const [countFaves, setCountFaves] = useState([...JSON.parse(  localStorage.getItem('faves') )].length);
	
	useEffect(() => {
		const data = localStorage.getItem('faves');
		if ( data !== null) {
			setCountFaves([...JSON.parse(data)].length );
		}
	});
	
	return (
		<div className="faves" >
			<Fave />
			<span>{ countFaves }</span>
		</div>
	)
}