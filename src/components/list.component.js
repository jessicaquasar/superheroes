import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetHero } from "../services/hero";
import { ErrorAlert } from "./error.component.js";
import { List, HeartButton, CheckBoxWrapper, CheckBox, CheckBoxLabel, Sort } from "./list.style";
import superhero from "../images/superhero.png";
import { ReactComponent as Heart } from "../images/heart.svg";

export function HeroesList({heroName}) {

  const { hero }  = GetHero({heroName});
  const [heroesList, setHeroesList] = useState([]);
  const [favourite, setFavourite] = useState(false); 
  const [sort, setSort] = useState(false);
  const [list, setList] = useState([]);
  const [sortList, setSortList] = useState([]);

  useEffect(() => { 
    if ( hero?.code === 200 && hero?.data?.count > 0) {
      setList(list => [...list, hero?.data?.results[0]]);
    }; 
  }, [hero, hero?.code]);

  useEffect(() => {
    const newList = [...list];
    setHeroesList(newList.map(result => ({ ...result, favourite: "false" })))
  }, [list]);

  useEffect(() => {
    let storedNames = JSON.parse(localStorage.getItem("heroes"));
    setHeroesList(storedNames);
  },[])
  
  useEffect(() => {
    localStorage.setItem("heroes", JSON.stringify([...heroesList]));
  },[heroesList]);

  function sortHeroes(){
    const sorted = [...heroesList];
    setSortList(sorted.sort((a,b) =>
    (a.name > b.name) ? 1 : -1 ));
  };
  
  return(
    <>
      <Sort>
        <img src={superhero} alt="herói" />
        <label>Ordenar por nome - A/Z</label>
        <CheckBoxWrapper>
          <CheckBox id="checkbox" type="checkbox" onClick={() => {setSort(prev => !prev); sortHeroes()}} />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
      </Sort>
      {/* {notFound ? (
        <ErrorAlert text="Herói não encontrado" />
      ): null} */}
      <List>
        {sort ? (
          sortList.map((item,i) => 
            <li key={item?.id} tabIndex="0">
              <Link to={{ pathname:`/hero/${item?.name}`, state: {name: item?.name, id: item?.id}}}>
                <img src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt={item?.name}/>
              </Link>
              <div>
                <p>{item?.name}</p>
                <HeartButton type="button" onClick={() => {setFavourite(item => !item.favourite[i])}} favourite={favourite}>
                  <Heart/>
                </HeartButton>  
              </div>
            </li>
          )
        ) : (
          heroesList.map((item) => 
            <li key={item?.id} tabIndex="0">
              <Link to={{ pathname:`/hero/${item?.name}`, state: {name: item?.name, id: item?.id}}}>
                <img src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt={item?.name}/>
              </Link>
              <div>
                <p>{item?.name}</p>
                <HeartButton type="button" onClick={() => setFavourite(prev => !prev)} favourite={favourite}>
                  <Heart/>
                </HeartButton>
              </div>
            </li>
          )
        )}
      </List>
    </>
  )
};


