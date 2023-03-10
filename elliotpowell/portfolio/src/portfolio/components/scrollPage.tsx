import { ScrollControls, Scroll } from "@react-three/drei";
import React, { useState, useEffect } from "react";

import Intro from "./intro";
import Work from "./work";
import Skills from "./skills";
import About from "./about";
import Contact from "./contact";
import Composition from "./composition";
import { Texture } from "three";
import { RepeatWrapping } from "three";
import { useTexture } from "@react-three/drei";

export default function ScrollPage({ scrl }: portfolio.ScrollPageProps) {
  const [url, setURL] = useState("https://elliot-powell.com");
  const [texture, setTexture] = useState<Texture>(new Texture());

  return (
    <>
      <ScrollControls pages={5} damping={0.1}>
        <Composition url={url} scrl={scrl} texture={texture} />
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
                <Skills texture={texture} setTexture={setTexture} />
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
