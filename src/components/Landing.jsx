import React from "react";
import gh from "../assets/icons/gh.svg";
import li from "../assets/icons/li.svg";
import mail from "../assets/icons/mail.svg";

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing__content">
        <h3>
          Sead <br />
          Sabanovic
        </h3>
        <h6>Frontend / UI Developer</h6>
        <div className="landing__content__buttons">
          <a
            href="/Sead Sabanovic CV.pdf"
            download="Sead Sabanovic CV.pdf"
            className="button-86"
            role="button"
          >
            Curriculum Vitae
          </a>
          <a
            href="/Sead Sabanovic Cover Letter.pdf"
            download="Sead Sabanovic Cover Letter.pdf"
            className="button-86"
            role="button"
          >
            Cover Letter
          </a>
        </div>
      </div>
      <div className="landing__socials">
        <a
          href="https://github.com/SeadSabanovic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            draggable="false"
            src={gh}
            className="landing__socials__social"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/ssabanovic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            draggable="false"
            src={li}
            className="landing__socials__social"
          ></img>
        </a>
        <a href="mailto:sead.sabanovic97@gmail.com">
          <img
            draggable="false"
            src={mail}
            className="landing__socials__social"
          ></img>
        </a>
      </div>
    </div>
  );
}
