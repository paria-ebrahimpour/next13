import { LINKS } from "@/constants/Links";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>this is Home Page</h1>
      <h3>Links</h3>
      <div>
        {LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            style={{ display: "block", marginTop: 8 }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
