import axios from "axios";

const key="f78ecbb13b044d17a560f07925a81836";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getPopularGame=axiosCreate.get('/games?key='+key)
const getMovieDetails=(id)=>axiosCreate.get('/games/'+id+'/movies')
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
export default{
    getPopularGame,
    getMovieDetails,
    getGameListByGenreId
}