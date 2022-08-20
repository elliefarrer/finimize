const express = require('express');
const savingGoalsController = require('../controllers/savingGoals.controller');

const router = express.Router();

router.post('/saving-goals', savingGoalsController.postSavingGoal);

module.exports = router;
