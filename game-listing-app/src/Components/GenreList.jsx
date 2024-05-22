import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi';

function GenreList() {

    const [genreList,setGenreList]=useState([])
    useEffect(()=>{
        getGenreList();
    },[])
    const getGenreList=()=>{
        GlobalApi.getGenreList.then((resp)=>{
            console.log(resp.data.results);
            setGenreList(resp.data.results);
        })
    }
  return (
    <div>
  <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>
  {genreList.map((item) => (
    <div key={item.id} className='flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-400 p-2 rounded-lg'>
      <img src={item.image_background} 
      className='w-[40px] h-[40px] object-cover rounded-lg' />
        <h3 className='dark:text-white text-[18px]'>{item.name}</h3>
    </div>
  ))}
</div>

  )
}

export default GenreList