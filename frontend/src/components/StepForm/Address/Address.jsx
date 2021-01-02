import React, { useState } from 'react'
import './Address.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

export const Address = ({ formData, setForm, navigation }) => {
    const { address } = formData
    const [addressErr, setaddressErr] = useState({})

    const onSubmit = (e) => {
        e.preventDefault()
        const isValid = formValidation()
        if (isValid) {
            navigation.next()
            console.log('valid')
        }
    }
    const formValidation = () => {
        const addressErr = {}
        let isValid = true
        if (address.trim().length < 5) {
            addressErr.addressShort = 'address min length is 5 characters'
            isValid = false
        }
        if (address.trim().length > 100) {
            addressErr.addressShort = 'address max length is 100 characters'
            isValid = false
        }
        if (address == '') {
            addressErr.addressShort = 'please enter address it is required'
            isValid = false
        }
        setaddressErr(addressErr)
        return isValid
    }
    return (
        <>
            <ProgressBar now={12.5} />
            <div className="container">
                <div className="row description">
                    <div className="col-6 ">
                        <h4 className="price_p">Let’s get started listing your space.</h4>
                        <h6>Where’s your place located?</h6>
                        <form onSubmit = {onSubmit}>
                            <div className="form-group">
                            <input type="text"  className="price" id="address" aria-describedby="address" min={5} max={100}  placeholder="Proberty address" name="address" value={address}   onChange={setForm}  />
                            </div>
                            {Object.keys(addressErr).map((key, i)=>{
                                return <div key={i}  style={{color:"red"}}>{addressErr[key]}</div>
                            })}
                            <br/>
                            <div className="d-flex justify-content-between">
                            <button className="btn btn_start"  type="submit">continue</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-6 d-none d-md-block">
                        <img src={`../imgs/startForm.png`} className="start_img" />
                    </div>
                </div>
            </div>
        </>
    )
}
