import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { configs } from "../config/config";

export const useHeroSearch = (name) => {
  const timestamp = configs.ts;
  const publicKey = configs.pk;
  const hash = configs.hash;
  const [hero, setHero] = useState([]);
  const [heroesList, setHeroesList] = useState([]);
  const superHeroName = name.heroName;

  useEffect(() => {
    if (superHeroName) {
      fetch(
        `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&name=${superHeroName}&limit=10`
      ).then((response) =>
        response
          .json()
          .then((data) => setHero(data))
          .catch((error) => console.log(error.message))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [superHeroName]);

  useEffect(() => {
    if (hero?.code === 200 && hero?.data?.count > 0) {
      setHeroesList((list) => [...list, hero?.data?.results[0]]);
    }
    if (hero?.data?.count === 0) {
      toast.error("Herói não encontrado!");
    }
    if (hero?.code === 404) {
      toast.error("Não foi possível adicionar este herói!");
    }
  }, [hero]);

  useEffect(() => {
    let storedNames = JSON.parse(localStorage.getItem("heroes"));
    if (storedNames) setHeroesList(storedNames);
  }, []);

  useEffect(() => {
    localStorage.setItem("heroes", JSON.stringify([...heroesList]));
  }, [heroesList]);

  return { heroesList, setHeroesList };
};
