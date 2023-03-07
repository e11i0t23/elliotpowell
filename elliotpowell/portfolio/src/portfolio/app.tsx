import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import useWindowDimensions from "./util/windowDimesnions";

import ScrollPage from "./components/scrollPage";

export default function App() {
  const { innerHeight, innerWidth } = useWindowDimensions();
  const [scrl, setScrl] = useState(0);

  return (
    <Suspense fallback={<Loader />}>
      <div style={{ height: "100vh", width: "100vw", overflow: "clip", color: "#ededed" }}>
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
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setScrl(1);
                  }}
                >
                  Contact
                </a>
              </li>
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
        {innerHeight > 500 && innerWidth > 600 && (
          <div className="footer">
            <footer>
              <ul className="navbar-nav list-group-horizontal">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/github"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://github.com/e11i0t23", "_blank");
                    }}
                  >
                    Github
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/email"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("mailto:elliot2810@gmail.com", "_blank");
                    }}
                  >
                    Email
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/resume"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("/static/portfolio/public/elliot-powell-resume.pdf", "_blank");
                    }}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        )}
      </div>
    </Suspense>
  );
}
