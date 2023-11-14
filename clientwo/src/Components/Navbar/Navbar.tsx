import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="absolute bg-black border-b-[1px] border-none w-full h-20 px-4 items-center">
      <div className="flex justify-between w-full h-full">
        <div className="flex items-center">
          <h1 className="text-white text-3xl font-bold ml-2">
            <span className="text-cyan-300">//</span>CodeVerse
          </h1>
        </div>
        <div className="flex items-center space-x-5">
          <Link
            href="/"
            className="text-white hover:border-b-2 hover:border-red-900 hover:font-semibold"
          >
            Home
          </Link>
          <Link
            href="/challenge"
            className="text-white hover:border-b-2 hover:border-red-900 hover:font-semibold"
          >
            Desafios
          </Link>
          <Link
            href="/about"
            className="text-white hover:border-b-2 hover:border-red-900 hover:font-semibold"
          >
            Nosotros
          </Link>
          <Link
            href="/projects"
            className="text-white hover:border-b-2 hover:border-red-900 hover:font-semibold"
          >
            Buscar Proyectos
          </Link>
          <Link
            href="/rank"
            className="text-white hover:border-b-2 hover:border-red-900 hover:font-semibold"
          >
            Ranking
          </Link>
        </div>
        <div className="space-x-5 h-full items-center flex">
          <Link
            href="/login"
            className="text-white border-2 border-gray-700 px-5 py-2 rounded-md font-semibold hover:bg-gray-300 hover:text-black"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="text-white border-2 border-gray-700 px-5 py-2 rounded-md font-semibold hover:bg-red-950 bg-red-900 red"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
