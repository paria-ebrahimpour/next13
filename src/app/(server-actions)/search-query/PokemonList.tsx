"use client";
import { useState, useEffect } from "react";

export default function PokemonList({
  search,
}: {
  search: (search: string) => Promise<string[]>;
}) {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    search("").then((names) => setPokemonNames(names));
  }, [search]);

  const onClick = async () => {
    setPokemonNames(await search(searchString));
  };

  return (
    <>
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button onClick={onClick}>Search</button>
      <div className="text-4xl py-5">Names: {pokemonNames.join(", ")}</div>
    </>
  );
}
