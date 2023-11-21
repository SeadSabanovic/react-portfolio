import coffee from "../../assets/images/coffee.svg";
import hasbulla from "../../assets/images/hasbulla.gif";
export default function Coffee() {
  return (
    <div className="coffee">
      <img className="coffee__img" src={coffee} alt="" />
      <div className="coffee__smoke">
        <div className="coffee__smoke__1"></div>
        <div className="coffee__smoke__2"></div>
        <div className="coffee__smoke__3"></div>
      </div>
      <img className="coffee__hasbulla" loading="lazy" src={hasbulla} alt="" />
    </div>
  );
}
