import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 500 }) {
  const mesh = useRef()
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
      
      // AI-themed colors: cyan, purple, pink gradients
      const hue = Math.random() < 0.33 
        ? 0.5 + Math.random() * 0.1  // Cyan range
        : Math.random() < 0.66
        ? 0.7 + Math.random() * 0.1   // Purple range
        : 0.85 + Math.random() * 0.1   // Pink range
      const color = new THREE.Color()
      color.setHSL(hue, 0.8, 0.6)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    
    return { positions, colors }
  }, [count])

  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.02
    mesh.current.rotation.y = state.clock.elapsedTime * 0.03
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  )
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  )
}

