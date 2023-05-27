export default async function Page() {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tehran", {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();

  return (
    <>
      <h1>ISR</h1>
      <p>
        Generates statically but revalidates every 5 seconds - no matter how
        many times you refresh the page.
        <br />
        This request should be cached with a lifetime of 10 seconds. Similar to
        `getStaticProps` with the `revalidate` option.
      </p>
      <br />
      <p>Tehran date & time: {data.datetime}</p>
    </>
  );
}
