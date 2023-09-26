import React from 'react'
import Particles from "react-particles";
import particlesConfig from './config/particlesConfig'
import { loadFull } from 'tsparticles'

export const ParticlesBackground = () => {

    async function load(main) {
        await loadFull(main);
    }
    return (
        <div className='App'>
            <Particles
                init={load}
                id="particles"
                options={particlesConfig}
            />
        </div>
    )
}


