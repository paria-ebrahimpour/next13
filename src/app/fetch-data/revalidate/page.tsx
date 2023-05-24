export default async function Page() {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tehran", {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();

  return (
    <>
      <h1>
        it will revalidate data every 5 seconds, no matter how many times you
        refresh the page
      </h1>
      <p>Tehran date & time: {data.datetime}</p>
    </>
  );
}
