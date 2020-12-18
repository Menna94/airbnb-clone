import Place from '../models/Place.js'
import asyncHandler from 'express-async-handler'
import airbnbError from '../models/airbnbError.js';





//------------------------> READ all places <------------------------// 
//-> GET/place/ //////////////////////??
//-> access-> public
const getPlaces = asyncHandler(async(req,res,next)=>{
    let places;
    try{
        places = await Place.find({});
    }catch(err){
        const error = new airbnbError('Cant Get All Places',500);
        console.log(error);
        return next(error)
    }
    res.status(200).json(places);
});






//------------------------> READ Place By UserID <------------------------// 
//-> GET/place/uid 
//-> access-> private
const getPlacesByUID = asyncHandler(async(req,res,next)=>{
    const userID = req.params.uid;
    let places;
    try{
        places = await Place.find({owner: userID});
    } catch(err){
        const error = new airbnbError('Fetching Places FAILED! please try again later!', 500);
        console.log(error);
        return next(error);
    }

    if(!places || places.length === 0){
        return next(new airbnbError('Couldn\'t find places for the provided user!',404));
    }

    res.json({places : places.map(p => 
        p.toObject({getters:true})
        )
    });
});





//------------------------> CREATE <------------------------// 
//-> GET/place/create
//-> access-> private
const createPlace = asyncHandler(async(req,res,next)=>{
    const {
        title,
        address,
        guestsNum,
        propertyType,
        placeType,
        dedicatedToGuests,
        bedrooms,
        beds,
        bathrooms,
        location: {
            country,
            street,
            flatNum,
            city,
            postalCode,
        },
        aminities: { 
            essentials,
            wifi,
            tv,
            heating,
            airConditioning,
            iron,
            shampoo,
            hairdryer,
            breakfast,
            workspace,
            fireplace,
            wardrobe,
            privateEntrance,
        },
        safetyAminities: {
            smokeDetector,
            coDetector,
            firstAidKit,
            fireExtinguisher,
            bedroomLock,
        },
        spacesGuestCanUse: { 
            kitchen,
            washingMachine,
            dryer,
            parking,
            gym,
            pool,
            hotTub
        },
        placePhotos,
        placeDetails,
        placeDescription,
        houseRules: {
            children,
            infants,
            pets,
            smokingAllowed,
            eventsAllowed
        },
        guestsShouldKnow: {
            stairs,
            noise,
            petsOnProperty,
            noParking,
            sharedSpaces,
            amenityLimits,
            surveillance,
            weapons,
            dangerousAnimals,
        },
        historyOfRental,
        howOftenGuests,
        noticeBeforeArrival,
        checkInHours: { 
            checkInFrom,
            checkInTo
        },
        guestsBookInAdvanceBy,
        guestsStayPeriod: { 
            guestsStayMin,
            guestsStayMax
        },
        calenderOfAvailability: { 
            from,
            to
        },
        price:{
            base,
            max,
            min,
        },
        specialOffer,
        discountOnLongStays:{
            weekly,
            monthly,
        },
        owner,
    } = req.body;

    const newPlace = new Place({
        title,
        address,
        guestsNum,
        propertyType,
        placeType,
        dedicatedToGuests,
        bedrooms,
        beds,
        bathrooms,
        location: {
            country,
            street,
            flatNum,
            city,
            postalCode,
        },
        aminities: { 
            essentials,
            wifi,
            tv,
            heating,
            airConditioning,
            iron,
            shampoo,
            hairdryer,
            breakfast,
            workspace,
            fireplace,
            wardrobe,
            privateEntrance,
        },
        safetyAminities: {
            smokeDetector,
            coDetector,
            firstAidKit,
            fireExtinguisher,
            bedroomLock,
        },
        spacesGuestCanUse: { 
            kitchen,
            washingMachine,
            dryer,
            parking,
            gym,
            pool,
            hotTub
        },
        placePhotos,
        placeDetails,
        placeDescription,
        houseRules: {
            children,
            infants,
            pets,
            smokingAllowed,
            eventsAllowed
        },
        guestsShouldKnow: {
            stairs,
            noise,
            petsOnProperty,
            noParking,
            sharedSpaces,
            amenityLimits,
            surveillance,
            weapons,
            dangerousAnimals,
        },
        historyOfRental,
        howOftenGuests,
        noticeBeforeArrival,
        checkInHours: { 
            checkInFrom,
            checkInTo
        },
        guestsBookInAdvanceBy,
        guestsStayPeriod: { 
            guestsStayMin,
            guestsStayMax
        },
        calenderOfAvailability: { 
            from,
            to
        },
        price:{
            base,
            max,
            min,
        },
        specialOffer,
        discountOnLongStays:{
            weekly,
            monthly,
        },
        owner,
    });

    try{
        await newPlace.save();
    } catch(error){
        const err = new airbnbError('Creating new Place failed, Please Try again!', 500)
        console.log(error);
        return next(error);
    }


    res.status(201).json({place:newPlace})
})





