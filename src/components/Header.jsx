import Logo from "./Logo.jsx"
import Faves from "./Faves.jsx";


// eslint-disable-next-line react/prop-types
export default function Header({ children }) {
	
	function getMenuItems(){
	
	}
	
	function clickMenu(event) {
  
  }
	
	return (
		<header className="header">
			<Logo />
			<Faves />
			{/*<Cart />*/}
		</header>
	)
}
