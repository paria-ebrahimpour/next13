export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        margin: 15,
        padding: 25,
        background: "#cdb4db",
        borderRadius: 10,
      }}
    >
      {children}
    </div>
  );
}
