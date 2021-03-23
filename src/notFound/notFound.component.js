import { func } from "prop-types";
import React from "react";
import notFound from "../images/404.jpg";
import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: auto;
    width: 50%;
  }
`;

export function NotFound() {
  return (
    <NotFoundWrapper>
      <img src={notFound} alt="página não encontrada"/>
    </NotFoundWrapper>
  )
};
