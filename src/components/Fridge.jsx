import { useEffect, useState } from "react";
import kitchen from "../assets/images/kitchen.svg";

export default function Fridge() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="fridge">
      <img draggable="false" className="fridge__svg" src={kitchen} alt="" />

      <div className="time">{formattedTime}</div>
    </div>
  );
}
