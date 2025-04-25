import {useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Body = () => {
    const cor = useRef();
   useFrame(() => {

      if (cor.current) {
        cor.current.rotation.y += 0.005;
      }
  
  
    });


  return(
    <mesh ref={cor}>
    <sphereGeometry args={[25, 5, 5]}></sphereGeometry>
    <meshStandardMaterial color={"#61dafb"} wireframe></meshStandardMaterial>
    </mesh>
  )
}

export default Body;