import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Twitter = () => {
  const loader = new GLTFLoader();
  const [model, setModel] = useState();
  useEffect(() => {
    loader.load("/twitter_logo/scene.gltf", setModel);
  }, []);
  //   console.log(model);

  const twttrRef = useRef();

  // controls auto-rotate
  //   useFrame(({ clock }) => {
  //     const elapsedTime = clock.getElapsedTime();

  //     model.rotation.y = elapsedTime / 6;
  //   });
  return model ? (
    <primitive
      ref={twttrRef}
      object={model.scene}
      scale={[0.001, 0.001, 0.001]}
      position={[-0.5, -1.2, 2.5]}
    />
  ) : null;
};

export default Twitter;