//------------------------> UPDATE <------------------------// 
//Beds, bathrooms, amenities, and more
//------------------------> UPDATE <------------------------// 
//-> PUT/place/ update
//-> access-> private
const updatePlaceAminities = async (req,res,next)=>{
    const {
        guestsNum,
    propertyType,
    placeType,
    dedicatedToGuests,
    bedrooms,
    beds,
    bathrooms,
    location: {
        country,
        street,
        flatNum,
        city,
        postalCode,
    },
    aminities: { 
        essentials,
        wifi,
        tv,
        heating,
        airConditioning,
        iron,
        shampoo,
        hairdryer,
        breakfast,
        workspace,
        fireplace,
        wardrobe,
        privateEntrance,
    },
    safetyAminities: {
        smokeDetector,
        coDetector,
        firstAidKit,
        fireExtinguisher,
        bedroomLock,
    },
    spacesGuestCanUse: { 
        kitchen,
        washingMachine,
        dryer,
        parking,
        gym,
        pool,
        hotTub
    },
    } = req.body;
    const placeID = req.params.pid;
    
    let updatedAminities;
    //make changes
    try{
        updatedAminities = await Place.findById(placeID)
    }catch(err){
        const error = new airbnbError('Something went wrong, Couldn\'t Update Aminities!', 500)
        return next(error);
    }

    updatedAminities.guestsNum = guestsNum,
    updatedAminities.propertyType = propertyType,
    updatedAminities.placeType = placeType,
    updatedAminities.dedicatedToGuests = dedicatedToGuests,
    updatedAminities.bedrooms = bedrooms,
    updatedAminities.beds = beds,
    updatedAminities.bathrooms = bathrooms,

    updatedAminities.country= country,
    updatedAminities.street = street,
    updatedAminities.flatNum = flatNum,
    updatedAminities.city = city,
    updatedAminities.postalCode = postalCode,

    updatedAminities.essentials = essentials,
    updatedAminities.wifi = wifi,
    updatedAminities.tv = tv,
    updatedAminities.heating = heating,
    updatedAminities.airConditioning = airConditioning,
    updatedAminities.iron = iron,
    updatedAminities.shampoo = shampoo,
    updatedAminities.hairdryer = hairdryer,
    updatedAminities.breakfast = breakfast,
    updatedAminities.workspace = workspace,
    updatedAminities.fireplace = fireplace,
    updatedAminities.wardrobe = wardrobe,
    updatedAminities.privateEntrance = privateEntrance,

    updatedAminities.smokeDetector = smokeDetector,
    updatedAminities.coDetector = coDetector,
    updatedAminities.firstAidKit = firstAidKit,
    updatedAminities.fireExtinguisher = fireExtinguisher,
    updatedAminities.bedroomLock = bedroomLock,

    updatedAminities.kitchen = kitchen,
    updatedAminities.washingMachine = washingMachine,
    updatedAminities.dryer = dryer,
    updatedAminities.parking = parking,
    updatedAminities.gym = gym,
    updatedAminities.pool = pool,
    updatedAminities.hotTub = hotTub
    
    //save changes to DB
    try{
        await updatedAminities.save();
    }catch(err){
        const error = new airbnbError('Something went wrong, Couldn\'t save changes!', 500)
        return next(error);
    }

    res.status(200).json({ place: updatedAminities.toObject({ getters: true }) });
}

export{
   createPlace,
   getPlaces,
   getPlacesByUID,
   updatePlaceAminities
}

