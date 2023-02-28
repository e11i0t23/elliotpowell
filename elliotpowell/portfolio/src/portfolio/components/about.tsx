import React from "react";

const og =
  "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(245,168,61,1) 100%)";
const bg = "linear-gradient(to right, #5f2c82, #49a09d)";
const rg = "linear-gradient(to right, #aa076b, #61045f)";

export default function About() {
  return (
    <>
      <h2>Hi, Im Elliot Powell</h2>
      <div className="sh">
        <div
          className="sh-symbol--rect-medium sh-symbol"
          style={{
            background: bg,
          }}
        ></div>
        <div className="sh-symbol--circle sh-symbol"></div>
      </div>
      <div className="sh">
        <div
          className="sh-symbol--rect-long sh-symbol"
          style={{
            background: og,
          }}
        ></div>
      </div>
      <div className="sh"></div>
      <div>
        <p>
          Im a Full-Stack developer who also enjoys tinkering with electronics
          <br />
          I generally use Javascript and Typescript to build a range of frontend
          and backend project
          <br />
          Additionally I work with python for a range of automations and C++ for
          embed devices
          <br />
          Why dont you try clicking arround the items on the desk to learn more
        </p>
      </div>
      <div className="sh"></div>
      <div className="sh">
        <div
          className="sh-symbol--rect-medium sh-symbol"
          style={{
            background: bg,
          }}
        ></div>
        <div
          className="sh-symbol--rect-short sh-symbol"
          style={{
            background: rg,
          }}
        ></div>
        <div
          className="sh-symbol--rect-long sh-symbol"
          style={{
            background: og,
          }}
        ></div>
      </div>
      <div className="sh">
        <div
          className="sh-symbol--rect sh-symbol"
          style={{
            background: rg,
          }}
        ></div>
        <div className="sh-symbol"></div>
        <div
          className="sh-symbol--rect-medium sh-symbol"
          style={{
            background: bg,
          }}
        ></div>
      </div>
    </>
  );
}
