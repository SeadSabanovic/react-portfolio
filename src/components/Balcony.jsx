import Room from "./Room";
import cat from "../assets/images/cat.svg";
export default function Balcony() {
  return (
    <div className="balcony">
      <Room>
        <div className="balcony__fence" />
        <img className="balcony__cat" src={cat} alt="" />
      </Room>
      {/* <img className="balcony__img" src={balconyImg} alt="" /> */}
    </div>
  );
}
