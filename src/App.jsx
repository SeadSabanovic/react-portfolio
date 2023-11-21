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
import { ExpoScaleEase } from "gsap/all";
import About from "./components/About";

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
          scrub: 2,
          end: "+=" + amountToScroll,
          invalidateOnRefresh: true,
        },
      });

      tl.to(sliderInner.current, {
        x: -amountToScroll,
      });

      const slides = gsap.utils.toArray(".slider__section-content");

      /* slides.forEach((slide) => {
        tl.from(slide, {
          y: 50,
          opacity: 0,
          scrollTrigger: {
            trigger: slide,
            start: "left center",
            end: "center center",
            containerAnimation: tl,
            scrub: true,
            ease: "elastic.out(1,1)",
          },
        });
      }); */

      // First animation: Scale from 1 to 2.3
      tl.to(".work .room", {
        scale: 2.3,
        transformOrigin: "center",
        ease: ExpoScaleEase.config(1, 2.3),
        scrollTrigger: {
          trigger: ".work .polaroids",
          start: "left-=65% left",
          end: "left-=30% left",
          containerAnimation: tl,
          scrub: true,
          // markers: true,
        },
      }).to(".work .room", {
        scale: 1,
        stagger: 0.1,
        immediateRender: false,
        transformOrigin: "center",
        ease: ExpoScaleEase.config(2.3, 1),
        scrollTrigger: {
          trigger: ".work .polaroids",
          start: "left-=30% left",
          end: "left left",
          containerAnimation: tl,
          scrub: true,
          // markers: true,
        },
      });

      tl.to(
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
        );
    }, 500);
  });
  return (
    <>
      <div className="slider" ref={slider}>
        <div className="slider__inner" ref={sliderInner}>
          <div className="slider__inner__wrap">
            <div className="slider__section-content m_w_f">
              <h1>Portfolio</h1>
              <h4>Sead Sabanovic</h4>
            </div>
            <div className="slider__section-content m_w_f">
              <h3>Introduction</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
                quas et sequi nulla sed aut odit quibusdam temporibus tenetur
                deserunt.
              </p>
            </div>
            <Balcony />
            <About>
              <div className="slider__section-content">
                <h3>ABOUT</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam similique accusamus cupiditate voluptatem rem ipsum!
                  Corrupti laborum quasi atque cum.
                </p>
              </div>
            </About>
            <Work>
              <div className="slider__section-content">
                <h3>Work</h3>
                <p>
                  Please note that the portfolio displayed here represents only
                  a portion of my work. Due to non-disclosure agreements (
                  <span>NDA</span>) with certain clients and projects, I am
                  unable to showcase the complete range of my experience.
                </p>
              </div>
            </Work>
            <div className="slider__section-content m_w_f">
              <h3>Credits</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
                perspiciatis.
              </p>
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
