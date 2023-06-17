import PokemonList from "./PokemonList";

export default function SearchQuery() {
  async function search(search: string) {
    "use server";

    console.log("searching for", search);

    const pokemonRes = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
    );
    const pokemonData = await pokemonRes.json();
    return pokemonData.results
      .filter((p: { name: string }) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((p: { name: string }) => p.name)
      .slice(0, 50);
  }

  return (
    <main>
      <h1>server actions for search queries</h1>
      <br />

      <PokemonList search={search} />
    </main>
  );
}
