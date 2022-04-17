import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function TodoLand() {
  return (
    <div>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <mesh position={[0, 0, 0]}>
          <boxBufferGeometry attach="geometry" />
          <meshLambertMaterial attach="material" color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
}
