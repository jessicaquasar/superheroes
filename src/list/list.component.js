import React, { useState } from "react";
import { Link } from "react-router-dom";
import { string } from "prop-types";
import { useHeroSearch } from "../hooks/heroes-list.hook";
import {
  List,
  HeartButton,
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel,
  Sort,
  ListWrapper,
} from "./list.style";
import superhero from "../images/superhero.png";
import { ReactComponent as Heart } from "../images/heart.svg";

export function HeroesList({ heroName }) {
  const { heroesList } = useHeroSearch({ heroName });
  const [sort, setSort] = useState(false);
  const [sortList, setSortList] = useState([]);

  function sortHeroes() {
    const sorted = [...heroesList];
    setSortList(sorted.sort((a, b) => (a.name > b.name ? 1 : -1)));
  }

  return (
    <ListWrapper>
      <Sort>
        <img src={superhero} alt="" />
        <label aria-label="Ordenar por nome">Ordenar por nome - A/Z</label>
        <CheckBoxWrapper>
          <CheckBox
            id="checkbox"
            aria-label="Ordenar lista"
            type="checkbox"
            onClick={() => {
              setSort((prev) => !prev);
              sortHeroes();
            }}
          />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
      </Sort>
      <List>
        {sort
          ? sortList.map((item) => (
              <li key={item?.name} tabIndex="0">
                <Link
                  to={{
                    pathname: `/hero/${item?.name}`,
                    state: { name: item?.name, id: item?.id },
                  }}
                >
                  <img
                    src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                    alt={item?.name}
                  />
                </Link>
                <div>
                  <label aria-label={item?.name} data-testid="list-label-hero">
                    {item?.name}
                  </label>
                  <HeartButton type="button">
                    <Heart data-icon="svg-icon" />
                  </HeartButton>
                </div>
              </li>
            ))
          : heroesList.map((item) => (
              <li key={item?.name} tabIndex="0">
                <Link
                  to={{
                    pathname: `/hero/${item?.name}`,
                    state: { name: item?.name, id: item?.id },
                  }}
                >
                  <img
                    src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                    alt={item?.name}
                  />
                </Link>
                <div>
                  <label aria-label={item?.name} data-testid="list-label-hero">
                    {item?.name}
                  </label>
                  <HeartButton type="button">
                    <Heart data-icon="svg-icon" />
                  </HeartButton>
                </div>
              </li>
            ))}
      </List>
    </ListWrapper>
  );
}

HeroesList.propTypes = {
  heroName: string,
};
