import React from 'react'
import GenreList from '../Components/GenreList'

function Home() {
  return (
    <div className='grid grid-cols-4'>
      <div className='bg-black-800 h-full hidden md:block'>
        <GenreList/>
      </div>
      <div className='col-span-4 md:col-span-3 bg-black-800'>Game List</div>
    </div>
  )
}

export default Home