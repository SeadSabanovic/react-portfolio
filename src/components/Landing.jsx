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
          <button className="button-86" role="button">
            Curriculum Vitae
          </button>
          <button className="button-86" role="button">
            Cover Letter
          </button>
        </div>
      </div>
      <div className="landing__socials">
        <a
          href="https://github.com/SeadSabanovic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gh} className="landing__socials__social"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/ssabanovic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={li} className="landing__socials__social"></img>
        </a>
        <a href="mailto:sead.sabanovic97@gmail.com">
          <img src={mail} className="landing__socials__social"></img>
        </a>
      </div>
    </div>
  );
}
