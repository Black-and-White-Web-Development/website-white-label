import { CaretDownIcon } from "@radix-ui/react-icons";
import { NavigationMenu } from "radix-ui";

interface Props {
	name: string;
	children: React.ReactNode;
}

const NavDropdown = function ({ name, children }: Props) {
	return (
		<NavigationMenu.Item className="nav__list-item">
			<NavigationMenu.Trigger className="nav__trigger">
				{name}
				<CaretDownIcon className="nav__caret" aria-hidden />
			</NavigationMenu.Trigger>
			<NavigationMenu.Content className="nav__content">
				<NavigationMenu.List className="nav__list nav__list--sub-list">
					{children}
				</NavigationMenu.List>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	);
};

export default NavDropdown;
