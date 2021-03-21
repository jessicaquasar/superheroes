import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GetComics } from "../services/comics";
import { GetHero } from "../services/hero";
import rating from "../images/rating.png";
import book from "../images/book.png";
import video from "../images/video.png";
import { ComicsList, IconWrapper, HeroWrapper, HeroInfo, InfoWrapper, HeroImage, Loading, DataWrapper } from "./hero.style";

export function HeroPage() {

  const hash = useLocation();
  const heroName = hash.state.name; 
  const heroId = hash.state;

  const { hero } = GetHero({heroName});
  const heroFile = hero?.data?.results;
  const { comics } = GetComics(heroId?.id);
  const allComics = comics?.data?.results;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (heroFile) setLoading(!loading);
  }, [comics])


  return (
    <>
      <HeroWrapper>
        <HeroInfo>
          {heroFile?.map((item) => 
            <li key={item?.id} tabIndex="0">
              <InfoWrapper>
                <h2>{item?.name}</h2>
                <p>{item?.description || "Descrição não disponível"}</p>
                <DataWrapper>
                  <IconWrapper>
                    <p>Quadrinhos</p>
                    <img src={book} alt="quadrinhos" />
                    <label>{item?.comics?.available}</label>
                  </IconWrapper>
                  <IconWrapper>
                    <p>Séries</p>
                    <img src={video} alt="vídeo"/>
                    <label>{item?.series?.available}</label>
                  </IconWrapper>
                </DataWrapper>
                <label>Rating: </label>
                <img src={rating} alt="avaliação"/>
              </InfoWrapper>
              <HeroImage>
                <img src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt={item?.name}/>
              </HeroImage>
            </li>
          )}
        </HeroInfo>
        <h3>Últimos lançamentos</h3>
        {loading ? (
          <Loading>
            <box-icon name='loader-circle' rotate='90' animation='spin' color='#ff1510'/>
            <label> Carregando...</label>
          </Loading>
        ): null}
        <ComicsList>
          {allComics?.map((item) =>
            <li tabIndex="0">
              <img src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt={item?.name}/>
              <p>{item?.title}</p>
            </li>
          )}
        </ComicsList>
      </HeroWrapper>
    </>
  )
}
