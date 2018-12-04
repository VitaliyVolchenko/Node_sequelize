const express = require('express');
const router = express.Router();
const Skill = require('../models').Skill;

router.get('/', function (req, res){
  Skill.findAll({    
  }).then(function (result){
    res.json(result);
  });
});

router.get('/:id', function (req, res){
  Skill.findAll({
    where: {
      id: req.params.id
    }
  }).then(function (result){
    res.json(result);
  });
});

router.post('/', function (req, res){
  Skill.create({
    name: req.body.name,
    divide_id: req.body.divide_id
  }).then(function (result){
    res.json(result);
  });
});

router.put('/:id', function (req, res) {
  Skill.update({
      name: req.body.name,
      image: req.body.image
  }, {
      where: {
          id: req.params.id
      }
  }).then(function (result) {
      res.json(result);
  });
});

router.delete('/:id', function (req, res) {
  Skill.destroy({
      where: {
          id: req.params.id
      }
  }).then(function (result) {
      res.json(result);
  });
});

module.exports = router;