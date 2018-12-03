'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: DataTypes.STRING
  }, {});
  Skill.associate = function(models) {
    // Skill belongsTo Divide
    Skill.belongsTo(models.Divide, { foreignKey: 'divide_id' });
  };
  return Skill;
};