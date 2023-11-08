import Link from "next/link";
import Image from "next/image";

export function Navbar() {
    return (
        <div className=" bg-transparent border-b-[1px] border-gray-500 w-full h-20 px-4 items-center">
            <div className="flex justify-between w-full h-full">
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={50}
                        height={50}
                    />
                    <h1 className="text-white text-3xl font-bold ml-2">
                        CodeV
                    </h1>
                </div>
                <div className="flex items-center space-x-5">
                    <Link href="#!" className="text-white hover:border-b-2 hover:border-red-900 hover:font-semibold">
                        Home
                    </Link>
                    <Link href="#!" className="text-white hover:border-b-2 hover:border-red-900 hover:font-semibold">
                        Editor
                    </Link>
                    <Link href="#!" className="text-white hover:border-b-2 hover:border-red-900 hover:font-semibold">
                        Nosotros
                    </Link>
                    <Link href="#!" className="text-white hover:border-b-2 hover:border-red-900 hover:font-semibold">
                        Buscar Proyectos
                    </Link>
                    <Link href="#!" className="text-white hover:border-b-2 hover:border-red-900 hover:font-semibold">
                        Ranking
                    </Link>
                </div>
                <div className="space-x-5 h-full items-center flex">
                    <button className="text-white border-2 border-gray-700 px-5 py-2 rounded-md font-semibold hover:bg-black">
                        Log In
                    </button>
                    <button className="text-white border-2 border-gray-700 px-5 py-2 rounded-md font-semibold hover:bg-red-950 bg-red-900 red">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}