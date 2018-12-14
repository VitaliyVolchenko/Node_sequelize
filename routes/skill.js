const express = require('express');

const skillsController = require('../controllers/skills');

const router = express.Router();

const checkAuth = require('../middleware/check-auth');


router.get('/', skillsController.getAddSkills);

router.get('/:id', skillsController.getAddSkill);

router.post('/', checkAuth, skillsController.postAddSkill);

router.put('/:id', checkAuth, skillsController.putAddSkill);

router.delete('/:id', checkAuth, skillsController.deleteAddSkill);

module.exports = router;