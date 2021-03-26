import { useEffect, useState } from "react";
import { configs } from "../config/config";

export function GetHero(name) {
  const timestamp = configs.ts;
  const publicKey = configs.pk;
  const hash = configs.hash;
  const [hero, setHero] = useState([]);
  const superHeroName = name.heroName;

  useEffect(() => {
    if (superHeroName) {
      fetch(
        `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&name=${superHeroName}&limit=10`
      ).then((response) =>
        response
          .json()
          .then((data) => setHero(data))
          .catch((error) => console.log(error.message))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [superHeroName]);

  return { hero };
}
