import axios from "axios";

const key="f78ecbb13b044d17a560f07925a81836";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);
export default{
    getGenreList
}