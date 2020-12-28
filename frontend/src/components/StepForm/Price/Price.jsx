import React from 'react'
import './Price.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

export const Price = ({ formData, setForm, navigation }) => {
    const { price, title } = formData
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
            <ProgressBar now={87.5} />
            <div className="container">
                <div className="row description">
                    <div className="col-md-6 offset-md-3">
                        <h4 className="price_p">Price your space</h4>
                        <h6>Increase your chances of getting booked</h6>
                        <p className="price_p">
                            Set up Smart Pricing to automatically keep your nightly prices
                            competitive as demand in your area changes.
                        </p>
                        <form  onSubmit = {onSubmit}>
                            <div className="form-group">
                                <label>price ($)</label>
                                <input type="number"  class="price" id="price" aria-describedby="price"   placeholder="price"  name="price" min="1"  max="1000000" required value={price}  onChange={setForm}/>
                            </div>
                            <div className="form-group">
                                <label>title</label>
                                <input type="text"  class="price" id="title" aria-describedby="title"   placeholder="title" name="title" minlength="5" maxlength="100" required value={price} value={title}  onChange={setForm}/>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="myLink" onClick={() => navigation.previous()}>
                                    <b>
                                        <a target="_blank" className="back_a">
                                            Back
                                        </a>
                                    </b>
                                </p>
                                <button class="btn btn_start" class="btn btn_start" type="submit">next</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
