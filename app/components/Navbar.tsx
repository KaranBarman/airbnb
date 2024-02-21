import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import UserNav from "./UserNav";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="rounded-full border px-5 py-2">
          hello from the search
        </div>
        <UserNav />
      </div>
    </nav>
  );
};

export default Navbar;
