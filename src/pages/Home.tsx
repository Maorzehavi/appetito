import React from 'react'
import homeImg from '../assets/images/HOME.jpg'

function Home() {
  return (
    <div className='h-full flex flex-col items-center'>
      <div className='text-center'>
        <p className='flex justify-center text-4xl'>
          <span className='text-4xl mx-2'>.אוכל</span>
          <span className='text-4xl'>.פסטה</span>
          <span className='text-4xl'>.פיצה</span>

        </p>

      </div>
      <div className='min-w-full'>
      <img src={homeImg} alt="Home" className='max-h-96 min-w-full' />

      </div>


    </div>
  )
}

export default Home