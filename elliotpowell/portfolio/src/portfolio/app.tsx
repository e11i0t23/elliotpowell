import React from "react";
import { Canvas } from "@react-three/fiber";

import ScrollPage from "./components/scrollPage";
import Composition from "./components/composition";

import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        camera={{
          position: [0, 50, 0],
          fov: 10,
          zoom: 1,
        }}
      >
        <ScrollPage />
        {/* <OrbitControls />
        <Model r1={1} url="https://elliot-powell.com" /> */}
        <ambientLight color={"yello"} intensity={0.25} />
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
                }}
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
