import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { GetComics } from "../services/comics";
import { GetHero } from "../services/hero";
import search from "../images/search.png";
import rating from "../images/rating.png";
import book from "../images/book.png";
import video from "../images/video.png";
import {
  ComicsList,
  Wrapper,
  IconWrapper,
  HeroWrapper,
  HeroInfo,
  InfoWrapper,
  HeroImage,
  Loading,
  DataWrapper,
  HeroSearchInput,
  HeroForm,
  HeroLogo,
  HeroSearchWrapper,
} from "./hero.style";
import { HeroesList } from "../list/list.component";

export function HeroPage() {
  const hash = useLocation();
  const heroName = hash.state.name;
  const heroId = hash.state;
  const history = useHistory();
  const { hero } = GetHero({ heroName });
  const { comics } = GetComics(heroId?.id);
  const heroFile = hero?.data?.results;
  const allComics = comics?.data?.results;
  const [loading, setLoading] = useState(true);
  const [searchHero, setSearchHero] = useState("");

  useEffect(() => {
    if (hero?.code === 404) {
      toast.error("Não foi possível trazer os dados do herói!");
    }
  }, [hero?.code]);

  useEffect(() => {
    if (comics?.code === 404) {
      toast.error("Não foi possível carregar a lista de quadrinhos");
    }
  }, [comics?.code]);

  useEffect(() => {
    if (heroFile) setLoading(!loading);
  }, [comics]);

  function onSubmit(e) {
    e.preventDefault();
    history.push("/");
    // TO DO
    return <HeroesList heroName={searchHero} />;
  }

  return (
    <Wrapper>
      <HeroSearchWrapper>
        <HeroLogo />
        <HeroForm onSubmit={onSubmit}>
          <img src={search} alt="pesquisar" />
          <HeroSearchInput
            type="text"
            placeholder="procure por heróis"
            value={searchHero}
            onChange={(e) => setSearchHero(e.target.value)}
          />
        </HeroForm>
      </HeroSearchWrapper>
      <HeroWrapper>
        {loading ? (
          <Loading>
            <box-icon
              name="loader-circle"
              rotate="90"
              animation="spin"
              color="#ff1510"
            />
            <label aria-label="Carregando"> Carregando...</label>
          </Loading>
        ) : (
          <HeroInfo>
            {heroFile?.map((item) => (
              <li key={item?.id} tabIndex="0">
                <InfoWrapper>
                  <h2>{item?.name}</h2>
                  <p>{item?.description || "Descrição não disponível"}</p>
                  <DataWrapper>
                    <IconWrapper>
                      <p>Quadrinhos</p>
                      <img src={book} alt="" />
                      <label>{item?.comics?.available}</label>
                    </IconWrapper>
                    <IconWrapper>
                      <p>Séries</p>
                      <img src={video} alt="" />
                      <label>{item?.series?.available}</label>
                    </IconWrapper>
                  </DataWrapper>
                  <label>Rating: </label>
                  <img src={rating} alt="" />
                </InfoWrapper>
                <HeroImage>
                  <img
                    src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                    alt={item?.name}
                  />
                </HeroImage>
              </li>
            ))}
          </HeroInfo>
        )}
        {loading ? (
          <Loading>
            <box-icon
              name="loader-circle"
              rotate="90"
              animation="spin"
              color="#ff1510"
            />
            <label aria-label="Carregando"> Carregando...</label>
          </Loading>
        ) : null}
        <h3>Últimos lançamentos</h3>
        <ComicsList>
          {allComics?.map((item) => (
            <li tabIndex="0" key={item?.id}>
              <img
                src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                alt={item?.name}
              />
              <p>{item?.title}</p>
            </li>
          ))}
        </ComicsList>
      </HeroWrapper>
    </Wrapper>
  );
}
