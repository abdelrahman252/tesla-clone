import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../index.css";

const Section = ({
  title,
  description,
  leftTextBtn,
  rightTextBtn,
  backgroundImg,
}) => {
  return (
    <>
      <Wrap bgImage={backgroundImg} className="sec">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(200px)" }}
          whileInView={{
            opacity: 1,
            transform: "translateY(-1px)",
          }}
          transition={{ duration: 0.5 }}
        >
          <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
          </ItemText>
        </motion.div>
        <Buttons>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(200px)" }}
            whileInView={{
              opacity: 1,

              transform: "translateY(-1px)",
            }}
            transition={{ duration: 0.5 }}
          >
            <ButtonGroup>
              <LeftButton>{leftTextBtn}</LeftButton>
              {rightTextBtn && <RightButton>{rightTextBtn}</RightButton>}
            </ButtonGroup>
          </motion.div>
          <motion.div
            initial={{ opacity: 1, transform: "translateY(5px)" }}
            animate={{opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.2, yoyo: Infinity }}
          >
            <img src="/images/down-arrow.svg" alt="" />
          </motion.div>
        </Buttons>
      </Wrap>
    </>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.8;
  texttrans-form: uppercase;
  fontsize: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
  fontweight: 500;
`;

const Buttons = styled.div``;

// const updown = keyframes`
//     0%,
//     20%,
//     50%,
//     80%,
//     100% {
//       transform: translateY(0);
//     }
//     40% {
//       transform: translateY(5);
//     }
//     60% {
//       transform: translateY(3);
//     }
//   `

// const DownArrow = styled.img`
//     height: 40px;
//     margin-top: 20px;
//     animation: updown 1.5s  infinite ;

// `
