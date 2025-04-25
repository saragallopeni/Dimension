import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

const ProjectionDebugger = () => {
  const { camera } = useThree();

  useEffect(() => {
    console.log("📷 projectionMatrix", camera.projectionMatrix);
    console.log("📷 projectionMatrixInverse", camera.projectionMatrixInverse);
  }, [camera]);

  return null;
};

export default ProjectionDebugger;
