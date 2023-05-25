const getTime = async () => {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tehran", {
    next: {
      revalidate: 5,
    },
  });
  return res.json();
};

const getNames = async () => {
  const res = await fetch("https://swapi.dev/api/people/?page=1");
  return res.json();
};

export default async function Page() {
  const [data, time] = await Promise.all([getNames(), getTime()]);
  return (
    <>
      <h1>static & ISR</h1>
      <p>
        previously in pages directory, your data fetching strategy (static,
        dynamic or ISR) was the only strategy you should pick for your entire
        route. but now you can use these strategy all together inside of the
        same route.
      </p>
      <p>names are static</p>
      <p>time is ISR</p>
      <br />
      <p>Tehran date & time: {time.datetime}</p>
      <br />
      {data.results.map((e: Record<string, string>) => (
        <p key={e.name}>{e.name}</p>
      ))}
    </>
  );
}
