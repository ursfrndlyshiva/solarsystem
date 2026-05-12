import React from "react"
import Planet from "./Planet"
import Orbit from "./Orbit"

const Planets = ({ onSelectPlanet }) => {
  return (
    <>
      {/* Mercury */}
      <Orbit distance={16} eccentricity={0.205} color="gray" />
      <Planet
        texturePath="/Mercury.jpg"
        size={0.38}
        distance={16}
        eccentricity={0.205}
        rotationPeriod={58.6 * 86400}
        orbitalPeriod={88 * 86400}
        onSelect={onSelectPlanet}
        name="mercury"
      />

      {/* Venus */}
      <Orbit distance={30} eccentricity={0.006} color="orange" />
      <Planet
        texturePath="/Venus.jpg"
        size={0.95}
        distance={30}
        eccentricity={0.006}
        rotationPeriod={-243 * 86400}
        orbitalPeriod={225 * 86400}
        onSelect={onSelectPlanet}
      />

      {/* Earth */}
      <Orbit distance={40} eccentricity={0.0167} color="blue" />
      <Planet
        texturePath="/Earth.jpg"
        size={1}
        distance={40}
        eccentricity={0.0167}
        rotationPeriod={24 * 3600}
        orbitalPeriod={365 * 86400}
        onSelect={onSelectPlanet}
        name="mercury"
      />

      {/* Mars */}
      <Orbit distance={60} eccentricity={0.093} color="red" />
      <Planet
        texturePath="/Mars.jpg"
        size={0.53}
        distance={60}
        eccentricity={0.093}
        rotationPeriod={24.6 * 3600}
        orbitalPeriod={687 * 86400}
        onSelect={onSelectPlanet}
      />

      {/* Jupiter */}
      <Orbit distance={100} eccentricity={0.048} color="yellow" />
      <Planet
        texturePath="/Jupiter.jpg"
        size={3}
        distance={100}
        eccentricity={0.048}
        rotationPeriod={9.9 * 3600}
        orbitalPeriod={4333 * 86400}
        onSelect={onSelectPlanet}
      />

      {/* Saturn */}
      <Orbit distance={150} eccentricity={0.056} color="gold" />
      <Planet
        texturePath="/Saturn.jpg"
        size={2.7}
        distance={150}
        eccentricity={0.056}
        rotationPeriod={10.7 * 3600}
        orbitalPeriod={10759 * 86400}
        onSelect={onSelectPlanet}
      />

      {/* Uranus */}
      <Orbit distance={200} eccentricity={0.047} color="cyan" />
      <Planet
        texturePath="/Uranus.jpg"
        size={2}
        distance={200}
        eccentricity={0.047}
        rotationPeriod={-17.2 * 3600}
        orbitalPeriod={30687 * 86400}
        onSelect={onSelectPlanet}
      />

      {/* Neptune */}
      <Orbit distance={260} eccentricity={0.009} color="purple" />
      <Planet
        texturePath="/Neptune.jpg"
        size={2}
        distance={260}
        eccentricity={0.009}
        rotationPeriod={16.1 * 3600}
        orbitalPeriod={60190 * 86400}
        onSelect={onSelectPlanet}
      />
    </>
  )
}

export default Planets