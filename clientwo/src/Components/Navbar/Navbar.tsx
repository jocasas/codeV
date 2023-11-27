import Link from "next/link";
import Image from "next/image";
import "./styles.css"; // Import the CSS file
import { usePathname } from 'next/navigation'


export function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="flex-no-wrap flex fixed top-0 bg-black border-b-[1px] border-none w-full h-20 px-4 items-center text-center z-50">
      <div className="flex w-full h-full">
        <a href="/" className="flex items-center">
          <h1 className="absolute text-white text-3xl font-bold ml-2">
            <span className="text-cyan-300 text-4xl">//</span>CodeVerse
          </h1>
        </a>
        <div className="flex items-center w-full">
        {pathname === '/' ?(<div></div>):(
        <div className="space-x-3 content-center w-full">
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
        )}
        </div>
      </div>
    </nav>
  );
}
