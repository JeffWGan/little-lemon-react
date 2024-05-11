import { FC } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import Menu from "../../components/Menu";
import About from "../../components/About";

const Home: FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <CallToAction />
      <Menu />
      <About />
      <Footer />
    </Container>
  );
};

export default Home;
