import React from 'react'
import bgHeadingImg from '../assets/bgHeadingImg.png'

const BgHeadingImg = ({heading}) => {
  return (
    <div>
        <img src={bgHeadingImg} className='w-full h-60' alt="Background Image" />
        <h1 className='relative bottom-36 text-white font-extrabold text-center text-6xl' style={{textShadow:'5px 5px 5px black'}}>{heading}</h1>
    </div>
  )
}

export default BgHeadingImg