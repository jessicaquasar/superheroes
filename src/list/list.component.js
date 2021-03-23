import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { GetHero } from "../services/hero";
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
    if (hero?.code === 200 && hero?.data?.count > 0) {
      setList(list => [...list, hero?.data?.results[0]]);
    }; 
    if (hero?.data?.count === 0) {
      toast.error("Herói não encontrado!");
    }; 
    if (hero?.code === 404) {
      toast.error("Não foi possível adicionar este herói!");
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
          <CheckBox id="checkbox" aria-label="Ordenar lista" type="checkbox" 
            onClick={() => {setSort(prev => !prev); sortHeroes()}} />
          <CheckBoxLabel htmlFor="checkbox"/>
        </CheckBoxWrapper>
      </Sort>
      <List>
        {sort ? (
          sortList.map((item,i) => 
            <li key={item?.name} tabIndex="0">
              <Link to={{ pathname:`/hero/${item?.name}`, state: {name: item?.name, id: item?.id}}}>
                <img src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt={item?.name}/>
              </Link>
              <div>
                <p>{item?.name}</p>
                <HeartButton type="button" onClick={() => {setFavourite({favourite: !favourite}); console.log(item.favourite, item.id)  }} favourite={favourite}>
                  <Heart/>
                </HeartButton>  
              </div>
            </li>
          )
        ) : (
          heroesList.map((item, i) => 
            <li key={item?.name} tabIndex="0">
              <Link to={{ pathname:`/hero/${item?.name}`, state: {name: item?.name, id: item?.id}}}>
                <img src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt={item?.name}/>
              </Link>
              <div>
                <p>{item?.name}</p>
                <HeartButton type="button" onClick={() => setFavourite(!favourite)} favourite={favourite}>
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


