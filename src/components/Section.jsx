import React from 'react'
import styled, { keyframes } from 'styled-components'
import Fade from 'react-reveal/Fade';
import "../index.css"

const Section = ({ title, description, leftTextBtn, rightTextBtn, backgroundImg }) => {
    return (
        <Wrap bgImage={backgroundImg} className="sec">
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftTextBtn}
                        </LeftButton>
                        {rightTextBtn &&
                            <RightButton>
                                {rightTextBtn}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <img  src="/images/down-arrow.svg" alt=''/>
            </Buttons>
        </Wrap>
    )
}

export default Section

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
    background-image: ${props => `url("/images/${props.bgImage}")`};
 

`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    `


const LeftButton = styled.div`
    background-color: rgba(23,26,32,.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.8;
    textTrans-form: uppercase;
    fontSize: 12px;
    cursor: pointer;
    margin: 8px
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
    fontWeight: 500;
`



const Buttons = styled.div`

`

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