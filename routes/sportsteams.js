// Our router module
const router = require('express').Router();

// Our controller
const SportsTeamsContoller = require('../controllers/sportsTeamsController');

// Your routes
router.get(`/new`, SportsTeamsContoller.new);
router.get(`/east`, SportsTeamsContoller.east);
router.get(`/west`, SportsTeamsContoller.west);
router.get(`/`, SportsTeamsContoller.index);
router.get(`/:id`, SportsTeamsContoller.show);
router.post(`/`, SportsTeamsContoller.create);
router.get(`/:id/edit`, SportsTeamsContoller.edit);
router.post(`/update`, SportsTeamsContoller.update);
router.post(`/destroy`, SportsTeamsContoller.destroy);

// We have to export our changes
module.exports = router;