import "./assets/styles/App.scss";
import "@fontsource/syne";
import "@fontsource/syne/800.css";
gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Work from "./components/Work";
import Balcony from "./components/Balcony";
import About from "./components/About";
import Landing from "./components/Landing";

import scroll from "./assets/images/scroll.svg";
import down from "./assets/icons/down.svg";

function App() {
  const slider = useRef();
  const sliderInner = useRef();

  useEffect(() => {
    let tl;

    const onPageLoad = () => {
      const bars = gsap.utils.toArray(".loader__bar");

      setTimeout(() => {
        /* gsap.to(".loader__bar__blob", {
          scale: 0,
        });
        gsap.to(bars, {
          stagger: 0.1,
          scaleX: 0,
        }); */
      }, 1000);
    };

    const onResize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      console.log(vh);
    };
    onResize();

    window.addEventListener("resize", () => onResize());

    setTimeout(() => {
      const amountToScroll =
        sliderInner.current.offsetWidth - window.innerWidth;
      tl = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          end: "+=" + amountToScroll,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // self.progress will give you the current progress of the ScrollTrigger
            const scrollTriggerProgress = self.progress;
            // console.log("ScrollTrigger Progress:", scrollTriggerProgress);
          },
        },
      });

      tl.to(sliderInner.current, {
        x: -amountToScroll,
      });

      tl.to(".work .room", {
        scale: 2.3,
        transformOrigin: "center",
        ease: "power2.inOut",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".work .polaroids",
          start: "left-=120% left",
          end: "left-=80% left",
          containerAnimation: tl,
          scrub: true,
        },
      }).to(".work .room", {
        scale: 1,
        stagger: 0.1,
        immediateRender: false,
        transformOrigin: "center",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".work .polaroids",
          start: "left+=70% left",
          end: "left+=110% left",
          containerAnimation: tl,
          scrub: true,
        },
      });

      tl.to(
        ".landing__city__tree--1",
        {
          backgroundPositionX: `-=900px`,
        },
        "-=100%"
      )
        .to(
          ".landing__city__tree--2",
          {
            backgroundPositionX: `-=700px`,
          },
          "-=100%"
        )
        .to(
          ".landing__city__tree--3",
          {
            backgroundPositionX: `-=500px`,
          },
          "-=100%"
        )
        .to(
          ".landing__city__building--1",
          {
            backgroundPositionX: `-=800px`,
          },
          "-=100%"
        )
        .to(
          ".landing__city__building--2",
          {
            backgroundPositionX: `-=600px`,
          },
          "-=100%"
        )
        .to(
          ".landing__city__building--3",
          {
            backgroundPositionX: `-=550px`,
          },
          "-=100%"
        )
        .to(
          ".landing__city__building--4",
          {
            backgroundPositionX: `-=450px`,
          },
          "-=100%"
        )
        .to(
          ".landing__city__building--6",
          {
            backgroundPositionX: `-=400px`,
          },
          "-=100%"
        )
        .to(
          ".landing__city__building--7",
          {
            backgroundPositionX: `-=350px`,
          },
          "-=100%"
        )
        .to(
          ".landing__city__building--8",
          {
            backgroundPositionX: `-=300px`,
          },
          "-=100%"
        );
    }, 500);

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  });
  return (
    <>
      <div className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar">
          <div className="loader__bar__blob"></div>
        </div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
      </div>
      <div className="noise"></div>
      <div className="slider" ref={slider}>
        <div className="slider__inner" ref={sliderInner}>
          <div className="slider__inner__wrap">
            <Landing />
            <Balcony />
            <About>
              <div className="slider__section-content">
                <h3>ABOUT</h3>
                <p>
                  Hello! I'm <span>Sead Sabanovic</span>, a developer excited
                  about entering the world of React. With 26 years of life
                  experience and over 3 years of development experience, I bring
                  a combination of skills, passion, and a strong desire to
                  excel.
                </p>
                <p>
                  Highly motivated, quick to learn, and eager to prove myself by
                  taking on challenging tasks. If you're interested in learning
                  more about my qualifications and experience, please feel free
                  to connect with me via{" "}
                  <a
                    href="https://www.linkedin.com/in/ssabanovic/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>{" "}
                  or reach out via{" "}
                  <a href="mailto:sead.sabanovic97@gmail.com">email</a>.
                </p>
              </div>
            </About>
            <Work>
              <div className="slider__section-content">
                <h3>Work</h3>
                <p>
                  Please note that the portfolio displayed here represents only
                  a portion of my work. Due to non-disclosure agreements with
                  certain clients and projects, I am unable to showcase the
                  complete range of my experience.
                </p>
                <p>
                  Feel free to visit my{" "}
                  <a
                    href="https://github.com/SeadSabanovic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  profile to get a broader view of my coding skills and the
                  variety of projects I've been involved in.
                </p>
              </div>
            </Work>
            <div className="credits">
              <div className="slider__section-content">
                <h6>Illustrations</h6>
                <a
                  href="https://storyset.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  storyset.com
                </a>
                <a
                  href="https://www.freepik.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  freepik.com
                </a>
                <p>&copy; Sead Sabanovic Portfolio 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        <div className="bg">
          <div className="landing__city">
            <img className="bg__scroll" src={scroll} alt="" />
            <img className="bg__icon" src={down} alt="" />
            <div className="landing__city__tree landing__city__tree--1"></div>
            <div className="landing__city__tree landing__city__tree--2"></div>
            <div className="landing__city__tree landing__city__tree--3"></div>
            <div className="landing__city__building landing__city__building--1"></div>
            <div className="landing__city__building landing__city__building--2"></div>
            <div className="landing__city__building landing__city__building--3"></div>
            <div className="landing__city__building landing__city__building--4"></div>
            <div className="landing__city__building landing__city__building--6"></div>
            <div className="landing__city__building landing__city__building--7"></div>
            <div className="landing__city__building landing__city__building--8"></div>
          </div>
        </div>
      }
    </>
  );
}

export default App;
