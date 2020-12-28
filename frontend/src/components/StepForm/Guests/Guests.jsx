import React, { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export const Guests = ({ formData, setForm, navigation }) => {
    const { bedrooms, beds, bathrooms, guests } = formData

    const onSubmit = (e) => {
        e.preventDefault()
        const isValid = formValidation()
        if (isValid) {
            navigation.next()
            console.log('valid')
        }
    }
    const formValidation = () => {
        let isValid = true
        return isValid
    }

    return (
        <>
            <ProgressBar now={37.5} />
            <div className="container">
                <div className="row description">
                    <div className="col-md-6 offset-md-3">
                        <h4 className="price_p">How many guests can your place accommodate?</h4>
                        <h6 className="price_p">
                            Check that you have enough beds to accommodate all your guests
                            comfortably.
                        </h6>
                            <form onSubmit = {onSubmit}>
                                <div class="form-group">
                                    <label >How many guests can guests use?</label>
                                    <input type="number" class="price" id="guests" aria-describedby="guests" placeholder="guests" name="guests" min="1"  max="100" required value={guests} onChange={setForm} />
                                </div>
                                <div class="form-group">
                                    <label >How many beds can guests use?</label>
                                    <input type="number" class="price" id="bedrooms" aria-describedby="bedrooms" placeholder="bedrooms" name="bedrooms"   min="1"  max="100" required  value={bedrooms} onChange={setForm} />
                                </div>
                                <div class="form-group">
                                    <label >How many bedrooms can guests use?</label>
                                    <input type="number" class="price" id="beds" aria-describedby="beds" placeholder="beds" name="beds"  min="1"  max="100" required  value={beds} onChange={setForm} />
                                </div>
                                <div class="form-group">
                                    <label >How many bathrooms can guests use?</label>
                                    <input type="number" class="price" id="bathrooms" aria-describedby="bathrooms" placeholder="bathrooms" name="bathrooms"  min="1"  max="100" required  value={bathrooms} onChange={setForm} />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="myLink" onClick={() => navigation.previous()}><b><a target="_blank" className="back_a">Back</a></b></p>
                                    <button class="btn btn_start" type="submit">next</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
