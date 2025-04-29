import { RoundedBoxGeometry } from "three/examples/jsm/Addons.js";
import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import cameraImage from "/camera.png";
import { VideoTexture } from "three";
import phoneTexImage from "/tekstura.jpg";
const Samsung2 = () => {
     const geometry = new RoundedBoxGeometry(5, 2.5, 0.2, 15, 0.2);
     const screen = new RoundedBoxGeometry(4.8, 2.2, 0.03, 8, 0.1);
     const camera = new RoundedBoxGeometry(1.5, 1, 0.04, 1, 1);

     const button = new RoundedBoxGeometry(0.3, 0.2, 0.11, 12, 1);


               const [videoTexture, setVideoTexture] = useState(null);
          
          
               useEffect(() => {
                  const video = document.createElement("video");
                  video.src = "./gif.mp4"; 
                  video.crossOrigin = "Anonymous";
                  video.loop = true;
                  video.muted = true;
                  video.play();
              
                  const texture = new VideoTexture(video);
                  setVideoTexture(texture);
                  return () => {
                      texture.dispose();
                      video.pause();
                    };
                },[]);


     const rotate = [0,0,Math.PI / 2];



     const meshRef = useRef(); 

     useFrame(() => {
       if (meshRef.current) {
         meshRef.current.rotation.y -= 0.005;
       }
     });

     const cameraTexture = useLoader(TextureLoader, cameraImage);
     const phoneTexture = useLoader(TextureLoader,phoneTexImage);
     

    return(

        <group  rotation={rotate} position={[0,-1.7,3.6]} ref={meshRef} >

        <mesh  geometry={geometry} >
        <meshPhysicalMaterial  map={phoneTexture}
                        color={'lightblue'}
                        roughness={0.2}
                        bumpMap={phoneTexture} bumpScale={1.0}
                         />
        </mesh>
  


        {videoTexture && (
         <mesh  geometry={screen} position={[0, 0, 0.1]}>
            <meshPhongMaterial  map={videoTexture}  shininess={50} specular={'gray'}  />
        </mesh>   )}        

         
    



        <mesh geometry={camera} position={[1.5, -0.6, -0.1]}>
            <meshPhongMaterial  color={'lightblue'}  shininess={50} specular={'gray'}/>
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


        </group>

    )


};

export default Samsung2;
