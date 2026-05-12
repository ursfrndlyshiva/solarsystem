import { useTexture, Html } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import * as THREE from "three"

const TIME_SCALE = 100000

const Planet = ({
  name,
  texturePath,
  distance,
  size,
  orbitalPeriod,
  eccentricity,
  rotationPeriod,
  onSelect
}) => {

  const planetRef = useRef()
  const texture = useTexture(texturePath)

  const [hovered, setHovered] = useState(false)

  texture.colorSpace = THREE.SRGBColorSpace

  const solveKepler = (M, e) => {
    let E = M
    for (let i = 0; i < 5; i++) {
      E = E - (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E))
    }
    return E
  }

  useFrame((state, delta) => {

    const time = state.clock.elapsedTime * TIME_SCALE

    const M = (time / orbitalPeriod) * Math.PI * 2
    const E = solveKepler(M, eccentricity)

    const a = distance

    const x = a * (Math.cos(E) - eccentricity)
    const z = a * Math.sqrt(1 - eccentricity ** 2) * Math.sin(E)

    planetRef.current.position.set(x, 0, z)

    planetRef.current.rotation.y += delta * (Math.PI * 2 / rotationPeriod)
  })

  return (
    <mesh
      ref={planetRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation()
        onSelect?.(planetRef.current.position.clone())
      }}
    >
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial map={texture} />

      {hovered && (
        <Html distanceFactor={10}>
          <div
            style={{
              background: "black",
              color: "white",
              padding: "4px 8px",
              borderRadius: "6px",
              fontSize: "12px"
            }}
          >
            {name}
          </div>
        </Html>
      )}

    </mesh>
  )
}

export default Planet