/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Composition.gltf
*/

import React, { useRef, useState, useMemo } from "react";
import { useGLTF, useScroll, Html } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

type GLTFResult = GLTF & {
  nodes: {
    Left_Unit: THREE.Mesh;
    L_Drawer_1: THREE.Mesh;
    L_Drawer_1_Front: THREE.Mesh;
    L_Drawer_2: THREE.Mesh;
    L_Drawer_3: THREE.Mesh;
    L_Drawer_4: THREE.Mesh;
    R_Drawer_3: THREE.Mesh;
    R_Drawer_2: THREE.Mesh;
    R_Drawer_4: THREE.Mesh;
    R_Drawer_1: THREE.Mesh;
    Right_Unit: THREE.Mesh;
    Table_Top: THREE.Mesh;
    L_Drawer_Front_2: THREE.Mesh;
    L_Drawer_Front_3: THREE.Mesh;
    L_Drawer_Front_4: THREE.Mesh;
    R_Drawer_Front_1: THREE.Mesh;
    R_Drawer_Front_2: THREE.Mesh;
    R_Drawer_Front_3: THREE.Mesh;
    R_Drawer_Frront_4: THREE.Mesh;
    Camera: THREE.Mesh;
    Casing: THREE.Mesh;
    Stand: THREE.Mesh;
    Screen: THREE.Mesh;
    Body1: THREE.Mesh;
    Body11: THREE.Mesh;
    Body12: THREE.Mesh;
    Body13: THREE.Mesh;
    Body14: THREE.Mesh;
    Body15: THREE.Mesh;
    Body16: THREE.Mesh;
    Body17: THREE.Mesh;
    Body18: THREE.Mesh;
    Body19: THREE.Mesh;
    Body110: THREE.Mesh;
    Body111: THREE.Mesh;
    Body112: THREE.Mesh;
    Body113: THREE.Mesh;
    Body114: THREE.Mesh;
    Body115: THREE.Mesh;
    Body116: THREE.Mesh;
    Body117: THREE.Mesh;
    Body118: THREE.Mesh;
    Body119: THREE.Mesh;
    Body120: THREE.Mesh;
    Body121: THREE.Mesh;
    Body122: THREE.Mesh;
    Body123: THREE.Mesh;
    Body124: THREE.Mesh;
    Body125: THREE.Mesh;
    Body126: THREE.Mesh;
    Body127: THREE.Mesh;
    Body128: THREE.Mesh;
    Body129: THREE.Mesh;
    Body130: THREE.Mesh;
    Body131: THREE.Mesh;
    Body132: THREE.Mesh;
    Body133: THREE.Mesh;
    Body134: THREE.Mesh;
    Body135: THREE.Mesh;
    Body136: THREE.Mesh;
    Body137: THREE.Mesh;
    Body138: THREE.Mesh;
    Body139: THREE.Mesh;
    Body140: THREE.Mesh;
    Body141: THREE.Mesh;
    Body142: THREE.Mesh;
    Body143: THREE.Mesh;
    Body144: THREE.Mesh;
    Body145: THREE.Mesh;
    Body146: THREE.Mesh;
    Body147: THREE.Mesh;
    Body148: THREE.Mesh;
    Body149: THREE.Mesh;
    Body150: THREE.Mesh;
    Body151: THREE.Mesh;
    Body152: THREE.Mesh;
    Body153: THREE.Mesh;
    Body154: THREE.Mesh;
    Body155: THREE.Mesh;
    Body156: THREE.Mesh;
    Body157: THREE.Mesh;
    Body158: THREE.Mesh;
    Body159: THREE.Mesh;
    Body160: THREE.Mesh;
    Body161: THREE.Mesh;
    Body162: THREE.Mesh;
    Body163: THREE.Mesh;
    Body164: THREE.Mesh;
    Body165: THREE.Mesh;
    Body166: THREE.Mesh;
    Body167: THREE.Mesh;
    Body168: THREE.Mesh;
    Body169: THREE.Mesh;
    Body170: THREE.Mesh;
    Body171: THREE.Mesh;
    Body172: THREE.Mesh;
    Body173: THREE.Mesh;
    Body174: THREE.Mesh;
    Body175: THREE.Mesh;
    Body176: THREE.Mesh;
    Body177: THREE.Mesh;
    Body178: THREE.Mesh;
    Body179: THREE.Mesh;
    Body180: THREE.Mesh;
    Body181: THREE.Mesh;
    Plate: THREE.Mesh;
    Top: THREE.Mesh;
    Bottom: THREE.Mesh;
    Mouse_Base: THREE.Mesh;
    Mouse_Wheel_1: THREE.Mesh;
    Mouse_Wheel_1_1: THREE.Mesh;
    Mouse_Wheel_1_2: THREE.Mesh;
    Mouse_Top: THREE.Mesh;
    Mouse_Middle: THREE.Mesh;
    Wall: THREE.Mesh;
  };
  materials: {
    ["Opaque(64,64,64)"]: THREE.MeshStandardMaterial;
  };
};

