import React from "react";
import { useParams, Link } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";
import Pokeball from "../../components/Pokeball";
import Style from "./index.module.scss";

function Detail() {
  const { name } = useParams();
  const { GetPokemonByName } = usePokemon();
  const { data } = GetPokemonByName(name);

  return (
    <div className={Style.content}>
      <div className={Style["left-side"]}>
        <div className={`${Style.height} ${Style.float}`}>{data?.height}m</div>
        <div className={`${Style.weight} ${Style.float}`}>{data?.weight}kg</div>
        <p className={Style["poke-name"]}>{data?.name}</p>
        <img
          src={
            data?.sprites.versions["generation-v"]["black-white"].animated
              .front_default
          }
          alt={data?.name}
          className={Style["poke-img"]}
        />
        <div className={Style["poke-type"]}>
          <p className={Style.label}>Type</p>
          <div className={Style["types"]}>
            {data?.types.map((t) => (
              <p className={Style["name"]} key={t.slot}>
                {t.type.name}
              </p>
            ))}
          </div>
        </div>
        <div className={Style["poke-type"]}>
          <p className={Style.label}>Ability</p>
          <div className={Style["types"]}>
            {data?.abilities.map((t) => (
              <p className={Style["name"]} key={t.slot}>
                {t.ability.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className={Style["right-side"]}>
        <div className={Style.stats}>
          <p className={Style.title}>Stats</p>
          {data?.stats.map((s, idx) => (
            <div key={idx} className={Style.item}>
              <p className={Style.name}>{s.stat.name}</p>
              <p className={Style.value}>{s.base_stat}</p>
              <progress
                value={s.base_stat}
                max="250"
                className={Style.progress}
              />
            </div>
          ))}
        </div>
        <div className={Style.moves}>
          <p className={Style.title}>Moves</p>
          {data?.moves.map((m, idx) => (
            <div key={idx} className={Style.item}>
              <p>{m.move.name}</p>
              <Link to={`//${m.move.url}`}>
                <i className={`${Style["move-link"]} fas fa-link`} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Pokeball data={data} />
    </div>
  );
}

export default Detail;
