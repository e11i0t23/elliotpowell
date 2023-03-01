import React, { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";

import ScrollPage from "./components/scrollPage";
import Composition from "./components/composition";

import { OrbitControls, Loader } from "@react-three/drei";

export default function App() {
  const [scrl, setScrl] = useState(0);

  return (
    <Suspense fallback={<Loader />}>
      <div style={{ height: "100vh", width: "100vw", overflow: "clip" }}>
        <Canvas
          camera={{
            position: [0, 50, 0],
            fov: 10,
            zoom: 1,
          }}
        >
          <ScrollPage scrl={scrl} />

          {/* <OrbitControls />
        <Model r1={1} url="https://elliot-powell.com" /> */}
          <ambientLight color={"white"} intensity={0.25} />
        </Canvas>
        <div className="side-bar">
          <nav className="">
            <ul className="navbar-nav list-group-horizontal">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    setScrl(0.75);
                  }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/skills"
                  onClick={(e) => {
                    e.preventDefault();
                    setScrl(0.5);
                  }}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    setScrl(0.25);
                  }}
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Suspense>
  );
}
