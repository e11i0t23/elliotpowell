/* 
The react Component for the about page, a simple text only component
*/

import React from "react";

export default function About() {
  return (
    <>
      <h2>Hi, Im Elliot Powell</h2>
      <div className="sh">
        <div className="sh-symbol--rect-medium sh-symbol sh-gradient-2"></div>
        <div className="sh-symbol--circle sh-symbol"></div>
      </div>
      <div className="sh">
        <div className="sh-symbol--rect-long sh-symbol sh-gradient-1"></div>
      </div>
      <div className="sh"></div>
      <div>
        <p>
          Im a Full-Stack developer who also enjoys tinkering with electronics
          <br />
          I generally use Javascript and Typescript to build a range of frontend and backend project
          <br />
          Additionally I work with python for a range of automations and C++ for embed devices
          <br />
          Why dont you try clicking arround the items on the desk to learn more
        </p>
      </div>
      <div className="sh"></div>
      <div className="sh">
        <div className="sh-symbol--rect-medium sh-symbol sh-gradient-2"></div>
        <div className="sh-symbol--rect-short sh-symbol sh-gradient-3"></div>
        <div className="sh-symbol--rect-long sh-symbol sh-gradient-1"></div>
      </div>
      <div className="sh">
        <div className="sh-symbol--rect sh-symbol sh-gradient-3"></div>
        <div className="sh-symbol"></div>
        <div className="sh-symbol--rect-medium sh-symbol sh-gradient-2"></div>
      </div>
    </>
  );
}
