
import "./index.css";
import { Canvas} from '@react-three/fiber';
import gsap from "gsap";
import React, {useEffect } from 'react';
import { ScrollTrigger } from "gsap/all";
import Samsung from "./components/Samsung";
import Samsung2 from "./components/Samsung2";
import Samsung3 from "./components/Samsung3";
import Samsung4 from "./components/Samsung4";
import Samsung5 from "./components/Samsung5";
import { Stats, OrbitControls } from '@react-three/drei';
import Greet from "./components/Greet";


const App = () => {


  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
   const tl = gsap.timeline();

    tl.to('span',{
      duration: 0.1,
      opacity: 1,
      stagger: 0.1,
      ease: 'power1.inOut'
    }).to('span',{
      duration: 0.1,
      opacity: 0,
      stagger: 0.1,
      ease: 'power1.inOut'
    }).to('.design',{
      duration: 0.1,
      position: 'absolute',
      top: '-20%',
      ease: 'power1.inOut'
    });



  
   
    



    gsap.to('.header', {
      background: 'transparent',
      ease: 'expo.inOut',
      scrollTrigger: {
        scrub: true,
        start: "50% top",
        end: "bottom bottom",
      }
    });


  


 

  });





  {/* style */}
  

  const header_style ={
    position: 'relative', 
    width: '100vw', 
    height: '80px',
    top: '0',
    gridTemplateRows: 'repeat(2,auto)',
    padding: '20px',
    boxSizing: 'border-box',
    justifyContent:'space-between',
    fontFamily : 'Schibsted Grotesk',
    alignItems: 'center',
    color: 'white',
    backgroundColor: ' black'
  }

  const a = {
    marginRight: '25px',
    textDecoration: 'none',
    color : 'black',
    fontSize: '20px'
  }

  const logo ={
    boxSizing: 'border-box',
    display: 'flex',
    height: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    
  }

   
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  

  
  
  return (

    <div style={{width: '100vw', boxSizing: 'border-box', backgroundColor: 'black'}} >

    {/* header part*/}
    <div className={"header"}  style={header_style}>
    <div className={"logo"} style={logo}>
     
    <h1 className={"title"} style={{fontFamily : 'Schibsted Grotesk', fontWeight: '500'}}>

      React Project</h1>

    
 
    </div>
    <nav>
        <a  href="#" style={a}>Home</a>
        <a href="#" style={a}>About</a>
        <a href="#" style={a}>Contact</a>
    </nav>
   
   
    
          </div>

          <div className="design" style={{display: 'flex',justifyContent: 'center', alignItems: 'center',width : '100vw', backgroundColor:'black' }}> 
          <h1 style={{fontFamily: 'Schibsted Grotesk',fontWeight: '200', fontSize: '60px', color: 'white'}} >
  <span style={{opacity: '1'}}>W</span>
  <span style={{opacity: '0'}}>h</span>
  <span style={{opacity: '0'}}>e</span>
  <span style={{opacity: '0'}}>r</span>
  <span style={{opacity: '0'}}>e</span>
  <span style={{opacity: '0'}}>&nbsp; </span>
  <span style={{opacity: '0'}}>d</span>
  <span style={{opacity: '0'}}>e</span>
  <span style={{opacity: '0'}}>s</span>
  <span style={{opacity: '0'}}>i</span>
  <span style={{opacity: '0'}}>g</span>
  <span style={{opacity: '0'}}>n</span>
  <span style={{opacity: '0'}}>&nbsp; </span>
  <span style={{opacity: '0'}}>m</span>
  <span style={{opacity: '0'}}>e</span>
  <span style={{opacity: '0'}}>e</span>
  <span style={{opacity: '0'}}>t</span>
  <span style={{opacity: '0'}}>s</span>
  <span style={{opacity: '0'}}>&nbsp; </span>
  <span style={{opacity: '0'}}>d</span>
  <span style={{opacity: '0'}}>i</span>
  <span style={{opacity: '0'}}>m</span>
  <span style={{opacity: '0'}}>e</span>
  <span style={{opacity: '0'}}>n</span>
  <span style={{opacity: '0'}}>s</span>
  <span style={{opacity: '0'}}>i</span>
  <span style={{opacity: '0'}}>o</span>
  <span style={{opacity: '0'}}>n</span>
  <span style={{opacity: '0'}}>.</span>
          </h1>
          </div>


        {/* first animation*/}
      <div style={{
        display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              width: '100vw',
              height: 'dvh',
      }}>
      <div 
      className="first_animation"
      style={{
        display: 'flex',
        width: '80vw',
        height: '50dvh',
        marginTop: '5%',
        boxSizing: 'border-box',
        zIndex: '99',
        left: '0',
        gridTemplateColumns: '60% 40%',
        gridGap: '2%'
            }}>


          <Canvas style={{backgroundColor: 'black', boxShadow: ' 0 -6px 20px darkred', borderRadius: '40px'}}  shadows >
            <ambientLight intensity={5}/>
            <directionalLight position={[0,0,3]} intensity={3} color={'white'}/>
            <ambientLight intensity={5}/>
                              <directionalLight position={[0,2,3]} intensity={3} color={'white'}/>
                              <directionalLight position={[0,2,-3]} intensity={3} color={'darkred'}/>
                              <directionalLight position={[0,-2,3]} intensity={3} color={'blue'}/>
                              <directionalLight position={[2,0,3]} intensity={3} color={'darkred'}/>
                              <directionalLight position={[-2,0,3]} intensity={3} color={'blue'}/>
            <Samsung ></Samsung>
            <OrbitControls minDistance={3} maxDistance={7}  rotateSpeed = {0.4 }zoomSpeed = {0.6} />
            <Stats />
                        </Canvas>

        <Canvas style={{backgroundColor: 'black', boxShadow: ' 0 -6px 20px darkgreen', borderRadius: '40px'}} camera={{position:[0,0,6.5], aspect: window.innerWidth / window.innerHeight }} >
        <ambientLight intensity={5}/>
        <ambientLight intensity={5}/>
                              <directionalLight position={[0,2,3]} intensity={3} color={'white'}/>
                              <directionalLight position={[0,2,-3]} intensity={3} color={'darkred'}/>
                              <directionalLight position={[0,-2,3]} intensity={3} color={'blue'}/>
                              <directionalLight position={[2,0,3]} intensity={3} color={'darkred'}/>
                              <directionalLight position={[-2,0,3]} intensity={3} color={'blue'}/>
      <Samsung2></Samsung2>
      <OrbitControls minDistance={5} maxDistance={7}  rotateSpeed = {0.4 }zoomSpeed = {0.6}/>
      <Stats/>
      </Canvas>
      </div>
      </div>


      <div style={{width: '100vw', height: '150dvh',  display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
        <div className="boxshadow" style={{width: '80vw', height: '80dvh',borderRadius: '30px', boxShadow: ' 0 -6px 20px darkblue' }}>
          <Canvas style={{position: 'absolute', zIndex: '9999'}}>
          <ambientLight intensity={25}/>
          <spotLight intensity={50} position={[0,1,0]}/>
                              <directionalLight position={[0,2,3]} intensity={3} color={'white'}/>
                              <directionalLight position={[0,2,-3]} intensity={3} color={'darkred'}/>
                              <directionalLight position={[0,-2,3]} intensity={3} color={'blue'}/>
                              <directionalLight position={[2,0,3]} intensity={3} color={'darkred'}/>
                              <directionalLight position={[-2,0,3]} intensity={3} color={'blue'}/>
            <Samsung ></Samsung>
            <OrbitControls minDistance={3} maxDistance={7} maxPolarAngle = {Math.PI} minPolarAngle = {0} rotateSpeed = {0.4 }zoomSpeed = {0.6}/>
            <Stats />
          </Canvas>
        </div>
        <div style={{display: 'flex',position: 'absolute', color: 'white', left: '12vw',top: '150dvh', fontFamily: 'Archivo', fontWeight: '700'}}>
          <h1>It’s not just a product
            <br></br> — 
            it’s a world
            <br></br>
             waiting 
             <br></br>
             to be 
             <br></br>
             EXPLORED.</h1>
        </div>

      </div>
      
      
       <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center',width: '100vw', height: '100dvh', background: 'linear-gradient(black,gray,lightgray)'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',padding: 'vw',boxSizing:'border-box',width: '70vw',height: '50dvh', fontFamily: 'Archivo', color: 'white', fontWeight: '700', fontSize: '25px'}}>
        <Canvas camera={{position: [0,0,-2], aspect: window.innerWidth / window.innerHeight }} style={{position: 'absolute', left: '-32vw', top: '225dvh'}}>          
          <directionalLight position={[1,-2,0]} intensity={0.7} />
          <directionalLight position={[0,-2,0]} intensity={0.5}/>
          {/* <directionalLight position={[0,-1,0]} intensity={0.2}/> */}
          <Greet></Greet>
        </Canvas>
        <h1 className="windowsmall" style={{display: 'flex'}}>Where <br></br> form meets feeling — <br></br>explore 3D not as a shape,<br></br> but as a dimension of experience</h1>
        </div>
       </div>


       <div style={{ width: '100vw', gridTemplateColumns: 'repeat(3,20%)',gridGap: '1%',padding: '35px', justifyContent: 'center',alignItems: 'center',boxSizing: 'border-box' ,height: '70dvh', background: 'linear-gradient(lightgray,white)'}}>
        <Canvas style={{diplay: 'flex'}} camera={{position: [0,0,-3.5], aspect: window.innerWidth / window.innerHeight }} >
          <ambientLight intensity={1}/>
          <spotLight intensity={25} position={[0,0,-3]}/>
          <Samsung3></Samsung3>
          <OrbitControls minDistance={4} maxDistance={4} maxPolarAngle = {Math.PI}  rotateSpeed = {0.4 }zoomSpeed = {0.6} />
          <Stats />
        </Canvas>

        <Canvas camera={{position: [0,0,-3.5], aspect: window.innerWidth / window.innerHeight }} >
          <ambientLight intensity={1}/>
          <spotLight intensity={25} position={[0,0,-3]}/>
          <Samsung4 ></Samsung4>
          <OrbitControls minDistance={4} maxDistance={4} maxPolarAngle = {Math.PI} rotateSpeed = {0.4 }zoomSpeed = {0.6}/>
          <Stats />
        </Canvas>

        <Canvas camera={{position: [0,0,-3.5], aspect: window.innerWidth / window.innerHeight }} >
          <ambientLight intensity={1}/>
          <spotLight intensity={25} position={[0,0,-3]}/>
          <Samsung5></Samsung5>
          <OrbitControls minDistance={4} maxDistance={4} maxPolarAngle = {Math.PI}  rotateSpeed = {0.4 }zoomSpeed = {0.6}/>
          <Stats />
        </Canvas>        

        </div>         

 







        {/* <div style={{width: '100%', height: '40px', position: 'absolute', bottom: '0%', backgroundColor: ' rgb(228, 226, 226)', display: 'flex', justifyContent: 'center', alignitems: 'center'}} >
          <Footer ></Footer>
        </div> */}


      
        
      



      </div>  
  )
};





export default App;