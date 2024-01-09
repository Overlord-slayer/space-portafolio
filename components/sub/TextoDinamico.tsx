"use client"

import { TypeAnimation } from 'react-type-animation'

type TextoDinamicoProps = {
  sequence: Array<string | number>
}

export default function TextoDinamico({sequence} : TextoDinamicoProps) {
  return (
    <div className='mt-[175px]'>
      <h2 className='text-white text-[28px] font-montserrat'>
        <TypeAnimation
          sequence={sequence}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </h2>
    </div>
  )
}
