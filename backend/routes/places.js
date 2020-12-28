const express = require('express');
const router = express.Router();
const { getPlaces, getPlace, createPlace, updatePlace, deletePlace, getUserPlaces } = require('../controllers/places');
const { protect } = require('../middlewares/auth');

router.use((req, res, next)=>{
    console.log('reached pleaces routes');
    next();
})

// get logged in user places for dashboard
router.get('/getuserplace', protect, getUserPlaces);

router.get('/:placeId', getPlace);
router.get('/', getPlaces);
router.post('/', protect, createPlace);
router.put('/:placeId', protect, updatePlace);
router.delete('/:placeId', protect, deletePlace);

router.use((req, res, next)=>{
    console.log('reached pleaces routes 2');
    next();
})


module.exports = router;
