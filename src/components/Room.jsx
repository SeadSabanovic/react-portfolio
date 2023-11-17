import Window from "./Window";

export default function Room({ children, w_r, w_l, w_bg }) {
  return (
    <div className="room">
      {!w_bg && children}
      {w_l ? <div className="room__wall room__wall--side"></div> : null}
      {w_bg ? (
        <div className="room__wall room__wall--bg">
          <div className="room__wall__inner">{w_bg && children}</div>
          <Window></Window>
          <Window></Window>
        </div>
      ) : null}
      {w_r ? <div className="room__wall room__wall--side"></div> : null}
      <div className="room__floor"></div>
    </div>
  );
}
