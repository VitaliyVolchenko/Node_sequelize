const Skill = require('../models').Skill;

exports.getAddSkills = (req, res) => {
  Skill.findAll({    
  }).then(function (result){
    res.json(result);
  });
};

exports.getAddSkill = (req, res) => {
  Skill.findAll({
    where: {
      id: req.params.id
    }
  }).then(function (result){
    res.json(result);
  });
};

exports.postAddSkill = (req, res) => {
  Skill.create({
    name: req.body.name,
    divide_id: req.body.divide_id
  }).then(function (result){
    res.json(result);
  });
};

exports.putAddSkill = (req, res) => {
  Skill.update({
      name: req.body.name,
      image: req.body.image
  }, {
      where: {
          id: req.params.id
      }
  }).then(function (result) {
      res.json(result);
  }).catch(err => {
    console.log(err);
  });
};

exports.deleteAddSkill = (req, res) => {
  Skill.destroy({
      where: {
          id: req.params.id
      }
  }).then(function (result) {
      res.json(result);
  });
};