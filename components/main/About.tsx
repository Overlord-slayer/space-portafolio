"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useInView } from 'react-intersection-observer'
import { slideInFromBottom } from '@/utils/motion'

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo activa la animación una vez
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView])

  return (
    <section id="sobre-mi" ref={ref} className='w-full h-full mt-[-160px] text-white md:flex-row md:px-20 mb-10 gap-3'>
      <motion.div
        initial='visible'
        animate='visible'
        className='w-full h-[500px] md:flex-rwo md:px-20 mt-10 md:mt-40'
      >
        {isVisible && (
        <motion.div
          initial='hidden'
          animate='visible'
          className='flex flex-col items-center'  // Agregado 'items-center' para centrar los elementos
        >        
          <motion.div 
            variants={slideInFromBottom(0.8)}
            className='flex flex-col text-white justify-center items-center'>
            <Image
              className='border-4 border-black dark:border-slate-500 transform hover:scale-105 transition-transform duration-300 drop-shadow-xl shadow-black rounded-full mx-auto mt-[-30px]'
              src='/images/foto.jpg'
              alt='foto'
              height={200}
              width={200}
            ></Image>
            <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white mt-14'>
              <TypeAnimation
                sequence={[
                  'Samuel Argueta, autodidacta',
                  1000,
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
            <div className='gap-3 mt-[50px]'>
              <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>
                <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2 md:py-4 xl:py-6'>
                  Desarrollador web Junior
                </span>
              </h1>
              <p className='text-sm md:text-base xl:text-lg text-center mt-4 gap-3'>
                Actualmente estudiante, cursando 4to año de la carrera Ciencias de la Computación.   
                <br />
                Posee interés por la inteligencia artificial, así como por la ciberseguridad.
              </p>
            </div>
            
          </motion.div>
        </motion.div>
        )}

      </motion.div>
    </section>
  )
}
