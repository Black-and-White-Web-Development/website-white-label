import NavFolder from "./NavFolder";
import NavItem from "./NavItem";
import "./Navigation.scss";

const Navigation = function () {
	return (
		<nav className="nav">
			<ul className="nav__list">
				<NavItem to="/" name="Home" />
				<NavItem to="/about" name="About" />
				<NavFolder to="/services" name="Services">
					<NavItem to="/services/planning" name="Planning" />
					<NavItem to="/services/development" name="Development" />
					<NavItem to="/services/review" name="Review" />
				</NavFolder>
				<NavItem to="/blog" name="Blog" />
				<NavItem to="/contact" name="Contact" />
			</ul>
		</nav>
	);
};

export default Navigation;
