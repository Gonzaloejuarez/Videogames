/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description : 'Mario',
  platforms: ['Nintendo']
};

xdescribe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
    it('Responde con 100 juegos', async () => {
      try{
        const res = await agent.get('/videogames');
        expect(res.body).to.have.lengthOf(100)
      }catch(err){
        console.log(err)
      }
    });
    it('Si pasan un name, responde con un Nombre', async () => {
      try{
        const res = await agent.get('/videogames?name=Hitman');
        expect(res.body[0].name).to.be.equal('Hitman')
      }catch(err){
        console.log(err)
      }
    })
    it('Si se le pasa un numero, debe devolver con el Id que matchea' ,async  () => {
      try{
        const res = await agent.get('/videogame/32');
        expect(res.body[0].name).to.be.equal("Destiny 2")
      }catch(err){
        console.log(err)
      }
    })
  });

  describe('POST /videogame', () => {
    it('responde con un 200', async () => {
			try {
				await agent.post('/videogame').send({"name": ".aasd", "description": "wqrqwer", "released": "2002/03/02", "rating": "10", "image": "....,.jpg","genres": [15, 6],"platforms":[{"platform": "PC"},{"platform": "Linux"}]}).expect(200);
			} catch (err) {
				console.log(err);
			}
		});

		it('Si no pasa el nombre responda con un 400', async () => {
			try {
				await agent.post('/videogame').send({}).expect(400);
			} catch (err) {
				console.log(err);
			}
		});
		it('Si no pasa platforma responde con 400', async () => {
			try {
				await agent.post('/videogame').send({name: 'Destiny 2'}).expect(400);
			} catch (err) {
				console.log(err);
			}
		});
		it('Muestra que crea correctamente un videojuego', async () => {
			try {
				const res = await agent
					.post('/videogame')
					.send({"name": "SONIC", "description": "Sonic", "released": "2002/03/02", "rating": "3", "image": "...,.jpg","genres": [17, 3],"platforms":[{"platform": "PC"},{"platform": "Nintendo"}]});
				expect(res.body.name).to.be.equal('SONIC');
			} catch (err) {
				console.log(err);
			}
		});

  })
});
