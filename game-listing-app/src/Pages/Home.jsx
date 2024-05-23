import { useEffect, useState } from 'react'
import SideNavGenreList from '../Components/SideNavGenreList'
import GlobalApi from '../Services/GlobalApi'
import Slider from '../Components/Slider'
import PopularGameList from '../Components/PopularGameList'
import TrendingGameList from '../Components/TrendingGameList'

function Home() {
    const [gameList,setGameList]=useState([]);
    const [gameListByGenre,setGameListByGenre]=useState([]);
    const [selectedGenresName,setSelectedGenresName]=useState('Action');

    useEffect(()=>{
      
      GlobalApi.getPopularGame.then(resp=>{
        console.log(resp)
        setGameList(resp.data.results);
       
    })
    getGameList(4)
    },[])
    const getGameList=(genreId)=>{
      console.log(genreId)
      if(genreId!=0)
      {
        GlobalApi.getGameListByGenreId(genreId).then(resp=>{
          console.log(resp)
          setGameListByGenre(resp.data.results)
      })
      }
     
        
      
      
    }
  return (
    <div className='grid grid-cols-4 p-8'>
        <div className='hidden md:flex'><SideNavGenreList 
        selectedGenreId={(genreId)=>getGameList(genreId)} 
        selectedGenresName={(name)=>setSelectedGenresName(name)}
        /></div>
       {gameList?.length&&gameListByGenre?.length>0    ? 
       <div className='md:col-span-3 col-span-4 px-3'>
            <Slider game={gameListByGenre[0]} />
            <TrendingGameList gameList={gameList}/>
            <PopularGameList gameList={gameListByGenre}
            selectedGenresName={selectedGenresName}/>
        </div>
        :null}
    </div>
  )
}

export default Home