import Link from "next/link";
import React from "react";

export interface MainNavbarProps {}

const MainNavbar: React.FunctionComponent<MainNavbarProps> = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", margin: 2 }}
    >
      <Link href="/">Home</Link>
      <div>
        <Link href="/products/one">ProductOne</Link>
        <Link
          style={{ marginInlineEnd: 10, marginInlineStart: 10 }}
          href="/products/two"
        >
          ProductTwo
        </Link>
      </div>
    </div>
  );
};

export default MainNavbar;
