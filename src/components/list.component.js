import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetHero } from "../services/hero";
import { List, HeartButton } from "./list.style";
import { ReactComponent as Heart } from "../images/heart.svg";

export function HeroesList({heroName}) {

  const { hero }  = GetHero({heroName})
  const [heroesList, setHeroesList] = useState([]);
  const [favourite, setFavourite] = useState(false); 

  useEffect(() => { 
    if ( hero?.code === 200 && hero?.data?.count > 0) setHeroesList(heroesList => [...heroesList, hero?.data?.results[0]]);
  }, [hero, hero?.code]);

  function favourites() {
    setFavourite(!favourite);
  }

  return(
    <>
      {/* <div>
        <button type="button" onClick={assortment}>Ordenar</button>
      </div> */}
      <List>
        {heroesList.map((item) => 
          <li key={item?.id} tabIndex="0">
            <Link to={{ pathname:`/hero/${item?.name}`, state: {name: item?.name, id: item?.id}}}>
              <img src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt={item?.name}/>
            </Link>
            <div>
              <p>{item?.name}</p>
              <HeartButton type="button" onClick={favourites} favourite={favourite}>
                <Heart/>
              </HeartButton>
            </div>
          </li>
        )}
      </List>
    </>
  )
};


