import { useRef } from "react"
import { useTexture } from "@react-three/drei"

const Sun = ({ sunRef }) => {
  const texture = useTexture("/Sun.jpg")

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        emissive={"orange"}
        emissiveIntensity={2}
      />
    </mesh>
  )
}

export default Sun