import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetHero } from "../services/hero";
import { List, HeartButton } from "./list.style";
import { ReactComponent as Heart } from "../images/heart.svg";

export function HeroesList({heroName}) {

  const { hero }  = GetHero({heroName})
  const [heroesList, setHeroesList] = useState([]);
  const [favourite, setFavourite] = useState(false); 
  const [sort, setSort] = useState(false);
  const [sortList, setSortList] = useState([])

  useEffect(() => { 
    if ( hero?.code === 200 && hero?.data?.count > 0) setHeroesList(heroesList => [...heroesList, hero?.data?.results[0]]);
  }, [hero, hero?.code]);

  function orderHeroes(){
    const sorted = [...heroesList];
    setSortList(sorted.sort((a,b) =>
    (a.name > b.name) ? 1 : -1 ));
  };

  // useEffect(() => {
  //   localStorage.setItem("heroes", JSON.stringify({heroesList}));
  // },[heroesList]);
  
  return(
    <>
      <div>
        <button type="button" onClick={() => {setSort(prev => !prev); orderHeroes()}}>Ordenar</button>
      </div>
      <List>
        {sort ? (
          sortList.map((item, index) => 
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
        ) : (
          heroesList.map((item, index) => 
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


