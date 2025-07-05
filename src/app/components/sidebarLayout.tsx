"use client";

import { useState } from "react";
import Link from "next/link";

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="fixed top-15 right-4 z-40 bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-400 transition"
      >
        Menu
      </button>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-40 backdrop-blur-sm"
          onClick={toggleMenu}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-30 shadow-lg`}
      >
        <div className="flex flex-col p-6 space-y-4">
          <h2 className="text-2xl font-bold text-green-500">Menu</h2>
            <Link href="/" onClick={toggleMenu} className="hover:text-green-400">Home</Link>
          <Link href="/about" onClick={toggleMenu} className="hover:text-green-400">About</Link>
          <Link href="/skills" onClick={toggleMenu} className="hover:text-green-400">Skills</Link>
          <Link href="/contact" onClick={toggleMenu} className="hover:text-green-400">Contact</Link>
          <Link href="/data" onClick={toggleMenu} className="hover:text-green-400">Data</Link>
        </div>
      </aside>

      <div className={`${isMenuOpen ? "blur-sm" : ""} transition-all`}>
        {children}
      </div>
    </div>
  );
}

