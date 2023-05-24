export default async function Page() {
  const res = await fetch("https://swapi.dev/api/planets/?page=1", {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();
  console.log(data);

  return (
    <>
      <h1>it will revalidate data every 5 seconds</h1>
      {data.results.map((e: Record<string, string>) => (
        <p key={e.name}>{e.name}</p>
      ))}
    </>
  );
}
