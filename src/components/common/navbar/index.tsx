'use client';

import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from '../logo';
import DarkMode from '../dark-mode';

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      prefetch={false}
      className={`nav-link transition-colors hover:opacity-80 ${isActive ? 'active text-emerald-400' : ''}`}
    >
      {children}
    </Link>
  );
};

const Nav = () => {
  return (
    <header className="p-6 bg-gray-200 dark:bg-gray-800 text-black dark:text-white py-4 relative z-50 sticky !bg-opacity-30 backdrop-filter backdrop-blur-lg top-0 border-b border-zinc dark:border-gray-900 shadow-sm dark:shadow-none">
      <nav className="max-w-6xl mx-auto flex justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex items-center gap-x-6 md:gap-x-8 dark:text-white">
          <li>
            <NavLink href="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
          <li className="flex flex-row gap-x-2">
            <DarkMode />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
