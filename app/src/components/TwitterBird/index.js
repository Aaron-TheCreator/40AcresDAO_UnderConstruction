import React, { useEffect, useState, useRef } from "react";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/three";
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
    birdScale: hover ? [0.001, 0.001, 0.001] : [0.0008, 0.0008, 0.0008],
  });

  useFrame(({ clock }) => {
    // { clock }
    const elapsedTime = clock.getElapsedTime();

    // if (hover && twttrRef.current) {
    //   twttrRef.current.rotation.y = elapsedTime / 2;
    // } else if (twttrRef.current) {
    //   twttrRef.current.rotation.y = elapsedTime / 2;
    // } else {
    //   return null;
    // }
    let ovrflw = 0;
    twttrRef.current
      ? (twttrRef.current.rotation.y = elapsedTime / 2)
      : (ovrflw += 1);
  });

  const twttrRef = useRef();

  return model ? (
    <animated.group
      onPointerOver={(event) => {
        // console.log("hover:", hover, event.target);
        setHover(true);
      }}
      onPointerOut={(event) => {
        setHover(false);
      }}
    >
      <animated.primitive
        ref={twttrRef}
        // rotation={[0, 0.9, 0]}
        object={model.scene}
        scale={properties.birdScale}
        position={[0, -1.5, 2.5]}
      />
    </animated.group>
  ) : null;
};

export default Twitter;
