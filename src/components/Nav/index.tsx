import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container } from "./styles";
import logoImg from "../../assets/logo.svg";
import {LittleLemonPages} from "../../constants";

const Nav: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
        <ul>
          <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
          <li> <HashLink to={LittleLemonPages.Home}>Home</HashLink> </li>
          <li> <HashLink to={LittleLemonPages.About}>About</HashLink> </li>
          <li> <HashLink to={LittleLemonPages.Menu}>Menu</HashLink> </li>
          <li> <HashLink to={LittleLemonPages.Reservation}>Reservations</HashLink> </li>
        </ul>
    </Container>
  );
};

export default Nav;
