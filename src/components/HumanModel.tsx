import { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
// @ts-ignore
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// @ts-ignore
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import * as THREE from 'three';

const Model = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  // Load Materials from Meshy AI
  const mtl = useLoader(MTLLoader, '/models/human/new/Meshy_AI_Geometric_Smile_0326104838_texture.mtl');
  
  // Load OBJ and apply materials
  const obj = useLoader(OBJLoader, '/models/human/new/Meshy_AI_Geometric_Smile_0326104838_texture.obj', (loader: any) => {
    mtl.preload();
    loader.setMaterials(mtl);
  });

  // Balanced Auto-rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <primitive 
      object={obj} 
      ref={meshRef} 
    />
  );
};

// Component to handle the "Fix" for initial framing
const FrameFixer = () => {
  const { invalidate } = useThree();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      invalidate();
    }, 2000);
    return () => clearTimeout(timer);
  }, [invalidate]);

  return null;
};

const HumanModel = () => {
  const [isActive, setIsActive] = useState(false);

  // Re-mount after the parent's scale/blur transitions (Index.tsx) are done.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[650px] relative mt-10 lg:mt-0 overflow-visible">
      {isActive && (
        <Canvas shadows dpr={[1, 1.5]} frameloop="always" className="overflow-visible">
          <PerspectiveCamera makeDefault position={[0, 1.5, 9]} fov={30} />
          
          <ambientLight intensity={0.7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          
          <Suspense fallback={null}>
            <Stage 
              environment="city" 
              intensity={0.6} 
              adjustCamera={1.6} // Generous buffer
            >
              <Model />
            </Stage>
            <ContactShadows opacity={0.3} scale={10} blur={3} far={2} color="#000000" position={[0, -2.5, 0]} />
            <FrameFixer />
          </Suspense>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
          <Environment preset="night" />
        </Canvas>
      )}
      
      {/* Interaction Badge */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 pointer-events-none opacity-25">
        <div className="px-3 py-1 rounded-full border border-white/5 bg-black/40 backdrop-blur-md text-[8px] uppercase font-mono tracking-[0.4em] text-white">
          Interact
        </div>
      </div>
    </div>
  );
};

export default HumanModel;
