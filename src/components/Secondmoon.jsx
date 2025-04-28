
import { Canvas, useFrame } from "@react-three/fiber";
import textureImage from "/sur.jpg";
import { EquirectangularReflectionMapping, TextureLoader } from "three";
import { useRef } from "react";


const SecondMoon = () => {


      const texture = new TextureLoader().load(textureImage);
      texture.mapping = EquirectangularReflectionMapping;
      const coreRef = useRef(null);
    
      useFrame(() => {
          if (coreRef.current) {
            coreRef.current.rotation.y += 0.005;

          }
      
        });

      return(
        

        <mesh  position={[0,0,4.4]}  ref={coreRef} receiveShadow>
          <sphereGeometry args={[0.30, 24,24]}/>
          <meshPhysicalMaterial side={2}  map={texture}  bumpMap={texture} bumpScale={5.0} specular={'lighblue'} shininess={10} wireframe color={'violet'}/>
        </mesh>


      )
    
};


export default SecondMoon;
