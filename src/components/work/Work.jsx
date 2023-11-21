import React from "react";
import Room from "../Room";
import PROJECTS from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const temp =
  "https://images.pexels.com/photos/19017576/pexels-photo-19017576/free-photo-of-sunflowers-photograpy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
import shelf from "../../assets/images/shelf.svg";
export default function Work({ children }) {
  return (
    <div className="work">
      <Room w_r w_bg>
        <img className="shelf" src={shelf} alt="" />
        {children}
        <div className="polaroids">
          {PROJECTS.map((project, index) => {
            return (
              <div
                key={index}
                className={`polaroids__polaroid polaroids__polaroid--${index}`}
              >
                <img
                  className="polaroids__polaroid__img"
                  src={temp}
                  alt=""
                  loading="lazy"
                />
                <h6 className="polaroids__polaroid__name">{project.name}</h6>
              </div>
            );
          })}
        </div>
      </Room>
    </div>
  );
}
