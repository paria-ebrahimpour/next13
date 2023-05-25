export default async function Page() {
  const res = await fetch("https://swapi.dev/api/starships/?page=1", {
    cache: "force-cache",
  });
  const data = await res.json();

  return (
    <>
      <h1>Force Cache</h1>
      <p> Generates statically like getStaticProps.</p>
      <br />
      {data.results.map((e: Record<string, string>) => (
        <p key={e.name}>{e.name}</p>
      ))}
    </>
  );
}
