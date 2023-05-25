import Link from "next/link";
import React from "react";

export interface MainNavbarProps {}

const MainNavbar: React.FunctionComponent<MainNavbarProps> = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", margin: 2 }}
    >
      <Link href="/">Home</Link>
    </div>
  );
};

export default MainNavbar;
