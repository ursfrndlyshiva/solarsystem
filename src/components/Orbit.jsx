import { useMemo } from "react"
import * as THREE from "three"

const Orbit = ({ distance, eccentricity, color }) => {

  const geometry = useMemo(() => {

    const points = []
    const a = distance
    const e = eccentricity

    for (let i = 0; i <= 500; i++) {

      const E = (i / 500) * Math.PI * 2

      const x = a * (Math.cos(E) - e)
      const z = a * Math.sqrt(1 - e * e) * Math.sin(E)

      points.push(new THREE.Vector3(x, 0, z))
    }

    return new THREE.BufferGeometry().setFromPoints(points)

  }, [distance, eccentricity])

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color={color} />
    </line>
  )
}

export default Orbit