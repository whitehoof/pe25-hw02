import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx"

import './App.scss'
import {useEffect, useState} from "react";
import {getItemsFromLS} from "./utils/functions.js";

function App() {
	
	const [countFaves, setCountFaves] = useState(0);
	const [countCarted, setCountCarted] = useState(0);
	
	// OK.
	useEffect(() => {
		const _f = getItemsFromLS('faves') || [];
		setCountFaves(_f.length);
	}, [countFaves]);
	
	// OK.
	useEffect(() => {
		const _c = getItemsFromLS('carted') || [];
		setCountFaves(_c.length);
	}, [countCarted]);
	
	
	return (
		<>
			<Header countFaves={ countFaves } countCarted={ countCarted }  />
			<Home setCountFaves={ setCountFaves } setCountCarted={ setCountCarted } />
		</>
	)
}

export default App
