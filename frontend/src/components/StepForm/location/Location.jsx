import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export const Location = ({ formData, setForm, navigation }) => {
    const { country, city, street } = formData
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
            <ProgressBar now={50} />
            <div className="container">
                <div className="row description">
                    <div className="col-md-6 offset-md-3">
                        <h4 className="price_p">Where’s your place located?</h4>
                        <h6 className="price_p">
                            Guests will only get your exact address once they’ve booked a
                            reservation.
                        </h6>
                        <form onSubmit = {onSubmit}>
                            <div className="form-group">
                                <label>country</label>
                                <input type="text"  class="price" id="country" aria-describedby="country" placeholder="country"  name="country"  minlength="3" maxlength="50" required value={country}  onChange={setForm}/>
                            </div>
                            <div className="form-group">
                                <label>city</label>
                                <input type="text"  class="price" id="city" aria-describedby="city"   placeholder="city" name="city" minlength="3" maxlength="50" required value={city}  onChange={setForm}/>
                            </div>
                            <div className="form-group">
                                <label>street</label>
                                <input type="text"  class="price" id="street" aria-describedby="street"   placeholder="street" name="street" minlength="3" maxlength="50" required value={street}  onChange={setForm}/>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="myLink" onClick={() => navigation.previous()}>
                                    <b>
                                        <a target="_blank" className="back_a">
                                            Back
                                        </a>
                                    </b>
                                </p>
                                <button class="btn btn_start" type="submit">next</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
