import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D tDiffuse;
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    
    // Create slices
    float sliceCount = 80.0;
    float sliceId = floor(uv.x * sliceCount);
    
    // Calculate displacement per slice
    float displacement = sin(sliceId * 0.1 + uTime * 2.0) * 0.02;
    
    // Add mouse interaction
    float distToMouse = distance(uv, uMouse * 0.5 + 0.5);
    displacement += (1.0 - smoothstep(0.0, 0.5, distToMouse)) * uMouse.x * 0.05;
    
    uv.y += displacement;
    
    vec4 texColor = texture2D(tDiffuse, uv);
    gl_FragColor = texColor;
  }
`;

function Scene({ imageSrc }: { imageSrc: string }) {
  const { viewport } = useThree();
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return loader.load(imageSrc);
  }, [imageSrc]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      // Normalize pointer to 0-1 range for shader
      materialRef.current.uniforms.uMouse.value.set(state.pointer.x, state.pointer.y);
    }
  });

  const uniforms = useMemo(
    () => ({
      tDiffuse: { value: texture },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    [texture]
  );

  // Use cover sizing
  const scale = Math.max(viewport.width, viewport.height);

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  );
}

export function DistortionCanvas({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
        <Scene imageSrc={imageSrc} />
      </Canvas>
    </div>
  );
}
