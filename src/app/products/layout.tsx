export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ margin: 5, border: "1px solid red" }}>
      <p>this is product pages layout</p>
      <br />
      {children}
    </div>
  );
}
