import React from "react";
import PokeCard from "../../components/PokeCard";
import usePokemon from "../../hooks/usePokemon";
import Style from "./index.module.scss";

function Index() {
  const { pokemon } = usePokemon();

  return (
    <div className={Style.content}>
      {pokemon?.results.map((poke, idx) => (
        <PokeCard {...poke} key={idx} />
      ))}
    </div>
  );
}

export default Index;
