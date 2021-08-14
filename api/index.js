//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Videogame , Genre} = require('./src/db');
const {VIDEOGAME_GENRES} = require('./src/utils/constantes');
const {API_KEY} = process.env
const axios = require('axios')
// Syncing all the models at once.

const pepe = async () => {
  let opa = await axios.get(`${VIDEOGAME_GENRES}?key=${API_KEY}`);
  return opa.data.results
}
const types = async () => {
  const opa = await pepe()
  try{
    let existe = await Genre.findAll();
    !existe.length && await Genre.bulkCreate(opa)   
  }catch(error){
    console.log(error)
  }
}
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    
    types();
    
  });
});
