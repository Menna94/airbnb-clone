const mongoose = require('mongoose');

const placeReviewsSchema = mongoose.Schema({
    name: { type:String , required:true}, //////////////////??????? user?!
    rating:{ type:Number , required:true},
    comment:{ type:String , required:true},
},{
    timestamps:true
});

const placeSchema = mongoose.Schema({
    owner:{ type: String, required: true, ref: 'User' },
    title: { type: String, required: true},
    address: { type: String, required: true},
    guestsNum: { type: Number, required:true},
    propertyType:{ type: String, required: true},
    placeType: { type: String, required: true},
    dedicatedToGuests:{ type: Boolean, required: true},
    bedrooms:{ type: Number, required:true},
    beds:{ type: Number, required:true},
    bathrooms:{ type: Number, required:true},
    location: {
        country: { type: String, required: true},
        street: { type: String, required: true},
        flatNum:Number,
        city: { type: String, required: true},
        postalCode: { type: Number, required: true},
    },
    aminities: { 
        essentials:Boolean,
        wifi:Boolean,
        tv:Boolean,
        heating:Boolean,
        airConditioning:Boolean,
        iron:Boolean,
        shampoo:Boolean,
        hairdryer:Boolean,
        breakfast:Boolean,
        workspace:Boolean,
        fireplace:Boolean,
        wardrobe:Boolean,
        privateEntrance:Boolean,
    },
    safetyAminities: {
        smokeDetector:Boolean,
        coDetector:Boolean,
        firstAidKit:Boolean,
        fireExtinguisher:Boolean,
        bedroomLock:Boolean,
    },
    spacesGuestCanUse: { 
        kitchen:Boolean,
        washingMachine:Boolean,
        dryer:Boolean,
        parking:Boolean,
        gym:Boolean,
        pool:Boolean,
        hotTub:Boolean
    },
    placePhotos: { type: [String], required: true},
    placeDetails:String,
    placeDescription: { type: String, required: true},
    houseRules: {
        children:Boolean,
        infants:Boolean,
        pets:Boolean,
        smokingAllowed:Boolean,
        eventsAllowed:Boolean
    },
    guestsShouldKnow: {
        stairs:Boolean,
        noise:Boolean,
        petsOnProperty:Boolean,
        noParking:Boolean,
        sharedSpaces:Boolean,
        amenityLimits:Boolean,
        surveillance:Boolean,
        weapons:Boolean,
        dangerousAnimals:Boolean,
    },
    historyOfRental:Boolean,
    howOftenGuests: String,
    noticeBeforeArrival: { type: Number, required: true},
    checkInHours: { 
        checkInFrom: {type:String, required: true},
        checkInTo: {type:String, required: true}
    },
    guestsBookInAdvanceBy: { type: String, required: true},
    guestsStayPeriod: { 
        guestsStayMin:Number,
        guestsStayMax:Number
    },
    calenderOfAvailability: { 
        from: { type: Date},
        to:{ type: Date}
    },
    price:{
        base: { type: Number, required: true},
        max: { type: Number, required: true},
        min: { type: Number, required: true},
    },
    specialOffer:{type:Boolean, required:true},
    discountOnLongStays:{
        weekly: Number,
        monthly: Number,
    },
    // placeReviews:{ placeReviewsSchema },
    // placeRating:{ type:Number, required:true, default:0 },
    // placeReviewsCount:{ type:Number, required:true, default:0 },
},{
    timestamps:true
})


const Place = mongoose.model('Place',placeSchema);

module.exports = Place;