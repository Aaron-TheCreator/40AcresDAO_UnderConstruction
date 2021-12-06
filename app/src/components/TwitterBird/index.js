import React, { useEffect, useState, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Twitter = () => {
  const loader = new GLTFLoader();
  const [model, setModel] = useState();
  useEffect(() => {
    loader.load("/twitter_logo/scene.gltf", setModel);
  }, [loader]);

  const twttrRef = useRef();

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
