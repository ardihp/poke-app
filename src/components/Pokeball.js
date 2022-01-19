import React from "react";
import PokeImg from "../assets/pokeball.png";
import "../styles/Pokeball.scss";

function Pokeball({ data }) {
  const localData = localStorage.getItem("_mypokemon");

  function catchPoke() {
    const random = Math.floor(Math.random() * 10);

    if (random > 5) {
      alert("wohoo kamu dapat!");

      const pokeName = prompt("Masukan nama untuk pokemon ini");

      if (localData !== null) {
        const listPoke = JSON.parse(localData);

        localStorage.setItem(
          "_mypokemon",
          JSON.stringify([
            ...listPoke,
            {
              pokemon: data.name,
              image: data.sprites.front_default,
              name: pokeName,
            },
          ])
        );
      } else {
        localStorage.setItem(
          "_mypokemon",
          JSON.stringify([
            {
              pokemon: data.name,
              image: data.sprites.front_default,
              name: pokeName,
            },
          ])
        );
      }
    } else {
      alert(`Woops, pokemon ${data.name} lepas!`);
    }
  }

  return (
    <button onClick={() => catchPoke()} type="button" className="float-poke">
      <div className="pokeball">
        <img src={PokeImg} alt="pokeball" />
      </div>
    </button>
  );
}

export default Pokeball;
