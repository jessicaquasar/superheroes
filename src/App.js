import React, { useEffect } from "react";
import './App.css';
import { GetHeroes } from "./services/heroes"

function App() {

  const { heroes } = GetHeroes();
  // let listItens = heroes.map((item) => <li key={item?.id}>{item?.name}</li>);

  return (
    <div className="App">
      <header className="App-header">
        {heroes?.map((item) => 
          <ul key={item?.id}>
            <li>{item?.name}</li>
          </ul>
        )}
        {/* <ul>{listItens}</ul> */}
      </header>
    </div>
  );
}

export default App;
