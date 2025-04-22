import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Bounds } from '@react-three/drei';
import Car from './Car';

export default function Scene({ color, glassColor, wheelColor }) {
  return (
    <div className="canva-container">
        <Canvas camera={{ position: [0, 60, 8], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
            <Bounds fit clip observe margin={1}>
            <Car color={color} glassColor={glassColor} wheelColor={wheelColor}/>
            </Bounds>
        </Suspense>
        <OrbitControls />
        </Canvas>
    </div>
  );
}
