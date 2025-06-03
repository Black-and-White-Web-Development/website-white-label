import { NavLink } from "react-router-dom";

interface Props {
	to: string;
	name: string;
	children: React.ReactNode;
}

const NavFolder = function ({ to, name, children }: Props) {
	return (
		<li className="nav__list-item">
			<NavLink
				to={to}
				className={({ isActive, isPending }) =>
					`nav__link ${
						isActive && location.pathname === to
							? `nav__link--active`
							: isPending
							? `nav__link--pending`
							: ""
					}`
				}
			>
				{name}
			</NavLink>
			<ul className="nav__list nav__list--sub-list">{children}</ul>
		</li>
	);
};

export default NavFolder;
