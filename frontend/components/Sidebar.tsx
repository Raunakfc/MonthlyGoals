"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#111111] min-h-screen p-6 flex flex-col gap-6 text-gray-300">
      <h2 className="text-white text-xl font-bold">Monthly Goals</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
        <Link href="/dashboard" className="hover:text-white">Categories</Link>
        <Link href="/login" className="hover:text-white">Logout</Link>
      </nav>
    </div>
  );
}
