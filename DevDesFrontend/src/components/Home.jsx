import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home--container">
      <div className="home--container">
        <div className="home--content">
        <h2>I am</h2>
        <h1>Desiree Diane Cabales</h1>
        <h3>Computer Engineer | Web Developer | Graphic Designer</h3>
        <p>
          My journey in tech started with a deep curiosity about how things
          work, leading me to pursue a career that blends development, design,
          and leadership.
        </p>
        </div>
        <div className="home--image">
          <img src="/homeDes.svg"/>
        </div>

      </div>
    </section>
  );
}
