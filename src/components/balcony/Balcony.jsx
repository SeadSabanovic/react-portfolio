import Cat from "./Cat";

export default function Balcony() {
  return (
    <div className="balcony">
      <div className="balcony__fence" />
      {/* <img className="balcony__cat" src={cat} alt="" /> */}
      <Cat></Cat>
      <div className="balcony__floor"></div>
    </div>
  );
}
