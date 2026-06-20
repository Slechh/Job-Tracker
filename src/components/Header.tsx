"use client";

import Link from "next/link";
import { Icon } from "./Icon";
import { navItem } from "@/constants/navItems";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export function Header() {
  const pathName = usePathname();

  return (
    <header className="py-2.5 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <nav className="flex gap-8 items-center">
          <Link href="/" className="flex gap-2.5 items-center">
            <Icon id="logo-icon" className="w-10 h-10" />
            <Icon id="logo-text" className="w-13 h-10" />
          </Link>
          <div aria-hidden="true" className="w-[0.5px] h-3 bg-black"></div>
          <ul className="flex gap-12">
            {navItem.map((item) => (
              <li
                key={item.href}
                className={clsx(
                  "hover:text-light-blue transition-colors duration-300",
                  pathName === item.href &&
                    "border-b border-light-blue text-light-blue",
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
