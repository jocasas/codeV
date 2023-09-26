import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
    return (
        <div>Este es el home
            <hr />
            <Link to='/editor'>Editor</Link>
            <hr />
            <Link to='/login'>Login</Link>
            <hr />
            <Link to='/loginParticles'>LoginParticulas</Link>
        </div>
    )
}

export default App