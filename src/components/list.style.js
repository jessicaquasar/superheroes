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
