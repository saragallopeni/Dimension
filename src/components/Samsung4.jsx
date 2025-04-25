import { RoundedBoxGeometry } from "three/examples/jsm/Addons.js";
import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import cameraImage from "/camera.png";



const Samsung4 = () => {
     const geometry = new RoundedBoxGeometry(5, 2.5, 0.2, 15, 0.2);
     const screen = new RoundedBoxGeometry(4.8, 2.2, 0.03, 8, 0.1);
     const camera = new RoundedBoxGeometry(1.5, 1, 0.04, 1, 1);

     const button = new RoundedBoxGeometry(0.3, 0.2, 0.11, 12, 1);

     



     const rotate = [0,0,Math.PI /2];
     


     const meshRef = useRef(); 

     useFrame(() => {
       if (meshRef.current) {
        //  meshRef.current.rotation.x += 0.001;
        //   meshRef.current.rotation.y += 0.001;
         meshRef.current.rotation.y -= 0.01;

         
       }
     });

     const cameraTexture = useLoader(TextureLoader, cameraImage);

    return(

        <group rotation={rotate} >

        <mesh  geometry={geometry} >
            <meshStandardMaterial  color={'darkblue'} />
        </mesh>
  



         <mesh  geometry={screen} position={[0, 0, 0.1]}>
            <meshPhongMaterial color={'black'}  shininess={50} specular={'gray'}  />
        </mesh>           

         
    



        <mesh geometry={camera} position={[1.5, -0.6, -0.1]}>
            <meshPhongMaterial color={'darkblue'} shininess={50} specular={'darkblue'} metalness={1}/>
        </mesh>




        <group position={[2,-0.7,-0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh  >
            <cylinderGeometry args={[0.2, 0.2, 0.1, 64]} />
            <meshStandardMaterial  metalness={1} roughness={1} color={'black'} />
        </mesh>        
        <mesh>
            <cylinderGeometry args={[0.2, 0.2, 0.1, 64]} />
            <meshStandardMaterial map={cameraTexture}  />
        </mesh>
        </group>

        <group rotation={[Math.PI / 2, 0, 0]} position={[1.5,-0.7,-0.1]}>
        <mesh  >
            <cylinderGeometry args={[0.2, 0.2, 0.1, 64]} />
            <meshStandardMaterial  metalness={1} roughness={1} color={'black'} />
        </mesh>        
        <mesh  >
            <cylinderGeometry args={[0.2, 0.2, 0.1, 64]} />
            <meshStandardMaterial map={cameraTexture} />
        </mesh>
        </group>


        <group rotation={[Math.PI / 2, 0, 0]} position={[1,-0.7,-0.1]}>
        <mesh  >
            <cylinderGeometry args={[0.2, 0.2, 0.1, 64]} />
            <meshStandardMaterial  metalness={1} roughness={1} color={'black'} />
        </mesh>        
        <mesh  >
            <cylinderGeometry args={[0.2, 0.2, 0.1, 64]} />
            <meshStandardMaterial map={cameraTexture} />
        </mesh>
        </group>

    
      
        <mesh position={[2.20,0,0.1]}  rotation={[Math.PI / 2, 0, 0]} >
            <cylinderGeometry args={[0.04, 0.04, 0.04, 64]} />
            <meshStandardMaterial map={cameraTexture}/>
        </mesh>


              <mesh position={[1.65,-1.2,0]}  geometry={button} rotation={[Math.PI /1, 0,0]}>
                <meshPhongMaterial color={'black'}  shininess={50} specular={'gray'} />
              </mesh>

              <mesh position={[1.30,-1.2,0]} geometry={button} >
                <meshPhongMaterial color={'black'}  shininess={50} specular={'gray'} />
              </mesh>

              <mesh position={[0.82,-1.2,0]} geometry={button} >
                <meshPhongMaterial color={'black'}  shininess={50} specular={'gray'} />
              </mesh>

              <mesh rotation={[Math.PI /2, 0, 0]} position={[1.80,-0.35,-0.10]}>
                <cylinderGeometry  args={[0.05,0.05,0.05,50]}/>
                <meshStandardMaterial metalness={1} />
              </mesh>

              <mesh geometry={button} rotation={[0, 0, Math.PI /2]} position={[-2.41,-0.01,-0.01]}>
                <meshStandardMaterial  color={'black'}/>
              </mesh>
         
            {/* <group position={[5.5,0.5,2]}>
        <mesh>
        <sphereGeometry args={[1,524,524]}/>
        <meshPhysicalMaterial side={2} map={starsTexture} emissive={'blue'} emissiveIntensity={0.5}/>
      </mesh> */}
              {/* <mesh>
              <sphereGeometry args={[2.02,524,524]}/>
              <meshPhysicalMaterial wireframe color={'lightblue'}/>
            </mesh> */}
            {/* </group> */}




        </group>

    )


};

export default Samsung4;
