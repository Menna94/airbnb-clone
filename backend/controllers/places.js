const path = require('path');

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
    const { city, startDate, endDate, guests, beds, bedrooms, bathrooms, minPrice, maxPrice } = req.body;
    let places;
    console.log(9898,startDate, endDate);
    console.log(req.body);
    if (startDate) {
        places = await Place.find({
            "$nor": [
                { "reserverations.start": { "$lte": new Date(startDate) }, "reserverations.end": { "$gte": new Date(startDate) } },
                { "reserverations.start": { "$lte": new Date(endDate) }, "reserverations.end": { "$gte": new Date(endDate) } },
                { "reserverations.start": { "$gte": new Date(startDate) }, "reserverations.end": { "$lte": new Date(endDate) } },
                { "reserverations.start": { "$lte": new Date(startDate) }, "reserverations.end": { "$gte": new Date(endDate) } }
            ],
            "location.city": city,
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
    } else {
        places = await Place.find();
    }
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
// @route GET api/v1/places/getuserplace
// access-> public
const getUserPlaces = asyncHandler(async (req, res, next) => {
    console.log('11111111');
    const userId = req.user.id;
    const places = await Place.find({ owner: userId })
    console.log(places);
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
    delete req.body.images;
    req.body.owner = req.user.id;

    // images validation
    // check if there are files uploaded
    if (!req.files) {
        return next(new ErrorResponse('please upload valid 5 photos', 400));
    }

    const { file1, file2, file3, file4, file5 } = req.files;

    // check for existance of 5 files
    if (!file1 || !file2 || !file3 || !file4 || !file5) {
        return next(new ErrorResponse('please upload valid 5 photos', 400));
    }

    const files = [file1, file2, file3, file4, file5];
    const images = [];

    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        // validate image type
        if (!file.mimetype.startsWith('image')) {
            return next(new ErrorResponse('please upload valid 5 photos', 400));
        }

        // Check filesize
        if (file.size > process.env.MAX_FILE_UPLOAD) {
            return next(new ErrorResponse(`Please upload photo less than ${process.env.MAX_FILE_UPLOAD}`, 400));
        }

        // Create custom filename
        file.name = `photo_${i}_${Date.now()}${path.parse(file.name).ext}`;
        images.push(file.name);
        file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
            if (err) {

                console.error('problem with file upload', err);
                return next(new ErrorResponse(`Problem with file upload`, 500));
            }
        });
    }

    req.body.images = images;
    req.body.location = JSON.parse(req.body.location);
    req.body.aminities = JSON.parse(req.body.aminities);
    let newPlace = new Place(req.body);
    newPlace = await newPlace.save();
    res.status(201).json({
        success: true,
        data: newPlace
    });
})


// @desc update place, user must be logged in
// @route PUT api/v1/places/:placeId
// access-> private
const updatePlace = asyncHandler(async (req, res, next) => {
    delete req.body._id;
    delete req.body.approved;
    delete req.body.owner;

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

// <<<<<<< HEAD
// <<<<<<< HEAD:backend/controllers/placeController.js




//------------------------> UPDATE <------------------------// 
//Photos, short description, title
//------------------------> UPDATE <------------------------// 
//-> PUT/place/ update
//-> access-> private
const updatePlaceDetails = async (req,res,next)=>{
    const {
        placePhotos,
        placeDetails,
        placeDescription,
    } = req.body;
    const placeID = req.params.pid;
    
    let updatedDetails;
    //make changes
    try{
        updatedDetils = await Place.findById(placeID)
    }catch(err){
        const error = new airbnbError('Something went wrong, Couldn\'t Update Aminities!', 500)
        return next(error);
    }
    updatedDetails.placePhotos = placePhotos;
    updatedDetails.placeDetails = placeDetails;
    updatedDetails.placeDescription = placeDescription;

    //save changes to DB
    try{
        await updatedDetils.save();
    }catch(err){
        const error = new airbnbError('Something went wrong, Couldn\'t save changes!', 500)
        return next(error);
    }

    res.status(200).json({ place: updatedDetils.toObject({ getters: true }) });

}

module.exports = {
    getPlace,
    getPlaces,
    createPlace,
    updatePlace,
    deletePlace,
    getUserPlaces
};

