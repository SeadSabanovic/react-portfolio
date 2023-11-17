import "./assets/styles/App.scss";
import "@fontsource/syne";
import "@fontsource/syne/800.css";
gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Balcony from "./components/Balcony";
import About from "./components/About/About";

function App() {
  const slider = useRef();
  const sliderInner = useRef();

  useEffect(() => {
    setTimeout(() => {
      const amountToScroll =
        sliderInner.current.offsetWidth - window.innerWidth;

      console.log(sliderInner.current.offsetWidth);
      console.log(amountToScroll);
      let tl = gsap.timeline({
        defaults: {
          ease: "none",
          duration: 1,
        },
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          end: "+=" + amountToScroll,
        },
      });

      tl.to(sliderInner.current, {
        x: -amountToScroll,
      });
    }, 500);

    /* 

    const slides = gsap.utils.toArray(".slider__section");

    let sum = 0;
    slides.forEach((slide) => {
      sum += slide.offsetWidth;
    });
    console.log(sum);

    tl.to(sliderInner.current, {
      x: -amountToScroll,
    })
      .to(
        ".landing__city__tree--1",
        {
          backgroundPositionX: `-=${slides.length * 100}%`,
        },
        "-=100%"
      )
      .to(
        ".landing__city__tree--2",
        {
          backgroundPositionX: `-=${slides.length * 90}%`,
        },
        "-=100%"
      )
      .to(
        ".landing__city__tree--3",
        {
          backgroundPositionX: `-=${slides.length * 80}%`,
        },
        "-=100%"
      )
      .to(
        ".landing__city__building--1",
        {
          backgroundPositionX: `-=${slides.length * 90}%`,
        },
        "-=100%"
      )
      .to(
        ".landing__city__building--2",
        {
          backgroundPositionX: `-=${slides.length * 85}%`,
        },
        "-=100%"
      )
      .to(
        ".landing__city__building--3",
        {
          backgroundPositionX: `-=${slides.length * 85}%`,
        },
        "-=100%"
      )
      .to(
        ".landing__city__building--4",
        {
          backgroundPositionX: `-=${slides.length * 55}%`,
        },
        "-=100%"
      )
      .to(
        ".landing__city__building--6",
        {
          backgroundPositionX: `-=${slides.length * 40}%`,
        },
        "-=100%"
      )
      .to(
        ".landing__city__building--7",
        {
          backgroundPositionX: `-=${slides.length * 38}%`,
        },
        "-=100%"
      )
      .to(
        ".landing__city__building--8",
        {
          backgroundPositionX: `-=${slides.length * 20}%`,
        },
        "-=100%"
      ); */
  });
  return (
    <>
      <div className="slider" ref={slider}>
        <div className="slider__inner" ref={sliderInner}>
          <div className="slider__inner__wrap">
            <div className="slider__section-content">
              <h1>Portfolio</h1>
              <h3>Sead Sabanovic</h3>
            </div>
            <About>
              <div className="slider__section-content">
                <h1>Portfolio</h1>
                <h3>Sead Sabanovic</h3>
              </div>
            </About>
            <div className="slider__section-content">
              <h1>Portfolio</h1>
              <h3>Sead Sabanovic</h3>
            </div>
          </div>
        </div>
      </div>
      {
        <div className="bg">
          <div className="landing__city">
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
