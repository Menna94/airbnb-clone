const express = require('express');
const router = express.Router();
const {createPlace, getPlaces, getPlacesByUID, updatePlaceAminities} = require('../controllers/places')

router.post('/create',createPlace);
router.get('/:uid',getPlacesByUID);
router.put('/:pid',updatePlaceAminities)
router.get('/',getPlaces);


module.exports = router;
