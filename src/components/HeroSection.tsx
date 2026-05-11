import type { CSSProperties } from "react";
import coupleImage from "../assets/ivan-and-victoria-no-bg.png";
import heartImage from "../assets/heart_no_bg.png";

const fallingHearts = [
  { left: "8%", size: "42px", delay: "0s", duration: "9s" },
  { left: "19%", size: "28px", delay: "1.4s", duration: "10.5s" },
  { left: "33%", size: "36px", delay: "0.8s", duration: "8.8s" },
  { left: "51%", size: "24px", delay: "2.1s", duration: "11s" },
  { left: "67%", size: "34px", delay: "0.4s", duration: "9.6s" },
  { left: "81%", size: "30px", delay: "1.8s", duration: "10.8s" },
  { left: "92%", size: "22px", delay: "2.8s", duration: "8.6s" },
];

function HeroSection() {
  return (
    <header className="hero-card section-card">
      <div className="hero-hearts" aria-hidden="true">
        {fallingHearts.map((heart) => (
          <img
            key={`${heart.left}-${heart.delay}`}
            className="hero-heart"
            src={heartImage}
            alt=""
            style={
              {
                "--heart-left": heart.left,
                "--heart-size": heart.size,
                "--heart-delay": heart.delay,
                "--heart-duration": heart.duration,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <p className="kicker">Свадебное приглашение</p>
      <h1 className="names">Виктория и Иван</h1>
      <p className="date">1 августа 2026</p>
      <div className="hero-couple-wrap">
        <div className="hero-couple-glow" aria-hidden="true" />
        <img
          className="hero-couple"
          src={coupleImage}
          alt="Виктория и Иван"
        />
      </div>
    </header>
  );
}

export default HeroSection;
