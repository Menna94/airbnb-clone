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
    address: 'dumb address',
    type: 'room',
    description: 'dump description',
    //price page
    price: '181',
    title: 'dummy title',
    //location page
    country: 'dummy country',
    city: 'dummy city',
    street: 'dummy street',
    //gusts page
    bedrooms: '3',
    beds: '6',
    bathrooms: '9',
    guests: '12',
    //amenities page
    //uploadphotos page
    wifi: true,
    tv: true,
    ac: false,
    shampoo: false,
    iron: false,
    fireplace: false,
    heat: false

}
const steps = [
    { id: 'uploadphoto' },
    { id: 'address' },
    { id: 'type' },
    { id: 'guests' },
    { id: 'location' },
    { id: 'amenities' },
    { id: 'description' },
    { id: 'price' },
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
