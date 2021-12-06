import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Earth } from "./components/Earth/Planet.js";
import { Stars } from "@react-three/drei";
import Twitter from "./components/TwitterBird/index.js";
import Timer from "./components/CountDown/Timer.js";
// import Loading from "./components/Loading/index.js";
import Loading from "./components/Loading/index.js";
import "./App.css";

// object for styled components @media queries
const size = {
  mobileM: "380px",
  mobileL: "425px",
  tablet: "770px",
  laptop: "1024px",
};

// @media devices
const device = {
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
};

const CanvasContainer = styled.div`
  width: 100%;
  height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //text-shadow: 0 0 5px #c8c8c8;
  // border: 1px solid red;
  position: relative;
  //@media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  };
  @media ${device.mobileL} {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const HiddenHeader = styled.h1`
  display: none;
`;
const HeaderMsg = styled.div`
  position: absolute;
  background-color: white;
  text-align: center;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  padding: 2.5%;
  margin-bottom: 45%;
  margin-top: -35%;
  // margin-left: 45%;
  border-radius: 25px;
  border: 3px solid #373f4a;
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    -5px -1px 40px -5px rgba(221, 232, 220, 0.73);
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    -5px -1px 40px -5px rgba(221, 232, 220, 0.73);
  font-size: 1.5rem;
  @media ${device.tablet} {
    margin-bottom: 150%;
    margin-top: -150%;
  }
  @media ${device.mobileL} {
    margin-bottom: 200%;
    margin-top: -200%;
  }
`;

const TimerCTACont = styled.div`
  position: absolute;
  background-color: white;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  text-size: 0.5rem;
  align-items: center;
  margin-top: 50%;
  padding: 2.5%;
  border: 3px solid #373f4a;
  border-radius: 25px;
  z-index: 1;
  color: black;
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    -5px -1px 40px -5px rgba(221, 232, 220, 0.73);
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    -5px -1px 40px -5px rgba(221, 232, 220, 0.73);
  max-width: 60%;
  min-width: 265px;
  @media ${device.mobileL} {
    margin-top: 50%;
    margin-bottom: -50%;
  }
`;

const CTATextCont = styled.div`
  width: 80%;
  //border: 1px solid red;
  text-align: center;
`;

const BottomContent = styled.div`
  position: absolute;
  background-color: white;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5%;
  margin-top: 95%;
  margin-bottom: -95%;
  //margin-left: 40%;
  border-radius: 25px;
  border: 3px solid #373f4a;
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    -5px -1px 40px -5px rgba(221, 232, 220, 0.73);
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    -5px -1px 40px -5px rgba(221, 232, 220, 0.73);
  width: 45%;
  text-align: center;
  &:hover {
    background-color: #e1e3e6;
    border: 5px solid #4c5663;
  }
  & h3 {
    font-size: 1.5rem;
  }
  & a {
    text-decoration: none;
    color: black;
  }
  & a:visited {
    text-decoration: none;
    color: black;
  }
  @media ${device.tablet} {
    margin-top: 250%;
    margin-bottom: -250%;
  }
  @media ${device.mobileL} {
    margin-top: 350%;
    margin-bottom: -350%;
  }
  @media ${device.mobileM} {
    margin-top: 425%;
    // margin-bottom: -425%;
  }
`;

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <CanvasContainer className="canvasCont">
          <Canvas>
            <Earth />
            {/* <OrbitControls /> */}
            <Twitter />
            <Stars
              radius={200}
              depth={50}
              count={29000}
              factor={7}
              saturation={0}
              fade={true}
            />
            {/* <ambientLight intensity={0.5} /> */}
          </Canvas>
          <HiddenHeader>40 Acres Dao</HiddenHeader>
          <HeaderMsg className="headerMsg">
            <span>
              <p>
                We're Almost Done
                <br /> Creating The Universe
              </p>
            </span>
            <p>Find Out When We Finish</p>
          </HeaderMsg>
          <TimerCTACont className="timerContnr">
            <Timer />
            <CTATextCont>
              <h2>40 Acres DAO Launching Soon</h2>
            </CTATextCont>
          </TimerCTACont>
          <BottomContent className="bottmCont">
            <a href="https://www.twitter.com/40AcresDao" className="twttr-link">
              <h3>Follow The Journey On Our Official Twitter</h3>
              <span>@40AcresDAO</span>
            </a>
          </BottomContent>
        </CanvasContainer>
      </Suspense>
    </>
  );
}

export default App;
