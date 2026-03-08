"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navItems } from "../data/data";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathName = usePathname();

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={130} height={40} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`relative pb-1 transition-colors hover:text-accent
                  ${pathName === item.href ? "text-accent border-b border-accent" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href=""
            className="border border-accent text-accent px-4 py-2 rounded-md hover:bg-accent focus:bg-accent hover:text-black focus:text-black transition"
          >
            Placement Test
          </Link>

          <Link
            href=""
            className="bg-accent text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 focus:bg-yellow-600 transition"
          >
            Free Trial
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpenMenu((prev) => !prev)}
          className="lg:hidden cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={openMenu}
        >
          {openMenu ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <nav className="lg:hidden bg-primary border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  onClick={() => setOpenMenu(false)}
                  href={item.href}
                  className={`block py-2 hover:text-accent
                  ${pathName === item.href ? "text-accent" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href=""
                className="border border-accent text-accent px-4 py-2 rounded-md  hover:bg-accent focus:bg-accent hover:text-black focus:text-black transition text-center"
              >
                Placement Test
              </Link>

              <Link
                href=""
                className="bg-accent text-black px-4 py-2 rounded-md text-center font-semibold  hover:bg-yellow-600 focus:bg-yellow-600 transition"
              >
                Free Trial
              </Link>
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
};
export default MainHeader;
