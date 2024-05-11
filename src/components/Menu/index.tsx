import { FC, HTMLAttributes } from "react";
import { Container, Top, Cards } from "./styles";
import MenuCard from "../MenuCard";
import greekSalad from "../../assets/greek-salad.jpg";
import bruschetta from "../../assets/bruschetta.svg";
import lemonDessert from "../../assets/lemon-dessert.jpg";

const Specials: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props} id="menu">
      <Top>
        <h1>Menu</h1>
      </Top>
      <Cards>
        <MenuCard
          imageUrl={bruschetta}
          title="Bruschetta"
          price={8.50}
          description="Toasted warmth meets sun-drenched bounty. A crusty slab of bread, golden brown and kissed with garlic, cradles a symphony of summer. Juicy, vine-ripened tomatoes, diced and dappled with olive oil, dance with fragrant basil leaves. Each bite, a burst of freshness, a celebration of simple, perfect flavors"
        />
        <MenuCard
          imageUrl={lemonDessert}
          title="Lemon Dessert"
          price={4.50}
          description="Sunbeams danced on Nonna's wrinkled hands as she grated mountains of fragrant lemon zest. The air buzzed with anticipation as she whisked the sunshine-hued batter, a secret family recipe. Laughter filled the kitchen as fluffy lemon pillows emerged from the oven, their citrus perfume a promise of pure summer joy."
        />
        <MenuCard
          imageUrl={greekSalad}
          title="Greek Salad"
          price={9.50}
          description="The sun-kissed tomato blushed, a jewel amidst emerald cucumber slices. Crumbled feta, a salty whisper of the Aegean, nestled beside plump Kalamata olives, their deep purple a secret whispered by the night. A drizzle of olive oil, a caress of sunshine, glistened on the crisp red onion. This wasn't just a salad; it was a taste of Greece on a plate."
        />
      </Cards>
    </Container>
  );
};

export default Specials;
