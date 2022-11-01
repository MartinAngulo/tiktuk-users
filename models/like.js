'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static async  saveForVideoAndUser(userId,videoId){
      let [likeObject, wasCreated] = await this.findOrCreate({
        where:{userId,videoId}
      });
      return likeObject;
    }
    
    static associate(models) {
      // define association here
      
    }
  };
  Like.init({
    userId:{ 
      type: DataTypes.INTEGER,
      references:{
        model: "Users",
        key:"id",
      },
    },
    videoId: {
      type: DataTypes.INTEGER,
      references:{
        model: "Videos",
        key:"id",
      },
    }
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};