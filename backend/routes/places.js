const express = require('express');
const router = express.Router();
const { createPlace, deletePlace, getPlace, updatePlace} = require('../controllers/places');
const {protect} = require('../middlewares/auth');


router.get('/:placeId', getPlace);
router.post('/', protect, createPlace);
router.put('/:placeId', protect, updatePlace);
router.delete('/:placeId', protect, deletePlace);


module.exports = router;
