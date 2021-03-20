import React, { useEffect, useState } from "react";
import { GetHero } from "../services/hero";

export function List({heroName}) {

  const { hero }  = GetHero({heroName})
  const [heroesList, setHeroesList] = useState([]);

  useEffect(() => { 
    if ( hero.code === 200) setHeroesList(heroesList => [...heroesList, hero?.data?.results[0]]);
  }, [hero, hero?.code]);

  return(
    <>
      {heroesList.map((item) => 
        <ul key={item?.id}>
          <li>{item?.name}</li>
          <li>{item?.description}</li>
        </ul>
      )}
    </>
  )
};
