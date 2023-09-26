import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import './App.css'
import { ParticlesBackground } from '../../components/ParticleBg/ParticlesBackground'

const App = () => {
    return (
        <>
            <ParticlesBackground />
            <div className='App'>
                <Navbar />
            </div>

        </>
    )
}

export default App