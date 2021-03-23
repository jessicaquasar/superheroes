import styled from "styled-components";
import marvel from "../images/marvel.png";

export const HeroWrapper = styled.div`
  background-color: #e7f6e7;
  padding: 160px;

  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;

export const HeroInfo = styled.ul`
  list-style: none;
  margin: 0;
  margin-bottom: 120px;

  img {
    height: auto;
    width: 100px;
  }
  
  li {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 425px) {
      display: block;
    }

    h2 {
      text-transform: uppercase;

      @media screen and (max-width: 425px) {
        margin-top: 0;
      }
    }
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const IconWrapper = styled.div`
  img {
    float: left;
    height: auto;
    margin-right: 8px;
    width: 24px;
  }
`;
  
export const HeroImage = styled.div`
  img {
    border-radius: 4px;
    height: auto;
    margin-left: 16px;
    width: 500px;

    @media screen and (max-width: 425px) {
      width: 244px;
    }
  }
`;

export const InfoWrapper = styled.div`
  margin-bottom: 24px;
  text-align: justify;
  width: 300px;

  @media screen and (max-width: 425px) {
    width: 260px;
  }

  p, label {
    color: #8c8c8c;
    font-weight: bold;
  }

`;

export const ComicsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  margin-bottom: 40px;
  margin-top: 50px;

  @media screen and (max-width: 425px) {
    flex-wrap: nowrap;
    margin-right: 8px;
    overflow-x: scroll;
  }

  li {
    margin-right: 40px;
  }
  
  img {
    border-radius: 2px;
    height: 132px;
    width: 104px; 
  }

  p {
    font-weight: bold;
    width: 104px;
  }
`;

export const Loading = styled.div`
  align-items: center;
  display: flex;

  label {
    margin-left: 8px;
  }
`;

export const HeroSearchInput = styled.input`
  appearance: none;
  border: 1px solid white;
  border-radius: 24px;
  font-size: 1rem;
  padding: 16px 16px 16px 66px;
  width: 50%;
`;

export const HeroLogo = styled.div`
  background-image: url(${marvel});
  background-position-x: left;
  background-repeat: no-repeat;
  height: 124px;
  width: 400px;
`;

export const HeroForm = styled.form`
  display: flex;
  justify-content: center;
  position relative; 

  img {
    left: 24%;
    position: absolute;
    top: 16px;
  }
`;

export const HeroSearchWrapper = styled.div`
  align-items: center;
  background-color: #e7f6e7;
  display: flex;
  padding: 48px 120px;

  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
    padding: 8px 4px;
    
    input {
      margin-bottom: 16px;
    }
  }
`;
