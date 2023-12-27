import blue1 from "./assets/dice-blue-1.svg";
import blue2 from "./assets/dice-blue-2.svg";
import blue3 from "./assets/dice-blue-3.svg";
import blue4 from "./assets/dice-blue-4.svg";
import blue5 from "./assets/dice-blue-5.svg";
import blue6 from "./assets/dice-blue-6.svg";
import red1 from "./assets/dice-red-1.svg";
import red2 from "./assets/dice-red-2.svg";
import red3 from "./assets/dice-red-3.svg";
import red4 from "./assets/dice-red-4.svg";
import red5 from "./assets/dice-red-5.svg";
import red6 from "./assets/dice-red-6.svg";

const DICE_IMAGES = {
  blue: [blue1, blue2, blue3, blue4, blue5, blue6],
  red: [red1, red2, red3, red4, red5, red6],
};

function Dice({ color = "blue", num = 1 }) {
  const src = DICE_IMAGES[color][num - 1];
  const alt = `${color} ${num}`;
  return <img src={src} alt={alt} />;
}

export default Dice;
