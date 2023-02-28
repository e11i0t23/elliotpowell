import { Html } from "@react-three/drei";
import React from "react";

const og =
  "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(245,168,61,1) 100%)";
const bg = "linear-gradient(to right, #5f2c82, #49a09d)";
const rg = "linear-gradient(to right, #aa076b, #61045f)";

export default function Intro() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(25%)",
        }}
      >
        <div className="sh">
          <div
            className="sh-symbol--rect-medium sh-symbol"
            style={{
              background: bg,
            }}
          ></div>
          <div className="sh-symbol--rect sh-symbol"></div>
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
        <div className="sh">
          <div
            className="sh-symbol--rect sh-symbol"
            style={{
              background: rg,
            }}
          ></div>
          <div className="sh-symbol--rect-short sh-symbol"></div>
          <div className="sh-symbol--circle sh-symbol"></div>
          <div
            className="sh-symbol--rect-medium sh-symbol"
            style={{
              background: bg,
            }}
          ></div>
        </div>
        <div className="sh">
          <div
            className="sh-symbol--rect-medium sh-symbol"
            style={{
              background: bg,
            }}
          ></div>
          <div
            className="sh-symbol--rect sh-symbol"
            style={{
              background: og,
            }}
          ></div>
          <div
            className="sh-symbol--rect-long sh-symbol"
            style={{
              background: rg,
            }}
          ></div>
        </div>
        <div className="sh-indent">
          <div className="sh">
            <div
              className="sh-symbol--rect-medium sh-symbol"
              style={{
                background: bg,
              }}
            ></div>
            <div className="sh-symbol"></div>
            <div
              className="sh-symbol--rect sh-symbol"
              style={{
                background: rg,
              }}
            ></div>
            <div className="sh-symbol--circle sh-symbol"></div>
          </div>
          <h1 style={{ fontSize: 60 }}>Elliot Powell</h1>
          <h5>{`Full Stack Web Developer`}</h5>
        </div>
        <div className="sh-indent"></div>
        <div className="sh">
          <div
            className="sh-symbol--rect-long sh-symbol"
            style={{
              background: og,
            }}
          ></div>
          <div className="sh-symbol--circle sh-symbol"></div>
        </div>
        <div className="sh">
          <div
            className="sh-symbol--rect-medium sh-symbol"
            style={{
              background: bg,
            }}
          ></div>
          <div
            className="sh-symbol--rect sh-symbol"
            style={{
              background: og,
            }}
          ></div>
          <div
            className="sh-symbol--rect-long sh-symbol"
            style={{
              background: rg,
            }}
          ></div>
        </div>
        <div className="sh-indent"></div>
        <div className="sh">
          <div
            className="sh-symbol--rect sh-symbol"
            style={{
              background: bg,
            }}
          ></div>
          <div className="sh-symbol"></div>
          <div className="sh-symbol--rect-medium sh-symbol"></div>
        </div>
        <div className="sh">
          <div
            className="sh-symbol--rect-long sh-symbol"
            style={{
              background: og,
            }}
          ></div>
        </div>
        <div className="sh">
          <div className="sh-symbol--rect-medium sh-symbol"></div>
          <div className="sh-symbol"></div>
          <div
            className="sh-symbol--rect sh-symbol"
            style={{
              background: bg,
            }}
          ></div>
          <div className="sh-symbol--circle sh-symbol"></div>
          <div className="sh-symbol--rect sh-symbol"></div>
        </div>
      </div>
    </>
  );
}
