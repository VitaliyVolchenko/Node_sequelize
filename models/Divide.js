'use strict';
module.exports = (sequelize, DataTypes) => {
  const Divide = sequelize.define('Divide', {
    name: DataTypes.STRING
  }, { tableName: 'divides'});
  Divide.associate = function (models) {
    // Divide hasMany Skills
    Divide.hasMany(models.Skill);
  };
  return Divide;
};