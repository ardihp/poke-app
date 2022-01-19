import React from "react";
import PokeImg from "../assets/pokeball.png";
import { Link } from "react-router-dom";
import "../styles/Pokeball.scss";

function Pokeball() {
  return (
    <Link to="/my-pokemon" className="float-poke">
      <div className="pokeball">
        <img src={PokeImg} alt="pokeball" />
      </div>
    </Link>
  );
}

export default Pokeball;
