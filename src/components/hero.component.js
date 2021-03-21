import React from "react";
import { useLocation } from "react-router-dom";
import { GetComics } from "../services/comics";
import { GetHero } from "../services/hero";
import { Footer } from "./home.style";
import rating from "../images/rating.png";
import book from "../images/book.png";
import video from "../images/video.png";
import { ComicsList, IconWrapper, HeroWrapper, HeroInfo, InfoWrapper, HeroImage } from "./hero.style";

export function HeroPage() {

  const hash = useLocation();
  const heroName = hash.state.name; 
  const heroId = hash.state;

  const { hero } = GetHero({heroName});
  const heroFile = hero?.data?.results;
  const { comics } = GetComics(heroId?.id);
  const allComics = comics?.data?.results;

  return (
    <>
      <HeroWrapper>
        <HeroInfo>
          {heroFile?.map((item) => 
            <li key={item?.id} tabIndex="0">
              <InfoWrapper>
                <h2>{item?.name}</h2>
                <p>{item?.description || "Descrição não disponível"}</p>
                <IconWrapper>
                  <p>Quadrinhos: {item?.comics?.available}</p>
                  <img src={book} alt="quadrinhos" />
                  <p>{item?.comics?.available}</p>
                </IconWrapper>
                <IconWrapper>
                  <p>Séries</p>
                  <img src={video} alt="vídeo"/>
                  <p>{item?.series?.available}</p>
                </IconWrapper>
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
        <ComicsList>
          {allComics?.map((item) =>
            <li tabIndex="0">
              <img src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt={item?.name}/>
              <p>{item?.title}</p>
            </li>
          )}
        </ComicsList>
      </HeroWrapper>
      <Footer />
    </>
  )
}
