import express from 'express'
const router = express.Router();
import {createPlace, getPlaces, getPlacesByUID, updatePlaceAminities} from '../controllers/placeController.js'

router.post('/create',createPlace);
router.get('/:uid',getPlacesByUID);
router.put('/:pid',updatePlaceAminities)
router.get('/',getPlaces);


export default router;