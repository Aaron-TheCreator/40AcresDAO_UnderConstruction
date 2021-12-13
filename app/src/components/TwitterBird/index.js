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

  const properties = useSpring({
    birdRotation: hover ? 0.05 : 0.01,
  });

  useFrame((state, delta) => {
    // { clock }
    // const elapsedTime = clock.getElapsedTime();

    if (hover && twttrRef.current) {
      twttrRef.current.rotation.y += 0.01;
    } else if (twttrRef.current) {
      twttrRef.current.rotation.y += 0.05;
    } else {
      return null;
    }
    // twttrRef.current
    //   ? (twttrRef.current.rotation.y = properties.birdRotation)
    //   : console.log("Loading..");
  });

  const twttrRef = useRef();

  return model ? (
    <group
      onPointerOver={(event) => {
        // console.log("hover:", hover, event.target);
        setHover(true);
      }}
      onPointerOut={(event) => {
        setHover(false);
      }}
    >
      <primitive
        ref={twttrRef}
        // rotation={[0, 0.9, 0]}
        object={model.scene}
        scale={[0.001, 0.001, 0.001]}
        position={[0, -1.5, 2.5]}
      />
    </group>
  ) : null;
};

export default Twitter;
