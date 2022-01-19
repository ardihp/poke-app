import React from "react";
import { Link } from "react-router-dom";
import "../styles/PokeCard.scss";

function PokeCard({ name }) {
  return (
    <Link to={`pokemon/${name}`} className="pokecard">
      <div>
        <p>{name}</p>
      </div>
    </Link>
  );
}

export default PokeCard;
