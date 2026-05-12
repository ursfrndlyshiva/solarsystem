import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing"
import { useRef } from "react"
import Planets from "./components/Planets"
import * as THREE from "three"

function Sun({ sunRef }) {
  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshStandardMaterial
        emissive={"orange"}
        emissiveIntensity={5}
        color={"orange"}
      />
    </mesh>
  )
}

function Scene() {

  const controlsRef = useRef()
  const sunRef = useRef()
  const { camera } = useThree()

  const focusPlanet = (position) => {

    controlsRef.current.target.copy(position)

    camera.position.set(
      position.x + 12,
      position.y + 6,
      position.z + 12
    )

    controlsRef.current.update()
  }

  return (
    <>
      {/* background */}
      <color attach="background" args={["black"]} />

      {/* lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[0,0,0]} intensity={3} />

      {/* sun */}
      <Sun sunRef={sunRef} />

      {/* stars */}
      <Stars
        radius={400}
        depth={200}
        count={8000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* planets */}
      <Planets onSelectPlanet={focusPlanet} />

      {/* camera controls */}
      <OrbitControls ref={controlsRef} />

      {/* selective bloom */}
      <EffectComposer>
        <SelectiveBloom
          selection={[sunRef]}
          intensity={8}
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </>
  )
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 80, 180], fov: 60 }} style={{height:"100vh"}}>
      <Scene />
    </Canvas>
  )
}