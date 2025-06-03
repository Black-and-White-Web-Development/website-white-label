import { NavLink } from "react-router-dom";

interface Props {
	to: string;
	name: string;
}

const NavItem = function ({ to, name }: Props) {
	return (
		<li className="nav__list-item">
			<NavLink
				to={to}
				className={({ isActive, isPending }) =>
					`nav__link ${isActive ? "nav__link--active" : isPending ? "nav__link--pending" : ""}`
				}
			>
				{name}
			</NavLink>
		</li>
	);
};

export default NavItem;
