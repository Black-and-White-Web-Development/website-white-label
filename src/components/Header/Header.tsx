import { NavLink } from "react-router-dom";

const Header = function () {
	const block = "nav";

	return (
		<header className="header">
			<nav className={`${block}`}>
				<ul className={`${block}__list`}>
					<li className={`${block}__list-item`}>
						<NavLink
							to="/"
							className={({ isActive, isPending }) =>
								`${block}__link ${
									isActive ? `${block}__link--active` : isPending ? `${block}__link--pending` : ""
								}`
							}
						>
							Home
						</NavLink>
					</li>
					<li className={`${block}__list-item`}>
						<NavLink
							to="/about"
							className={({ isActive, isPending }) =>
								`${block}__link ${
									isActive ? `${block}__link--active` : isPending ? `${block}__link--pending` : ""
								}`
							}
						>
							About
						</NavLink>
					</li>
					<li className={`${block}__list-item`}>
						<NavLink
							to="/services"
							className={({ isActive, isPending }) =>
								`${block}__link ${
									isActive ? `${block}__link--active` : isPending ? `${block}__link--pending` : ""
								}`
							}
						>
							Services
						</NavLink>
						<ul className={`${block}__list`}>
							<li className={`${block}__list-item`}>
								<NavLink
									to="/services/planning"
									className={({ isActive, isPending }) =>
										`${block}__link ${
											isActive
												? `${block}__link--active`
												: isPending
												? `${block}__link--pending`
												: ""
										}`
									}
								>
									Planning
								</NavLink>
							</li>
							<li className={`${block}__list-item`}>
								<NavLink
									to="/services/development"
									className={({ isActive, isPending }) =>
										`${block}__link ${
											isActive
												? `${block}__link--active`
												: isPending
												? `${block}__link--pending`
												: ""
										}`
									}
								>
									Development
								</NavLink>
							</li>
							<li className={`${block}__list-item`}>
								<NavLink
									to="/services/review"
									className={({ isActive, isPending }) =>
										`${block}__link ${
											isActive
												? `${block}__link--active`
												: isPending
												? `${block}__link--pending`
												: ""
										}`
									}
								>
									Review
								</NavLink>
							</li>
						</ul>
					</li>
					<li className={`${block}__list-item`}>
						<NavLink
							to="/blog"
							className={({ isActive, isPending }) =>
								`${block}__link ${
									isActive ? `${block}__link--active` : isPending ? `${block}__link--pending` : ""
								}`
							}
						>
							Blog
						</NavLink>
					</li>
					<li className={`${block}__list-item`}>
						<NavLink
							to="/contact"
							className={({ isActive, isPending }) =>
								`${block}__link ${
									isActive ? `${block}__link--active` : isPending ? `${block}__link--pending` : ""
								}`
							}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