export default function Composition({ url, scrl, ...props }) {
  const [pastScrl, setScrl] = useState(0);
  const [hidden, set] = useState<boolean>(false);

  const [mouse, setMouse] = useState<boolean>(false);
  const [cam, setCam] = useState<boolean>(false);
  const [keyboard, setKeyboard] = useState<boolean>(false);

  const [r1, setr1] = useState<number>(0);
  const [r2, setr2] = useState<number>(0);
  const { nodes, materials } = useGLTF("/static/portfolio/Composition.glb") as GLTFResult;
  const { gl } = useThree();
  const group = useRef();
  const scroll = useScroll();
  const { width, height } = useThree((state) => state.viewport);
  const camera = useThree((state) => state.camera);

  const white = useMemo(() => new THREE.MeshStandardMaterial({ color: "#ffffff" }), []);
  const darkGrey = useMemo(() => new THREE.MeshStandardMaterial({ color: "#6b6b6b" }), []);
  const darkerGrey = useMemo(() => new THREE.MeshStandardMaterial({ color: "#4a4a4a" }), []);

  useFrame((state, delta) => {
    if (group.current === undefined) return false;
    const r1 = scroll.range(0 / 4, 1 / 4);
    const r2 = scroll.range(2 / 4, 1 / 4);
    const r3 = scroll.range(3 / 4, 1 / 4);

    if (!(pastScrl == scrl)) {
      scroll.el.scrollTop = scrl * (scroll.el.scrollHeight - scroll.el.clientHeight);
      setScrl(scrl);
    }
    setr1(r1);
    setr2(r2);
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
            <mesh geometry={nodes.Wall.geometry} material={darkGrey} />
          </group>

          {/* Desk */}
          <group>
            <mesh geometry={nodes.Left_Unit.geometry} material={darkerGrey} />
            <mesh geometry={nodes.L_Drawer_1.geometry} material={darkerGrey} />
            <mesh geometry={nodes.L_Drawer_1_Front.geometry} material={darkerGrey} />
            <mesh geometry={nodes.L_Drawer_2.geometry} material={darkerGrey} />
            <mesh geometry={nodes.L_Drawer_3.geometry} material={darkerGrey} />
            <mesh geometry={nodes.L_Drawer_4.geometry} material={darkerGrey} />
            <mesh geometry={nodes.R_Drawer_3.geometry} material={darkerGrey} />
            <mesh geometry={nodes.R_Drawer_2.geometry} material={darkerGrey} />
            <mesh geometry={nodes.R_Drawer_4.geometry} material={darkerGrey} />
            <mesh geometry={nodes.R_Drawer_1.geometry} material={darkerGrey} />
            <mesh geometry={nodes.Right_Unit.geometry} material={darkerGrey} />
            <mesh geometry={nodes.Table_Top.geometry} material={darkerGrey} />
            <mesh geometry={nodes.L_Drawer_Front_2.geometry} material={darkerGrey} />
            <mesh geometry={nodes.L_Drawer_Front_3.geometry} material={darkerGrey} />
            <mesh geometry={nodes.L_Drawer_Front_4.geometry} material={darkerGrey} />
            <mesh geometry={nodes.R_Drawer_Front_1.geometry} material={darkerGrey} />
            <mesh geometry={nodes.R_Drawer_Front_2.geometry} material={darkerGrey} />
            <mesh geometry={nodes.R_Drawer_Front_3.geometry} material={darkerGrey} />
            <mesh geometry={nodes.R_Drawer_Frront_4.geometry} material={darkerGrey} />
          </group>

          {/* Monitor */}
          <group>
            <mesh geometry={nodes.Casing.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Stand.geometry} material={materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Screen.geometry}>
              {window.innerWidth >= 1250 ? (
                r2 >= 0.6 ? (
                  <meshStandardMaterial color={"#9e9e9e"} />
                ) : r1 >= 0.6 ? (
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
                  <meshStandardMaterial color={"#9e9e9e"} />
                )
              ) : (
                <meshStandardMaterial color={"#9e9e9e"} />
              )}
            </mesh>
          </group>

          {/* Camera */}
          <group
            onClick={(e) => {
              e.stopPropagation();
              window.open("https://elliot-powell.com", "_blank");
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              setCam(true);
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setCam(false);
            }}
          >
            <mesh geometry={nodes.Camera.geometry} material={cam ? white : materials["Opaque(64,64,64)"]} />
          </group>

          {/* Mouse */}
          <group
            onClick={(e) => {
              e.stopPropagation();
              console.log("click Mouse");
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              setMouse(true);
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setMouse(false);
            }}
          >
            <mesh geometry={nodes.Mouse_Base.geometry} material={mouse ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Mouse_Top.geometry} material={mouse ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Mouse_Middle.geometry} material={mouse ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Mouse_Wheel_1.geometry} material={mouse ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Mouse_Wheel_1_1.geometry} material={mouse ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Mouse_Wheel_1_2.geometry} material={mouse ? white : materials["Opaque(64,64,64)"]} />
          </group>

          {/* Keyboard */}
          <group
            onClick={(e) => {
              e.stopPropagation();
              window.open("https://epkb.design", "_blank");
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              setKeyboard(true);
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setKeyboard(false);
            }}
          >
            <mesh geometry={nodes.Top.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Plate.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Bottom.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />

            <mesh geometry={nodes.Body1.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body11.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body12.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body13.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body14.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body15.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body16.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body17.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body18.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body19.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body110.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body111.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body112.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body113.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body114.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body115.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body116.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body117.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body118.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body119.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body120.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body121.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body122.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body123.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body124.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body125.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body126.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body127.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body128.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body129.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body130.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body131.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body132.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body133.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body134.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body135.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body136.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body137.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body138.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body139.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body140.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body141.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body142.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body143.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body144.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body145.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body146.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body147.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body148.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body149.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body150.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body151.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body152.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body153.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body154.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body155.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body156.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body157.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body158.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body159.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body160.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body161.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body162.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body163.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body164.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body165.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body166.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body167.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body168.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body169.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body170.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body171.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body172.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body173.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body174.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body175.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body176.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body177.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body178.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body179.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body180.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
            <mesh geometry={nodes.Body181.geometry} material={keyboard ? white : materials["Opaque(64,64,64)"]} />
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/static/portfolio/Composition.glb");
