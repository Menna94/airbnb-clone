const places = [
    {
        title: "A new Place1",
        address: "123 abc st.",
        guestsNum: 3,
        propertyType:"Flat",
        placeType: "Entire Place",
        dedicatedToGuests:true,
        bedrooms:2,
        beds:3,
        bathrooms:1,
        location: {
            country: "Egypt",
            street: "123",
            flatNum:7,
            city: "Tanta",
            postalCode: 31511,
        },
        aminities: {
            essentials:true,
            wifi:true,
            tv:true,
            heating:false,
            airConditioning:false,
            iron:false,
            shampoo:false,
            hairdryer:false,
            breakfast:true,
            workspace:false,
            fireplace:false,
            wardrobe:false,
            privateEntrance:true,
        },
        safetyAminities: {
            smokeDetector:false,
            coDetector:true,
            firstAidKit:false,
            fireExtinguisher:false,
            bedroomLock:true,
        },
        spacesGuestCanUse: {
            kitchen:true,
            washingMachine:true,
            dryer:true,
            parking:false,
            gym:false,
            pool:false,
            hotTub:true
        },
        placePhotos: "https://advice.aqarmap.com.eg/en/wp-content/uploads/2020/02/apartment-99.jpeg",
        placeDetails: "blaaah blaaaah blaaaah",
        placeDescription: "A beautiful view on an extraordinary Lake",
        houseRules: {
            children:true,
            infants:false,
            pets:true,
            smokingAllowed:false,
            eventsAllowed:true
        },
        guestsShouldKnow: { 
            stairs:true,
            noise:false,
            petsOnProperty:false,
            noParking:false,
            sharedSpaces:false,
            amenityLimits:true,
            surveillance:false,
            weapons:false,
            dangerousAnimals:true,
        },
        historyOfRental:true,
        howOftenGuests: "Part-time",
        noticeBeforeArrival: 2,
        checkInHours: {
            checkInFrom:'12:00',
            checkInTo:'16:00'
        },
        guestsBookInAdvanceBy: "Any time",
        guestsStayPeriod: { 
            guestsStayMin: 1,
            guestsStayMax:100
        },
        calenderOfAvailability: {
            from:'2020-09-23',
            to:'2021-05-23',
            
        },
        price:{
            base: 21,
            max: 50,
            min: 19,
        },
        specialOffer:false,
        owner:"Amy",
    }
]

export default places;