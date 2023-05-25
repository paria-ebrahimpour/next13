export default async function Page() {
  const res = await fetch("https://swapi.dev/api/starships/?page=1", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <>
      <h1>No Store</h1>
      <p>Generates server-side upon every request like getServerSideProps.</p>
      <br />
      {data.results.map((e: Record<string, string>) => (
        <p key={e.name}>{e.name}</p>
      ))}
    </>
  );
}
