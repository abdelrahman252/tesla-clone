import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCars } from "./features/car/CarSlice";

const Header = () => {
  const [open, setOpen] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <div>
        <img src="/images/logo.svg" alt="" />
      </div>
      <Menu>
        {cars && cars.map((car, index) => <button key={index}>{car}</button>)}
      </Menu>
      <RightMenu>
        <button>Shop</button>
        <button>Telsa Account</button>
        <CustomMenu onClick={() => setOpen(true)} />
      </RightMenu>
      <BurgerMenu show={open}>
        <CloseWrapper>
          <CustomClose onClick={() => setOpen(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li>
              <button key={index}>{car}</button>
            </li>
          ))}

        <li>
          <button>Existing Inventory</button>
        </li>
        <li>
          <button>Used Inventory</button>
        </li>
        <li>
          <button>Trade-in</button>
        </li>
        <li>
          <button>CyberTruck</button>
        </li>
        <li>
          <button>Roadaster</button>
        </li>
      </BurgerMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  button {
    font-weight: 800;
    text-transform: uppercase;
    padding: 0 10px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  button:hover {
    background: #cfc5c582;
    border-radius: 20px;
    padding: 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  button {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    background: transparent;
    border: none;
    font-size: 14px;
    cursor: pointer;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    button {
      font-weight: 600;
      text-transform: uppercase;
      font-size: 18px;
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
  li:hover {
    background: #cfc5c582;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
