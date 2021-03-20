import React, { useEffect, useState } from "react";
import { GetHero } from "../services/hero";
import { List } from "./list.style";
import { ReactComponent as Heart } from "../images/heart.svg";

export function HeroesList({heroName}) {

  const { hero }  = GetHero({heroName})
  const [heroesList, setHeroesList] = useState([]);

  useEffect(() => { 
    if ( hero?.code === 200 && hero?.data?.count > 0) setHeroesList(heroesList => [...heroesList, hero?.data?.results[0]]);
  }, [hero, hero?.code]);

  return(
    <>
      <List>
        {heroesList.map((item) => 
          <li key={item?.id}>
            <img src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt={item?.name}/>
            <div>
              <p>{item?.name}</p>
              <Heart />
            </div>
          </li>
        )}

      </List>
    </>
  )
};


//extension
