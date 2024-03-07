import Logo from "./Logo.jsx"
import FavesCounter from "./FavesCounter.jsx";
import CartCounter from "./CartCounter.jsx";


// eslint-disable-next-line react/prop-types
export default function Header({ countFaves, countCart, children }) {
	
	return (
		<header className="header">
			<Logo />
			<div className="header-counters">
				<FavesCounter countFaves={ countFaves }/>
				<CartCounter countCart={ countCart } />
			</div>
		</header>
	)
}
