import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import "../styles/example.css";

const Example = () => {
  const coreRef = useRef(null);
  const ringRefs = [useRef(null), useRef(null), useRef(null)];

  useFrame(() => {
    ringRefs.forEach((ringRef, index) => {
      if (ringRef.current) {
        ringRef.current.rotation.x += 0.01;
        ringRef.current.rotation.y += 0.01 * index;
      }
    });

    if (coreRef.current) {
      coreRef.current.rotation.y += 0.01;
    }


  });

  return (

    <group>

      <mesh>
        <sphereGeometry args={[0.5, 32, 32]}></sphereGeometry>
        <meshStandardMaterial color={"#61dafb"}></meshStandardMaterial>
      </mesh>

      <mesh ref={coreRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]}/>
        <meshStandardMaterial color={"#61dafb"} wireframe />
      </mesh>

      <mesh ref={ringRefs[0]} position={[0, 0, 0]}>
        <torusGeometry args={[2.5, 0.1, 12, 64]} />
        <meshStandardMaterial color={"#61dafb"} wireframe={true} />
      </mesh>

      <mesh ref={ringRefs[1]} position={[0, 0, 0]}>
        <torusGeometry args={[2.5, 0.1, 12, 64]} />
        <meshStandardMaterial color={"#61dafb"} wireframe={true} />
      </mesh>

      <mesh ref={ringRefs[2]} position={[0, 0, 0]}>
        <torusGeometry args={[2.5, 0.1, 11, 64]} />
        <meshStandardMaterial color={"#61dafb"} wireframe={true} />
      </mesh>
      </group>
  );
};


export default Example;
