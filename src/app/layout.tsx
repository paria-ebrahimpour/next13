import "../styles/globals.css";
import { Vazirmatn } from "next/font/google";
import MainNavbar from "@/components/layouts/Navbar/MainNavbar";

const inter = Vazirmatn({ subsets: ["arabic"] });

export const metadata = {
  title: "Next 13",
  description:
    "this is next js typescript project to get familiar with its features and structure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: styles need to move into css module or scss or ...
  return (
    <html lang="fa">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={inter.className}
        style={{
          margin: 15,
          padding: 25,
          background: "#f3f9fc",
          borderRadius: 10,
        }}
      >
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
