import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.6 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={1} gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}>
        <Sparkles 
          count={80} 
          scale={14} 
          size={1.5} 
          speed={0.15} 
          opacity={0.3} 
          color="#b3001b" 
          noise={0.1}
        />
        <Sparkles 
          count={24} 
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
