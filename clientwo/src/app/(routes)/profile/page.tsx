import React from 'react'
import './profile.css'

const page = () => {
  return (
    <div className="parent w-full h-full">
      <form className="div1 p-2">
        <div className='relative w-full flex flex-col items-center justify-center h-full bg-gray-600 rounded-md'>
          <div className='group/item absolute top-0 w-full h-1/4'>
            <img src='https://random.imagecdn.app/500/150' className='rounded-t-md bg-red-200 w-full h-full' />
            <label htmlFor="" className='block'>
              <input type="file" className='
                  block text-sm text-slate-500
                  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-cyan-500
                  hover:file:bg-violet-100
            absolute group/edit group-hover/item:visible invisible w-full h-1/4 ' />
            </label>
          </div>
          <div className='group/item absolute top-40  w-full h-1/4'>
            <img src='https://random.imagecdn.app/500/15' className='bg-red-200 w-1/4 h-1/2 rounded-full' />
            <label htmlFor="" className='block'>
              <input type="file" className='
                  block text-sm text-slate-500
                  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-cyan-500
                  hover:file:bg-violet-100
            absolute group/edit group-hover/item:visible invisible w-full h-1/4 ' />
            </label>
          </div>
        </div>

      </form>
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