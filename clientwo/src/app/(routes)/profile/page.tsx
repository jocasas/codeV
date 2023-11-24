import React from 'react'
import './profile.css'

const page = () => {
  return (
    <div className="parent w-full h-full">
      <div className="div1 p-2">
        <div className='w-full flex items-center justify-center h-full bg-gray-600 rounded-md'>
          aqui va datos personales
        </div>
      </div>
      <div className="div2 p-2">
        <div className='w-full flex items-center justify-center h-full bg-gray-600 rounded-md'>
          aqui va certificados y lenguajes
        </div>
      </div>
      <div className="div3 p-2">
        <div className='w-full flex items-center justify-center h-full bg-gray-600 rounded-md'>
          aqui va medallas 
        </div>
      </div>
      <div className="div4 p-2">
        <div className='w-full flex items-center justify-center h-full bg-gray-600 rounded-md'>
          aqui va competencias
        </div>
      </div>
      <div className="div5 p-2">
        <div className='w-full flex items-center justify-center h-full bg-gray-600 rounded-md'>
          aqui va ultimos desafios
        </div>
      </div>
      <div className="div6 p-2">
        <div className='w-full flex items-center justify-center h-full bg-gray-600 rounded-md'>
          aqui va actividad reciente
        </div>
      </div>
    </div>
  )
}

export default page