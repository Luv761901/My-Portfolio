import React from "react";
import "./About.css";
import python from "../../assets/new/python.png";
import C from "../../assets/new/C.png";
import html from "../../assets/new/html.png";
import css from "../../assets/new/css.png";
import JS from "../../assets/new/JS.png";
import next from "../../assets/new/next.png";
import postgres from "../../assets/new/postgres.png";
import react from "../../assets/new/react.png";

import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Luv Agarwal, a passionate Software Engineer with hands-on
              experience in web development. I've contributed to dynamic landing
              pages, and improved{" "}
              <span className="about-para-span"> UI stability </span>. I'm
              proficient in{" "}
              <span className="about-para-span">React, Next.js, Prisma </span>,
              and <span className="about-para-span">Tailwind CSS</span>, With a
              Computer Science background from{" "}
              <span className="about-para-span">PSIT Kanpur</span>, I'm driven
              to build efficient, scalable, and user-focused web applications.
            </p>

            <p className="about-tech-stack-title">
              I feel awesome while working with these stacks -
            </p>
          </div>

          <div className="about-tech-stack">
            <div className="tech-stack-wrapper">
              <img src={react} alt="react" />
              <img src={next} alt="next" />
              <img src={html} alt="html" />
              <img src={css} alt="css" />
              <img src={JS} alt="JS" />
              <img src={python} alt="python" />
              <img src={postgres} alt="postgres" />
              <img src={C} alt="C" />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
