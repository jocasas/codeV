import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
    return (
        <div>Este es el login
            <hr />
            <Link to='/editor'>Editor</Link>
            <hr />
            <Link to='/'>Home</Link>
        </div>
    )
}

export default App