import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyPokeCard from "../../components/MyPokeCard";
import Style from "./index.module.scss";

function MyPokemon() {
  const [myPoke, setMyPoke] = useState([]);
  const localData = localStorage.getItem("_mypokemon");

  useEffect(() => {
    if (localData !== null) {
      setMyPoke(JSON.parse(localData));
    }
  }, [localData]);

  return (
    <div className={Style.content}>
      {myPoke.length <= 0 ? (
        <>
          <p>Pokemonmu masih kosong, ayo tangkap satu!</p>
          <Link to="/">cari pokemon</Link>
        </>
      ) : (
        <div className={Style["my-poke"]}>
          {myPoke.map((poke, idx) => (
            <MyPokeCard {...poke} idx={idx} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyPokemon;
