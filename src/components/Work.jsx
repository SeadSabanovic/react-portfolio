import React, { useEffect, useRef } from "react";
import Room from "./Room";
import PROJECTS from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import workdesk from "../assets/images/workdesk.svg";
import shelf from "../assets/images/shelf.svg";
import walldeco from "../assets/images/walldeco.svg";

export default function Work({ children }) {
  return (
    <div className="work">
      <Room w_r w_bg>
        <img draggable="false" className="shelf" src={shelf} alt="" />
        <img draggable="false" className="desk" src={workdesk} alt="" />
        <img draggable="false" className="walldeco" src={walldeco} alt="" />
        {children}
        <div className="polaroids">
          {PROJECTS.map((project, index) => {
            const content = (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className={`polaroids__polaroid polaroids__polaroid--${index}`}
              >
                <img
                  draggable="false"
                  className="polaroids__polaroid__img"
                  src={project.img}
                  alt=""
                />
                <h6 className="polaroids__polaroid__name">{project.name}</h6>
              </a>
            );
            if (index !== 1 && index !== 2) {
              return content;
            } else {
              return [content, <div key={`empty_${index}`}></div>];
            }
          })}
        </div>
      </Room>
    </div>
  );
}
