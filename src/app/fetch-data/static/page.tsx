// TODO: should add custom request hook and response and result data type - dto
export default async function Page() {
  const res = await fetch("https://swapi.dev/api/people/?page=1");
  const data = await res.json();

  return (
    <>
      {data.results.map((e: Record<string, string>) => (
        <p key={e.name}>{e.name}</p>
      ))}
    </>
  );
}
