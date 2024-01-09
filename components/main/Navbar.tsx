"use client"

import Image from 'next/image'
import React, { useReducer } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { IoLogoGithub } from "react-icons/io5"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Link from 'next/link'

// Definición de tipos
interface State {
  isMobileMenuOpen: boolean
}

type Action = { type: 'toggleMobileMenu' } | { type: 'closeMobileMenu' };

const initialState: State = {
  isMobileMenuOpen: false,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'toggleMobileMenu':
      return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
    case 'closeMobileMenu':
      return { ...state, isMobileMenuOpen: false };
    default:
      return state
  }
}

const Navbar: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleMobileMenu = () => {
    dispatch({ type: 'toggleMobileMenu' })
  };

  const closeMobileMenu = () => {
    dispatch({ type: 'closeMobileMenu' })
  }

  const handleEmailClick = () => {
    const recipientEmail = 'samuelargueta992@gmail.com'
    const subject = 'Contactar'
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(subject)}`
    window.open(url, '_blank')
  }

  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-2 md:px-[10px]'>
        <a href="#hero" className='h-auto w-auto flex flex-row items-center'>
          <Image
            src='/ownlogo.png'
            alt='logo'
            width={70}
            height={70}
            className='cursor-pointer hover:animate-slowspin'
          />
          <span className='font-bold ml-2 md:ml-[10px] hidden md:block text-gray-300 text-sm md:text-base'>
            Desarrollo Web
          </span>
        </a>

        <div className='md:flex hidden items-center justify-between h-auto '>
          <div className={`flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-2 md:mr-[15px] px-2 md:px-[20px] py-1 md:py-[10px] rounded-full text-gray-200 ${state.isMobileMenuOpen ? 'md:border-none md:bg-transparent' : ''} space-x-20`}>
            <a href="#sobre-mi" className={`md:text-base ${state.isMobileMenuOpen ? 'text-white' : ''}`} onClick={closeMobileMenu}>Sobre mí</a>
            <a href="#skills" className={`md:text-base ${state.isMobileMenuOpen ? 'text-white' : ''}`} onClick={closeMobileMenu}>Habilidades</a>
            <a href="#proyectos" className={`md:text-base ${state.isMobileMenuOpen ? 'text-white' : ''}`} onClick={closeMobileMenu}>Proyectos</a>
          </div>
        </div>

        <div className='flex flex-row gap-5 text-white'>
          <Link
            href='https://github.com/Overlord-slayer'
          >
            <IoLogoGithub className='size-10'/>
          </Link>
          <Link
            href='https://www.linkedin.com/in/samuel-argueta-1b0480200/'
          >
            <FaLinkedin className='size-10'/>
          </Link>
          <a  className='cursor-pointer' onClick={handleEmailClick}>
            <MdEmail className='size-10' />
          </a>
          
        </div>

        
        {/* Icono de hamburguesa para dispositivos móviles */}
        <div className='md:hidden'>
          <IoMdMenu
            className={`h-6 w-6 cursor-pointer text-gray-300 ${state.isMobileMenuOpen ? 'text-white' : ''}`}
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Menú desplegable para dispositivos móviles */}
        {state.isMobileMenuOpen && (
          <div className='md:hidden absolute top-[65px] right-0 left-0 bg-[#0300145e] border-t border-[#7042f861]'>
            <a href="#sobre-mi" className='block py-2 text-white text-center text-sm' onClick={closeMobileMenu}>Sobre mí</a>
            <a href="#skills" className='block py-2 text-white text-center text-sm' onClick={closeMobileMenu}>Habilidades</a>
            <a href="#proyectos" className='block py-2 text-white text-center text-sm' onClick={closeMobileMenu}>Proyectos</a>
          </div>
        )}

        
      </div>      
    </div>
  )
}

export default Navbar
