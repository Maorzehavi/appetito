import React from 'react'
import homeImg from '../assets/images/HOME.jpg'

function Home() {
  return (
    <div className='h-full flex flex-col items-center text-gray-700'>
      <div className='flex flex-col items-center justify-center'>
        <p className='flex justify-center text-4xl gap-5 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl sm:pt-10 md:pt-20 '>
          <span className='text-4xl mx-2'>.אוכל</span>
          <span className='text-4xl'>.פסטה</span>
          <span className='text-4xl'>.פיצה</span>

        </p>

      </div>
      <div className='min-w-full'>
        <img src={homeImg} alt='home' className='sm:h-96 md:h-96 lg:h-96 xl:h-96 w-full object-cover rounded-lg mt-32 ' />

      </div>


    </div>
  )
}

export default Home