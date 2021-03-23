import React, { useState } from "react";
import { HeroesList } from "../list/list.component";
import { Header, Logo, Form, SearchInput } from "./home.style";
import search from "../images/search.png"; 

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
      <Header> 
        <Logo />
        <h1>EXPLORE O UNIVERSO</h1>
        <p>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve</p>
      </Header>
      <Form onSubmit={handleSubmit} data-testid="home_form_search">
        <img src={search} alt="pesquisar"/>
        <SearchInput type="text" data-testid="home_imput_search" placeholder="procure por heróis" value={searchTerm} 
          onChange={e => setSearchTerm (e.target.value)} />
      </Form>
      {localStorage.getItem("heroes") || heroName ? (
        <HeroesList heroName={heroName} />
      ): null}
    </>
  );
}
