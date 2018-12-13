'use strict';
module.exports = (sequelize, DataTypes) => {
  const Divide = sequelize.define('Divide', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, { tableName: 'divides'});
  Divide.associate = function (models) {
    // Divide hasMany Skills
    Divide.hasMany(models.Skill,
      {as: 'skills',
      foreignKey:'divide_id'}      
    );
  };
  return Divide;
};