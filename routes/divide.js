const express = require('express');
const router = express.Router();
const Divide = require('../models').Divide;

router.get('/', function (req, res){
  Divide.findAll({
    //include: [Skill]
  }).then(function (result){
    res.json(result);
  });
});



module.exports = router;