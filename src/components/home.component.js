import React, { useEffect, useState } from "react";
import { List } from "./list.component"

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [heroName, setHeroName] = useState(null);
  
  function handleSubmit(e) {
    e.preventDefault();
    setHeroName(searchTerm);
    setSearchTerm("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="procure por heróis" value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}>
        </input>
      </form>
      <List heroName={heroName} />
    </>
  );
}

