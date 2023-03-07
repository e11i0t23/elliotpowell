import { ScrollControls, Scroll } from "@react-three/drei";
import React, { useState } from "react";

import { useThree } from "@react-three/fiber";
import Intro from "./intro";
import Work from "./work";
import Skills from "./skills";
import About from "./about";
import Contact from "./contact";
import Composition from "./composition";

interface ScrollPageProps {
  scrl: number;
}

export default function ScrollPage({ scrl }: ScrollPageProps) {
  const [url, setURL] = useState("https://elliot-powell.com");
  return (
    <>
      <ScrollControls pages={5} damping={0.1}>
        <Composition url={url} scrl={scrl} />
        <Scroll html>
          <div>
            <div style={{ top: "0vh" }} className="container-mainpage title-page">
              <div className="center">
                <Intro />
              </div>
            </div>
            <div style={{ top: "100vh" }} className="container-mainpage">
              <div className="">
                <Work setURL={setURL} />
              </div>
            </div>
            <div style={{ top: "200vh" }} className="container-mainpage">
              <div className="">
                <Skills />
              </div>
            </div>
            <div style={{ top: "300vh" }} className="container-mainpage">
              <div className="center">
                <About />
              </div>
            </div>
            <div style={{ top: "400vh" }} className="container-mainpage">
              <div className="center">
                <Contact />
              </div>
            </div>
          </div>
        </Scroll>
      </ScrollControls>
    </>
  );
}
