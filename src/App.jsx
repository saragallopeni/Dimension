
import "./index.css";
import { Canvas} from '@react-three/fiber';
import gsap from "gsap";
import React, {useEffect, useState } from 'react';
import { ScrollTrigger } from "gsap/all";
import Samsung from "./components/Samsung";
import Samsung2 from "./components/Samsung2";
import Samsung3 from "./components/Samsung3";
import Samsung4 from "./components/Samsung4";
import Samsung5 from "./components/Samsung5";
import { Stats, OrbitControls } from '@react-three/drei';
import Greet from "./components/Greet";
import supernova2 from "/stars.jpg";
import wp2 from "/wp5.png";
import SecondMoon from "./components/Secondmoon";
import Samsung1 from "./components/Samsungi1";
import Footer from "./components/Footer";

const App = () => {
  

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 769);
      setIsTablet(width > 768 && width < 1500);
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();
    // gsap.registerPlugin(ScrollTrigger);

    // const tl = gsap.timeline();
  
    // tl.to('span', {
    //   duration: 0.1,
    //   opacity: 1,
    //   stagger: 0.1,
    //   ease: 'power1.inOut'
    // })
    // .to('span', {
    //   duration: 0.1,
    //   opacity: 0,
    //   stagger: 0.1,
    //   ease: 'power1.inOut'
    // })
    // .to('.design', {
    //   duration: 0.1,
    //   position: 'absolute',
    //   top: '-20%',
    //   ease: 'power1.inOut'
    // });
  
    gsap.to('.header', {
      background: 'transparent',
      ease: 'expo.inOut',
      scrollTrigger: {
        scrub: true,
        start: "50% top",
        end: "bottom bottom",
      }
    });
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);





  {/* style */}
  
  const first_animation_style ={
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    gridTemplateColumns: '60% 40%',
    width: '90vw',
    height: '70dvh',
    boxSizing: 'border-box',
    background: 'transparent',
    flexDirection: isMobile ? 'column' : 'row',
  }

  const box_shadow_style ={
    width: '80vw',
    background: 'linear-gradient(black 50%, transparent)', 
    height: '80dvh',
    borderRadius: '30px' ,
    position: 'absolute',
    top: isMobile ? '100dvh' : isTablet ? '100dvh' : '120dvh',
  
  }

  const style_style = {
    display: 'flex',
    position: 'absolute', 
    color: 'white', 
    left: isMobile ? '20vw' : isTablet ? '15vw' : '13vw',
    top: isMobile ? '105dvh' : isTablet ? '104dvh' : '155dvh', 
    fontSize: isMobile ? '10px' : isTablet ? '18px' : '19px' ,
    fontFamily: 'Archivo'
  }

  const windowsmall_style = {
    display: 'flex',
    fontSize: isMobile ? '35px' : isTablet ? '60px' : '61px',
    }

    const mainmoon_style = {
      position: 'absolute', 
      left: isMobile ? '' : isTablet ?  '-20vw' : '-30vw', 
      top: isMobile ? '160dvh' : isTablet ? '185dvh' : '180dvh', 
      width: '100vw'
    }

    const three_phone_style ={
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row',
      width: '100vw' , 
      padding: isMobile ? '5%' : isTablet ? '' : '',
      gridTemplateColumns: 'repeat(3,40%)',
      gridGap: '1%',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box' ,
      height: isMobile ? '300dvh' : isTablet ? '50dvh' : '50dvh', 
      background: 'linear-gradient(lightgray,white)'
    }

    const desing_style = {
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center',
      width : '100vw', 
      backgroundColor:'black',
      // ,fontFamily: 'Schibsted Grotesk',
      // fontWeight: '200', 
      // boxSizing:'border-box',
      // left: isMobile ? '8vw' : isTablet ?'' : '',
        fontSize: isMobile ? '30px' : isTablet ? '' : '30px',
      // top: isMobile ? '5dvh' : '',
       color: 'white'
    }
    

  const header_style ={
    position: 'absolute', 
    background: 'linear-gradient(black 40%, transparent)',
    width: '100vw', 
    height: '20dvh',
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

  

  
  
  return (

    <div style={{width: '100vw', boxSizing: 'border-box', backgroundColor: 'black'}} >

    {/* header part*/}
    <div className={"header"}  style={header_style}>
    <div className={"logo"} style={logo}>
     
    <h1 className={"title"} style={{fontFamily : 'Schibsted Grotesk', fontWeight: '500'}}>

      DIMENSION SEVEN
      <br>
      </br>
      <p style={{fontFamily : 'Schibsted Grotesk', fontSize: '10px'}} > Scroll to zoom in/out and click-drag to rotate the model!</p>
      </h1>

    
 
    </div>

   
   
    
          </div>

          {/* <div className="design" style={desing_style}>  */}
          {/* <h1 style={desing_style}  > */}
  {/* <span style={{opacity: '1'}}>W</span> */}
  {/* <span style={{opacity: '0'}}>h</span> */}
  {/* <span style={{opacity: '0'}}>e</span> */}
  {/* <span style={{opacity: '0'}}>r</span> */}
  {/* <span style={{opacity: '0'}}>e</span> */}
  {/* <span style={{opacity: '0'}}>&nbsp; </span> */}
  {/* <span style={{opacity: '0'}}>d</span> */}
  {/* <span style={{opacity: '0'}}>e</span> */}
  {/* <span style={{opacity: '0'}}>s</span> */}
  {/* <span style={{opacity: '0'}}>i</span> */}
  {/* <span style={{opacity: '0'}}>g</span> */}
  {/* <span style={{opacity: '0'}}>n</span> */}
  {/* <span style={{opacity: '0'}}>&nbsp; </span> */}
  {/* <span style={{opacity: '0'}}>m</span> */}
  {/* <span style={{opacity: '0'}}>e</span> */}
  {/* <span style={{opacity: '0'}}>e</span> */}
  {/* <span style={{opacity: '0'}}>t</span> */}
  {/* <span style={{opacity: '0'}}>s</span> */}
  {/* <span style={{opacity: '0'}}>&nbsp; </span> */}
  {/* <span style={{opacity: '0'}}>d</span> */}
  {/* <span style={{opacity: '0'}}>i</span> */}
  {/* <span style={{opacity: '0'}}>m</span> */}
  {/* <span style={{opacity: '0'}}>e</span> */}
  {/* <span style={{opacity: '0'}}>n</span> */}
  {/* <span style={{opacity: '0'}}>s</span> */}
  {/* <span style={{opacity: '0'}}>i</span> */}
  {/* <span style={{opacity: '0'}}>o</span> */}
  {/* <span style={{opacity: '0'}}>n</span> */}
  {/* <span style={{opacity: '0'}}>.</span> */}
          {/* </h1> */}
          {/* </div> */}


        {/* first animation*/}
      <div 
      style={{
        display: 'flex', 
        background:'transparent',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100vw',
              height: '100dvh',
               position: 'relative'}     
      }
      >

<Canvas  shadows >
  <ambientLight intensity={4}/>
  <directionalLight position={[0,0,3]}/>
            <SecondMoon ></SecondMoon>
                        </Canvas>

      <div 
      className="first_animation"
      style={
        first_animation_style
  //       position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // display: 'flex',
  // gridTemplateColumns: '60% 40%',
  // width: '90vw',
  // height: '70dvh',
  // boxSizing: 'border-box',
  // background: 'transparent',
        
            }>


          <Canvas style={{marginLeft: '10px', background: 'linear-gradient(black 50%, transparent)',marginRight: '10px',boxShadow: 'inset 0 0 30px #6c3667'}}  shadows >
            <ambientLight intensity={5}/>
            <directionalLight position={[0,2,3]} intensity={3} color={'white'}/>
                              <directionalLight position={[0,2,-3]} intensity={3} color={'darkred'}/>
                              <directionalLight position={[0,-2,3]} intensity={3} color={'blue'}/>
                              <directionalLight position={[2,0,3]} intensity={3} color={'darkred'}/>
                              <directionalLight position={[-2,0,3]} intensity={3} color={'blue'}/>
                                                            <directionalLight position={[0,0,3]} intensity={5} />
                                                            <directionalLight position={[0,0,-3]}intensity={5} />
                                                            <directionalLight position={[0,1,0]} intensity={5}/>
                                                            <directionalLight position={[0,-1,0]} intensity={5}/>
                                                            <directionalLight position={[1,0,0]} intensity={5}/>
                                                            <directionalLight position={[-1,0,0]} intensity={5}/>
            <Samsung ></Samsung>
            <OrbitControls minDistance={3} maxDistance={5}  rotateSpeed={0.4}
  zoomSpeed={0.6}
  />
            <Stats />
                        </Canvas>

        <Canvas style={{marginLeft: '10px', background: 'linear-gradient(black 50%, transparent)', marginRight: '10px',boxShadow: 'inset 0 0 30px #6c3667'}}  >
        <ambientLight intensity={0.5}/>
        <orthographicCamera position={[0,0,6.5]}></orthographicCamera>
                              <directionalLight position={[0,2,3]} intensity={3} color={'white'}/>
                              <directionalLight position={[0,2,-3]} intensity={3} color={'darkred'}/>
                              <directionalLight position={[0,-2,3]} intensity={3} color={'blue'}/>
                              <directionalLight position={[2,0,3]} intensity={3} color={'darkred'}/>
                              <directionalLight position={[-2,0,3]} intensity={3} color={'blue'}/>
                                                            <directionalLight position={[0,0,3]} intensity={5} />
                                                            <directionalLight position={[0,0,-3]}intensity={5} />
                                                            <directionalLight position={[0,1,0]} intensity={5}/>
                                                            <directionalLight position={[0,-1,0]} intensity={5}/>
                                                            <directionalLight position={[1,0,0]} intensity={5}/>
                                                            <directionalLight position={[-1,0,0]} intensity={5}/>


      <Samsung2></Samsung2>
      <OrbitControls minDistance={6} maxDistance={7}  rotateSpeed={0.4}
  zoomSpeed={0.6}
 />
      <Stats/>
      </Canvas>
      </div>
      </div>


      <div style={{width: '100vw', height: '130dvh',  display: 'flex',justifyContent: 'center', alignItems: 'center' ,backgroundImage:`url(${supernova2})`,backgroundSize: 'cover'}}>
        <div className="boxshadow" style={box_shadow_style}>
          <Canvas style={{position: 'absolute', zIndex: '9999',borderRadius: '50px',     boxShadow: 'inset 5px 15px 10px 10px rgb(44, 24, 52)'}}>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[0,2,3]} intensity={3} color={'white'}/>
                              <directionalLight position={[0,2,-3]} intensity={3} color={'darkred'}/>
                              <directionalLight position={[0,-2,3]} intensity={3} color={'blue'}/>
                              <directionalLight position={[2,0,3]} intensity={3} color={'darkred'}/>
                              <directionalLight position={[-2,0,3]} intensity={3} color={'blue'}/>
                                                            <directionalLight position={[0,-3,30]} intensity={5} />
                                                            <directionalLight position={[0,0,-3]}intensity={5} />
                                                            <directionalLight position={[0,1,0]} intensity={5}/>
                                                            <directionalLight position={[0,-1,0]} intensity={5}/>
                                                            <directionalLight position={[1,0,0]} intensity={5}/>
                                                            <directionalLight position={[-1,0,0]} intensity={5}/>
            <Samsung1></Samsung1>
            <OrbitControls minDistance={4} maxDistance={7} rotateSpeed={0.4} zoomSpeed={0.6}/>
            <Stats />
          </Canvas>
        </div>
        <div className="style" style={style_style}>
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
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',boxSizing:'border-box',width: '80vw',height: '50dvh', fontFamily: 'Archivo', color: 'white', fontSize: '25px'}}>
        <Canvas className="mainmoon" camera={{position: [0,0,-2.1]}} style={mainmoon_style}>          
          <directionalLight position={[1,-2,0]} intensity={0.7} />
          <directionalLight position={[0,-2,0]} intensity={0.5}/>
          {/* <directionalLight position={[0,-1,0]} intensity={0.2}/> */}
          <Greet></Greet>
        </Canvas>
        <h1 className="windowsmall" style={windowsmall_style}>Where <br></br> form meets feeling — <br></br>explore 3D not as a shape,<br></br> but as a dimension of experience</h1>
        </div>
       </div>


       <div className="threephones" style={three_phone_style}>
        <Canvas camera={{position: [0,0,-3.5]}} >
          <ambientLight intensity={1}/>
          <directionalLight position={[0,2,-3]} intensity={5} />
          <directionalLight position={[0,2,3]} intensity={5} />
          <Samsung3></Samsung3>
          <OrbitControls minDistance={4} maxDistance={4} rotateSpeed={0.4}
  zoomSpeed={0.6}
  enablePan={false} 
  enableZoom={false} 
   />
          <Stats />
        </Canvas>

        <Canvas camera={{position: [0,0,-3.5]}} >
        <ambientLight intensity={1}/>
        <directionalLight position={[0,2,-3]} intensity={5} />
        <directionalLight position={[0,2,3]} intensity={5} />
          <Samsung4 ></Samsung4>
          <OrbitControls minDistance={4} maxDistance={4} rotateSpeed={0.4}
  zoomSpeed={0.6}
  enablePan={false} 
  enableZoom={false}
/>          <Stats />
        </Canvas>

        <Canvas camera={{position: [0,0,-3.5]}} >
        <ambientLight intensity={1}/>
        <directionalLight position={[0,2,-3]} intensity={5} />
        <directionalLight position={[0,2,3]} intensity={5} />
          <Samsung5></Samsung5>
          <OrbitControls minDistance={4} maxDistance={4} rotateSpeed={0.4}
  zoomSpeed={0.6}
  enablePan={false} 
  enableZoom={false} 
  />
          <Stats />
        </Canvas>        

        </div>         

          <Footer style={{position: 'absolute', backgroundColor: 'white'}}></Footer>

      </div>  
  )
};





export default App;