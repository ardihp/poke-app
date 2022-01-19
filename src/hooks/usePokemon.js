import { useQuery } from "react-query";

function usePokemon() {
  const { isLoading, data } = useQuery("getPokemon", () => {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=20").then((res) =>
      res.json()
    );
  });

  function GetPokemonByName(name) {
    return useQuery("getPokemonByName", () => {
      return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
        res.json()
      );
    });
  }

  return {
    pokemon: data,
    isLoading,
    GetPokemonByName,
  };
}

export default usePokemon;
