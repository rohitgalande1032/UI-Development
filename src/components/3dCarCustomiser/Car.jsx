import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Car = ({ color, glassColor, wheelColor }) => {
  const group = useRef();
  const { scene } = useGLTF("/car.glb");

  scene.traverse((child) => {
    if (child.isMesh && child.name.includes("Brake")) {
      console.log("Found Brake:", child.name);

      // Clone material if shared
      child.material = child.material.clone();

      // Set desired color
      child.material.color.set("#fff");
      console.log("Changed brake color for:", child.name);
    }
  });

  //Change Wheels color
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.name.includes("Wheel")) {
        console.log("Found Wheel:", child.name);

        // Clone the material to ensure no sharing of the material
        child.material = child.material.clone();

        // Check for any texture maps and log them
        console.log("Material Textures:", child.material.map);

        // If a texture exists, you can either replace it or modify its properties
        if (child.material.map) {
          // Example: Replace the texture with a new one (or reset it)
          child.material.map = null; // Or replace with a new texture if needed
        }

        // Change the color of the wheel
        if (child.material.color) {
          console.log("Changing color of wheel:", child.name);
          child.material.color.set(wheelColor);
        }
      }
    });
  }, [wheelColor]);

  //Change Glass Color

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const name = child.name;

        if (name.includes("Glass")) {
          console.log("Glass:", name);

          // Clone the material so it's unique
          child.material = child.material.clone();

          // Set a new color (e.g., light blue for glass)
          if (child.material.color) {
            child.material.color.set(glassColor); // 🔵 Light blue color
          } else {
            console.warn("Glass material has no color property");
          }
        }
      }
    });
  }, [glassColor]);

  //Change Body Color
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // Body paint
        if (
          child.material.name ===
          "_Lamborghini_AventadorLamborghini_Aventador_BodySG"
        ) {
          child.material.color.set(color);
        }
      }
    });
  }, [color]);

  return (
    <group ref={group} position={[0, -1.2, 0]} scale={1}>
      <primitive object={scene} />
    </group>
  );
};

export default Car;
