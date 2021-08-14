const axios = require('axios');
const {VIDEOGAMES_URL} = require('../utils/constantes');
const {API_KEY} = process.env;

const getApi = async(_req) =>{
    

    let callApi1 = await axios.get(`${VIDEOGAMES_URL}?key=${API_KEY}&page_size=40`);
    let callApi2 = await axios.get(`${VIDEOGAMES_URL}?key=${API_KEY}&page=4&page_size=40`);
    let callApi3 = await axios.get(`${VIDEOGAMES_URL}?key=${API_KEY}&page=9&page_size=20`);
    // lo que estoy haciendo aca es traerme 100 juegos de la API
    let games=[];


    callApi1.data.results.map(element=>{
        games.push({
            id: element.id,
            name: element.name,
            released: element.released,
            image: element.background_image,
            rating: element.rating,
            platforms: element.parent_platforms,
            genres: element.genres,
        })
    })

    callApi2.data.results.map(element=>{
        games.push({
            id: element.id,
            name: element.name,
            released: element.released,
            image: element.background_image,
            rating: element.rating,
            platforms: element.parent_platforms,
            genres: element.genres,
        })
    })

    callApi3.data.results.map(element=>{
        games.push({
            id: element.id,
            name: element.name,
            released: element.released,
            image: element.background_image,
            rating: element.rating,
            platforms: element.parent_platforms,
            genres: element.genres,
        })
    })
    // console.log(games);
    return games;
    //DEBERIA TENER 100 JUEGOS,
}

const getAllApi = getApi();

module.exports=getAllApi;
