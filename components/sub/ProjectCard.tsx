import Image from 'next/image'
import React from 'react'
import { ImGithub } from "react-icons/im"

type ProjectCardProps = {
  src: string,
  title: string,
  description: string,
  enlace: string,
  repositorio: string
}
const ProjectCard = ({ src, title, description, enlace, repositorio }: ProjectCardProps ) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-log border border-[#2A0E61] group'>
      <a href={enlace} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className='w-full objects-contain'
        />
      </a>
        
      <div className='flex flex-row'>
        <div className='relative p-4'>
          <h1 className='text-2xl font-semibold text-white'>
            {title}
          </h1>
          <p className='mt-2 text-gray-300'>{description}</p>
        </div>

          {/* Contenedor de iconos para computadoras */}
          <div className='absolute bottom-4 right-4 flex flex-row space-x-4'>
            <div className='text-white text-lg'>  
              <a href={repositorio} target="_blank" rel="noopener noreferrer">
                <ImGithub className='size-7'/>
              </a>
            </div>
          </div>

        {/* Contenedor de iconos para dispositivos móviles */}
        <div className='absolute bottom-4 right-4 md:hidden flex flex-row space-x-4'>
          <div className='text-white'>
            <a href={repositorio} target="_blank" rel="noopener noreferrer">
              <ImGithub className='size-7'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard