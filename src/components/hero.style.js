import styled from "styled-components";

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
    }
  }
`;

export const IconWrapper = styled.div`
  align-items: center;
  display: flex;

  img {
    height: auto;
    margin-bottom: 16px;
    margin-right: 8px;
    width: 24px;
  }
`;
  
export const HeroImage = styled.div`
  img {
    border-radius: 4px;
    height: auto;
    width: 500px;

    @media screen and (max-width: 425px) {
      width: 244px;
    }
  }
`;

export const InfoWrapper = styled.div`
  text-align: justify;
  width: 300px;

  p {
    color: #b9b9b9;
  }
`;

export const ComicsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  margin-bottom: 40px;
  margin-top: 50px;
  overflow-y: scroll;

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
