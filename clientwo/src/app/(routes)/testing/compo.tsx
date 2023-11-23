import Link from "next/link";

export function Sidebar() {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/5 p-4">
      <ul>
        <li className="mb-4">
          <Link href="/">Home</Link>
        </li>
        <li className="mb-4">
          <Link href="/about">About</Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </div>
  );
}
