import Link from 'next/link'
import React from 'react'

const Ranking = () => {


    const data = [
        {
            rank: 1,
            name: 'Jose Pablo Casas',
            score: 100,
            solved: 100,
            favLang: 'python'
        },
        {
            rank: 2,
            name: 'Jose Pablo Casas',
            score: 100,
            solved: 100,
            favLang: 'python'
        },
        {
            rank: 3,
            name: 'Jose Pablo Casas',
            score: 100,
            solved: 100,
            favLang: 'python'
        },
        {
            rank: 4,
            name: 'Jose Pablo Casas',
            score: 100,
            solved: 100,
            favLang: 'python'
        },
        {
            rank: 5,
            name: 'Jose Pablo Casas',
            score: 100,
            solved: 100,
            favLang: 'python'
        },
        {
            rank: 6,
            name: 'Jose Pablo Casas',
            score: 100,
            solved: 100,
            favLang: 'python'
        }
    ]

    return (

                        <table className="min-w-full text-sm text-gray-400">
                            <thead className="bg-neutral-800 text-xs uppercase font-medium">
                                <tr>
                                    <th></th>
                                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                        Nombre
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center tracking-wider">
                                        Puntaje
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center tracking-wider">
                                        Resueltos
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center tracking-wider">
                                        Lenguaje favorito
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center tracking-wider">
                                        Perfil
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800">
                                {data.map((user, index) => (
                                    <tr key={index} className="bg-neutral-900 hover:bg-neutral-700">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {user.rank}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className='flex space-x-3 items-center '>
                                                <img className="h-10 w-10 rounded-full" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="" />
                                                <div className="text-sm text-gray-400">{user.name}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap">
                                            <div className="text-sm text-gray-400">{user.score}</div>
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap">
                                            <div className="text-sm text-gray-400">{user.solved}</div>
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap">
                                            <div className="text-sm text-gray-400">{user.favLang}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                            <Link href="/" className="text-indigo-600 hover:text-indigo-900">Ver perfil</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        )
}

export default Ranking