export default async function Page() {
  const res = await fetch("https://swapi.dev/api/starships/?page=1", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);

  return (
    <>
      <h1>No Store</h1>
      {data.results.map((e: Record<string, string>) => (
        <p key={e.name}>{e.name}</p>
      ))}
    </>
  );
}
