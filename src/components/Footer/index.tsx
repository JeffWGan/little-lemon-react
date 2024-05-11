import { FC, HTMLAttributes } from "react";
import { Container, Copyright } from "./styles";

const Footer: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Copyright>
        <p>© 2024 Little Lemon. All rights reserved.</p>
      </Copyright>
    </Container>
  );
};

export default Footer;
