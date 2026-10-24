import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.6 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }}>
        <Sparkles 
          count={120} 
          scale={14} 
          size={1.5} 
          speed={0.15} 
          opacity={0.3} 
          color="#3a3aff" 
          noise={0.1}
        />
        <Sparkles 
          count={40} 
          scale={10} 
          size={2.5} 
          speed={0.3} 
          opacity={0.2} 
          color="#f05050" 
          noise={0.2}
        />
      </Canvas>
    </div>
  );
}
