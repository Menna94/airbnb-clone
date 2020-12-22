import { Add, Update } from '@material-ui/icons';
import React from 'react';
import { useForm, useState, useStep } from "react-hooks-helper";
import { Address } from '../Address/Address';

import { Description } from '../Description/Description';
import { Price } from '../Price/Price';
import { UploadPhotos } from '../UploadPhotos/UploadPhotos';
import { PropertyType } from './../ProbertyType/PropertyType';
import { Location } from './../location/Location';
import { Guests } from './../Guests/Guests';
import { Amenities } from '../Amenities/Amenities';

const defaultData = {
    address: '',
    type: '',
    description: '',
    //price page
    price: '',
    title: '',
    //location page
    country: '',
    city: '',
    street: '',
    //gusts page
    bedrooms: '',
    beds: '',
    bathrooms: '',
    //amenities page
    wifi: false,
    //uploadphotos page
    uploadphoto: '',


}
const steps = [
    { id: 'address' },
    { id: 'type' },
    { id: 'description' },
    { id: 'price' },
    { id: 'location' },
    { id: 'guests' },
    //{id:'amenities'},
    { id: 'uploadphoto' },
]

export const MultyStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0
    })
    console.log(1, formData);

    const props = { formData, setForm, navigation }

    switch (step.id) {
        case "address":
            return <Address {...props} />
        case "type":
            return <PropertyType {...props} />
        case "description":
            return <Description {...props} />
        case "price":
            return <Price {...props} />
        case "location":
            return <Location {...props} />
        case "guests":
            return <Guests {...props} />
        case "uploadphoto":
            return <UploadPhotos {...props} />
        case "amenities":
            return <Amenities {...props} />

    }
    console.log(step);
    return (
        <div>
            <h1>multy step form</h1>
        </div>
    )
}
