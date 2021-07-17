//aca debo renderizar la ruta genres
const {Router} = require('express');
const {Genre} = require('../db');


const router = Router();

router.get('/', async (_req, res) => {
    try{
        let geners = await Genre.findAll();
        return res.status(200).json(geners)
    }catch(error){
        return(error)
    }
})

module.exports = router;