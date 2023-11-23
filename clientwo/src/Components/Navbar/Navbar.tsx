import Link from "next/link";
import Image from "next/image";
import "./styles.css"; // Import the CSS file

export function Navbar() {
  return (
    <nav className="flex-no-wrap flex fixed top-0 bg-black border-b-[1px] border-none w-full h-20 px-4 items-center z-50">
      <div className="flex justify-between w-full h-full">
        <a href="/" className="flex items-center">
          <h1 className="text-white text-3xl font-bold ml-2">
            <span className="text-cyan-300 text-4xl">//</span>CodeVerse
          </h1>
        </a>
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
    </nav>
  );
}
