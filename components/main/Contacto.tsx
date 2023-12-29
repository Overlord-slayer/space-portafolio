import React from 'react'

export default function Contacto() {
  return (
    <div className="w-fuul h-full flex flex-row text-white m-auto gap-40">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bold">Trabajemos juntos</h1>
        <div className="">
          <h2 className='text-3xl'>Correo</h2>
          <span>samuelargueta992@gmail.com</span>
        </div>
      </div>
      <div className="">
        <form className='flex flex-col gap-8'>
          <input className="" type="text" required placeholder='Nombre' />
          <input type="email" required placeholder='Correo' />
          <textarea placeholder="Asunto" rows={8}/>
          <button className='py-2 button-primary text-center
          text-white cursor-pointer rounded-lg
          max-w-[200px]'>
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
