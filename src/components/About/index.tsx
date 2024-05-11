import { FC } from "react";
import { Container, Content, Image } from "./styles";
import AboutImage1 from "../../assets/about-1.jpg";
import AboutImage2 from "../../assets/about-2.jpg";

const About: FC = (): JSX.Element => {
  return (
    <Container id="about">
      <Content>
        <h1>Little Lemon</h1>
        <h2>New York</h2>
        <p className="lead-txt">
          Push open the weathered door at Little Lemon. Laughter and the sizzle of souvlaki greet you. Nikki's eyes twinkling, presides over the open kitchen, her seasoned hands weaving magic with age-old recipes.
        </p>
        <p>
          Her grandson, Niko, works beside her, youthful energy blending with tradition as he sculpts dough. The scent of sun-drenched Greece fills the air, warmth radiating from terracotta walls. Sophia, her smile as bright as the Aegean, ensures every guest feels welcome. Here, it's more than a meal; it's a family celebration.
        </p>
        <p className="lead-txt">
          Come hungry, come thirsty, come book a Little Lemon table.
        </p>
      </Content>
      <Image>
        <img src={AboutImage1} alt="About Little Lemon" />
        <img src={AboutImage2} alt="About Little Lemon" />
      </Image>
    </Container>
  );
};

export default About;
