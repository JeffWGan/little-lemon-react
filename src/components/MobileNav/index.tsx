import { useState, FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Menu } from "./styles";
import logoImg from "../../assets/logo.svg";
import menuImg from "../../assets/hamburger-menu.svg";
import closeImg from "../../assets/close.svg";
import {LittleLemonPages} from "../../constants";

const MobileNav: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(prevValue => !prevValue);
  };

  return (
    <Container {...props}>
      <ul>
        <li>
          <button aria-label="Open menu" onClick={handleMenu}>
            <img src={menuImg} alt="Open menu" />
          </button>
        </li>
      </ul>

      <Menu className={menuOpen ? "opened" : ""}>
        <button aria-label="Close menu" onClick={handleMenu}>
          <img src={closeImg} alt="Close menu" />
        </button>
        <ul>
          <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
          <li> <HashLink to={LittleLemonPages.Home}>Home</HashLink> </li>
          <li> <HashLink to={LittleLemonPages.About}>About</HashLink> </li>
          <li> <HashLink to={LittleLemonPages.Menu}>Menu</HashLink> </li>
          <li> <HashLink to={LittleLemonPages.Reservation}>Reservations</HashLink> </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default MobileNav;
