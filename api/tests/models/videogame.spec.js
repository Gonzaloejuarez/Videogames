const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

xdescribe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    beforeEach(() => Videogame.sync({ force: true }));
    describe('Validator', () => {
      describe('name, description, platform', () => {
        it('should throw an error if the name is null', async () => {
          try {
            await Videogame.create({
              description:'hola',
              platforms:['exbox']
            });
          } catch (err) {
            expect(err.message).to.equal(
              'notNull Violation: Es necesario el nombre',
            );
          }
        });
        it('should throw an error if at least one platform is not loaded', async () => {
          try {
            await Videogame.create({
              name:'gonzalo',
              description:'hola'
            });
          } catch (err) {
            expect(err.message).to.equal(
              'notNull Violation: Es necesario cargar la plataforma',
            );
          }
        });
        it('should throw an error if the description is null', async () => {
          try {
            await Videogame.create({
              name:'gonzalo',
              platforms:['exbox']
            });
          } catch (err) {
            expect(err.message).to.equal(
              'notNull Violation: Es necesario cargar la descripcion',
            );
          }
        });
      });
      describe('Create a new Videogame', () => {
        describe('new videogame', () => {
          it('A game must be created satisfactorily', async () => {
            await Videogame.create({ name : 'Juego1' , description: 'hola', platforms:['exbox']});
            const g =  await Videogame.findOne({
              where : {
                name : 'Juego1',
              },
            });
            expect(g.name).to.equal('Juego1');
            expect(g.description).to.equal('hola')
          })
        })
      })
  });
});
