const express = require('express');
const router = express.Router();
const User = require('../models').User;
//const db = require('../models/index');
const bcrypt = require('bcrypt');

router.get('/', function (req, res){
  User.findAll({    
  }).then(function (result){
    res.json(result);
  });
});

router.post('/', function (req, res){
  User.findAll({    
    where: {
        email: req.params.email
    }
  })  
  .then(user => {
    if (user){
      return res.status(409).json({
        message: 'Mail exists'
      });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
          return res.status(500).json({
            error: err
          });
        } else {
          User.create({
            email: req.body.email,
            password: hash
          })
          .then(function(result) {
            console.log(result);
            res.status(201).json({
              message: 'User created'
            });
          })
          .catch(function(err) {
            console.log(err);
            res.status(500).json({
              error: err
            });
          });
        }
      }); 
    }
  });  
});

router.post('/login', function (req, res){
  User.findAll({    
    where: {
        email: req.params.email
    }
  })
  .then(user => {
    if(user.length < 1) {
      return res.status(404).json({
        message: 'Mail not found, user doesn\'t exist'
      });
    }
    bcrypt.compare(req.body.password, user[0].password, (req, res) => {
      if(err) {
        return res.status(401).json({
          message: 'Auth faild'
        });
      }
    });
  })
  .catch(function(err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

module.exports = router;