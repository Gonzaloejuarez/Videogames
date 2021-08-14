const getAllApi = require('./getAllGamesAPI');
const getDb = require('./getAllGamesDB');

const getVideoGames = async() =>{
    let gamesApi = await getAllApi; 
    let gamesDb = await getDb();  
    let allGames = [...gamesApi, ...gamesDb]; 
    return allGames;
}

module.exports = getVideoGames;