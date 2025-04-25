import { Canvas, useFrame } from "@react-three/fiber";
import textureImage from "../moon.jpg";
import { EquirectangularReflectionMapping, TextureLoader } from "three";
import { useRef } from "react";


const Greet = () => {


      const texture = new TextureLoader().load(textureImage);
      texture.mapping = EquirectangularReflectionMapping;
      const coreRef = useRef(null);
    
      useFrame(() => {
          if (coreRef.current) {
            coreRef.current.rotation.y += 0.005;

          }
      
        });

      return(
        

        <mesh  position={[0,0,-1.3]}  ref={coreRef} castShadow>
          <sphereGeometry args={[0.30, 124,124]}/>
          <meshPhongMaterial side={2}  map={texture} specular={'darkgray'} shininess={10} />
        </mesh>


      )
    
};


export default Greet;
