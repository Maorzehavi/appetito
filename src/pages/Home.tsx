import React from 'react'
import homeImg from '../assets/images/HOME.jpg'

function Home() {
  return (
    <div className='flex scroll-m-0'>
      <section className='flex flex-col items-center justify-center h-screen w-full bg-cover bg-center' style={{backgroundImage: `url(${homeImg})`}}>
        <div className='flex flex-col items-center justify-center w-1/2 h-1/2 bg-gray-800 bg-opacity-90'>
          <h1 className='text-4xl text-white'>Appetito</h1>
          <p className='text-white'>אוכל טעים ובריא מהמטבח האיטלקי</p>
          </div>


      </section>
      {/* summery */}
      <section className='flex flex-col items-center justify-center h-screen w-full bg-cover bg-center' style={{backgroundImage: `url(${homeImg})`}}>
        <div className='flex flex-col items-center justify-center w-1/2 h-1/2 bg-gray-800 bg-opacity-90'>
          <h1 className='text-4xl text-white'>Appetito</h1>
          <p className='text-white'>אוכל טעים ובריא מהמטבח האיטלקי</p>
          </div>

      </section>
      <div >
      </div>
      <div>
        <div className='flex-'>

        </div>
      </div>

    </div>
  )
}

export default Home