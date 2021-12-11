import React, { useEffect, useState, useRef } from "react";
import { useSpring } from "@react-spring/core";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Twitter = () => {
  const loader = new GLTFLoader();
  const [model, setModel] = useState();
  const [hover, setHover] = useState(false);
  useEffect(() => {
    loader.load("/twitter_logo/scene.gltf", setModel);
  }, [loader]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // if (active && hover) {
    //   cubeRef.current.rotation.y = elapsedTime / 8;
    // }
    if (hover && twttrRef.current) {
      twttrRef.current.rotation.y = elapsedTime / 6;
    } else if (twttrRef.current) {
      twttrRef.current.rotation.y = elapsedTime / 9;
    } else {
      return null;
    }
    // twttrRef.current
    //   ? (twttrRef.current.rotation.y = elapsedTime / 6)
    //   : console.log("Loading..");
  });

  // const properties = useSpring({
  //   birdRotation = hover ?
  // })
  const twttrRef = useRef();

  return model ? (
    <primitive
      ref={twttrRef}
      // rotation={[0, 0.9, 0]}
      object={model.scene}
      scale={[0.001, 0.001, 0.001]}
      position={[0, -1.5, 2.5]}
      onPointerOver={(event) => {
        console.log("hover:", hover, event.target);
        setHover(true);
      }}
      onPointerOut={(event) => {
        setHover(false);
      }}
    />
  ) : null;
};

export default Twitter;
