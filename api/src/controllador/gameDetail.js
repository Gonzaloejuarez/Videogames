const getDb = require('./getAllGamesDB');
const {VIDEOGAMES_URL} = require('../utils/constantes');
const {API_KEY} = process.env;
const axios = require('axios');


const getGameDetail = async(ubicacion,element)=>{
    let games = await getDb();

    switch(ubicacion){
        case 'GAME':
            //en el caso que el usuario haya ingresado tal cual el nombre del juego ej: grand theft auto v
            let game= games.filter(e=> e.name.toLowerCase().replace(/ /g, "") === element.toLowerCase().replace(/ /g, ""));
            if(game.length>0){
                return game
            }else{
                let resultados=[];
                game = await axios.get(`${VIDEOGAMES_URL}?key=${API_KEY}&search=${element}`);
                if(game.data.results.length>0){
                    game.data.results.map((ele,index)=>{
                        if(index<15){
                            resultados.push({
                                id: ele.id,
                                name: ele.name,
                                released: ele.released,
                                description: ele.description,
                                image: ele.background_image,
                                rating: ele.rating,
                                platforms: ele.parent_platforms,
                                genres: ele.genres,
                            })
                        }
                    })
                    return resultados;
                }
            }
            return game
        case 'ID':
            let solojuego = games.filter(e=> e.id === element); 
            if(solojuego.length){
                return solojuego
            }else{
                try{
                    solojuego = await axios.get(`${VIDEOGAMES_URL}/${element}?key=${API_KEY}`);
                    let resultado=[];
                    resultado.push({
                        id: solojuego.data.id,
                        name: solojuego.data.name,
                        released: solojuego.data.released,
                        description: solojuego.data.description,
                        image: solojuego.data.background_image,
                        rating: solojuego.data.rating,
                        platforms: solojuego.data.parent_platforms,
                        genres: solojuego.data.genres,
                    })
                    return resultado;
                }catch(error){
                    return resultado=error;
                }
            }
        default:
            return games;
    }
}

module.exports=getGameDetail;