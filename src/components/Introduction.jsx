import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

const Introduction = () => {

  const style = {
    boxShadow: '0 0 15px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.6), 0 0 45px rgba(0, 255, 255, 0.4)',
    display: 'grid', justifyContent: 'center', alignItems: 'center', fontFamily: 'Wallpoet', padding: '20px',
    color: 'white', gridTemplateRows: '30% 60%',
    width: '1300px', height: '500px', position: 'absolute', top: '650px', left: '100px', backgroundColor: 'black'
  }
  const span = {
    opacity: '0',
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.to(".the_title span, .the_content span", {
      duration: 0.05,
      opacity: 1,
      stagger: 0.1,  
      scrollTrigger: {
        trigger: ".content",
        start: "top 90%", 
        end: "bottom 90%", 
        scrub: true, 
      }
    });

  }, []);

  return (
    <div className="content" style={style}>
      <div className="the_title">
        <h1>
        <span style={{ opacity: 0 }}>I</span>
        <span style={{ opacity: 0 }}>n</span>
        <span style={{ opacity: 0 }}>t</span>
        <span style={{ opacity: 0 }}>r</span>
        <span style={{ opacity: 0 }}>o</span>
        <span style={{ opacity: 0 }}>d</span>
        <span style={{ opacity: 0 }}>u</span>
        <span style={{ opacity: 0 }}>c</span>
        <span style={{ opacity: 0 }}>t</span>
        <span style={{ opacity: 0 }}>i</span>
        <span style={{ opacity: 0 }}>o</span>
        <span style={{ opacity: 0 }}>n</span>
        </h1>
      </div>
      <div className="the_content" >
      <h1>
          <span style={{ opacity: 0 }}>I am Sara Gallopeni, I am a web developer. I made an app too, and I have had some projects. But I know I need to </span><br />
          <span style={{ opacity: 0 }}>have a place where I can enhance my skills. I want to bring some change in my country. I love it here and I know my potential.</span><br />
          <span style={{ opacity: 0 }}>I know the limits of my experience, but I know one thing too: the mind doesn’t have limits. So my goal is to go beyond my current self and become a better developer that one day can bring change in my country.</span><br />
          <span style={{ opacity: 0 }}>I live once, and I will not waste the infinite potential of my mind. I aim to make a difference through my skills as a web developer.</span>
        </h1>
      </div>
    </div>
  );
}

export default Introduction;
