import React from 'react'
import {
  RxGithubLogo,
  RxLinkedinLogo
} from 'react-icons/rx'

export default function Footer() {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full flx flex-row items-center justify-around flex-wrap'>
          <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
            
            <div className='font-bold text-[16px]'>Contacto</div>
            <p className='flex flex-row items-center my-[15px] cursor-pointer'>
              <RxGithubLogo/>
            </p>
            <p className='flex flex-row items-center my-[15px] cursor-pointer'>
              <RxLinkedinLogo/>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
