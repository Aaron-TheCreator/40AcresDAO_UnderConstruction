import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Twitter = () => {
  const loader = new GLTFLoader();
  const [model, setModel] = useState();
  useEffect(() => {
    loader.load("/twitter_logo/scene.gltf", setModel);
  }, [loader]);
  //   console.log(model);

  const twttrRef = useRef();

  // console.log("line 27 TwttBrd: twttrRef:", twttrRef);

  // controls auto-rotate
  // useFrame(({ clock }) => {
  //   const elapsedTime = clock.getElapsedTime();

  //   twttrRef.current.rotation.y = elapsedTime / 3;
  // });
  // useFrame(() => {
  //   // const elapsedTime = clock.getElapsedTime();

  //   // twttrRef.rotation.y = elapsedTime / 6;
  //   twttrRef.current.rotation.y += 0.004;
  // });
  return model ? (
    <group ref={twttrRef}>
      <primitive
        rotation={[0, 0.9, 0]}
        object={model.scene}
        scale={[0.001, 0.001, 0.001]}
        position={[0, -1.5, 2.5]}
      />
    </group>
  ) : null;
};

export default Twitter;
