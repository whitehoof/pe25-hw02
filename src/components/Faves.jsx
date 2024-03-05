import Fave from '../assets/fave.svg?react';
import {useEffect, useState} from "react";

export default function Faves( ) {
	
	
	const countItemsLS = (key, initialValue='[]') => {
		// const initialValue = '[]';
		
		try {
			const data = localStorage.getItem(key);
			
			if ( data === null) {
				// if LS key is absent, create it, set its initial value and return 0:
				localStorage.setItem(key, initialValue);
				return 0;
			} else {
				const parsedLSData = JSON.parse(data);
				// if LS key contains an array, use it. Otherwise, set LS key's initial value and return 0
				if (Array.isArray(parsedLSData)) {
					return parsedLSData.length;
				} else {
					localStorage.setItem(key, initialValue);
					return 0;
				}
			}
		}
		catch (error) {
			console.warn("countItemsLS error:\n", error);
			localStorage.setItem(key, initialValue)
		}
		
	}
	
	
	
	const [countFaves, setCountFaves] = useState(0);
	
	
	
	// 1
	useEffect(() => {
		setCountFaves(countItemsLS('faves'));
	},[countFaves]);
	
	
	
	
	return (
		<div className="faves" >
			<Fave />
			<span>{ countFaves }</span>
		</div>
	)
}