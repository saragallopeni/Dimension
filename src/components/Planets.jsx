import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import textureImage from "../earth.jpg";
import { AdditiveBlending, EquirectangularReflectionMapping, TextureLoader, UVMapping } from "three";
import { useRef } from "react";
import Greet from "./Greet";
import jupiterImage from "../jupitermap.jpg";
import marsImage from "../mars.jpg";
import neptunImage from "../neptun.jpg";
import skyImage from "../galaxy.jpg";
import grassImage from "../grass.jpg";
import colorMapImage from "../Color.png";
import norMapImage from "../NormalGL.png";
import disImage from "../Displacement.png";
const Planets = () => {

  
      const colorMap = useLoader(TextureLoader, colorMapImage);
      const norMap = useLoader(TextureLoader, norMapImage);
      const dis = useLoader(TextureLoader, disImage);

      const texture = new TextureLoader().load(textureImage);
      texture.mapping = EquirectangularReflectionMapping;
      

      const jupiter = useLoader(TextureLoader, jupiterImage);
      jupiter.mapping = EquirectangularReflectionMapping;

      const mars = useLoader(TextureLoader, marsImage);
      mars.mapping = EquirectangularReflectionMapping;

      const sky = useLoader(TextureLoader, skyImage);
      sky.mapping = EquirectangularReflectionMapping;


      const grass = useLoader(TextureLoader, grassImage);
      grass.mapping = EquirectangularReflectionMapping;


      const neptun = useLoader(TextureLoader, neptunImage);
      neptun.mapping = EquirectangularReflectionMapping;

      const color  = 'background: #d02ed9,background: linear-gradient(90deg,rgba(208, 46, 217, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);';



      const coreRef = useRef(null);
      const ring = useRef(null);
    
      useFrame(() => {
          if (coreRef.current) {
            coreRef.current.rotation.y += 0.005; 

          }
          if (ring.current) { 
            ring.current.rotation.z += 0.1; 

          }

      
        });


   

      return(
    <group ref={coreRef}  position={[0,0,0]} receiveShadow>
      <group >
      <group  position={[0,0,4]}>

        <group>
        <mesh >
          <sphereGeometry args={[0.90, 524, 524]} />
          <meshPhongMaterial side={2} map={texture}  specular={'blue'} shininess={1}  />
  
        </mesh>
        <mesh >
        <sphereGeometry args={[0.30, 524, 524]} />
        <meshPhysicalMaterial map={colorMap}  normalMap={norMap} displacementBias={dis}
        side={2}
        displacementScale={0.2}
        roughness={1}        
        metalness={0.1}        
        clearcoat={0.5}        
        clearcoatRoughness={0.4}
        ior={1.3}
        thickness={0.4}
        // emissive={'#ff4400'}   
        // emissiveIntensity={0.8}
         />
        </mesh>
        

 

        </group>
        <mesh  receiveShadow>
        <sphereGeometry args={[0.92, 64, 64]} /> 
        <meshPhongMaterial
          color={'lightblue'} 
          transparent={true}
          opacity={0.1}
          blending={AdditiveBlending}
          side={2} 
        />
      </mesh>
      

      <Greet></Greet>

      </group>
      </group>



      <mesh position={[0,0,-3.3]}>
        <sphereGeometry args={[0.50, 264, 264]}></sphereGeometry>
        <meshPhongMaterial  map={mars} side={2} />
      </mesh>
    
      
      <mesh  position={[-2,0,0]}>
        <sphereGeometry args={[1.7, 264, 264]}></sphereGeometry>
        <meshPhongMaterial map={neptun} side={2} specular={'darkblue'} shininess={15}/>
      </mesh>


      </group>


       
     





      )
    
};


export default Planets;
