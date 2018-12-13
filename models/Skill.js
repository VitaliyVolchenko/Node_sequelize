'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: DataTypes.STRING,
    //divide_id: DataTypes.INTEGER,
  }, { tableName: 'skills'});
  Skill.associate = function(models) {
    // Skill belongsTo Divide
    Skill.belongsTo(models.Divide);
  };
  return Skill;
};