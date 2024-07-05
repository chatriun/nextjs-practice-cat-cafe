"use client";

import logo from "@/asset/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  const defaultClass = {
    color: "white",
  };
  const activeClass = {
    color: "red",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          gap: 6,
        }}
      >
        <Image src={logo} alt="logo" priority width={30} height={30} />
        <h2>Purrfect Match</h2>
      </Link>

      <ul style={{ display: "flex", gap: 20, listStyle: "none" }}>
        <li>
          <Link
            href="/cats"
            style={path.startsWith("/cats") ? activeClass : defaultClass}
          >
            our nongs
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            style={path === "/community" ? activeClass : defaultClass}
          >
            community
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
