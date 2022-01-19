import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Style from "../styles/MyPokeCard.module.scss";

function MyPokeCard({ pokemon, name, image, idx }) {
  const localData = localStorage.getItem("_mypokemon");
  const navigate = useNavigate();

  function releasePoke(idx) {
    const myPokemon = JSON.parse(localData);
    const filtered = [...myPokemon];
    filtered.splice(idx, 1);
    localStorage.setItem("_mypokemon", JSON.stringify(filtered));
    navigate("/");
    alert("pokemen released");
  }

  return (
    <div className={Style.card}>
      <div
        onClick={() => releasePoke(idx)}
        className={Style.trash}
        title="release pokemon"
      >
        <i className="fas fa-trash" />
      </div>
      <Link to={`/pokemon/${pokemon}`} className={Style.link}>
        <div className={Style.text}>
          <p className={Style.name}>{name}</p>
          <p className={Style.poke}>{pokemon}</p>
        </div>
        <img src={image} alt={pokemon} />
      </Link>
    </div>
  );
}

export default MyPokeCard;
