import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import './App.css'
import { ParticlesBackground } from '../../components/ParticleBg/ParticlesBackground'
const App = () => {
    return (
        <div className='Main'>
            <Navbar />
            <ParticlesBackground />
            <div className='Slogan'>
                Aqui va el Slogan
            </div>
            <div>
                aqui va el contenido
            </div>
        </div>
    )
}

export default App