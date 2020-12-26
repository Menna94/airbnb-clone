const express = require('express');
const router = express.Router();
const { getPlaces, getPlace, createPlace, updatePlace, deletePlace, getUserPlaces } = require('../controllers/places');
const { protect } = require('../middlewares/auth');


router.get('/:placeId', getPlace);
router.get('/', getPlaces);
router.post('/', protect, createPlace);
router.put('/:placeId', protect, updatePlace);
router.delete('/:placeId', protect, deletePlace);

// get logged in user places for dashboard
router.get('/:userId/places', protect, getUserPlaces);

module.exports = router;
