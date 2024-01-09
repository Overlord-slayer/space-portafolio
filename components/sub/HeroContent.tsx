"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import Image from 'next/image'

const HeroContent = () => {
  const handleDownloadCV = () => {
    // Lógica para descargar el CV (por ejemplo, redirigir a un archivo PDF)
    // Puedes proporcionar el enlace directo a tu CV o implementar lógica más avanzada aquí.
    const cvUrl = '/CV.pdf' // Reemplaza con la ruta correcta a tu CV
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'cv_samuel.pdf'; // Puedes cambiar el nombre del archivo si lo deseas
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
  }

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-10 md:mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-2 md:py-[15px] px-2 md:px-[7px] border border-[#7042f88b] opacity-[0.9]'
        >
          <SparklesIcon className='text-[#b49bff] mr-2 md:mr-[10px] h-5 w-5'/>
          <h1 className='Welcome-text text-xs md:text-[13px]'>
            Desarrollador Web FullStack Jr.
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-3 md:gap-6 mt-6 text-xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
          <span>
            Proporcionando
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> la mejor </span>
            experiencia en proyectos
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-base md:text-lg text-gray-400 my-3 md:my-5 max-w-[600px]'
        >
          Desarrollo Web FullStack. Hecha un vistazo a mis proyectos.
        </motion.p>

        <motion.a
          onClick={handleDownloadCV}
          variants={slideInFromLeft(1)}
          className='py-2 px-4 md:px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
        >
          Descargar CV
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-auto md:h-full flex justify-center items-center mt-5 md:mt-0'
      >
        <Image
          src="/mainIconsdark.svg"
          alt="iconos de trabajo"
          height={650}
          width={650}
          className='object-cover'
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
