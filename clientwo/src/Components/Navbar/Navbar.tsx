import Link from "next/link";
import Image from "next/image";
import "./styles.css"; // Import the CSS file

export function Navbar() {
  return (
    <div className="bg-black border-b-[1px] border-none w-full h-20 px-4 items-center">
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
          <Link href="/login" className="button101" role="button">
            Log In
          </Link>
          <Link href="/register" className="button102">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
