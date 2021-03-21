import { useEffect, useState } from "react";

export function GetComics(heroId) {
  
  const timestamp = "1616118238";
  const publicKey = "3f71f569c94ce62606fc56f68e88571d";
  const hash = "2c8a2bf307f75701fbee55deebee46d3" ;
  const [comics, setComics] = useState([]);
  const superHeroId = heroId;

  useEffect(() => {
    if (superHeroId) {
      fetch(`http://gateway.marvel.com/v1/public/characters/${superHeroId}/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
        .then(response => response.json()
        .then(data => setComics(data))
        .catch(error => console.log(error.message))
      );
    };  
  },[superHeroId]);

  return { comics };
}


