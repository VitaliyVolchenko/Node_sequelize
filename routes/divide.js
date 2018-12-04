const express = require('express');
const router = express.Router();
const Divide = require('../models').Divide;
const Skill = require('../models').Skill;

router.get('/', function (req, res){
  Divide.findAll({
    //include: [Skill]
    include: [{
      model: Skill,
      'as': 'skills'}]
  }).then(function (result){
    res.json(result);
  });
});

router.get('/:id', function (req, res){
  Divide.findAll({
    where: {
      id: req.params.id
    },
     //include: [Skill]
     include: [{
      model: Skill,
      'as': 'skills'}]
  }).then(function (result){
    res.json(result);
  });
});

router.post('/', function (req, res){
  Divide.create({
    name: req.body.name,
    image: req.body.image
  }).then(function (result){
    res.json(result);
  });
});

router.put('/:id', function (req, res) {
  Divide.update({
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
  Divide.destroy({
      where: {
          id: req.params.id
      }
  }).then(function (result) {
      res.json(result);
  });
});


module.exports = router;