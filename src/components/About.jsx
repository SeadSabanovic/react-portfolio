import Room from "./Room";
import Coffee from "./Coffee";
import Fridge from "./Fridge";

export default function About({children}) {
  return (
    <div className="about">
      <Room w_l w_r w_bg>
        <Fridge />
        {children}
      </Room>
      <Coffee />
    </div>
  );
}
