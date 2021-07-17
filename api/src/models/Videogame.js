const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue : DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description : {
      type : DataTypes.TEXT, 
      allowNull:false,
      validate : {
        notNull : {
          alert : 'es necesario llenar esta parte'
        }
      }
    },
    released : {
      type : DataTypes.STRING
    },
    rating : {
      type : DataTypes.STRING
    },
    platforms: {
      type: DataTypes.JSON, 
      allowNull: false,
      validate : {
        notNull: {
          msj : 'Dbe cargar una plataforma'
        }
      }
    }
  },
  {timestamps: false}
  );
};
