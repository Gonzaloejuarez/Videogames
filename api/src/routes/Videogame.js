//aca tenemos que renderizar la ruta id, y la ruta post

const {Router} = require('express');
const {Videogame} = require('../db');
const { gameDetail} = require('../controllador');

const router = Router();

router.get('/:id' , async (req, res) => {
    const {id} = req.params;
    if(id){
        let game = await gameDetail('ID', id);
        if(game.length){
            res.json(game[0])
        }else{
            res.status(404).json({error: 'Game not found'})
        }
    }
});

router.post('/', async (req,res)=>{
    const{name, description, released, rating, genres,platforms,image} = req.body;
    if(!name || !description || !platforms ){
        return res.status(400).json({error: 'notNull Violation: It requires a valid name'});
    }else{
        const createGame= await Videogame.create({
            name, 
            description,
            released, 
            rating, 
            platforms,
            image,
            genres
        });
    
        await createGame.setGenres(genres);
        return res.json(createGame);
    }

})


module.exports = router;