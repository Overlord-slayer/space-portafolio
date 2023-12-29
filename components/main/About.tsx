"use client"

import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function About() {
  return (
    <section id="sobre-mi" className='w-full h-full text-white'>
      <div className='flex flex-col text-white justify-center items-center'>
        <Image
          className='border-4 border-black dark:border-slate-500 transform hover:scale-105 transition-transform duration-300 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
          src='/images/foto.jpg'
          alt='foto'
          height={200}
          width={200}
        ></Image>
        <h1 className='text-[40px] text-white'>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Samuel Argueta, autodidacta',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Samuel Argueta, entusiasta',
              1000,
              'Samuel Argueta, disciplinado',
              1000,
              'Samuel Argueta, colaborativo',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
          />
          
        </h1>
      
        <h1 className='text-[40px]'>
          <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-7'>
            Desarrollador web Junior
          </span>
        </h1>
        <p>
          Actualmente estudiante, cursando 4to año de la carrera Ciencias de la Computación.   
          <br />
          Posee interés por la inteligencia Artificial, así como por la Cyberseguridad.
        </p>
        
      </div>
    </section>
  )
}
