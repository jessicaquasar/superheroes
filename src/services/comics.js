import { useEffect, useState } from "react";
import { configs } from "../config/config";

export function GetComics(heroId) {
  const timestamp = configs.ts;
  const publicKey = configs.pk;
  const hash = configs.hash;
  const [comics, setComics] = useState([]);
  const superHeroId = heroId;

  useEffect(() => {
    if (superHeroId) {
      fetch(
        `https://gateway.marvel.com/v1/public/characters/${superHeroId}/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
      ).then((response) =>
        response
          .json()
          .then((data) => setComics(data))
          .catch((error) => console.log(error.message))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [superHeroId]);

  return { comics };
}
