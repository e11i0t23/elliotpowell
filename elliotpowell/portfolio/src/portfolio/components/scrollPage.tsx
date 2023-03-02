import { ScrollControls, Scroll, useGLTF, useScroll, Html } from "@react-three/drei";
import React, { useRef, useState, forwardRef, useEffect } from "react";

import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Intro from "./intro";
import Work from "./work";
import Skills from "./skills";
import About from "./about";
import Contact from "./contact";
import Composition from "./composition";

const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

export default function ScrollPage({ scrl, ...props }) {
  const { viewport } = useThree();
  const [url, setUrl] = useState("https://elliot-powell.com");
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
                <Work setUrl={setUrl} />
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

// function Composition({ url, ...props }) {
//   const scroll = useScroll();
//   const { width, height } = useThree((state) => state.viewport);
//   const camera = useThree((state) => state.camera);
//   const set = useThree((state) => state.set);
//   const group = useRef();
//   const desk = useRef();
//   const monitor = useRef();
//   const [r1, setr1] = useState(0);

//   useFrame((state, delta) => {
//     if (group.current === undefined) return false;
//     const r1 = scroll.range(0 / 4, 1 / 4);
//     const r2 = scroll.range(2 / 4, 1 / 4);
//     const r3 = scroll.range(3 / 4, 1 / 4);
//     // scroll.offset = 0;
//     // console.log(scroll.offset);
//     setr1(r1);
//     // const r1 = 1;
//     // const r2 = 0;
//     // const r3 = scroll.visible(4 / 5, 1 / 5);
//     camera.position.z = 0 + rsqw(r1) * 0.5;
//     camera.position.y = 0 + rsqw(r1) * 30 + rsqw(r2) * 40 + rsqw(r3) * 20;

//     group.current.rotation.z = 0 + Math.PI * 0.1 * rsqw(r1) - Math.PI * 0.1 * rsqw(r2);
//     group.current.rotation.x = 0 + Math.PI * 0.1 * rsqw(r2);
//   });

//   return (
//     <>
//       <spotLight position={[0, -width * 0.6, 1050]} intensity={2} angle={Math.PI / 2} />
//       <group ref={group} position={[0, -height / 2.65, 2.25]} {...props}>
//         <Model r1={r1} url={url} />
//       </group>
//     </>
//   );
// }
