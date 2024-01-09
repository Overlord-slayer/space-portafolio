import React from 'react'

import { Proyectos } from '@/constants'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div id='proyectos' className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        Mis proyectos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 inset z-[20]">
        {Proyectos.map((proyecto, index) => (
          <ProjectCard
            key={index}
            src={proyecto.Image}
            title={proyecto.project_name}
            description={proyecto.description}
            enlace={proyecto.enlace}
            repositorio={proyecto.repositorio}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects