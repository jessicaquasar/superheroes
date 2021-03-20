import { useEffect, useState } from "react";

export function GetHeroes() {
  
  const timestamp = '1616118238';
  const publicKey = '3f71f569c94ce62606fc56f68e88571d';
  const hash = '2c8a2bf307f75701fbee55deebee46d3';
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=20`)
      .then(response => response.json()
      .then(data => { const result = data.data.results; setHeroes(result)})
      .catch(error => console.log(error.message))
    );
  },[])

  return { heroes };
}


