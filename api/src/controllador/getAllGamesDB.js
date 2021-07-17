const {Videogame, Genre} = require('../db');

const getDb= async () => {
    return await Videogame.findAll({ 
        include:{
            model: Genre,
            attributes: ['id','name'],
            through:{
                attributes:[],
            }
        }
    })
}

module.exports=getDb;