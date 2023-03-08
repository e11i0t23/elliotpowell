/*
React Component that acts as our html container to showcase on the screen
*/

import React, { useState } from "react";
import { useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export default function ScreenHTML({ url }: portfolio.screenHTMLProps) {
  const [hidden, setHidden] = useState<boolean | undefined>(false);
  const { gl } = useThree();
  const set = (visible: boolean) => {
    setHidden(visible);
    return null;
  };

  return (
    <Html
      className="content"
      rotation={[Math.PI / 2, 0, 0]}
      position={[-166.5, 268, 938.5]}
      transform
      occlude
      prepend
      portal={{ current: gl.domElement.parentNode as HTMLElement }}
      scale={13.9}
      as="div"
      onOcclude={set}
      style={{
        transition: "all 0.5s",
        opacity: hidden ? 0 : 1,
        transform: `scale(${hidden ? 0.5 : 1})`,
      }}
      visible={false}
    >
      {/* Render a preview of selected project on the monitor model */}
      <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
        <div>
          <iframe width={1920} height={1000} src={url} />
        </div>
      </div>
    </Html>
  );
}
