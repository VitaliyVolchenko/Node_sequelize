const express = require('express');
const router = express.Router();
const Divide = require('../models').Divide;
const Skill = require('../models').Skill;
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/')
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  //reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true);
  } else {
    cb(null, false);
  }   
};

const upload = multer({
  storage: storage,
  limits: {
  fileSize: 1024*1024*5
  },
  fileFilter: fileFilter
});

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

router.post('/', upload.single('image'), function (req, res, next){
  //console.log(req.file);
  Divide.create({
    name: req.body.name,
    image: req.file.path
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