import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  justify-content: center;
  justify-items: center;
  list-style: none;
  margin-bottom: 40px;
  margin-top: 50px;
  overflow-y: scroll;

  p {
    font-weight: bold;
  }

  li {
    margin-bottom: 40px;

    div {
      align-items: center;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
    }
  }

  img {
    border-radius: 2px;
    cursor: pointer;
    border-bottom: 6px solid #ff1510;
    height: auto;
    width: 188px;
  }
`;

export const HeartButton = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;
  background: transparent;

  svg {
    path {
      fill: ${(props) => props.favourite ? "#ff1510" : ""};
    }
  }
`;

export const Sort = styled.div`
  align-items: center; 
  color: #ff1510;
  display: flex;
  justify-content: flex-end;
  margin: 0 8px;

  img, label {
    margin-right: 16px;
  }
`;

// reference: https://codesandbox.io/s/6v7n1vr8yn?file=/src/index.js:308-1129

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label`
  background: #b9b9b9;
  border-radius: 15px;
  cursor: pointer;
  height: 26px;
  left: 0;
  position: absolute;
  top: 0;
  width: 42px;
  &::after {
    background-color: #ff1510;
    border-radius: 50%;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    content: "";
    display: block;
    height: 18px;
    margin: 3px;
    transition: 0.2s;
    width: 18px;
  }
`;

export const CheckBox = styled.input`
  border-radius: 15px;
  height: 26px;
  opacity: 0;
  width: 42px;
  z-index: 1;
  &:checked + ${CheckBoxLabel} {
    &::after {
      background-color: #ff1510;
      border-radius: 50%;
      content: "";
      display: block;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
      width: 18px;
    }
  }
`;
