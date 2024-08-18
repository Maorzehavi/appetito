import React from 'react'
import homeImg from '../assets/images/HOME.jpg'

function Home() {
  return (
    <div className='h-full flex flex-col items-center text-gray-700 pt-14 '>
      <div className='items-center justify-center'>
        <p className='flex justify-center text-4xl gap-5 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl sm:pt-10 md:pt-20 '>
          <span >.אוכל</span>
          <span >.פסטה</span>
          <span >.פיצה</span>

        </p>

      </div>
      <div className='mb-5' >
        <img src={homeImg} alt='home' className='w-[28rem] h-[28rem] object-cover rounded-full mt-32  shadow-2xl' />

      </div>


    </div>
  )
}

export default Home