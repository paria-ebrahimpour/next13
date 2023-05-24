export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>Dynamic Route</h1>
      <p>ID: {params.id}</p>
    </>
  );
}
