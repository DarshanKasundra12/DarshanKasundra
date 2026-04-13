import { Component, ReactNode, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
// @ts-ignore
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// @ts-ignore
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';

const MODEL_ASSETS = {
  mtl: '/models/human/new/Meshy_AI_Geometric_Smile_0326104838_texture.mtl',
  obj: '/models/human/new/Meshy_AI_Geometric_Smile_0326104838_texture.obj',
  texture: '/models/human/new/Meshy_AI_Geometric_Smile_0326104838_texture.png',
} as const;

class ModelErrorBoundary extends Component<{ children: ReactNode; onError: () => void }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

const Model = ({ onLoaded }: { onLoaded: () => void }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  // Load Materials from Meshy AI
  const mtl = useLoader(MTLLoader, MODEL_ASSETS.mtl);
  
  // Load OBJ and apply materials
  const obj = useLoader(OBJLoader, MODEL_ASSETS.obj, (loader: any) => {
    mtl.preload();
    loader.setMaterials(mtl);
  });

  useEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });

    onLoaded();
  }, [obj, onLoaded]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <primitive 
      object={obj} 
      scale={[1.99, 1.99, 1.99]}
      position={[0, 0.08, 0]}
      ref={meshRef} 
    />
  );
};

const CanvasStabilizer = () => {
  const { camera, size, invalidate } = useThree();

  useEffect(() => {
    const syncFrame = () => {
      camera.aspect = size.width / Math.max(size.height, 1);
      camera.updateProjectionMatrix();
      invalidate();
      window.dispatchEvent(new Event('resize'));
    };

    const raf = requestAnimationFrame(syncFrame);
    const delayed = window.setTimeout(syncFrame, 1700);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(delayed);
    };
  }, [camera, size.width, size.height, invalidate]);

  return null;
};

const HumanModel = () => {
  const [isActive, setIsActive] = useState(false);
  const [isModelReady, setIsModelReady] = useState(false);
  const [hasModelError, setHasModelError] = useState(false);
  const [isTakingLong, setIsTakingLong] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  const handleLoaded = useCallback(() => {
    setIsModelReady(true);
    setIsTakingLong(false);
  }, []);

  const handleError = useCallback(() => {
    setHasModelError(true);
    setIsTakingLong(false);
  }, []);

  // Start loading after a short delay to avoid competing with the intro animation.
  useEffect(() => {
    setIsActive(false);
    setIsModelReady(false);
    setHasModelError(false);
    setIsTakingLong(false);

    let isCancelled = false;
    const prefetchController = new AbortController();

    Promise.all(
      Object.values(MODEL_ASSETS).map((url) =>
        fetch(url, { cache: 'force-cache', signal: prefetchController.signal }).catch(() => null)
      )
    ).finally(() => {
      if (!isCancelled) {
        setIsActive(true);
      }
    });

    return () => {
      isCancelled = true;
      prefetchController.abort();
    };
  }, [retryKey]);

  useEffect(() => {
    if (!isActive || isModelReady || hasModelError) {
      return;
    }

    const timer = setTimeout(() => {
      setIsTakingLong(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isActive, isModelReady, hasModelError]);

  const showLoadingModal = !hasModelError && (!isActive || !isModelReady);

  return (
    <div className="w-full h-[360px] sm:h-[420px] md:h-[500px] lg:h-[min(62vh,520px)] relative mt-8 lg:mt-0 overflow-visible flex items-center justify-center">
      {showLoadingModal && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/55 backdrop-blur-sm rounded-xl border border-white/10">
          <div className="flex flex-col items-center justify-center space-y-4 px-5 text-center">
            <div className="relative">
              <div className="w-12 h-12 border-2 border-zinc-800 border-t-[#4ade80] rounded-full animate-spin"></div>
              <div className="absolute inset-0 bg-[#4ade80]/10 blur-xl rounded-full"></div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-zinc-300 font-mono text-[10px] uppercase tracking-[0.35em]">
                Loading 3D Model
              </span>
              <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-[0.2em] mt-1">
                {isTakingLong ? 'Still loading, optimizing in progress...' : 'Preparing assets...'}
              </span>
            </div>
          </div>
        </div>
      )}

      {hasModelError && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm rounded-xl border border-rose-300/20">
          <div className="flex flex-col items-center justify-center space-y-4 px-6 text-center">
            <span className="text-rose-300 font-mono text-[11px] uppercase tracking-[0.2em]">
              Model failed to load
            </span>
            <span className="text-zinc-400 text-xs">
              Network or asset issue detected. Retry loading the 3D view.
            </span>
            <Button
              type="button"
              size="sm"
              className="bg-rose-300 text-black hover:bg-rose-200"
              onClick={() => setRetryKey((prev) => prev + 1)}
            >
              Retry Model
            </Button>
          </div>
        </div>
      )}

      {isActive && (
        <Canvas
          key={retryKey}
          shadows={false}
          dpr={[1, 1.25]}
          frameloop="always"
          gl={{ antialias: false, powerPreference: 'high-performance' }}
          className="overflow-visible"
        >
          <PerspectiveCamera makeDefault position={[0, 1.5, 9]} fov={30} />
          
          <ambientLight intensity={1.1} />
          <directionalLight position={[3, 6, 5]} intensity={1.2} />
          <directionalLight position={[-4, 2, -4]} intensity={0.35} />
          
          <ModelErrorBoundary onError={handleError}>
            <Suspense fallback={null}>
              <Model onLoaded={handleLoaded} />
            </Suspense>
          </ModelErrorBoundary>
          
          <OrbitControls 
            makeDefault
            enableZoom={false} 
            enablePan={false}
            enableDamping
            dampingFactor={0.08}
            target={[0, 0.8, 0]}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
          <CanvasStabilizer />
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

