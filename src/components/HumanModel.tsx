import { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera, Environment, ContactShadows, Html, useProgress } from '@react-three/drei';
// @ts-ignore
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// @ts-ignore
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center w-64">
        <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden mb-3 border border-zinc-800">
          <motion.div 
            className="h-full bg-[#4ade80] shadow-[0_0_10px_#4ade80]" 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </div>
        <div className="flex flex-col items-center space-y-1">
          <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-[0.3em] animate-pulse">
            Downloading Neural Mesh
          </span>
          <span className="text-[#4ade80] font-mono text-xs font-bold">
            {progress.toFixed(0)}%
          </span>
        </div>
      </div>
    </Html>
  );
};

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
    <div className="w-full h-[400px] sm:h-[500px] md:h-[650px] relative mt-10 lg:mt-0 overflow-visible flex items-center justify-center">
      {!isActive && (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            <div className="w-12 h-12 border-2 border-zinc-800 border-t-[#4ade80] rounded-full animate-spin"></div>
            <div className="absolute inset-0 bg-[#4ade80]/10 blur-xl rounded-full"></div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em]">
              Protocol: INITIALIZING
            </span>
            <span className="text-zinc-600 font-mono text-[8px] uppercase tracking-[0.2em] mt-1">
              Establishing 3D Neural Link...
            </span>
          </div>
        </div>
      )}

      {isActive && (
        <Canvas shadows dpr={[1, 1.5]} frameloop="always" className="overflow-visible">
          <PerspectiveCamera makeDefault position={[0, 1.5, 9]} fov={30} />
          
          <ambientLight intensity={0.7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          
          <Suspense fallback={<Loader />}>
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

