import styled from "styled-components";
import marvelLogo from "../images/marvel.png";

export const HomeWrapper = styled.main`
  margin: 16px;
`;

export const Header = styled.header`
  margin-bottom: 52px;
  text-align: center;

  p {
    color: #8c8c8c;
  }
`;

export const Logo = styled.div`
  background-image: url(${marvelLogo});
  background-position-x: center;
  background-repeat: no-repeat;
  height: 124px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  position relative; 

  img {
    left: 24%;
    position: absolute;
    top: 16px;
  }
`;

export const SearchInput = styled.input`
  appearance: none;
  background-color: #fdecec;
  border: 1px solid #fdecec;
  border-radius: 24px;
  color: #ff1510;
  font-size: 1rem;
  margin-bottom: 40px;
  padding: 16px 16px 16px 66px;
  width: 50%;

  ::placeholder {
    color: #ff1510;
  }
`;

export const Footer = styled.footer`
  background-color: #ff1510;
  bottom: 0;
  height: 80px;
  position: fixed;
  width: 100%;
`;
