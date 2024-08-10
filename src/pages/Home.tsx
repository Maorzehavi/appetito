import React from 'react'
import homeImg from '../assets/images/HOME.jpg'

function Home() {
  return (
    <div className='flex bg-gray-300'>
      <div className='flex-1'>
        <div className='flex'>

          <img src={homeImg} alt='Home' className='w-1/2' />
          <div className='flex-1 p-4'>
            <h1 className='text-5xl font-bold'>ברוכים הבאים למסעדת הפלאים</h1>
            <p className='text-2xl'>מסעדת הפלאים מציעה מגוון רחב של מנות עם טעמים מרתקים מכל העולם</p>
            <div className='flex justify-between'>
              <div>
                <h2 className='text-3xl font-bold'>אודות</h2>
                <p className='text-xl'>מסעדת הפלאים היא מסעדה כשרה המציעה מגוון רחב של מנות עם טעמים מרתקים מכל העולם</p>
              </div>
              <div>
                <h2 className='text-3xl font-bold'>צור קשר</h2>
                <p className='text-xl'>מסעדת הפלאים ממוקמת ברחוב המסעדות 5, תל אביב</p>
                <p className='text-xl'>טלפון: 03-1234567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home