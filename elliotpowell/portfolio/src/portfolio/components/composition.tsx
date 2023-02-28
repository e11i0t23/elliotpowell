/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Composition.gltf
*/

import React, { useRef, useState } from "react";
import { useGLTF, useScroll, Html } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
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
//       <group ref={group} position={[0, -height / 2.65, 2.25]} {...props}>
//         <Model r1={r1} url={url} />
//       </group>
//     </>
//   );
// }

export default function Composition({ url, ...props }) {
  const [hidden, set] = useState<boolean>();
  const [r1, setr1] = useState<number>(0);
  const { nodes, materials } = useGLTF("/static/portfolio/CompositionV10-transformed.glb");
  const { gl } = useThree();
  const group = useRef();
  const scroll = useScroll();
  const { width, height } = useThree((state) => state.viewport);
  const camera = useThree((state) => state.camera);

  useFrame((state, delta) => {
    if (group.current === undefined) return false;
    const r1 = scroll.range(0 / 4, 1 / 4);
    const r2 = scroll.range(2 / 4, 1 / 4);
    const r3 = scroll.range(3 / 4, 1 / 4);
    // scroll.offset = 0;
    // console.log(scroll.offset);
    setr1(r1);
    // const r1 = 1;
    // const r2 = 0;
    // const r3 = scroll.visible(4 / 5, 1 / 5);
    camera.position.z = 0 + rsqw(r1) * 0.5;
    camera.position.y = 0 + rsqw(r1) * 30 + rsqw(r2) * 40 + rsqw(r3) * 20;

    group.current.rotation.z = 0 + Math.PI * 0.1 * rsqw(r1) - Math.PI * 0.1 * rsqw(r2);
    group.current.rotation.x = 0 + Math.PI * 0.1 * rsqw(r2);
  });

  return (
    <>
      <spotLight position={[0, -width * 0.6, 1050]} intensity={2} angle={Math.PI / 2} />
      <group ref={group} position={[0, -height / 2.65, 9.25]} {...props} scale={0.01}>
        <group rotation={[0, Math.PI, Math.PI]}>
          {/* Room */}
          <group>
            <mesh geometry={nodes.Wall.geometry} material={materials["Opaque(64,64,64)"]} />
          </group>

          {/* Desk */}
          <group>
            <mesh geometry={nodes.Left_Unit.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.L_Drawer_1.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.L_Drawer_1_Front.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.L_Drawer_2.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.L_Drawer_3.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.L_Drawer_4.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.R_Drawer_3.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.R_Drawer_2.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.R_Drawer_4.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.R_Drawer_1.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.Right_Unit.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.Table_Top.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.L_Drawer_Front_2.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.L_Drawer_Front_3.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.L_Drawer_Front_4.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.R_Drawer_Front_1.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.R_Drawer_Front_2.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.R_Drawer_Front_3.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
            <mesh geometry={nodes.R_Drawer_Frront_4.geometry}>
              <meshStandardMaterial color={"grey"} />
            </mesh>
          </group>

          {/* Monitor */}
          <group>
            <mesh geometry={nodes.Casing.geometry}>
              <meshStandardMaterial color={"darkgrey"} />
            </mesh>
            <mesh geometry={nodes.Stand.geometry}>
              <meshStandardMaterial color={"darkgrey"} />
            </mesh>
            <mesh geometry={nodes.Screen.geometry}>
              {r1 >= 0.6 ? (
                <Html
                  className="content"
                  rotation={[Math.PI / 2, 0, 0]}
                  position={[-166.5, 268, 938.5]}
                  transform
                  occlude
                  prepend
                  portal={{ current: gl.domElement.parentNode }}
                  scale={13.9}
                  as="div"
                  onOcclude={set}
                  style={{
                    transition: "all 0.5s",
                    opacity: hidden ? 0 : 1,
                    transform: `scale(${hidden ? 0.5 : 1})`,
                  }}
                >
                  <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                    <div>
                      <iframe width={1920} height={1000} src={url} />
                    </div>
                  </div>
                </Html>
              ) : (
                <meshStandardMaterial color={"lightgrey"} />
              )}
            </mesh>
          </group>

          {/* Camera */}
          <group>
            <mesh geometry={nodes.Camera.geometry}>
              <meshStandardMaterial color={"darkgrey"} />
            </mesh>
          </group>

          {/* Mouse */}
          <group>
            <mesh geometry={nodes.Mouse_Bottom.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Mouse_Scroll_Button.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Mouse_Side_Wheel.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Mouse_Wheel.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Mouse_Button_Right.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Mouse_Button_Left.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Mouse_Top_Case.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Mouse_Thumb_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Mouse_Thumb_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Mouse_Case.geometry} material={materials["Opaque(64,64,64)"]} />
          </group>

          {/* Keyboard */}
          <group>
            <mesh geometry={nodes.Plate.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Top.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Bottom.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body182.geometry} material={materials["Opaque(64,64,64)"]} />

            <mesh geometry={nodes.Body167.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body1_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body1_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body1_1_3.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body11_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body11_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body11_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body12_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body12_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body12_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body13_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body13_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body13_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body14_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body14_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body14_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body15_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body15_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body15_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body16_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body16_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body16_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body17_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body17_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body17_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body18_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body18_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body18_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body19_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body19_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body19_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body110_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body110_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body110_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body111_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body111_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body111_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body112_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body112_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body112_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body113_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body113_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body113_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body114_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body114_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body114_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body115_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body115_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body115_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body116_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body116_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body116_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body117_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body117_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body117_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body118_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body118_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body118_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body119_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body119_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body119_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body120_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body120_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body120_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body121_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body121_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body121_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body122_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body122_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body122_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body123_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body123_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body123_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body124_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body124_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body124_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body125_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body125_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body125_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body126_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body126_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body126_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body127_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body127_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body127_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body128_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body128_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body128_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body129_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body129_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body129_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body130_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body130_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body130_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body131_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body131_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body131_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body132_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body132_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body132_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body133_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body133_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body133_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body134_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body134_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body134_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body135_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body135_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body135_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body136_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body136_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body136_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body137_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body137_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body137_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body138_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body138_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body138_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body139_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body139_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body139_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body140_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body140_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body140_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body141_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body141_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body141_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body142_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body142_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body142_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body143_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body143_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body143_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body144_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body144_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body144_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body145_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body145_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body145_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body146_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body146_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body146_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body147_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body147_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body147_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body148_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body148_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body148_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body149_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body149_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body149_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body150_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body150_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body150_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body151_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body151_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body151_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body152_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body152_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body152_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body153_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body153_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body153_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body154_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body154_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body154_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body155_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body155_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body155_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body156_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body156_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body156_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body157_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body157_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body157_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body158_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body158_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body158_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body159_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body159_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body159_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body160_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body160_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body160_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body161_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body161_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body161_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body162_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body162_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body162_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body162_1_3.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body163_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body163_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body163_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body164_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body164_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body164_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body165_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body165_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body165_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body166_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body166_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body166_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body168_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body168_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body168_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body169_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body169_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body169_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body170_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body170_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body170_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body171_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body171_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body171_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body172_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body172_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body172_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body173_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body173_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body173_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body174_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body174_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body174_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body175_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body175_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body175_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body176_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body176_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body176_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body177_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body177_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body177_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body178_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body178_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body178_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body179_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body179_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body179_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body180_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body180_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body180_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body181_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body181_1_1.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body181_1_2.geometry} material={materials["Opaque(64,64,64)"]} />
          </group>
        </group>
      </group>
    </>
  );
}

// useGLTF.preload("/static/portfolio/Composition1.gltf");