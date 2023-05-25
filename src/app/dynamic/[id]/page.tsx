interface IProps {
  params: { id: string };
}
export async function generateMetadata({ params }: IProps) {
  // you can also get data from back and set title and ...
  const title = `dynamic title - ${params.id}`;
  const description = `this is a dynamic pages description that can be dynamic - ${params.id}`;
  return {
    title,
    description,
  };
}

export default function Page({ params }: IProps) {
  return (
    <>
      <h1>Dynamic Route</h1>
      <p>ID: {params.id}</p>
    </>
  );
}
