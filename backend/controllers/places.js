// model
const Place = require('../models/Place');

// middleware
const asyncHandler = require('../middlewares/async');

// error response
const ErrorResponse = require('../utils/errorResponse');


// @desc All places
// @route GET api/v1/places
// access-> public
const getPlaces = asyncHandler(async (req, res, next) => {
    const { startDate, endDate, guests, beds, bedrooms, bathrooms, minPrice, maxPrice } = req.params;
    const places = await Place.find({
        "$nor": [
            { "reserverations.start": { "$lte": new Date(startDate) }, "reserverations.end": { "$gte": new Date(startDate) } },
            { "reserverations.start": { "$lte": new Date(endDate) }, "reserverations.end": { "$gte": new Date(endDate) } },
            { "reserverations.start": { "$gte": new Date(startDate) }, "reserverations.end": { "$lte": new Date(endDate) } },
            { "reserverations.start": { "$lte": new Date(startDate) }, "reserverations.end": { "$gte": new Date(endDate) } }
        ],
        guests: { $gte: guests || 1 },
        beds: { $gte: beds || 1 },
        bedrooms: { $gte: bedrooms || 1 },
        bathrooms: { $gte: bathrooms || 1 },
        price: { $gte: minPrice || 1 },
        $and: [
            { price: { $gt: minPrice || 0 } },
            { price: { $lt: maxPrice || 100000 } }
        ]
    })
    res.status(200).send({
        success: true,
        data: places
    });
})

// @desc get single place
// @route GET api/v1/places/:placeId
// access-> public
const getPlace = asyncHandler(async (req, res, next) => {
    const placeId = req.params.placeId;
    const place = await Place.findById(placeId);
    if (!place) {
        return next(new ErrorResponse('Resource Not Found', 404));
    }
    res.status(200).json({
        success: true,
        data: place
    })
})


// @desc get logged in user places
// @route GET api/v1/places/:userId/places
// access-> public
const getUserPlaces = asyncHandler(async (req, res, next) => {
    const userId = req.user.id;
    const places = await Place.find({ owner: userId })
    res.status(200).json({
        success: true,
        data: places
    })
})


// @desc create place, user must be logged in
// @route POST api/v1/places
// access-> private
const createPlace = asyncHandler(async (req, res, next) => {
    delete req.body._id;
    delete req.body.approved;
    req.body.owner = req.user.id;
    let newPlace = new Place(req.body);
    newPlace = await newPlace.save();
    res.status(201).json({
        success: true,
        data: newPlace
    })
})


// @desc update place, user must be logged in
// @route PUT api/v1/places/:placeId
// access-> private
const updatePlace = asyncHandler(async (req, res, next) => {
    delete req.body._id;
    delete req.body.approved;
    delete req.body.owner;

    console.log(req.body);
    console.log(req.files);

    const placeId = req.params.placeId;
    let place = await Place.findById(placeId);
    if (!place) {
        return next(new ErrorResponse('Resource Not Found', 404));
    }
    if (place.owner.toString() !== req.user.id && !req.user.isAdmin) {
        return next(new ErrorResponse('Not Authorized', 401));
    }
    place = await Place.findByIdAndUpdate(placeId, req.body, {
        runValidators: true,
        new: true
    });
    res.status(200).json({
        success: true,
        data: place
    })
})


// @desc delete place, only admin or owner can delete place
// @route Delete api/v1/places/:placeId
// @access private
const deletePlace = asyncHandler(async (req, res, next) => {
    let placeId = req.params.placeId;
    let place = await Place.findById(placeId);
    if (!place) {
        return next(new ErrorResponse('Resource not found', 404));
    }

    if (place.owner.toString() !== req.user.id && !req.user.isAdmin) {
        return next(new ErrorResponse('Not Authorized', 401));
    }
    await place.remove();
    res.status(200).json({
        success: true
    })
})

module.exports = {
    getPlace,
    getPlaces,
    createPlace,
    updatePlace,
    deletePlace,
    getUserPlaces
};
