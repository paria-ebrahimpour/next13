import "../styles/globals.css";
import { Vazirmatn } from "next/font/google";
import Head from "@/app/head";
import MainNavbar from "@/components/layouts/Navbar/MainNavbar";

const inter = Vazirmatn({ subsets: ["arabic"] });

const metadata = {
  title: "Next 13",
  description:
    "this is next js typescript project to get familiar with its features and structure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <head>
        <Head {...metadata} />
      </head>
      <body className={inter.className} style={{ border: "1px solid blue" }}>
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
