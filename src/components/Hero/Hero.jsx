import React, { useState, useEffect } from "react";
import "./Hero.css";
import  Luv_resume from "../../assets/Luv_resume.pdf";
const titles = ["Software Engineer", "Web Developer", "Problem Solver"];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(titles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => {
        const currentIndex = titles.indexOf(prevTitle);
        return titles[(currentIndex + 1) % titles.length]; // Cycle through titles
      });
    }, 2000); // Change title every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div id="home" className="hero">
      <h1>
        I'm Luv Agarwal, <span className="changing-title">{currentTitle}</span>{" "}
        based in India.
      </h1>
      <p>
        Currently working at{" "}
        <a
          href="https://zenstreet.ai"
          className="company-span"
          target="_blank"
          rel="noopener noreferrer"
        >
          ZenStreet.ai
        </a>
        , developing frontend services with ReactJS and NextJS.
      </p>

      <div className="hero-action">
        <div className="hero-resume">
          <a href={Luv_resume} download="Luv's Resume">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
