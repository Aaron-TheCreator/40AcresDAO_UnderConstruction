// import Loader from "react-loader-spinner";
import { Loader } from "@react-three/drei";
import LoadingSpin from "react-loading-spin";
import styled from "styled-components";
import "../../styles/loading.css";

const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  //   background-color: black;
  //   background-image: radial-gradient(rgba(42, 54, 45, 0.75), black 120%);
  align-items: center;
  justify-content: space-around;
  z-index: -1;
`;

const SpinnerCont = styled.div`
  height: 30%;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;
const LoadText = styled.div`
  color: white;
  font-size: 1rem;
`;
// const Loading = () => {
//   return (
//     <LoaderContainer>
//       <LoadText>
//         <h1>Loading A. Aaron Burns Portfolio</h1>
//       </LoadText>
//       <SpinnerCont>
//         <Loader
//           type="BallTriangle"
//           color="#2a8055"
//           secondaryColor="#24523b"
//           height={300}
//           width={300}
//           timeout={10000}
//         />
//       </SpinnerCont>
//       <LoadText>
//         <h2>View in Landscape Mode on mobile</h2>
//       </LoadText>
//     </LoaderContainer>
//   );
// };

// const Loading = () => (
//   <LoaderContainer>
//     <LoadText>
//       <h3>40 Acres DAO</h3>
//     </LoadText>
//     <SpinnerCont>
//       <LoadingSpin />
//     </SpinnerCont>
//     <LoadText>
//       <h3>Loading</h3>
//     </LoadText>
//   </LoaderContainer>
// );

const Loading = () => (
  <div
    className="loadMain"
    id="loadMain"
    style={{ backgroundImage: `url(${getRandomBckGrnd(randmBckgrnds)})` }}
  >
    <div className="loadTextTop">
      <h3>40 Acres DAO</h3>
    </div>
    <LoadingSpin />
    <div className="loadTextBttm">
      <h3>Loading</h3>
    </div>
  </div>
);

const getRandomBckGrnd = (arr) => {
  const dvsor = arr.length;
  const ret = Math.floor((Math.random() * 100) % dvsor);
  return arr[ret].url;
};

const randmBckgrnds = [
  {
    title: "Mercury",
    author: "JwMos",
    url: "https://lh3.googleusercontent.com/PujZzw4zRcIupvawG7xr4dofEP-zz1rER_1wrjbyWJEwqIkYlgp0bq7AlkMZNsqlGOUXlmK3_1UXflI1EBBaJTMPhCN485-Q5VYcoXM=w600",
  },
  {
    title: "Mask - Unknown",
    author: "Kyn Adams",
    url: "https://media.discordapp.net/attachments/878263733409959936/909485255847723008/20211114_105158_HDR.jpg?width=330&height=440",
  },
  {
    title: "Strong Woman",
    author: "RwandaNFT",
    url: "https://lh3.googleusercontent.com/nSszlNmQukEPlm9ZDRdR5SVUh1g7SEes-vHZa4VoRK2M3SFnkT-AJdHedR4KjpUZE_YH3rp3p8OoWvRuAkpIT2yo3McgWwTy101eag=w600",
  },
  {
    title: "unknown",
    author: "kinnewat",
    url: "https://media.discordapp.net/attachments/878263733409959936/908385862264422400/IMG_0295.png?width=440&height=440",
  },
  {
    title: "AutiBots",
    author: "JwMos",
    url: "https://media.discordapp.net/attachments/878263733409959936/904155757350617088/image0-1.png?width=440&height=440",
  },
  {
    title: "AutiBots Terminator V.2",
    author: "JwMos",
    url: "https://media.discordapp.net/attachments/878263733409959936/900372878225182780/image0.png?width=440&height=440",
  },
  {
    title: "untitled sketch from photo",
    author: "@william_kaen",
    url: "https://media.discordapp.net/attachments/878263733409959936/888890228511768597/image1.jpg?width=330&height=440",
  },
];

// const loadPageMain = document.getElementById("loadMain");
// loadPageMain.style.backgroundImage = `url(${getRandomBckGrnd(randmBckgrnds)})`;
// console.log("loadPage: ", loadPageMain);
// console.log(" getRandomBackg:", getRandomBckGrnd(randmBckgrnds));

export default Loading;
