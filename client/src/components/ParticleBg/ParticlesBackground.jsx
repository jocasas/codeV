import React from 'react'
import Particles from "react-particles";
import particlesConfig from './config/particlesConfig'
import { loadFull } from 'tsparticles'

export const ParticlesBackground = () => {

    async function load(main) {
        await loadFull(main);
    }
    return <Particles init={load} options={particlesConfig} />


}


