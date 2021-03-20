import { useEffect, useState } from "react";

export function GetHero(name) {
  
  const timestamp = "1616118238";
  const publicKey = "3f71f569c94ce62606fc56f68e88571d";
  const hash = "2c8a2bf307f75701fbee55deebee46d3" ;
  const [hero, setHero] = useState([]);
  const superHeroName = name.heroName;

  useEffect(() => {
    if (superHeroName) {
      fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&name=${superHeroName}`)
        .then(response => response.json()
        .then(data => setHero(data))
        .catch(error => console.log(error.message))
      );
    };  
  },[superHeroName]);

  return { hero };
}


