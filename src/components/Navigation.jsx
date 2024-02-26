import {useEffect, useState} from "react";

export default function Navigation() {
	
	const [menuItems, setMenuItems] = useState([]);
	
	useEffect(() => {
		async function fetchData() {
			const data = await fetch('../').then(res=>res.json());
			console.log(data);
			// get categories from data
			// prepend categories with "home" menu item
			setMenuItems(data);
		};
		fetchData();
	}, []);

	function handleNavigation() {
    // handle navigation logic here
  }
	
	return (
		<nav className="navigation">
			<ul>
				{ menuItems.map( (menuItem, index) => <li onClick={ handleNavigation } key={ index }>{ menuItem }</li>) }
      </ul>
		</nav>
	)
}