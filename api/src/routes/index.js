const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require('./Videogames.js')
const genre = require('./genre.js')
const videogame = require('./Videogame')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videogames);
router.use('/genres', genre);
router.use('/videogame', videogame);

module.exports = router;
