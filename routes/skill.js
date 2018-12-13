const express = require('express');

const skillsController = require('../controllers/skills');

const router = express.Router();


router.get('/', skillsController.getAddSkills);

router.get('/:id', skillsController.getAddSkill);

router.post('/', skillsController.postAddSkill);

router.put('/:id', skillsController.putAddSkill);

router.delete('/:id', skillsController.deleteAddSkill);

module.exports = router;