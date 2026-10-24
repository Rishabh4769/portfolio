import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';

/* Threat topology: wireframe core, sensor nodes, hostile contacts, pulse ring.
   Slow rotation + pointer parallax. Pure signal-blue on transparent. */
function Topology() {
  const group = useRef(null);
  const threatRefs = useRef([]);
  const pulse = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  const nodes = useMemo(() => {
    const pts = [];
    const N = 12;
    for (let i = 0; i < N; i++) {
      const t = (i / N) * Math.PI * 2;
      const r = 1.55 + Math.sin(i * 2.3) * 0.35;
      pts.push(new THREE.Vector3(Math.cos(t) * r, Math.sin(t * 1.7) * 0.85, Math.sin(t) * r));
    }
    return pts;
  }, []);

  const linkGeo = useMemo(() => {
    const verts = [];
    nodes.forEach((p, i) => {
      const q = nodes[(i + 3) % nodes.length];
      verts.push(p.x, p.y, p.z, q.x, q.y, q.z);
      const r = nodes[(i + 5) % nodes.length];
      verts.push(p.x, p.y, p.z, r.x, r.y, r.z);
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    return g;
  }, [nodes]);

  useEffect(() => {
    const h = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', h);
    return () => window.removeEventListener('pointermove', h);
  }, []);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y += dt * 0.12;
      group.current.rotation.x += ((Math.sin(t * 0.2) * 0.12 + mouse.current.y * 0.25) - group.current.rotation.x) * 0.04;
      group.current.rotation.z += ((mouse.current.x * 0.18) - group.current.rotation.z) * 0.04;
    }
    threatRefs.current.forEach((m, i) => {
      if (!m) return;
      const a = t * (0.25 + i * 0.07) + i * 2.1;
      m.position.set(Math.cos(a) * 2.35, Math.sin(a * 1.3) * 1.15, Math.sin(a) * 2.35);
      m.rotation.x += dt;
      m.rotation.y += dt * 0.7;
    });
    if (pulse.current) {
      const s = (t % 2.6) / 2.6;
      pulse.current.scale.setScalar(0.6 + s * 2.3);
      pulse.current.material.opacity = 0.45 * (1 - s);
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial color="#3a3aff" wireframe transparent opacity={0.85} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.4, 0]} />
        <meshBasicMaterial color="#3a3aff" transparent opacity={0.9} />
      </mesh>
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshBasicMaterial color="#8f95ff" />
        </mesh>
      ))}
      <lineSegments geometry={linkGeo}>
        <lineBasicMaterial color="#3a3aff" transparent opacity={0.32} />
      </lineSegments>
      {[0, 1, 2].map((i) => (
        <mesh key={'threat-' + i} ref={(el) => { threatRefs.current[i] = el; }}>
          <octahedronGeometry args={[0.15, 0]} />
          <meshBasicMaterial color="#f05050" wireframe />
        </mesh>
      ))}
      <mesh ref={pulse} rotation={[Math.PI / 2.4, 0, 0]}>
        <ringGeometry args={[0.92, 0.96, 48]} />
        <meshBasicMaterial color="#8f95ff" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
      <Sparkles count={60} scale={5} size={1} speed={0.4} opacity={0.5} color="#3a3aff" noise={0.2} />
    </group>
  );
}

export default function ThreatTopology() {
  return (
    <Canvas camera={{ position: [0, 0, 5.4], fov: 42 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
      <Topology />
    </Canvas>
  );
}
