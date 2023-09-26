import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Editor from './views/editor/App'
import Home from './views/home/App'
import Login from './views/login/App'
import LoginParticles from './views/loginParticles/loginParticles'
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/editor' element={<Editor />} />
          <Route path='/login' element={<Login />} />
          <Route path='/loginParticles' element={<LoginParticles />} />
        </Routes>
      </Provider>
    </div>
  )
}

export default App