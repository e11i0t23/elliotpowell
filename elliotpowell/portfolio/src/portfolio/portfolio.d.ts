declare namespace portfolio {
  interface CompositionProps extends GroupProps {
    url: string;
    scrl: number;
    texture: Texture;
  }

  interface ScrollPageProps {
    scrl: number;
  }

  type screenHTMLProps = {
    url: string;
  };

  type framework = {
    title: string;
    url: string;
    texture: number;
  };
  interface skill extends framework {
    frameworks: framework[];
  }

  interface SkillsProps {
    texture: Texture;
    setTexture: React.Dispatch<React.SetStateAction<Texture>>;
  }

  interface WorkProps {
    setURL: React.Dispatch<React.SetStateAction<string>>;
  }

  type project = {
    title: string;
    url: string;
    description: string;
    codeUrl: string | null;
  };

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
}
