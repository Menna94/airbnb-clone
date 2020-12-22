import React from 'react'
import './Description.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

export const Description = ({ formData, setForm, navigation }) => {
    const { description } = formData;
    console.log(description)

    return (
        <div class="container">
            <ProgressBar now={75}/>
            <div class="row description">
                <div class="col-md-6 offset-md-3">
                    <h4>Describe your place to guests</h4>
                    <p>Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.</p>
                    <form >
                        <div class="form-group">
                            <textarea class="User_Text" class="w-100" id="User_Text" cols="30" rows="10" name="description" value={description} onChange={setForm}></textarea>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="myLink" onClick={() => navigation.previous()}><b><a target="_blank" className="back_a">Back</a></b></p>
                            <button class="btn btn_start" onClick={() => navigation.next()}>next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
